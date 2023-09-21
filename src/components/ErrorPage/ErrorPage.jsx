import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-60">
           <h2 className="text-3xl font-bold ">Opsss!!!!</h2>
           <p className="text-xl font-bold ">Your are in the wrong page</p> 
           <Link className="btn btn-secondary" to="/">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;