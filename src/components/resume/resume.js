import React, { Component } from 'react';
export default class Resume extends Component{
    render() {
      const resumeData = this.props.resumeData;
      return (
  
        <section id="resume">
          {/* Education
        ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.college}</h3>
                  <p className="info">Graduate in Computer science<span>•</span> <em className="date">June 2016</em></p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
        ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>G2</h3>
                  <p className="info">Sr Software Engineer<span>•</span> <em className="date">Feb 2026 - Present</em></p>
                  <p>Gurugram, Haryana, India · Hybrid</p>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Gartner</h3>
                  <p className="info">Sr Software Engineer<span>•</span> <em className="date">Apr 2022 - Feb 2026</em></p>
                  <ul>
                    <li>Optimized frontend performance &amp; SEO, achieving a <b>40% reduction in page load time</b> and increasing user engagement by 15%.</li>
                    <li>Skills: <b>Elastic Stack (ELK), CI/CD, ReactJs, Node.js, TypeScript, AWS Lambda</b>.</li>
                  </ul>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Gartner</h3>
                  <p className="info">Software Engineer<span>•</span> <em className="date">Jul 2020 - Apr 2022</em></p>
                  <ul>
                    <li>Implemented robust unit and integration testing strategies, increasing coverage from <b>65% to 95%</b>.</li>
                    <li>Enhanced application monitoring, error tracking and logging using <b>New Relic, DataDog, Jenkins, Elastic Stack (ELK)</b>.</li>
                  </ul>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Xebia</h3>
                  <p className="info">Technical Consultant<span>•</span> <em className="date">Jan 2020 - Jun 2020</em></p>
                  <ul>
                    <li>Developed an interactive PCB cost calculator with <b>React.js</b> enabling image operations — zoom, crop, selection and drawing.</li>
                    <li>Skills: <b>React.js, Nginx, Redux</b>.</li>
                  </ul>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Sopra Steria</h3>
                  <p className="info">Senior Software Engineer<span>•</span> <em className="date">Mar 2019 - Dec 2019</em></p>
                  <ul>
                    <li>Developed web applications using <b>React, Node.js, and MongoDB</b> delivering features to 100K+ users.</li>
                    <li>Migrated legacy codebases to modern tech stack using <b>Next.js, Express.js and MongoDB</b>.</li>
                  </ul>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Tata Consultancy Services</h3>
                  <p className="info">Asst. System Engineer<span>•</span> <em className="date">Aug 2016 - Mar 2019</em></p>
                  <ul>
                    <li>Worked in agile process to meet client delivery expectations, gaining skills in <b>JavaScript, CSS, databases and React.js</b>.</li>
                  </ul>
                </div>
              </div>
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p><b>FRONT-END: </b>ReactJs, Next.Js, Material-UI, Redux, Webpack, JavaScript, babel, Flex</p>
              <p><b>BACK-END: </b>NodeJs, Express.Js, Mongoose, Elastic Search</p>
              <p><b>DATABASE: </b>MongoDb, OracleDB, MySQL</p>
              <p><b>Others: </b>VMs, Docker, Git  </p>            
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand ReactJs" /><em>ReactJs</em></li>
                  <li><span className="bar-expand NodeJs" /><em>NodeJs</em></li>
                  <li><span className="bar-expand JavaScript" /><em>JavaScript</em></li>
                  <li><span className="bar-expand css html" /><em>CSS & HTML5</em></li>
                  <li><span className="bar-expand Database" /><em>Database</em></li>
                  <li><span className="bar-expand deployment" /><em>Deployment</em></li>
                </ul>
              </div>
            </div> 
          </div>
        </section>
      );
    }
  };