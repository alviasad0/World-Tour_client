import { useContext, useState } from "react";
import Navbar from "../../Utils/Components/Navbar";
import { useLoaderData , Link} from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
const MyPackages = () => {
    const packages = useLoaderData()
    const { user } = useContext(AuthContext)
    const myPackages = packages.filter((p) => p.email === user.email)
    console.log(packages, packages);
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
            fetch(`http://localhost:5000/addPackage/${_id}`, {
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
      <RouteWithTitleUpdate element={

        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-4xl font-bold">this is the my package section </h1>
            <div>
                {
                    addedPackegs.map(items => (
                        <div key={items._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={items.image_url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{items.Package_name}</h2>
                                <p>{items.short_description}</p>
                                <p>Location: {items.service_area}</p>
                                <p>Price : ${items.price}</p>
                                <p> Provider Name :{items.name}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link to={`/updatePackage/${items._id}`} >Update</Link></button>
                                    <button className="btn btn-primary" onChange={() => handleDeleteBtn(items._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      } title="My_Packages" />
    );
};

export default MyPackages;