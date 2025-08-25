import React from "react";
import { useEffect, useState, useRef } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Certificates.scss";
import { Outlet } from "react-router-dom";

import aws from "../../assets/certificates/aws.png";
import adobe from "../../assets/certificates/adobe.png";
import forage from "../../assets/certificates/forage.png";
import neo4j from "../../assets/certificates/neo4j.png";
import freecodecamp from "../../assets/certificates/freecodecamp.png";
import neo4jM from "../../assets/certificates/neo4jM.png";
import mHackerCup from "../../assets/certificates/mHackerCup.png";
import walmart from "../../assets/certificates/walmart.png";
import badgr from "../../assets/certificates/badgr.png";
import cloudSkillsBoost from "../../assets/certificates/cloudSkillsBoost.png";
import amazonHackon4 from "../../assets/certificates/amazonHackon4.png";
import hackerrank1 from "../../assets/certificates/hackerrank1.png";
import hackerrank2 from "../../assets/certificates/hackerrank2.png";
import hackerrank3 from "../../assets/certificates/hackerrank3.png";
import internshala from "../../assets/certificates/internshala.png";
import campusAmbassador from "../../assets/certificates/campusAmbassador.png";
import projectadmin from "../../assets/certificates/projectadmin.png";
import contributor from "../../assets/certificates/contributor.png";
import mentor from "../../assets/certificates/mentor.png";
import accenture2023 from "../../assets/certificates/accenture2023.png";
import Chatgpt from "../../assets/certificates/Chatgpt.png";
import Cplusplus from "../../assets/certificates/Cplusplus.png";

function Project() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3300);
  }, []);

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
                  "C",
                  "e",
                  "r",
                  "t",
                  "i",
                  "f",
                  "i",
                  "c",
                  "a",
                  "t",
                  "e",
                  "s",
                ]}
                idx={15}
              />
            </h1>
            <p>
              Alongside my academic journey, I have earned multiple
              industry-recognized certificates. These certifications reflect my
              continuous learning and commitment to building strong technical
              foundations.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/bhuwan-saretia/details/certifications/"
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
                    href="https://www.credly.com/badges/687763ee-93d2-418d-9234-ed2853f823e2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={aws} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://drive.google.com/file/d/1A-rnwh_ZfbVpHU1QjIKh0U1IeuSpBg8S/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={adobe} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://graphacademy.neo4j.com/c/2b46210e-b948-4fdd-99cf-73979fa3583a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={neo4j} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://www.freecodecamp.org/certification/BhuwanSKumar/responsive-web-design"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={freecodecamp} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://files.codingninjas.in/certi_image509633111690a88cb28578465a4d0dcdd23cc7.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Chatgpt} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://drive.google.com/file/d/1F31CGpoOR37XLlOztyOLWk24pOHzRHzv/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mHackerCup} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://drive.google.com/file/d/1amqtAqLNw-703ew6TpbWeNwwOv_GI9rN/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mentor} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://drive.google.com/file/d/10edwkBh3if6gDcupjhjw8Gpean4PU39-/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={walmart} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://badgr.com/public/assertions/90Ii88jIRi6Fk7BmjoSd2Q?identity__email=engbhuwansd%40gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={badgr} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://www.hackerrank.com/certificates/43c644e7a67b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hackerrank3} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://files.codingninjas.in/certi_image4822580950ab7c7b5cbad021afa1f4ad3e0b84.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Cplusplus} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://www.cloudskillsboost.google/public_profiles/817e8207-4a21-439a-afa7-864064b0fa5d/badges/9793516?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={cloudSkillsBoost} alt="okimage" />
                  </a>
                </div>

                 <div className="magic-wall_item">
                  <a
                    href="https://www.hackerrank.com/certificates/iframe/d6bde98fe960"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hackerrank1} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_Msi482QM3TsSodhna_1752221135302_completion_certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={forage} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://graphacademy.neo4j.com/c/ea3989e3-3177-44f5-bf4f-526d2e4189dc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={neo4jM} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://unstop.com/certificate-preview/375994ed-db06-4f71-8efb-7dd82d972481?utm_campaign="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={amazonHackon4} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href=" https://drive.google.com/file/d/1JzFzfSAE3LQEDE664gypKr7CHh3WqmYT/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={projectadmin} alt="okimage" />
                  </a>
                </div>

               

                <div className="magic-wall_item">
                  <a
                    href="https://www.hackerrank.com/certificates/iframe/b2c026e20a8b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hackerrank2} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href=" https://drive.google.com/file/d/17n3WSPgukTHptfCEsGLbZL_qlx6yNoQ2/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={contributor} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href=" https://drive.google.com/file/d/1mP6y6l3Glk9LwOxtj4Fuzt64YuyQrj8a/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={internshala} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href="https://drive.google.com/file/d/1DxQ9jwpbkMP6S-JcpXcvObsn5SihymBa/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={campusAmbassador} alt="okimage" />
                  </a>
                </div>

                <div className="magic-wall_item">
                  <a
                    href=" https://unstop.com/certificate-preview/fc04fb7a-c83d-4cbc-a2bf-4a505db64b05?utm_campaign="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={accenture2023} alt="okimage" />
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

export default Project;
