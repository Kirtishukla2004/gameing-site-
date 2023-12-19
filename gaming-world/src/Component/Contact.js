import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
    
        <div className="flex max-w-6xl text-white/60 mx-auto   ">
          <section className="flex max-w-5xl ">
            <div>
              <div className="flex flex-col ">
                <h2 className=" leading-1  text-[3rem]  max-sm:text-xl ">
                  <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent ">
                    Contact Us
                  </span>
                </h2>
            
                <div className="flex mb-[100px] max-sm:inline">
                  <div>
                    <div>
                      <h2 className="text-3xl ml-[15px] mt-[80px] w-[554px] h-[160px]">
                        <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent mt-40">
                          Love to hear from you, <br />{" "}
                          <span className="ml-[6px]">Get in touch</span>{" "}
                        </span>
                        &#128075;
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-[#6080c1] text-white w-[480px] h-[210px] overflow-hidden rotate-[-3deg] translate-x-4 translate-y-2">
                      <div
                        className=" pt-[2.25rem] 
          pb- [2.25rem] pl-[2rem] pr-[2rem]"
                      >
                        <div className="w-[480px] h-[24px] align-middle">
                          &#11088;&#11088;&#11088;&#11088;
                        </div>
                        <blockquote className=" mt-2">
                          <p>
                           the kids game that flows perfect
                          </p>
                        </blockquote>
                        <div className="w-[480px] h-[44px]">
                          <div className="flex mt-2">
                            <img
                              class="dg hf dd sc od"
                              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/sign-in/3/avatar-male.png"
                              alt=""
                            />
                            <span className="ml-[10px]">
                              <h1 className="text-lg font-bold"> Devon Lane</h1>
                              <p className="text-[15px]">
                               jhon adams
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" p-[40px] w-[554px] h-[450px] rounded-2xl shadow-2xl shadow-white/30 bg-opacity-100 mt-[9rem] ml-[100px] max-sm:ml-[-27px]">
                    <div className=" w-[464px] h-[524px] p-[2.5rem] mt-[-53px]">
                      <h3 className="text-[2rem] leading-9">
                        {" "}
                        <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
                          Send us a message{" "}
                        </span>
                      </h3>
                      <form
                        action="#"
                        className=" w-464 h-456 mt-8 p-6 rounded-lg bg-black ml-[-14px]"
                      >
                        <div className="mb-4">
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Your name"
                            className="w-96 h-6 border-b border-grey-800 text-white bg-black focus:outline-none text-base leading-6 py-4 px-1"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email address"
                            className="w-96 h-6 border-b border-grey-800 text-white bg-black focus:outline-none text-base leading-6 py-4 px-1"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="contactNo"
                            id="contactNo"
                            placeholder="Contact No."
                            className="w-96 h-6 border-b border-grey-800 text-white bg-black focus:outline-none text-base leading-6 py-4 px-1"
                          />
                        </div>
                        <div className="mb-4">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message"
                            rows="4"
                            className="w-96 h-24 border-b border-grey-800 text-white bg-black focus:outline-none text-base leading-6 py-4 px-1"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300 box-border border-0 border-solid border-gray-300 before:border-0 after:border-0"
                        >
                          Send message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
       
      </>
    );
  }
}

export default Contact;
