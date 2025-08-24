import { React, useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skill.scss";
import { Outlet } from "react-router-dom";

function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const contentRef = useRef(null);

  useEffect(() => {
    const myTags = [
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "C",
      "MySQL",
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "PostgreSQL",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Apache Spark",
      "Power BI",
      "Tableau",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
    ];

    var tagCloud = TagCloud(".content", myTags, {
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
          <p>
            <br />
            <br />
            <div className="skill-category">
              <span className="work-exp">Languages: </span>C++, Python, JavaScript, TypeScript, C, SQL, Shell Scripting
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">Web Development: </span>React.js, Next.js, Node.js, Express.js, RESTful APIs, MongoDB, PostgreSQL, HTML5, CSS3
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">Machine Learning & AI: </span>Supervised & Unsupervised Learning, Deep Learning, NLP, Computer Vision, Generative AI & LLMs, Model Deployment
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">Data Analytics & Visualization: </span>Pandas, NumPy, Scikit-learn, Power BI, Tableau, Excel, EDA, Apache Spark
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">Cloud and DevOps: </span>AWS (EC2, S3, SageMaker), Azure, Docker, Kubernetes, CI/CD (GitHub Actions), MLflow
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">Tools & Testing: </span>Git, GitHub, Linux, Jupyter Notebook, VS Code, Postman, Unit Testing, Agile/Scrum
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">CS Concepts: </span>Data Structures & Algorithms, OOPS, OS, DBMS, Computer Networks, System Design
            </div>
            <br />
            <div className="skill-category">
              <span className="work-exp">Soft Skills: </span>Problem-Solving, Analytical Thinking, Mentorship, Effective team communication, Bias for action
            </div>
            <br />
            <br />

            <div className="exp-flex">
              <a
                href="https://www.ciena.com/"
                target="_blank"
                rel="noreferrer"
                className="work-exp"
              >
                Ciena{" "}
              </a>
              {/* &nbsp; */}
              {/* <div className="vertical-line"></div> */}
              - Software Engineering Intern (May 2025 - Aug 2025)
            </div>
            <div className="gs-found">
              <a
                href="https://www.linkedin.com/company/girlscriptsoc/"
                target="_blank"
                rel="noreferrer"
                className="work-exp "
              >
                GirlScript Foundation{" "}
              </a>
              - Project Administrator (Oct 2024 - Nov 2024)
            </div>
          </p>
        </div>
        <Outlet />
        <span className="tags bottom-tags">
          <br />
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