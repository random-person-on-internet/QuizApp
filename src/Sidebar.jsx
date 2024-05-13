import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-full w-64 bg-gray-100 text-white fixed">
            <div className="p-5 bg-gray-100 text-gray-900 font-bold text-center text-xl">QuizAppLogo</div>
            <ul className="p-5">
                <li>
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `block m-3 p-3 hover:bg-gray-500 hover:text-gray-100 rounded-xl transition duration-150 ease-in-out ${isActive ? "bg-gray-500 text-gray-100" : "text-gray-700"}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `block m-3 p-3 hover:bg-gray-500 hover:text-gray-100 rounded-xl transition duration-150 ease-in-out ${isActive ? "bg-gray-500 text-gray-100" : "text-gray-700"}`
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/quiz"
                        className={({ isActive }) =>
                            `block m-3 p-3 hover:bg-gray-500 hover:text-gray-100 rounded-xl transition duration-150 ease-in-out ${isActive ? "bg-gray-500 text-gray-100" : "text-gray-700"}`
                        }
                    >
                        Quiz
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block m-3 p-3 hover:bg-gray-500 hover:text-gray-100 rounded-xl transition duration-150 ease-in-out ${isActive ? "bg-gray-500 text-gray-100" : "text-gray-700"}`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `block m-3 p-3 hover:bg-gray-500 hover:text-gray-100 rounded-xl transition duration-150 ease-in-out ${isActive ? "bg-gray-500 text-gray-100" : "text-gray-700"}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
