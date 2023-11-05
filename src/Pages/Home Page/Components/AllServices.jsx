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
        <div>
        <h1>this is the all services section </h1>             
        {allPackages.map(packages=>(
             <div key={packages.service_name} className="card lg:card-side my-20 bg-base-100 shadow-xl">
             <figure><img src={packages.service_image} alt="Album" /></figure>
             <div className="card-body">
                 <h2 className="card-title">{packages.service_name}</h2>
                 <div className="flex items-center gap-10">
                     <div className="font-bold">{packages.service_provider_name}</div>
                     
                     <div className="w-20 avatar">
                             <img className="rounded" src={packages.service_provider_image} />
                         </div>
                     
                     
                 </div>
                 <p>{packages.service_description}</p>
                 <p>{packages.service_price}</p>
                 <p>{packages.service_area}</p>
                 <div className="card-actions justify-end">
                     <button className="btn btn-primary">View Details</button>
                 </div>
             </div>
         </div>
        ))}
        <div>
            <button className="btn btn-primary"><Link to='/allPackages'>Show All Packages</Link></button>
        </div>
        </div>
    );
};

export default AllServices;