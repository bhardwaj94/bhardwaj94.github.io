import React, { Component } from 'react';
export default class Resume extends Component{
    render() {
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
                  <h3>IMS engg. college</h3>
                  <p className="info">Graduate in Computer science<span>•</span> <em className="date">June 2016</em></p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>U.E.A</h3>
                  <p className="info">SSC in mathematics<span>•</span> <em className="date">June 2011</em></p>
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
                  <h3>TCS pvt. ltd.</h3>
                  <p className="info">Full stack developer<span>•</span> <em className="date">Nov 2016 - Present</em></p>
                  <ul>
                    <li>1.5+ year of professional experience in <b>ReactJs, Node.js, Redux, Express.js,
                       MongoDB, NPM, GIT, Socket.io, JavaScript, ES6, MVC, JSON</b>.</li>
                    <li>Creating <b>RESTful</b> services with Node.js for web Application</li>
                    <li>Have take use of client side renedering using <b>ReactJs</b>.</li>
                    <li>Involved in daily <b>SCRUM</b> meetings to keep track of the project status</li>
                  </ul>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>TCS pvt. ltd.</h3>
                  <p className="info">Node developer<span>•</span> <em className="date">Aug 2016 - Nov 2016</em></p>
                  <ul>
                    <li>Good exposure in <b>NodeJs</b> and <b>ExpressJs</b>.</li>
                    <li>Developed <b>REST</b> APIs for web applications.</li>
                    <li>Have good understanding of server side renedering using Template engines i.e 
                      <b> Pug, Jade, EJS.</b></li>
                  </ul>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand ReactJs" /><em>ReactJs</em></li>
                  <li><span className="bar-expand NodeJs" /><em>NodeJs</em></li>
                  <li><span className="bar-expand JavaScript" /><em>JavaScript</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand Database" /><em>Database</em></li>
                </ul>
              </div>
            </div> 
          </div>
        </section>
      );
    }
  };