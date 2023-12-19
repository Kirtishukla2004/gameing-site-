import React, { Component } from "react";

class Header extends Component {
  

  render() {
    return (
      <header className="py-4 pl-10 capitalize">
       
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
