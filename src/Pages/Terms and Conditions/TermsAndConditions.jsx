import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";
import Navbar from "../../Utils/Components/Navbar";

const TermsAndConditions = () => {
    return (
        <RouteWithTitleUpdate element={

            
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-5xl font-bold">This is the Terms and Condition section</h1>
            <Footer></Footer>
        </div>
        } title="Terms And Conditions" />
    );
};

export default TermsAndConditions;