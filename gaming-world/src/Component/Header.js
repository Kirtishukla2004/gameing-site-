import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownVisible: !prevState.dropdownVisible,
    }));
  };

  handleLogout = () => {
    const { logout } = this.props.auth0;
    logout({ returnTo: window.location.origin });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <div className="mt-[2rem]">
          <nav className="flex justify-between items-center text-lg">
            <img src="./logo.png" alt="Logo" className="w-20 h-16 image" />
            <ul className="hidden lg:flex space-x-8 w-[339px] h-[76px] pl-[35px] p-[21px] rounded-[30px] border-2 border- cursor-pointer">
              <li className="list">
                <Link to="/home">Home</Link>
              </li>
              <li className="list">
                <Link to="/play">Play</Link>
              </li>
              <li className="list">
                <Link to="/profile">Profile</Link>
              </li>
              {isAuthenticated ? (
                <li className="list">
                  <button
                    className="text-white cursor-pointer list"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="list">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
            <div></div>
            <div
              className="text-white toggle-button cursor-pointer lg:hidden  list mt-4"
              onClick={this.toggleDropdown}
            >
              <svg
                className="w-6 h-6 fill-current mr-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          </nav>

          <ul
            className={`dropdown p-4 absolute right-8 top-16 bottom-16 ${
              this.state.dropdownVisible ? "block lg:hidden" : "hidden"
            }`}
          >
            <li className="list">
              <Link to="/home">Home</Link>
            </li>
            <li className="list mt-4">
              <Link to="/play">Play</Link>
            </li>
            <li className="list mt-4">
              <Link to="/profile">Profile</Link>
            </li>
            {isAuthenticated ? (
              <li className="list">
                <button
                  className="text-white cursor-pointer list"
                  onClick={this.handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="list">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default withAuth0(Header);
