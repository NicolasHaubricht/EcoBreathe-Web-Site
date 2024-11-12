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
                <div className="bg-gray-800 text-white w-64 h-full p-4">
                    <h2 className="text-xl uppercase font-semibold mb-6">Ecobreathe</h2>
                    <ul>
                        <Link to='/'>
                            <li className="p-3 hover:bg-gray-700 rounded-md flex items-center cursor-pointer">
                                <FaHome className="mr-2" /> Home
                            </li>
                        </Link>
                        <Link to='/dashboard'>
                            <li className="p-3 hover:bg-gray-700 rounded-md flex items-center cursor-pointer">
                                <FaChartPie className="mr-2" /> Dashboard
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li className="p-3 hover:bg-gray-700 rounded-md flex items-center cursor-pointer">
                                <FaInfoCircle className="mr-2" /> About
                            </li>
                        </Link>
                        <Link to='/contact'>
                            <li className="p-3 hover:bg-gray-700 rounded-md flex items-center cursor-pointer">
                                <FaEnvelope className="mr-2" /> Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            }
            open={sidebarOpen}
            onSetOpen={handleSidebarToggle}
            styles={{ sidebar: { background: "white" } }}
        >
            <button
                onClick={() => handleSidebarToggle(!sidebarOpen)}
                className="m-1 p-2 w-11 h-11 bg-blue-500 text-white rounded"
            >
                <img src="#" alt="#" />
            </button>
        </Sidebar>
    );
};

export default ProSideBar;
