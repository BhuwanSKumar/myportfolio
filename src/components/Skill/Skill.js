import React from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Outlet } from "react-router-dom";

function Skill() {
  return (
    <>
      <div className="container skill-page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass="text-animate"
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass="text-animate"
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={22}
            />
          </h1>

          {/* SKILLS */}
          <div className="skills-section">
            <h2 className="skill-heading">Languages</h2>
            <p>C++, Python, JavaScript, TypeScript, C, SQL, Shell Scripting</p>

            <h2 className="skill-heading">Web Development</h2>
            <p>
              React.js, Next.js, Node.js, Express.js, RESTful APIs, MongoDB,
              PostgreSQL, HTML5, CSS3
            </p>

            <h2 className="skill-heading">Machine Learning & AI</h2>
            <p>
              Supervised & Unsupervised Learning, Deep Learning, NLP, Computer
              Vision, Generative AI & LLMs, Model Deployment
            </p>

            <h2 className="skill-heading">Data Analytics & Visualization</h2>
            <p>
              Pandas, NumPy, Scikit-learn, Power BI, Tableau, Excel, EDA, Apache
              Spark
            </p>

            <h2 className="skill-heading">Cloud & DevOps</h2>
            <p>
              AWS (EC2, S3, SageMaker), Azure, Docker, Kubernetes, CI/CD (GitHub
              Actions), MLflow
            </p>

            <h2 className="skill-heading">Tools & Testing</h2>
            <p>
              Git, GitHub, Linux, Jupyter Notebook, VS Code, Postman, Unit
              Testing, Agile/Scrum
            </p>

            <h2 className="skill-heading">CS Concepts</h2>
            <p>
              Data Structures & Algorithms, OOPS, OS, DBMS, Computer Networks,
              System Design
            </p>

            <h2 className="skill-heading">Soft Skills</h2>
            <p>
              Problem-Solving, Analytical Thinking, Mentorship, Effective Team
              Communication, Bias for Action
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="experience-section">
            <h2 className="skill-heading">Experience</h2>
            <div className="exp-flex">
              <a
                href="https://www.ciena.com/"
                target="_blank"
                rel="noreferrer"
                className="work-exp"
              >
                Ciena
              </a>
              &nbsp;- Software Engineering Intern (May 2025 - Aug 2025)
            </div>
            <div className="gs-found">
              <a
                href="https://www.linkedin.com/company/girlscriptsoc/"
                target="_blank"
                rel="noreferrer"
                className="work-exp"
              >
                GirlScript Foundation
              </a>
              &nbsp;- Project Administrator (Oct 2024 - Nov 2024)
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

      <div className="content"></div>
    </>
  );
}

export default Skill;
