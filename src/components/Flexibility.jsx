import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook } from 'react-icons/bi';
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGooglePlus,
} from 'react-icons/ai';

export default function Flexibility() {
  return (
    <div className="flexibility">
      <div className="flexibilityDiv1">
        <div className="flexibilityDiv2">
          <div className="flexibilityDiv3">
            <div className="flexibilityDiv4">
              <div className="container">
                <h1 className="fw-bold">Flexible Distance Learning</h1>
                <span className="opacity-75 flexibilitySpan1">
                  We provide flexible and 24/7 online learning that fits around
                  You. Become an industry leader with accredited undergraduate
                  and postgraduate courses online. Fully Online.
                </span>
                <div className="container">
                  <div className="row mt-5">
                    <div className="col-12 col-sm-6 col-lg-4 mt-3">
                      <div className="flexibilityDivSections">
                        <span className="d-block fs-2">01</span>
                        <span
                          className="d-block mt-3"
                          style={{ fontSize: '17px' }}
                        >
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mt-3">
                      <div className="flexibilityDivSections">
                        <span className="d-block fs-2">02</span>
                        <span
                          className="d-block mt-3"
                          style={{ fontSize: '17px' }}
                        >
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mt-3">
                      <div className="flexibilityDivSections">
                        <span className="d-block fs-2">03</span>
                        <span
                          className="d-block mt-3"
                          style={{ fontSize: '17px' }}
                        >
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container flexibilityDivForm">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6 mt-3">
                        <span className="d-block fs-1 fw-bold">Need Help?</span>
                        <span
                          className="d-block opacity-75 lh-lg mt-3 flexibiltFormSpan"
                          style={{ fontSize: '19px' }}
                        >
                          Our specialists will contact you for details and
                          clarification. We’ll be glad to help you find the
                          course.
                        </span>
                        <div className="mt-4">
                          <Link
                            className="me-3"
                            to="https://www.facebook.com/"
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            <BiLogoFacebook size={30} />
                          </Link>
                          <Link
                            className="me-3"
                            to="https://www.twitter.com/"
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            <AiOutlineTwitter size={30} />
                          </Link>
                          <Link
                            className="me-3"
                            to="https://www.instagram.com/"
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            <AiFillInstagram size={30} />
                          </Link>
                          <Link
                            className="me-3"
                            to="https://www.google.com/"
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            <AiOutlineGooglePlus size={30} />
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <form action="">
                          <label htmlFor="name" className="d-block mt-3">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            className="nameInput"
                          />
                          <div className="row mt-3">
                            <div className="col-6">
                              <label htmlFor="number" className="d-block">
                                Phone
                              </label>
                              <input
                                type="text"
                                name="number"
                                id="number"
                                placeholder="Enter Your Phone"
                                className="nameInput"
                              />
                            </div>
                            <div className="col-6">
                              <label htmlFor="email" className="d-block">
                                Email
                              </label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter a valid email address"
                                className="nameInput"
                              />
                            </div>
                          </div>
                          <button className="btn btn-warning text-uppercase w-100 mt-3">
                            Request Clarification
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flexibilityDiv6">
                  <div className="container text-center text-white">
                    <p>
                      Sample text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit nullam nunc justo sagittis suscipit
                      ultrices.
                    </p>
                    <p className='lastLine'>
                      Website created by Mirza Usman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
