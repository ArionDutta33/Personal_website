import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <p className="text-center mb-4 text-lg max-w-3xl">
                        Feel free to contact me for any inquiries or collaborations. I'm always open to discussing new projects or ideas!
                    </p>
                    <p className="text-center text-md max-w-xs">
                        <strong>Contact Number:</strong> +123-456-7890
                    </p>
                    <p className="text-center text-md mt-2 max-w-xs">
                        <strong>Email:</strong>
                        <a href="mailto:arion@example.com" className="text-blue-400 hover:underline ml-1">
                            arion@example.com
                        </a>
                    </p>
                    <p className="text-center text-sm mt-6">
                        &copy; {new Date().getFullYear()} Arion Dutta. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
