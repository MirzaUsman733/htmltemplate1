import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
export default function Courses() {
  return (
    <div>
      <div className="container text-center" style={{marginTop: '100px'}}>
        <div className="row">
            <div className="col-12 col-md-6">
                <h2 className='fw-bold coursesHeading'>Top ten most popular courses for international students</h2>
                <img className='mt-2 imgCourses' src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/571d82c5059e5cd299902068/vbvf-min.jpg" alt="" height="342px" style={{borderRadius: "50px"}}/>
           <p className='coursesPara'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="col-12 col-md-6 pt-5">
              <div>
                <ul className='list-unstyled'>
                    <li className='coursesLi'>Business Studies</li>
                    <li className='coursesLi'>General Business</li>
                    <li className='coursesLi'>Finance</li>
                    <li className='coursesLi'>Management Studies</li>
                    <li className='coursesLi'>Law</li>
                    <li className='coursesLi'>Computer Science</li>
                    <li className='coursesLi'>Economics</li>
                    <li className='coursesLi'>Marketing</li>
                    <li className='coursesLi'>Accounting</li>
                    <li className='coursesLi'>Design</li>
                    <li className='mt-4'><BsArrowRight size={50}/></li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
