import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Utils/Components/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";
const MySchedules = () => {
  const allBookings = useLoaderData();
  const { user } = useContext(AuthContext);
  const [packages, setPackages] = useState(allBookings);
  const myPackages = packages.filter((card) => card.userEmail === user.email);
  console.log(packages);

  const handleStatus = (_id) => {
    const statusField = document.getElementById("status");
    const statusValue = statusField.value;
    // console.log(_id, status)
    fetch(`https://world-tour-server-red.vercel.app/booked/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: statusValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Good job!",
            "Product has Updated in the database!",
            "success"
          );
          const remaining = packages.filter((packaga) => packaga._id !== _id);
          const updated = packages.find((packege) => packege._id === _id);
          const newPackage = [updated, ...remaining];
          setPackages(newPackage);
        }
      });
  };
  return (
    <RouteWithTitleUpdate
      element={
        <div>
          <Navbar></Navbar>
          <div className="max-w-screen-2xl mx-auto ">
            <h1 className="text-center text-5xl font-bold">
              Packages that you have Booked{" "}
            </h1>
            {/* book mark section */}
            <div className="">
              {myPackages.length > 0 ? (
                myPackages.map((pak) => (
                  <div
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    key={pak._id}
                    className="card lg:card-side h-[350px] mt-10 bg-blue-50 border-blue-400 border-2"
                  >
                    <figure className="flex-1">
                      <img src={pak.image_url} alt="Album" />
                    </figure>
                    <div className="card-body flex-1">
                      <h2 className="text-4xl font-semibold">
                        {pak.Package_name}
                      </h2>

                      <p className="text-xl font-bold  pt-4">
                        Location : {pak.service_area}
                      </p>
                      <p className="text-xl font-bold  pt-4">
                        Event Date : {pak.service_date}
                      </p>
                      <p className="text-2xl font-medium text-black">
                        Price :{" "}
                        <span className="text-4xl font-bold text-blue-600">
                          {pak.price}
                        </span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
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
              )}

              {/* booking pending section */}
              <div className="py-20">
                <h1 className="text-center text-5xl pb-10 font-bold">
                  Status of your booked packages
                </h1>
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
                      <tbody>
                        {/* row 1 */}
                        {myPackages.map((booking) => (
                          <tr key={booking._id}>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img
                                      src={booking.image_url}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {user.displayName}
                                  </div>
                                  <div className="text-sm opacity-50">
                                    {booking.userEmail}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-lg font-bold">
                                {booking.Package_name}
                              </span>
                              <br />
                              <span className=" text-info ">
                                {booking.providerEmail}
                              </span>
                            </td>
                            <td className="text-lg font-bold">
                              {booking.service_date}
                            </td>
                            <td className="text-lg font-bold">
                              {booking.service_area}
                            </td>

                            <th>
                              <select
                                onChange={() => handleStatus(booking._id)}
                                defaultValue={booking.status}
                                className="select btn btn-info"
                                id="status"
                              >
                                <option className="btn btn-info">
                                  Pending
                                </option>
                                <option className="btn btn-info">
                                  In Progress
                                </option>
                                <option>Completed</option>
                              </select>
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      }
      title="My_Schedules"
    />
  );
};

export default MySchedules;
