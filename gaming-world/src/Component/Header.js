import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="bg-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center">
                   
                    <div className="flex items-center">
                        <img src="./public/logo.jpg" alt="logo"/>
                        <span className="text-white text-lg font-semibold">Home</span>
                    </div>
                </div>
                <div className="flex items-center">
                   
                    <span className="text-white mx-4 cursor-pointer">Play</span>
                   
                    <span className="text-white mx-4 cursor-pointer">Points</span>
                    
                    <span className="text-white mx-4 cursor-pointer">Profile</span>
                </div>
            </header>
        );
    }
}

export default Header;
