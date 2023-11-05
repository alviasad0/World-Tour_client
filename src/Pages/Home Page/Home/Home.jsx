import Navbar from "../../../Utils/Components/Navbar";
import AllServices from "../Components/AllServices";
// import AllServices from "../Components/AllServices";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-4xl">this is the home</h1>
            <Banner></Banner>
            <AllServices></AllServices>
        </div>
    );
};

export default Home;