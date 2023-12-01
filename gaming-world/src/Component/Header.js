import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Header Title</h1>
                <nav>
                    <ul>
                        <li className='text-xl'><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;