import { Link } from "react-router-dom";

const Package = ({ packegeas }) => {
    console.log(packegeas);
    return (
        <div>
                            <div className="">
                    {packegeas.map(packages => (

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
                                <button className="btn btn-primary"><Link to={`/packageDetails/${packages._id}`}>View Details</Link></button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
        </div>
    );
};

export default Package;