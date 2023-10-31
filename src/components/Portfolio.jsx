import React from 'react'
import {RiMentalHealthLine} from 'react-icons/ri'
import {FaMedal,FaGraduationCap} from 'react-icons/fa'
import {MdContactSupport} from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolioUpperDiv'>
      <div className='portfolioLowerDiv'>
        <div className="container p-0 text-center">
            <div className="row m-0" style={{paddingTop: '100px'}}>
                <div className="col-12 col-sm-6 col-lg-3 portfolioCol1">
                    <div>
                        <div>
                        <img src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/bfb8f38f60ac50c398f9e17a/tg-min.jpg" alt="" className='portfolioImages' />
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 portfolioCol2">
                    <div>
                        <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/5924c48a74af58b19572948c/t.jpg" alt="" className='portfolioImages' />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 portfolioCol3">
                    <div>
                        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/ced4341162de5d3f9494dc5c/rtt.jpg" alt="" className='portfolioImages'/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 portfolioCol4">
                    <div>
                        <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/27cde5201f04560fb5d495db/dddhre-min.jpg" alt="" className='portfolioImages'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className='portfoliosecondDiv text-center'>
                        <span className='portfolioIcons rounded-pill'>
                        <RiMentalHealthLine size={70}/>
                        </span>
                        <h4 className='text-uppercase pt-3'>HOW WE TEACH</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <Link className='text-black fs-5'>More</Link>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 portfolioDiv5">
                <div className='portfoliosecondDiv text-center'>
                <span className='portfolioIcons rounded-pill'>
                        <FaMedal size={70}/>
                        </span>
                        <h4 className='text-uppercase pt-3'>RESULTS</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <Link className='text-black fs-5'>More</Link>
                </div>

                </div>
                <div className="col-12 col-sm-6 col-lg-3 portfolioCol3">
                <div className='portfoliosecondDiv text-center'>
                <span className='portfolioIcons rounded-pill'>
                        <FaGraduationCap size={70}/>
                        </span>
                        <h4 className='text-uppercase pt-3'>TOP COURSES</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <Link className='text-black fs-5'>More</Link>
                </div>

                </div>
                <div className="col-12 col-sm-6 col-lg-3 portfolioCol3">
                <div className='portfoliosecondDiv text-center'>
                <span className='portfolioIcons rounded-pill'>
                        <MdContactSupport size={70}/>
                        </span>
                        <h4 className='text-uppercase pt-3'>SUPPORT</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        <Link className='text-black fs-5'>More</Link>
                </div>

                </div>
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}
