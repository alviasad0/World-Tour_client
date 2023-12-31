import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './../../firebase/firebase.config';
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Utils/Components/Navbar";
import RouteWithTitleUpdate from "../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../Utils/Components/Footer";


const Register = () => {
     const navigate = useNavigate();
     const { createUser, setUserName, setProfilePicture } =
       useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    


    const handleRegister = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const userPic = event.target.userPic.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmPassword = event.target.password2.value;
      if (password !== confirmPassword) {
        return Swal.fire(
          "Error!",
          "Password and Confirm password  should same !",
          "error"
        );
      } else if (password < 6) {
        return Swal.fire(
          "Error!",
          "Password should be atleast 6 charecters long  !",
          "error"
        );
      } else if (!/[A-Z]/.test(password)) {
        return Swal.fire(
          "Error!",
          "Password should contain atleast one uppercase letter !",
          "error"
        );
      } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
        return Swal.fire(
          "Error!",
          "Password should contain atleast one special charecter!",
          "error"
        );
      }
      createUser(email, password)
        .then((result) => {
          setUserName(name);
          setProfilePicture(userPic);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have registered successfully!",
          });
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
      console.log(name, userPic, email, password, confirmPassword);
    };


    /* google log in  */
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have registered successfully!",
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
      console.log("glg mam  coming");
    };

    return (
      <RouteWithTitleUpdate element={

      <div>
        <Navbar></Navbar>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-blue-100 container mx-auto md:p-10 mt-10 rounded-lg"
        >
          <div className="text-center ">
            <h1 className="text-5xl text-black font-bold">Register now!</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div
              className="col-span-3"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl text-black font-medium tracking-wider">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-info"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl text-black font-medium tracking-wider">
                      Profile Picture URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="URL"
                    className="input input-bordered input-info"
                    name="userPic"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl text-black font-medium tracking-wider">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered input-info"
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
                    className="input input-bordered input-info"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl text-black font-medium tracking-wider">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered input-info"
                    name="password2"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-info text-xl  font-bold tracking-widest">
                    Register
                  </button>
                </div>
                <p className="text-lg text-black  font-medium">
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-blue-600 text-xl font-bold"
                  >
                    Login
                  </Link>
                </p>

                <hr />
              </form>
            </div>
            <div className="col-span-1">
              <div>
                <div
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  <div>
                    <div>
                      <p className="text-3xl font-bold text-center ">
                        {" "}
                        Login with
                      </p>
                      <div>
                        <button
                          onClick={handleGoogleLogin}
                          className="mt-6 btn bg-blue-100 w-full  border-blue-600 space-x-3 tracking-widest"
                        >
                          <FcGoogle className="text-2xl"></FcGoogle>
                          <span className="text-lg font-bold">Google</span>
                        </button>
                        <button className="mt-2 btn bg-blue-100 w-full border-blue-600 space-x-3 tracking-widest">
                          <BsGithub className="text-2xl"></BsGithub>
                          <span className="text-lg font-bold">Github</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <h1 className="text-3xl font-bold">Find Us On</h1>
                      <div className="border-blue-400 border-2 mt-6">
                        <div className=" border-blue-400 border-b-2 p-4">
                          <a
                            href=""
                            className="flex text-xl pl-10 font-semibold items-center gap-2"
                          >
                            <BsFacebook></BsFacebook>
                            <span>FaceBook</span>
                          </a>
                        </div>
                        <div className="border-blue-400  border-b-2 p-4">
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
        </div>
        <Footer></Footer>
      </div>
      } title="Register" />
    );
};

export default Register;