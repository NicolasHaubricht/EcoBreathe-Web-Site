import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { FaHome, FaChartPie, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const ProSideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = (open) => {
        setSidebarOpen(open);
    };

    return (
        <Sidebar
            sidebar={
                <div className="bg-gray-800 text-white w-64 h-full p-4">
                    <h2 className="text-xl font-semibold mb-6">Ecobreathe</h2>
                    <ul>
                        <li className="p-3 hover:bg-gray-700 rounded-md flex items-center">
                            <FaHome className="mr-2" /> Home
                        </li>
                        <li className="p-3 hover:bg-gray-700 rounded-md flex items-center">
                            <FaChartPie className="mr-2" /> Dashboard
                        </li>
                        <li className="p-3 hover:bg-gray-700 rounded-md flex items-center">
                            <FaInfoCircle className="mr-2" /> About
                        </li>
                        <li className="p-3 hover:bg-gray-700 rounded-md flex items-center">
                            <FaEnvelope className="mr-2" /> Contact
                        </li>
                    </ul>
                </div>
            }
            open={sidebarOpen}
            onSetOpen={handleSidebarToggle}
            styles={{ sidebar: { background: "white" } }}
        >
            <button
                onClick={() => handleSidebarToggle(!sidebarOpen)}
                className="m-4 p-2 bg-blue-500 text-white rounded"
            >
                Toggle Sidebar
            </button>
        </Sidebar>
    );
};

export default ProSideBar;
