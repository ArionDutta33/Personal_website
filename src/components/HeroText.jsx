import React from "react";
import { FaGithub, FaTwitter, FaFigma } from "react-icons/fa";

const HeroText = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl font-extrabold mb-4">
                Hi! I&apos;m Arion
            </h1>
            <p className="leading-relaxed text-lg text-gray-300 max-w-2xl">
                I am a full stack developer with a focus on creating and occasionally
                designing exceptional digital experiences that are fast, accessible,
                visually appealing, and responsive. Even though I have been creating
                web applications for over 7 years, I still love it as if it is something new.
            </p>

            <div className="socials flex justify-center mt-4 gap-4 text-gray-400">
                <a href="https://github.com" aria-label="Github">
                    <FaGithub size={30} className="hover:text-white transition duration-300" />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                    <FaTwitter size={30} className="hover:text-white transition duration-300" />
                </a>
                <a href="https://figma.com" aria-label="Figma">
                    <FaFigma size={30} className="hover:text-white transition duration-300" />
                </a>
            </div>
        </div>
    );
};

export default HeroText;
