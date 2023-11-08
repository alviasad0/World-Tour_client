import { Link, useLoaderData } from "react-router-dom";

import Navbar from "../../Utils/Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";

const Details = () => {
  const card = useLoaderData()
  const { user } = useContext(AuthContext)
  const [allData, setAllData] = useState([])

  const moreFromProvider = allData.filter(data => data.service_provider_email === card.service_provider_email && data._id !==card._id
     )

     const restPackages = allData.filter(data => data._id !== card._id)
    console.log(moreFromProvider)
    console.log(card);

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then(response => response.json())
      .then(data => setAllData(data))
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image_url = form.image_url.value;
    const providerEmail = form.providerEmail.value;
    const userEmail = form.email.value;
    const Package_name = form.Package_name.value;
    const service_area = form.service_area.value;
    const service_date = form.service_date.value;
    const price = form.price.value;
    const product = {
      image_url,

      providerEmail,
      service_area,
      price,
      userEmail,
      Package_name,
      service_date
    };
    console.log(product);
    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Package has added in the database!",
            "success"
          );
          form.reset();
        }
      });
  };

  // console.log(data)
  return (
    <RouteWithTitleUpdate
      element={
        <div>
          <Navbar></Navbar>
          <div
            className="max-w-screen-2xl mx-auto"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div
              className="  mt-20 border-2 border-blue-600 rounded-xl  bg-blue-100"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <figure className="flex justify-center ">
                <img
                  src={card.service_image}
                  className="rounded-xl w-full"
                  alt="Album"
                />
              </figure>
              <div
                className="card-body"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="flex flex-col md:flex-row justify-between pt-5">
                  <h2 className="text-4xl font-bold">{card.service_name}</h2>
                  <div className="flex items-center gap-10">
                    <div className="w-20 avatar">
                      <img
                        className="rounded"
                        src={card.service_provider_image}
                      />
                    </div>
                    <div className="font-bold">
                      <h1>{card.service_provider_name}</h1>
                      <h1>{card.service_provider_email}</h1>
                    </div>
                  </div>
                </div>
                <p className="pt-10 text-xl font-medium tracking-wider">
                  {card.service_description}
                </p>
                <p className="text-2xl font-semibold">
                  Location : {card.service_area}
                </p>
                <div className="flex justify-between pt-10">
                  <p className="text-2xl font-medium text-black">
                    Price :{" "}
                    <span className="text-4xl font-bold text-blue-600">
                      {card.service_price}
                    </span>
                  </p>
                  <button
                    className="btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Book Now
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div>
                        <form onSubmit={handleFormSubmit} className="">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Image URL
                              </span>
                            </label>
                            <input
                              type="text"
                              // placeholder="Package Image url"
                              defaultValue={card.service_image}
                              readOnly
                              name="image_url"
                              className="input input-bordered input-info w-full "
                            />
                          </div>
                          <br />
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Package Name
                              </span>
                            </label>
                            <input
                              type="text"
                              // placeholder="Package Name"
                              name="Package_name"
                              className="input input-bordered input-info w-full "
                              defaultValue={card.service_name}
                              readOnly
                            />
                          </div>
                          <br />
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Name
                              </span>
                            </label>
                            <input
                              type="text"
                              // placeholder="Name"
                              defaultValue={card.service_provider_name}
                              name="name"
                              className="input input-bordered input-info w-full cursor-none"
                              readOnly
                            />
                          </div>
                          <br />

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Service Provider Email
                              </span>
                            </label>
                            <input
                              type="text"
                              // placeholder="Name"
                              defaultValue={card.service_provider_email}
                              name="providerEmail"
                              className="input input-bordered input-info w-full cursor-none"
                              readOnly
                            />
                          </div>
                          <br />

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Email
                              </span>
                            </label>
                            <input
                              type="email"
                              // placeholder="Email"
                              defaultValue={user?.email}
                              name="email"
                              className="input input-bordered input-info w-full cursor-none"
                              readOnly
                            />
                          </div>
                          <br />
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Price
                              </span>
                            </label>
                            <input
                              type="text"
                              // placeholder="Price"
                              name="price"
                              className="input input-bordered input-info w-full "
                              defaultValue={card.service_price}
                              readOnly
                            />
                          </div>
                          <br />
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Service Area
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Service Area"
                              name="service_area"
                              className="input input-bordered input-info w-full "
                              required
                            />
                          </div>
                          <br />
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Service Taking Date
                              </span>
                            </label>
                            <input
                              type="date"
                              // placeholder="Service Area"
                              name="service_date"
                              className="input input-bordered input-info w-full "
                              required
                            />
                          </div>
                          <br />

                          <input
                            type="submit"
                            value="PURCHASE"
                            className="btn btn-success border-2 border-blue-600 text-blue-700 bg-blue-400 w-full text-xl tracking-widest font-bold"
                          />
                        </form>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn  btn-success border-2 border-blue-600 text-blue-700 bg-blue-400">
                            Cancel
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>

            {/* more from this provider */}
            <div
              className="pt-32"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <h1 className=" text-3xl font-bold">
                More packages from this provider :
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {moreFromProvider.map((singleCard) => (
                  <div key={singleCard._id}>
                    <div className="card lg:card-side mt-10 bg-blue-50 border-blue-400 border-2">
                      <figure className="flex-1">
                        <img
                          src={singleCard.service_image}
                          className="w-full h-full"
                          alt="Album"
                        />
                      </figure>
                      <div className="card-body flex-1">
                        <h2 className="text-2xl font-bold">
                          {singleCard.service_name}
                        </h2>
                        <div className=" py-4 flex items-center gap-10">
                          <div className="w-20 avatar">
                            <img
                              className="rounded"
                              src={singleCard.service_provider_image}
                            />
                          </div>
                          <div>
                            <h1 className="font-bold text-lg">
                              {" "}
                              {singleCard.service_provider_name}
                            </h1>{" "}
                            <h1 className="font-medium">
                              {" "}
                              {singleCard.service_provider_email}
                            </h1>{" "}
                          </div>
                        </div>
                        <p className="text-lg font-medium text-gray-700">
                          {singleCard.service_description}
                        </p>
                        <p className="text-xl font-semibold">
                          Location :{" "}
                          <span className="font-bold">
                            {singleCard.service_area}
                          </span>
                        </p>

                        <div className="pt-5 flex justify-between">
                          <p className="text-2xl font-bold">
                            {singleCard.service_price}
                          </p>
                          <button className="btn  btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold">
                            <Link to={`/packageDetails/${singleCard._id}`}>
                              View Details
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most popular packages */}
            <div
              className="pt-20"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <h1 className="text-3xl font-bold pb-10">
                Most popular packages{" "}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {restPackages.map((singleCard) => (
                  <div key={singleCard._id}>
                    <div className="card lg:card-side  bg-blue-50 border-blue-400 border-2 h-[500px]">
                      <figure className="flex-1">
                        <img
                          src={singleCard.service_image}
                          className="w-full h-full"
                          alt="Album"
                        />
                      </figure>
                      <div className="card-body flex-1">
                        <h2 className="text-2xl font-bold">
                          {singleCard.service_name}
                        </h2>
                        <div className=" py-4 flex items-center gap-10">
                          <div className="w-20 avatar">
                            <img
                              className="rounded"
                              src={singleCard.service_provider_image}
                            />
                          </div>
                          <div>
                            <h1 className="font-bold text-lg">
                              {" "}
                              {singleCard.service_provider_name}
                            </h1>{" "}
                            <h1 className="font-medium">
                              {" "}
                              {singleCard.service_provider_email}
                            </h1>{" "}
                          </div>
                        </div>
                        <p className="text-lg font-medium text-gray-700">
                          {singleCard.service_description}
                        </p>
                        <p className="text-xl font-semibold">
                          Location :{" "}
                          <span className="font-bold">
                            {singleCard.service_area}
                          </span>
                        </p>

                        <div className="pt-5 flex justify-between">
                          <p className="text-2xl font-bold">
                            {singleCard.service_price}
                          </p>
                          <button className="btn  btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold">
                            <Link to={`/packageDetails/${singleCard._id}`}>
                              View Details
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer></Footer>
        </div>
      }
      title="Details"
    />
  );
};

export default Details;