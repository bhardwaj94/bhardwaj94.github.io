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
                  <h3>Sopra Steria</h3>
                  <p className="info">Full stack developer<span>•</span> <em className="date">March 2019 - Present</em></p>
                  <ul>
                    <li>Web design, development and deployment using modern web technologies.</li>
                    <li>Have leveraged <b>NEXT.JS</b> for SSR and Lazy-loading </li>
                    <li>App containerization using <b>Docker</b> and deployment on VMs</li>
                    <li>Involed in preparing <b>POCs</b> and <b>MVPs</b> for various client.</li>
                  </ul>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>TCS pvt. ltd.</h3>
                  <p className="info">Full stack developer<span>•</span> <em className="date">Aug 2016 - Feb 2019</em></p>
                  <ul>
                    <li>2+ year of professional experience in <b>ReactJs, Node.js, Redux, Express.js,
                       MongoDB, NPM, GIT, Socket.io, JavaScript, ES6, MVC, JSON,Template engines</b>.</li>
                    <li>Creating <b>RESTful</b> services with Node.js for web Application.</li>
                    <li>Have taken use of client side rendering using <b>ReactJs</b>.</li>
                    <li>Involved in daily <b>SCRUM</b> meetings to keep track of the project status.</li>
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
              <p><b>FRONT-END: </b>ReactJs, Next.Js, Material-UI, Redux, Flux, JavaScript, babel, Flex, HTML, CSS</p>
              <p><b>BACK-END: </b>NodeJs, Express.Js, Mongoose,</p>
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