import { useLoaderData } from "react-router-dom";

import Navbar from "../../Utils/Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const packages = useLoaderData()
    const { user} = useContext(AuthContext)


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
          userEmail ,
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
        <div>
            <Navbar></Navbar>
            <h1>this is the details page </h1>
            <div className="card lg:card-side my-20 bg-base-100 shadow-xl">
                <figure><img src={packages.service_image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{packages.service_name}</h2>
                    <div className="flex items-center gap-10">
                        <div className="font-bold">
                            <h1>{packages.service_provider_name}</h1>
                            <h1>{packages.service_provider_email}</h1>
                        </div>
                         
                        <div className="w-20 avatar">
                            <img className="rounded" src={packages.service_provider_image} />
                        </div>


                    </div>
                    <p>{packages.service_description}</p>
                    <p>{packages.service_price}</p>
                    <p>{packages.service_area}</p>
                    <div className="card-actions justify-end">
                        
                        <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Book  Now</button>
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
                    value={packages.service_image}
                    readOnly
                    name="image_url"
                    className="input input-bordered input-success w-full "
                    
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
                    className="input input-bordered input-success w-full "
                    value={packages.service_name}
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
                    value={packages.service_provider_name}
                    name="name"
                    className="input input-bordered input-success w-full cursor-none"
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
                    value={packages.service_provider_email}
                    
                    name="providerEmail"
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
                    // placeholder="Price"
                    name="price"
                    className="input input-bordered input-success w-full "
                    value={packages.service_price}
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
                    className="input input-bordered input-success w-full "
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
                    className="input input-bordered input-success w-full "
                    required
                  />
                </div>
                <br />
                
                
                
                <input
                  type="submit"
                  value="PURCHASE"
                  className="btn btn-success w-full text-xl tracking-widest font-bold"
                />
              </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;