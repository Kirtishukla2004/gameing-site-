import React, { Component } from "react";
class Play extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <div
            className="text-[60px] 
    ml-[65px] bg-gradient-to-r from-custom_purple via-custom_gold to-custom_blue bg-clip-text text-transparent"
          >
            Let's Play
          </div>
          <play>
            <div className="background ">
              <div className="gallery">
                <div className="card">
                  <figure>
                  <a href=""> <img
                      src="./snake.png"
                      alt="snake"
                      className="border-8 border-solid list"
                    />
                    </a> 
                  </figure>
                </div>
                <div className="card">
                  <figure>
                    <a href="">
                    <img
                      src="./dino.png"
                      alt="fino"
                      className="border-8 border-solid list"
                    />
                    </a>
                  </figure>
                </div>
                <div className="card">
                  <figure>
                    <a href="">
                    <img
                      src="./stone_paper_sci.png"
                      alt="triplet"
                      className="border-8 border-solid list"
                    />
                    </a>
                  </figure>
                </div>
                <div className="card">
                  <figure>
                    <a href="">
                    <img
                      src="./tic_tac.png"
                      alt="zero_kata"
                      className="border-8 border-solid list"
                    />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </play>
        </div>
      </>
    );
  }
}

export default Play;
