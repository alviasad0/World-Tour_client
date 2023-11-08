// import { FcQuestions } from "react-icons/fc"
import RouteWithTitleUpdate from "../../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../../Utils/Components/Footer";
import Navbar from "../../../Utils/Components/Navbar";
import AllServices from "../Components/AllServices";
// import AllServices from "../Components/AllServices";
import Banner from "../Components/Banner";
import WhyChoose from "../Components/WhyChoose/WhyChoose";
import FaqSection from "../../FAQ/FaqSection";

const Home = () => {
    return (
      <RouteWithTitleUpdate
        element={
          <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl mx-auto  rounded-xl pb-5">
              <Banner></Banner>
              <div className="px-10">
                <AllServices></AllServices>
              </div>
                    <WhyChoose></WhyChoose>
                    <FaqSection></FaqSection>
                    </div>
            <Footer></Footer>
          </div>
        }
        title="Home"
      />
    );
};

export default Home;