import Swal from "sweetalert2";
import Navbar from "../../Utils/Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";

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
      email,
      Package_name,
    };
    console.log(product);
    fetch("https://world-tour-server-red.vercel.app/addPackage", {
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
    <RouteWithTitleUpdate
      element={
        <div>
          <Navbar></Navbar>

          {/* main */}
          <div className="max-w-screen-2xl mx-auto ">
            <div
              className="hero min-h-screen bg-blue-50 py-10 rounded-xl"
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
                  >
                    <div className="">
                      <div className="">
                        <h1 className="mb-5 text-5xl font-bold">
                          Need to Add New Exciting Package !!!
                        </h1>
                        <p className="mb-5 text-xl font-semibold tracking-widest">
                          Just fill the form and add the new packages .You have
                          add the Image_Url of that package and the name of the
                          package ,service provider image url ,the email of the
                          provider ,the price of the package , sercice area ,
                          and a short description of the package .Just click the
                          ADD PURCHASE button and add the Package.
                        </p>
                      </div>
                      <div>
                        <img
                          className="h-[600px] rounded-xl"
                          src="https://i.ibb.co/WkLfKJK/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg"
                          alt=""
                        />
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
                        className="input input-bordered input-info w-full "
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
                        className="input input-bordered input-info w-full "
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
                        defaultValue={user?.displayName}
                        name="name"
                        className="input input-bordered input-info w-full cursor-none"
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
                        defaultValue={user?.photoURL}
                        name="providerImage"
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
                        placeholder="Price"
                        name="price"
                        className="input input-bordered input-info w-full "
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
                        className="input input-bordered input-info w-full "
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
                        className="input input-bordered input-info w-full "
                        required
                      />
                    </div>

                    <br />
                    <input
                      type="submit"
                      value="ADD PACKAGE"
                      className="btn btn-success border-2 border-blue-600 text-blue-700 bg-blue-400 w-full text-xl tracking-widest font-bold"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      }
      title="Add_Package"
    />
  );
};

export default AddProduct;
