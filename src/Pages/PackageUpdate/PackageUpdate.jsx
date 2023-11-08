import Swal from "sweetalert2";
import Navbar from "../../Utils/Components/Navbar";

import { useLoaderData } from "react-router-dom";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";

const PackageUpdate = () => {
  const item = useLoaderData();
  console.log(item);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image_url = form.image_url.value;
    const name = form.name.value;
    const email = form.email.value;
    const Package_name = form.Package_name.value;
    const service_area = form.service_area.value;
    const price = form.price.value;
    const short_description = form.short_description.value;
    const updatedPackage = {
      image_url,
      name,
      service_area,
      price,
      short_description,
      email,
      Package_name,
    };
    console.log(updatedPackage);
    fetch(`https://world-tour-server-red.vercel.app/addPackage/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPackage),
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
        }
      });
  };
  return (
    <RouteWithTitleUpdate
      element={
        <div>
          <Navbar></Navbar>
          <h1 className="text-center text-3xl font-bold"></h1>
          {/* main */}
          <div className="max-w-screen-2xl mx-auto ">
            <div
              className="hero min-h-screen bg-green-50 rounded-xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div className="flex items-center  gap-20 justify-center flex-col lg:flex-row-reverse md:px-10">
                <div className="text-center lg:text-left ">
                  {/* hero sectiton */}
                  <div
                    className="hero h-[70vh] rounded-xl"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    style={{
                      backgroundImage:
                        "url(https://i.ibb.co/TgsRJ4R/pexels-pixabay-164634.jpg)",
                    }}
                  >
                    <div className="hero-overlay rounded-xl bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                      <div className="">
                        <h1 className="mb-5 text-5xl text-white font-bold">
                          Need to Add New Exciting Car!!!
                        </h1>
                        <p className="mb-5 text-xl font-semibold tracking-widest">
                          Just fill the form and add the super sport cars .You
                          have add the Image_Url and the nae of the car ,the
                          brand name ,the type of the car ,the price of the car
                          , the rating of the car , and a short description of
                          the car .Just click the ADD CAR button and add the
                          car.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* form section */}
                <div
                  className=" flex-shrink-0 w-1/3  "
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  <form onSubmit={handleFormSubmit} className="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-medium text-black">
                          Image URL
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Package Image url"
                        name="image_url"
                        className="input input-bordered input-success w-full "
                        required
                        defaultValue={item.image_url}
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
                        placeholder="Package Name"
                        name="Package_name"
                        className="input input-bordered input-success w-full "
                        required
                        defaultValue={item.Package_name}
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
                        defaultValue={item.name}
                        name="name"
                        className="input input-bordered input-success w-full cursor-none"
                        required
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
                        defaultValue={item.email}
                        name="email"
                        className="input input-bordered input-success w-full cursor-none"
                        required
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
                        placeholder="Price"
                        name="price"
                        className="input input-bordered input-success w-full "
                        required
                        defaultValue={item.price}
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
                        className="input input-bordered input-success w-full "
                        required
                        defaultValue={item.service_area}
                      />
                    </div>
                    <br />
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-medium text-black">
                          Short description
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Short description"
                        name="short_description"
                        className="input input-bordered input-success w-full "
                        required
                        defaultValue={item.short_description}
                      />
                    </div>

                    <br />
                    <input
                      type="submit"
                      value="UPDATE PACKAGE"
                      className="btn btn-success w-full text-xl tracking-widest font-bold"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      }
      title="Package_Update"
    />
  );
};

export default PackageUpdate;
