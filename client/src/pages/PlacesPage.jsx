import React from "react";
import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  const { action } = useParams();
  console.log(action);
  return (
    <div className="">
      {action !== "new" && (
        <Link
          to="/account/places/new"
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New Place{" "}
        </Link>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className=" text-gray-500 text-sm">
              Title for your place. Should be short and catchy as in
              advertisements
            </p>
            <input
              type="text"
              placeholder="title, for example: My lovely apartment"
            />
            <h2 className="text-xl mt-4">Address</h2>
            <p className=" text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="Address" />
            <h2 className="text-xl mt-4">Photos</h2>
            <p className=" text-gray-500 text-sm">more = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Add using a link ...jpg" />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;Photo
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-grey-500 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className="text-xl mt-4">Description</h2>
            <p className=" text-gray-500 text-sm">Description of the Place</p>
            <textarea></textarea>
            <h2 className="text-xl mt-4">Perks</h2>
            <p className=" text-gray-500 text-sm">
              Select all the perks of your place
            </p>
            <div>
              <label>
                <input type="checkbox" />
                <span>Wifi</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Free Parking Spot</span>
              </label>
               <label>
                <input type="checkbox" />
                <span>TV</span>
              </label>
               <label>
                <input type="checkbox" />
                <span>Pets</span>
              </label>
               <label>
                <input type="checkbox" />
                <span>Private Entrance</span>
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
