import React from 'react';
import { SiTypescript, SiExpress, SiMongodb, SiBootstrap, SiBulma, SiFlutter, SiDart } from 'react-icons/si';
import { FaJs, FaNodeJs, FaJava } from 'react-icons/fa';
import { BsFileText } from 'react-icons/bs';

const Skills = () => {
    return (
        <div className="bg-gray-800 text-white p-6 max-w-4xl mx-auto my-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Skills</h2>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center text-blue-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiTypescript size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">TypeScript</span>
                </div>
                <div className="flex flex-col items-center text-yellow-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <FaJs size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">JavaScript</span>
                </div>
                <div className="flex flex-col items-center text-gray-400 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiExpress size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Express</span>
                </div>
                <div className="flex flex-col items-center text-green-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <FaNodeJs size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Node.js</span>
                </div>
                <div className="flex flex-col items-center text-green-600 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiMongodb size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">MongoDB</span>
                </div>
                <div className="flex flex-col items-center text-indigo-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiBootstrap size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Bootstrap</span>
                </div>
                <div className="flex flex-col items-center text-info-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiBulma size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Bulma</span>
                </div>
                <div className="flex flex-col items-center text-blue-400 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiFlutter size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Flutter</span>
                </div>
                <div className="flex flex-col items-center text-light-blue-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <SiDart size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Dart</span>
                </div>
                <div className="flex flex-col items-center text-red-600 w-20 sm:w-24 md:w-28 lg:w-32">
                    <FaJava size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Java</span>
                </div>
                <div className="flex flex-col items-center text-pink-500 w-20 sm:w-24 md:w-28 lg:w-32">
                    <BsFileText size={40} />
                    <span className="mt-2 text-sm sm:text-base md:text-lg">Figma</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
