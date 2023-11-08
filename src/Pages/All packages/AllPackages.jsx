import { useState } from "react";
import Navbar from "../../Utils/Components/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Package from "./compoenets/Package";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";
const AllPackages = () => {
  const allPackages = useLoaderData();

  /* search section */
  const [isSearch, setIsSearch] = useState(false);
  const [searchPackage, setSearchCard] = useState([]);

  const handleSerachInput = (event) => {
    event.preventDefault();
    const serchValue = event.target.searchInputField.value.toLowerCase();
    const allCategorydata = allPackages.filter((packageName) =>
      packageName.service_name.toLowerCase().includes(serchValue)
    );
    console.log(serchValue, allCategorydata);

    const storeSearchCard = allCategorydata;

    if (storeSearchCard.length > 0) {
      setSearchCard(storeSearchCard);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `No category found. Showing All categories!`,
      });
      setSearchCard(allPackages);
    }
    event.target.searchInputField.value = "";
  };
  console.log(allPackages);
  return (
    <RouteWithTitleUpdate
      element={
        <div className="">
          <Navbar></Navbar>
          <div className="max-w-screen-2xl mx-auto">
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <h1 className="text-center text-5xl font-bold text-blue-500 pb-10">
                Available Packages Right Now{" "}
              </h1>
              <form onSubmit={handleSerachInput} className=" pt-10">
                <h1 className="pb-5 text-2xl font-bold">
                  Search by package name :
                </h1>
                <input
                  type="text"
                  placeholder="Search Here"
                  className="input w-full max-w-2xl  border-blue-600  border-2 "
                  name="searchInputField"
                />
                <button
                  onClick={() => setIsSearch(!isSearch)}
                  type="submit"
                  className="btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold ml-3"
                >
                  Search
                </button>
              </form>
            </div>
            <div>
              {!isSearch ? (
                <Package packegeas={allPackages}></Package>
              ) : (
                <Package packegeas={searchPackage}></Package>
              )}
            </div>
          </div>
          <Footer></Footer>
        </div>
      }
      title="All_Packages"
    />
  );
};

export default AllPackages;
