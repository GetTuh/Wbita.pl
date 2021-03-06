import React from 'react'


const Header = () => (
        <div>
            <link
                rel="stylesheet"
                // href={()=>"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"}
            />
            <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <div className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
                            About
                        </div>
                        <div className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
                            Products
                        </div>
                        <div className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
                            Investor Relations
                        </div>
                        <div className="hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
                            Contact
                        </div>
                    </nav>
                    <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img
                            src="https://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52707-party-popper-icon.png"
                            style={{
                                height: '40px',
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                            alt="logo"
                        />
                        <span className="ml-3 text-xl">Wbita.pl</span>
                    </div>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <div
                            
                            className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg"
                        >
                            Donate
                        </div>
                    </div>
                </div>
            </header>
        </div>
)
export default Header
