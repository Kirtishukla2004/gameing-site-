import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className=" p-4 flex items-center justify-between ">
                <div className='bg-[radial-gradient(circle,rgba(24,0,255,0.07),rgba(24,0,255,0.07)_38%,#000),url("https://assets-global.website-files.com/64fad25f8884cb2d680a1052/651438da4d065110b561b1b2\_hero-bg-blocks.svg")] bg-[0_0,50%] bg-[auto,cover] justify-center items-center flex pt-24 pb-8
'>
                    
                </div>
                <div className="flex items-center">
                    {/* Logo and Home */}
                    <div className="flex items-center">
                        <img src="./logo.jpg" alt="logo" className="h-8 mr-4" />
                        
                    </div>
                </div>
                <div className="flex items-center">
                <span className=" mx-4 cursor-pointer">Home</span>
                    {/* Play */}
                    <span className=" mx-4 cursor-pointer">Play</span>
                    {/* Points */}
                    <span className=" mx-4 cursor-pointer">Points</span>
                    {/* Profile */}
                    <span className=" mx-4 cursor-pointer">Profile</span>
                </div>
            </header>
        );
    }
}

export default Header;
