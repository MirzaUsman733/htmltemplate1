import React from 'react';

export default function HeroSection() {
  return (
    <div className="px-0">
      <div
        className="d-flex align-item-center justify-content-center px-0"
        id="bs"
      >
        <div className="container-fluid heroDivFirst px-0">
          <div className="row">
            <div className="col">
              <div className="heroDiv text-center">
                <h1 className="heroheading1 text-white">
                  Online University of In-Demand Profession
                </h1>
                <h2 className="text-white mt-3">Our Courses</h2>
                <div className="mt-4 container">
                  <div className="row mx-0">
                    <div className="col-12 col-sm-6 col-lg-3 mt-2">
                      <div>
                        <button className="btn btn-warning rounded-pill heroBtn">
                          Design
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-2">
                      <div>
                        <button className="btn btn-warning rounded-pill heroBtn">
                          Programming
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-2">
                      <div>
                        <button className="btn btn-warning rounded-pill heroBtn">
                          Marketing
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-2">
                     
                      <div>
                <button className='btn btn-warning rounded-pill heroBtn'>Bussiness</button>

                      </div>
                    </div>
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
