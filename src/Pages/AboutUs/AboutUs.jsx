import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";
import Navbar from "../../Utils/Components/Navbar";

const AboutUs = () => {
    return (
        <RouteWithTitleUpdate element={

            
        <div>
            <Navbar></Navbar>
           <h1 className="text-center text-5xl font-bold">This is the About Us section</h1>            
           <Footer></Footer>
        </div>
            } title="About Us" />
    );
};

export default AboutUs;