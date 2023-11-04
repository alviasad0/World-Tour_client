import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
     
      <div>
        <div>
          <img
            src="https://i.ibb.co/HFRcYqn/404-error.jpg"
            className="mx-auto"
            alt=""
          />

          <div className="flex justify-center">
            <button className=" btn btn-secondary">
              <Link>GO Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ErrorPage;
