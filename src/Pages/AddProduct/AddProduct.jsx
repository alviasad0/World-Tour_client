import Swal from "sweetalert2";
import Navbar from "../../Utils/Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AddProduct = () => {
    const { user } = useContext(AuthContext);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image_url = form.image_url.value;
    const name = form.name.value;
    const providerImage = form.providerImage.value;
    const email = form.email.value;
    const Package_name = form.Package_name.value;
    const service_area = form.service_area.value;
    const price = form.price.value;
    const short_description = form.short_description.value;
    const product = {
      image_url,
      name,
      providerImage,
      service_area,
      price,
      short_description,
      email ,
      Package_name,
    };
    console.log(product);
    fetch("http://localhost:5000/addPackage", {
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
  console.log(user);
  return (
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
                      Just fill the form and add the super sport cars .You have
                      add the Image_Url and the nae of the car ,the brand name
                      ,the type of the car ,the price of the car , the rating of
                      the car , and a short description of the car .Just click
                      the ADD CAR button and add the car.
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
                    value={user?.displayName}
                    name="name"
                    className="input input-bordered input-success w-full cursor-none"
                    readOnly
                  />
                </div>
                <br />
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-black">
                       Service Provider Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    // placeholder="Name"
                    value={user?.photoURL}
                    name="providerImage"
                    className="input input-bordered input-success w-full cursor-none"
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
                    value={user?.email}
                    name="email"
                    className="input input-bordered input-success w-full cursor-none"
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
                    placeholder="Price"
                    name="price"
                    className="input input-bordered input-success w-full "
                    required
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
                  />
                </div>
                
                <br />
                <input
                  type="submit"
                  value="ADD PACKAGE"
                  className="btn btn-success w-full text-xl tracking-widest font-bold"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
