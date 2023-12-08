import React, { Component } from "react";

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

  render() {
    return (
      <header className="py-4 pl-10 capitalize">
        <nav className="flex justify-between items-center text-lg">
          <img src="./logo.png" alt="Logo" className="w-20 h-16 image" />
          <ul className="hidden lg:flex space-x-8 w-[339px] h-[76px] pl-[35px] p-[21px] rounded-[30px] border-2 border-solid">
            <li className="list">Home</li>
            <li className="list">Play</li>
            <li className="list">Contact</li>
            <li className="list">Profile</li>
          </ul>
          <div>
            <button className="px-4 py-2 text-white mr-[40px] rounded-[9px] border-2 border-solid list">
              Login
            </button>
          </div>
          <div
            className="text-white toggle-button cursor-pointer lg:hidden list"
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
          <li className="list">Home</li>
          <li className="list mt-4">Play</li>
          <li className="list mt-4">Contact</li>
          <li className="list mt-4">Profile</li>
        </ul>
        <section class="wrapper ">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
        <div className=" lg:flex ">
          <h1 className="text-center lg:text-left mr-2 text-[35px]  h-[247px] w-[690px]  mt-[138px] float-left max-sm:hidden max-md:hidden bg-gradient-to-r from-custom_purple via-custom_gold to-custom_blue bg-clip-text text-transparent ">
            A Deep Dive Into The Gaming Virtual World
            <br />
            Create your own space in the gaming world
          </h1>

          <div className="hidden lg:block text-center">
            <img
              src="./space-baby.png"
              className="h-[650px] mx-auto mt-[-1rem] ml-[100px]"
              alt=""
            />
          </div>
          <div className="lg:hidden text-center">
            <img
              src="./space-baby.png"
              className=" h-[650px] mx-auto mt-4 mr-[30px]"
              alt=""
            />
          </div>
          <div className="lg:hidden text-center">
            <h1 className="text-[25px] mr-[37px] bg-gradient-to-r from-custom_purple via-custom_gold to-custom_blue bg-clip-text text-transparent font-bold">
              A Deep Dive Into The Gaming Virtual World Create your own space in
              the gaming world
            </h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
