 import { FaCode, FaLaptopCode, FaCloud } from 'react-icons/fa';
 import {Component} from "react";

class Filler extends Component {
    render() {
        return (
            <div className="bg-gray-900 text-white rounded-lg shadow-lg p-16 max-w-6xl mx-auto mt-24 min-h-[600px] flex flex-col items-center">
                <h2 className="text-5xl font-extrabold mb-12 text-center">Tech Highlights</h2>
                <div className="flex flex-col lg:flex-row lg:justify-around w-full">
                    <div className="text-center mb-12 lg:mb-0 lg:w-1/3">
                        <FaCode size={80} className="text-blue-400 mb-6" />
                        <h3 className="text-3xl font-semibold">Web Development</h3>
                        <p className="text-gray-300 mt-4">Explore the latest trends in web technologies and frameworks. Stay ahead in the dynamic world of web development.</p>
                    </div>
                    <div className="text-center mb-12 lg:mb-0 lg:w-1/3">
                        <FaLaptopCode size={80} className="text-green-400 mb-6" />
                        <h3 className="text-3xl font-semibold">Programming</h3>
                        <p className="text-gray-300 mt-4">Dive into coding best practices and advanced programming concepts. Master the art of creating efficient and scalable code.</p>
                    </div>
                    <div className="text-center lg:w-1/3">
                        <FaCloud size={80} className="text-purple-400 mb-6" />
                        <h3 className="text-3xl font-semibold">Cloud Computing</h3>
                        <p className="text-gray-300 mt-4">Learn about cloud services, deployment, and infrastructure. Understand how to leverage cloud technology for scalable solutions.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filler;
