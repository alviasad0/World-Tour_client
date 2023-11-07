import { useState } from "react";
import Navbar from "../../Utils/Components/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Package from "./compoenets/Package";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";
const AllPackages = () => {
    const allPackages = useLoaderData()




    /* search section */
    const [isSearch , setIsSearch] = useState(false);
    const [searchPackage , setSearchCard] = useState([])

    const handleSerachInput = event => {
        event.preventDefault()
        const serchValue = event.target.searchInputField.value.toLowerCase()
        const allCategorydata = allPackages.filter(packageName => packageName.service_name.toLowerCase().includes(serchValue) )
        console.log(serchValue , allCategorydata);
         
        
        
       const storeSearchCard = allCategorydata
       
       if(storeSearchCard.length >0){

           setSearchCard( storeSearchCard)
       }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `No category found. Showing All categories!`,
          });
        setSearchCard(allPackages)
    }
    event.target.searchInputField.value = '';
}
    console.log(allPackages);
    return (
        <RouteWithTitleUpdate element={

        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <h1 className="text-center">this is the all packages section </h1>
                <form onSubmit={handleSerachInput } className="flex justify-center pt-10">
                                    <input type="text" placeholder="Type here" className="input w-full max-w-xs  " name="searchInputField" />
                                    <button onChange={()=>setIsSearch(!isSearch)} type="submit" className="btn bg-[#FF444A] btn-primary border-none" >Search</button>
                                </form>


            </div>
            <div >
           
           {
            !isSearch
             ?
            <Package packegeas={allPackages} ></Package>
            :
            
            <Package packegeas={searchPackage}></Package>
           }
        </div>
        <Footer></Footer>
        </div>
        } title="All_Packages" />
    );
};

export default AllPackages;