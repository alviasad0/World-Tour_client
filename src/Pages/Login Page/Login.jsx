import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from './../../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Utils/Components/Navbar";

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const { logIn } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: `${result.user.email} have logged in successfully!`,
                });
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Password doesn't match`,
                });
                console.log(error.message);
            });
        console.log(email, password);
    };



    /* google login */
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: `${result.user.displayName} have logged in successfully!`,
                });
                navigate(location?.state ? location.state : "/");
                console.log(result.user);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
                console.log(error.message);
            });
        console.log("Google mama  coming");
    };
    return (
        <div>
            <Navbar></Navbar>
           <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="bg-green-50 container mx-auto md:p-10 mt-10 rounded-lg"
        >
          <div className="text-center ">
            <h1
              className="text-5xl font-bold pb-20 pt-10"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              Login now!
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6  ">
            <div
              className="col-span-3"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl text-black font-medium tracking-wider">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered input-success"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl text-black font-medium tracking-wider">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered input-success"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-success  tracking-widest text-2xl">
                    Login
                  </button>
                </div>
                <p className="text-lg text-black  font-medium">
                  Do not have an account ?{" "}
                  <Link
                    to="/register"
                    className="text-green-600 text-xl font-bold"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
              </form>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div>
                <div>
                  <p className="text-3xl font-bold text-center "> Login with</p>
                  <div>
                    <button
                      onChange={handleGoogleLogin}
                      className="mt-6 bg-green-100 btn w-full  border-green-600 space-x-3 tracking-widest"
                    >
                      <FcGoogle className="text-2xl"></FcGoogle>
                      <span className="text-lg font-bold">Google</span>
                    </button>
                    <button className="mt-2 btn bg-green-100 w-full border-green-600 space-x-3 tracking-widest">
                      <BsGithub className="text-2xl"></BsGithub>
                      <span className="text-lg font-bold">Github</span>
                    </button>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h1 className="text-3xl font-bold">Find Us On</h1>
                  <div className="border-green-400 border-2 mt-6">
                    <div className=" border-green-400 border-b-2 p-4">
                      <a
                        href=""
                        className="flex text-xl pl-10 font-semibold items-center gap-2"
                      >
                        <BsFacebook></BsFacebook>
                        <span>FaceBook</span>
                      </a>
                    </div>
                    <div className="border-green-400  border-b-2 p-4">
                      <a
                        href=""
                        className="flex text-xl pl-10 font-semibold items-center gap-2"
                      >
                        <BsInstagram></BsInstagram>
                        <span>Instagram</span>
                      </a>
                    </div>
                    <div className="  p-4">
                      <a
                        href=""
                        className="flex text-xl pl-10 font-semibold items-center gap-2"
                      >
                        <BsTwitter></BsTwitter>
                        <span>Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Login;