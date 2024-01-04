import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="text-gray-400 bg-gradient-to-r from-themeColor1 to-theneColor2">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className=" font-flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                    <span className="ml-3 text-xl">Home</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-textColor">
                        <Link to="bookmark" className="mr-5 hover:text-white">BookMark</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default Header;