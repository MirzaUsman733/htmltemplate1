import React from 'react';
import { Link } from 'react-router-dom';

export default function Leader() {
  return (
    <div className="leaderDiv1 ms-0">
      <div className="container ms-0">
        <div className="upperDiv">
          <img
            className="my-5 leaderImageOne"
            style={{ borderRadius: '20px',}}

            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/571d82c5059e5cd299902068/vbvf-min.jpg"
            alt=""
          />
          <div className="leaderDiv2">
            <h2 className='pe-3 fw-bold'>Leader in Executive Education</h2>
          <p className=''>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className='fs-5 text-black'>Image from <Link>Freepic</Link></p>
          <button className='text-uppercase leaderBtn mt-2'>Read More</button>
          </div>
          <img className='leaderImg' src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/b0c97f6509925a2e87848d20/college-life-modern-lifestyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
