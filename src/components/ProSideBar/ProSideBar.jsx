import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { FaHome, FaChartPie, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProSideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = (open) => {
        setSidebarOpen(open);
    };

    return (
        <Sidebar
            sidebar={
                <div className="bg-green-2 text-white w-64 h-full p-4">
                    <h2 className="text-xl uppercase font-semibold mb-6">Ecobreathe</h2>
                    <ul>
                        <Link to='/'>
                            <li className="p-3 hover:bg-green-1 rounded-md flex items-center cursor-pointer">
                                <FaHome className="mr-2" /> Home
                            </li>
                        </Link>
                        <Link to='/dashboard'>
                            <li className="p-3 hover:bg-green-1 rounded-md flex items-center cursor-pointer">
                                <FaChartPie className="mr-2" /> Dashboard
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li className="p-3 hover:bg-green-1 rounded-md flex items-center cursor-pointer">
                                <FaInfoCircle className="mr-2" /> About
                            </li>
                        </Link>
                        <Link to='/contact'>
                            <li className="p-3 hover:bg-green-1 rounded-md flex items-center cursor-pointer">
                                <FaEnvelope className="mr-2" /> Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            }
            open={sidebarOpen}
            onSetOpen={handleSidebarToggle}
        >
            <div
                className="p-2 w-11 h-11 md:fixed md:h-dvh flex items-center justify-center bg-green-2 max-md:rounded-r-md z-0 text-white hover:w-16 transition-all ease-in-out"
            >
                <button onClick={() => handleSidebarToggle(!sidebarOpen)} className='md:hidden'>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>

                <button onClick={() => handleSidebarToggle(!sidebarOpen)} className='max-md:hidden'>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </Sidebar>
    );
};

export default ProSideBar;
