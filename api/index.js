const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const imageDownloader = require('image-downloader');
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require('fs')


const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use('/uploads', express.static(__dirname+'/uploads')); //Need to understand what this line is about


app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "sddsfdlkdjlkjwuieonoiejfoeijf";
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});


app.post("/login", async (req, res) => {
  console.log("login route called");
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {


      jwt.sign(
        { email: userDoc.email,  id: userDoc._id, },
        jwtSecret, {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              secure: true,
              sameSite: "none",
            })
            .json(userDoc);
        }
      );


    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});


app.post('/upload-by-link', async (req,res) => {
  const {link} = req.body;
  console.log(__dirname)
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url: link,
    dest: __dirname + '\\uploads\\' + newName 
  });
  console.log('hello nebros')




  // const url = await uploadToS3('/tmp/' +newName, newName, mime.lookup('/tmp/' +newName));
  res.json(newName);
});



app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.get('/profile',  (req, res) => {
  console.log('profile called');
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name, email, _id} = await User.findById(userData.id);
      res.json({name, email, _id});
    })
  }else{
    res.json(null);
  }
});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json(true);
});


const photosMiddleware = multer({dest:'uploads/'}); 
app.post('/upload', photosMiddleware.array('photos', 100), (req,res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const {path,originalname} = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace('uploads\\',''));
  }
  res.json(uploadedFiles);
});


  


app.listen(4000, () => {
  console.log("The server is running successfully at port 4000");
});
