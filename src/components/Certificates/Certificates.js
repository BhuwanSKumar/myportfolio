import React from 'react'
import { useEffect, useState, useRef } from "react";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Certificates.scss'
import { Outlet } from 'react-router-dom'

import hulu4 from '../../assets/project/hulu-4.png'
import spFF from '../../assets/project/spotify-FF.png'
import pfC from '../../assets/project/ca.png'
import bwe from '../../assets/project/bwe.png'
import refrain from "../../assets/project/refrain.png";
import mediSync from "../../assets/project/mediSync.png";
import groupPat from "../../assets/project/groupPat.png";
import markMyFace from "../../assets/project/markMyFace.png";

function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3300)
  }, [])

const scrollableRef = useRef(null);
const [isScrolling, setIsScrolling] = useState(true);

useEffect(() => {
  const scrollableElement = scrollableRef.current;

  const scrollContent = () => {
    if (isScrolling) {
      if (scrollableElement.scrollTop >= scrollableElement.scrollHeight / 2) {
        scrollableElement.scrollTop = 0;
      } else {
        scrollableElement.scrollTop += 1;
      }
    }
  };

  const intervalId = setInterval(scrollContent, 20);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  scrollableElement.addEventListener("mouseenter", handleMouseEnter);
  scrollableElement.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    clearInterval(intervalId);
    scrollableElement.removeEventListener("mouseenter", handleMouseEnter);
    scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
  };
}, [isScrolling]);


  return (
    <>
      <div className="container project-page">
        <div className="page">
          <span className="tags top-html">&lt;/html&gt;</span>
          <span className="tags top-tags">&lt;body&gt;</span>

          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  "M",
                  "y",
                  " ",
                  "P",
                  "r",
                  "o",
                  "j",
                  "e",
                  "c",
                  "t",
                  "s",
                ]}
                idx={15}
              />
            </h1>
            <p>
              Being an undergraduate majoring in Electrical Engineering, I have actively explored software development and worked on multiple projects in web applications, frontend, and backend. This is a fresh selection of my latest projects that reflect my passion for building impactful software solutions!
              <br />
              <br />
              <a
                href="https://github.com/BhuwanSKumar"
                target="_blank"
                rel="noreferrer"
                className="qView"
              >
                Wanna take a quick view?
              </a>
            </p>
          </div>
          <div
            id="home-magicwall"
            className="fake-magicwall auto-scroll"
            ref={scrollableRef}
          >
            {[...Array(50)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="magic-wall_item">
                  <a
                    href="https://amazon-greenovate.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hulu4} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://github.com/BhuwanSKumar/contact_management"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={markMyFace} alt="okimage" />
                  </a>
                </div>

                 <div className="magic-wall_item">
                  <a
                    href="https://github.com/BhuwanSKumar/Sanjeevani.ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={pfC} alt="okimage" />
                  </a>
                </div>


                <div className="magic-wall_item">
                  <a
                    href="https://sql-runner-bw8jkf6k6-bhuwanskumars-projects.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={spFF} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://github.com/BhuwanSKumar/remedy.ai-web"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={bwe} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://refrain-addiction.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={refrain} alt="okimage" />
                  </a>
                </div>{" "}
                <div className="magic-wall_item">
                  <a
                    href="https://swastikweb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={groupPat} alt="okimage" />
                  </a>
                </div>
               
                
                <div className="magic-wall_item">
                  <a
                    href="https://github.com/BhuwanSKumar/smart-issue-management-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mediSync} alt="okimage" />
                  </a>
                </div>
                
                
                
              </React.Fragment>
            ))}
          </div>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Project