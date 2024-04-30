
const Navbar = () => {
    return (
        <div className=" text-black  px-3 shadow-bottom shadow-lg shadow-blue-300">
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300  rounded-box w-52">
                            <li><a>Buy</a></li>
                            <li><a>Sell</a></li>
                            <li><a>Services</a></li>
                            <li><a>Manage Rentals</a></li>
                        </ul>
                    </div>
                    <ul tabIndex={0} className="lg:flex gap-8   text-lg   hidden">
                        <li><a>Buy</a></li>
                        <li><a>Sell</a></li>
                        <li><a>Services</a></li>

                    </ul>
                    <img className=" lg:hidden" src="/image/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <img className="" src="/image/logo.png" alt="" />
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul tabIndex={0} className="lg:hidden flex gap-5  text-lg">
                        
                        <li><a>Sign In</a></li>
                    </ul>
                    <ul tabIndex={0} className="lg:flex gap-8   text-lg   hidden">
                        <li><a>Manage Rentals</a></li>
                        <li><a>Sign In</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;