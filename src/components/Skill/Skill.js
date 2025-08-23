import { React, useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Skill.scss';
import { Outlet } from 'react-router-dom';

function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const contentRef = useRef(null);

  useEffect(() => {
    const myTags = [
      "JavaScript", "TypeScript", "Python", "C++", "C",
      "MySQL", "HTML5", "CSS3", "React.js", "Next.js",
      "Node.js", "Express.js", "RESTful APIs", "MongoDB",
      "PostgreSQL", "Machine Learning", "Pandas", "NumPy",
      "Scikit-learn", "Apache Spark", "Power BI", "Tableau",
      "AWS", "Azure", "Docker", "Kubernetes",
    ];

    const tagCloud = TagCloud(".content", myTags, {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      if (tagCloud && typeof tagCloud.destroy === "function") {
        tagCloud.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="container skill-page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s", " ", "&"]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={22}
            />
          </h1>

          <div className="content-container">
            <div className="skills-section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-category">Languages:</span>
                  <span className="skill-list">C++, Python, JavaScript, TypeScript, C, SQL, Shell Scripting</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">Web Development:</span>
                  <span className="skill-list">React.js, Next.js, Node.js, Express.js, RESTful APIs, MongoDB, PostgreSQL, HTML5, CSS3</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">Machine Learning & AI:</span>
                  <span className="skill-list">Supervised & Unsupervised Learning, Deep Learning, NLP, Computer Vision, Generative AI & LLMs, Model Deployment</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">Data Analytics & Visualization:</span>
                  <span className="skill-list">Pandas, NumPy, Scikit-learn, Power BI, Tableau, Excel, EDA, Apache Spark</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">Cloud and DevOps:</span>
                  <span className="skill-list">AWS (EC2, S3, SageMaker), Azure, Docker, Kubernetes, CI/CD (GitHub Actions), MLflow</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">Tools & Testing:</span>
                  <span className="skill-list">Git, GitHub, Linux, Jupyter Notebook, VS Code, Postman, Unit Testing, Agile/Scrum</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">CS Concepts:</span>
                  <span className="skill-list">Data Structures & Algorithms, OOPS, OS, DBMS, Computer Networks, System Design</span>
                </div>
                <div className="skill-item">
                  <span className="skill-category">Soft Skills:</span>
                  <span className="skill-list">Problem-Solving, Analytical Thinking, Mentorship, Effective team communication, Bias for action</span>
                </div>
              </div>
            </div>

            <div className="experience-section">
              <h2 className="section-title">Experience</h2>
              <div className="experience-grid">
                <div className="experience-item">
                  <a
                    href="https://www.ciena.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="company-name"
                  >
                    Ciena
                  </a>
                  <div className="position-duration">
                    <span className="position">Software Engineering Intern</span>
                    <span className="duration">(May 2025 - Aug 2025)</span>
                  </div>
                </div>
                <div className="experience-item">
                  <a
                    href="https://www.linkedin.com/company/girlscriptsoc/"
                    target="_blank"
                    rel="noreferrer"
                    className="company-name"
                  >
                    GirlScript Foundation
                  </a>
                  <div className="position-duration">
                    <span className="position">Project Administrator</span>
                    <span className="duration">(Oct 2024 - Nov 2024)</span>
                  </div>
                </div>
              </div>
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

      <div ref={contentRef} className="content"></div>
    </>
  );
}

export default Skill;
