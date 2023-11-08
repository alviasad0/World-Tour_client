import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const AllServices = () => {
    const [packages , setAllPackages] = useState([])
    const allPackages= packages.slice(0, 4)
    useEffect(()=>{
        fetch("http://localhost:5000/allServices")
        .then(response => response.json())
        .then(data=>setAllPackages(data))
    },[])
    console.log(allPackages);
    return (
      <div
        className="pt-28"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="text-center text-5xl font-bold text-blue-500">
          Available Packages Right Now{" "}
        </h1>
        {allPackages.map((packages) => (
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
            key={packages._id}
            className="card lg:card-side mt-10 bg-blue-50 border-blue-400 border-2"
          >
            <figure className="flex-1">
              <img src={packages.service_image} alt="Album" />
            </figure>
            <div className="card-body flex-1">
              <h2 className="text-4xl font-semibold">
                {packages.service_name}
              </h2>
              <div className="flex items-center gap-10 pt-4">
                <div className="w-24 avatar">
                  <img
                    className="rounded"
                    src={packages.service_provider_image}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg">
                    {packages.service_provider_name}
                  </h1>
                  <h1 className="font-medium ">
                    {packages.service_provider_email}
                  </h1>
                </div>
              </div>
              <p className="text-lg text-gray-700 pt-4">
                {packages.service_description}
              </p>
              <p className="text-2xl font-medium text-black">
                Price :{" "}
                <span className="text-4xl font-bold text-blue-600">
                  {packages.service_price}
                </span>
              </p>

              <div className="card-actions justify-end">
                <button className=" btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold">
                  <Link to={`/packageDetails/${packages._id}`}>
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div
          className="flex justify-center mt-20"
        
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <button className=" btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold">
            <Link to="/allPackages">Show All Packages</Link>
          </button>
        </div>
      </div>
    );
};

export default AllServices;