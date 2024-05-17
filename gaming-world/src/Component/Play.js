import React, { Component } from "react";
import {Link} from "react-router-dom"
class Play extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <div
            className="text-[50px] ml-[20px] bg-gradient-to-r from-custom_purple via-custom_gold to-custom_blue bg-clip-text text-transparent"
          >
            Let's Play
          </div>
          <play>
            <div className="background ">
              <div className="gallery ">
                <div className="card">
                  <figure>
                  <Link to="/snake">
                     <img
                      src="./snake.png"
                      alt="snake"
                      className="border-8 border-solid list"
                    />
                    </Link> 
                  </figure>
                </div>
                <div className="card">
                  <figure>
                    <Link to="/memorygame">
                    <img
                      src="./menja.png"
                      alt="fino"
                      className="border-8 border-solid list"
                    />
                    </Link>
                  </figure>
                </div>
                <div className="card">
                  <figure>
                    <Link to="/sps">
                    <img
                      src="./stone_paper_sci.png"
                      alt="triplet"
                      className="border-8 border-solid list"
                    />
                    </Link>
                  </figure>
                </div>
                <div className="card">
                  <figure>
                    <Link to="/tictactoe">
                    <img
                      src="./tic_tac.png"
                      alt="zero_kata"
                      className="border-8 border-solid list"
                    />
                    </Link>
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
