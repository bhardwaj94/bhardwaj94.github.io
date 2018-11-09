import React, { Component } from 'react';
export default class About extends Component{
    render() {
      return (
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt=""/>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I’ve always sought out opportunities and challenges 
                that are meaningful to me and took best out of them. I use my 
                experience to be more 
               than just a coder, connecting business requirements with modern 
               technology.<br />

              I have 2+ years of development experience building fullstack 
              products from scratch, developing and integrating APIs, working with a
              variety of databases.

              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Bhardwaj Chauhdary</span><br />
                    <span>(+91)-9082012401</span><br />
                    <span>bhardwaj.info2cs@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> 
            </div> 
          </div>
        </section>
      );
    }
  };