import {Link } from "react-router-dom"
const Navbar = () =>{
    return(
    <nav className="bg-red-500 h-[80px] flex justify-center items-center">
        <div className="max-w-screen-lg w-full">
            <Link to="/" className="capitalize font-medium ml-2.5">
                Home
            </Link>
            <Link to="/register" className="capitalize font-medium ml-2.5">
                Register
            </Link>
            <Link to="/login" className="capitalize font-medium ml-2.5">
                Login
            </Link>
           
        </div>
    </nav>
    )
}
export default Navbar