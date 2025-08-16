import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import { Outlet, Link } from 'react-router-dom'

function About() {

   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      const timer = setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3300)
      return () => clearTimeout(timer)
   }, [])

   return (
      <div className="container about-page">
         <div className="page">
            <span className="tags top-html">&lt;/html&gt;</span>
            <span className="tags top-tags">&lt;body&gt;</span>

            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                     idx={15}
                  />
               </h1>

               <p>
                  I'm <strong>Bhuwan Saretia</strong>, a passionate <strong>Software Developer</strong>, 
                  <strong> Full Stack Engineer</strong>, and <strong>Competitive Programmer</strong> 
                  pursuing my <strong>B.Tech in Electrical Engineering at NIT Durgapur</strong>.
                  <br /><br />
                  I enjoy building scalable web applications, working with 
                  <strong> React, Node.js, Python, and Cloud-native technologies</strong>, 
                  and solving real-world problems with automation and optimization.
                  <br /><br />
                  I’m well-organised, self-driven, and detail-oriented. Outside of coding, 
                  I enjoy exploring new tech, contributing to open source, and keeping up 
                  with the latest in AI and cloud innovations.
                  <br /><br />
                  Always open to collaboration and ambitious projects with positive, like-minded people.  
                  <Link to="/contact" className="reach">
                     Reach out to me!
                  </Link>
               </p>

               <div className="myCv">
                  <div className='rtext'>My Resume</div>
                  <div className='okay'>
                     <a 
                        href="https://drive.google.com/file/d/YOUR_RESUME_LINK/view?usp=sharing" 
                        target="__blank" 
                        rel="noreferrer"
                     >
                        CLICK HERE TO VIEW PDF
                     </a>
                  </div>
               </div>
            </div>

            <Outlet />
            <span className="tags bottom-tags">
               &lt;/body&gt;
               <br />
               <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
         </div>
      </div>
   )
}

export default About
