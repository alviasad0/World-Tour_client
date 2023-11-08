import { useContext, useState } from "react";
import Navbar from "../../Utils/Components/Navbar";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";
const MyPackages = () => {
  const items = useLoaderData();
  const { user } = useContext(AuthContext);
  const myPackages = items.filter((p) => p.email === user.email);
  console.log(items, items);
  const [addedPackegs, setAddeddPackeges] = useState(myPackages);
  const handleDeleteBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Remove from the cart !!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://world-tour-server-red.vercel.app/addPackage/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Good job!",
                "Product has deleted from  the database!",
                "success"
              );
              const remaining = addedPackegs.filter((i) => i._id !== _id);
              setAddeddPackeges(remaining);
            }
          });
      }
    });
  };
  console.log(addedPackegs);
  console.log(user);

  return (
    <RouteWithTitleUpdate
      element={
        <div>
          <Navbar></Navbar>
          <div
            className="max-w-screen-2xl mx-auto  "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1
              className="text-center text-5xl font-bold pb-20"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              Package that you have added{" "}
            </h1>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              {addedPackegs.map((items) => (
                <div
                  key={items.service_name}
                  className="card lg:card-side mt-10 bg-blue-50 border-blue-400 border-2"
                >
                  <figure className="flex-1">
                    <img src={items.image_url} alt="Album" />
                  </figure>
                  <div className="card-body flex-1">
                    <h2 className="text-4xl font-semibold">
                      {items.Package_name}
                    </h2>
                    <div className="flex items-center gap-10 pt-4">
                      <div className="w-24 avatar">
                        <img className="rounded" src={items.providerImage} />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">{items.name}</h1>
                        <h1 className="font-medium ">{items.email}</h1>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 pt-4">
                      {items.service_description}
                    </p>
                    <p className="text-xl font-medium text- pt-4">
                      Location :{items.service_area}
                    </p>

                    <p className="text-2xl font-medium text-black">
                      Price :{" "}
                      <span className="text-4xl font-bold text-blue-600">
                        {items.price} $
                      </span>
                    </p>

                    <div className="card-actions justify-end">
                      <button className="btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold">
                        <Link to={`/updatePackage/${items._id}`}>Update</Link>
                      </button>
                      <button
                        className="btn tracking-widest btn-success bg-red-300 border-red-600 text-lg border-2 text-red-800 font-semibold"
                        onClick={() => handleDeleteBtn(items._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer></Footer>
        </div>
      }
      title="My_Packages"
    />
  );
};

export default MyPackages;
