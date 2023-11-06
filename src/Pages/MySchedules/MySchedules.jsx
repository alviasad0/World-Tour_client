import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Utils/Components/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const MySchedules = () => {
    const  allBookings= useLoaderData()
    const { user } = useContext(AuthContext)
    const [packages , setPackages] = useState(allBookings)
    const myPackages = packages.filter((card) => card.userEmail === user.email)
    console.log(packages);
    
    
    const handleStatus = (_id) => {
        const statusField  = document.getElementById('status')
        const statusValue = statusField.value
        // console.log(_id, status)
        fetch(`http://localhost:5000/booked/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({status : statusValue}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        "Good job!",
                        "Product has Updated in the database!",
                        "success"
                    )
                   const remaining = packages.filter(packaga => packaga._id !== _id)
                   const updated = packages.find(packege => packege._id === _id)
                   const newPackage = [updated, ...remaining]
                   setPackages(newPackage)
                }
            });
        
    }
    return (


        <div>
            <Navbar></Navbar>
            <h1 className="text-center">this is the my schedules section </h1>
            {/* book mark section */}
            <div>
                {myPackages.length > 0 ?

                    (
                        myPackages.map(pak => (
                            <div key={pak._id}>
                                <div >
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src={pak.image_url} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{pak.Package_name}</h2>
                                            <p>{pak.price}</p>
                                            <p>{pak.service_area}</p>
                                            <p>{pak.providerEmail}</p>
                                            <p>{pak.userEmail}</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    )
                    : (
                        <div>
                            <img
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="3000"
                                src="https://i.ibb.co/vcvmKGy/empty-cart-1.png"
                                className="mx-auto pt-10 pb-10"
                                alt=""
                            />
                        </div>
                    )
                }

                {/* booking pending section */}
                <div className="pb-20">
                    {myPackages.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Name</th>
                                        <th>Package Name</th>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    {myPackages.map(booking => (
                                        <tr key={booking._id}>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={booking.image_url} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{user.displayName}</div>
                                                        <div className="text-sm opacity-50">{booking.userEmail}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {booking.Package_name}
                                                <br />
                                                <span className="badge  badge-sm">{booking.providerEmail}</span>
                                            </td>
                                            <td>{booking.service_date}</td>
                                            <td>{booking.service_area}</td>

                                            <th>
                                                <select onChange={()=>handleStatus(booking._id)} defaultValue={booking.status} className="select btn btn-primary" id="status">
                                                    <option  className="btn btn-primary"  >Pending</option>
                                                    <option  className="btn btn-primary">In Progress</option>
                                                    <option >Completed</option>
                                                </select>
                                            </th>
                                        </tr>
                                    ))}

                                </tbody>


                            </table>
                        </div>

                    ) :
                        (
                            <div>
                                <img
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="3000"
                                    src="https://i.ibb.co/vcvmKGy/empty-cart-1.png"
                                    className="mx-auto pt-10 pb-10"
                                    alt=""
                                />
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default MySchedules;