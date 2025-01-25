import React from "react";

const  Navbar = () => {
    return (
        <nav className="bg-gray-900 text white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="frontend/public/images/logo.jpg" alt="Bilen Robotics & A.I." className="w-10 h-10 mr-2"/>
                <h1 className="text-2xl font-bold">Bilen Robotics & A.I.</h1>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/blogs" className="hover:underline">Blogs</a>
                <a href="/links" className="hover:underline">Links</a>

            </div>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Login/Register

            </button>

        </nav>
    );
};

export default Navbar;