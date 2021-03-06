import React, { Component } from 'react';
import { bold } from 'ansi-colors';
export default class Portfolio extends Component{
    render() {
      return (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt src="images/portfolio/coffee.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>To_Do</h5>
                          <p>SPA in React</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt src="images/portfolio/console.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>E-commerce</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt src="images/portfolio/girl.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Back-Office for liveChat application</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt src="images/portfolio/origami.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ontology Automaton</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
            --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
              <div className="description-box">
                <h4>To_Do</h4>
                <p>From work to play, To-Do is the easiest way to get stuff done, every day.</p>
                <span className="categories"><i className="fa fa-tag" /><b>SPA, reactJS</b></span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
              <div className="description-box">
                <h4>E-commerce</h4>
                <p>An ecommerce app is an effective way to boost an online store's sales and attract more customers.</p>
                <span className="categories"><i className="fa fa-tag" /><b>ReactJs, ExpressJs, mongooseJs, nodeJs & MongoDb.</b></span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
              <div className="description-box">
                <h4>CMS</h4>
                <p>A <abbr title="Content management system">CMS</abbr> manages the creation and modification of digital content.</p>
                <span className="categories"><i className="fa fa-tag" /><b>ReactJs, ExpressJs, mongooseJs, nodeJs & MongoDb.</b></span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
              <div className="description-box">
                <h4>Recipe box</h4>
                <p>Recipe box app provides comprehensive way to how to Prepare a dish.</p>
                <span className="categories"><i className="fa fa-tag" /><b>SPA, reactJS</b></span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
              <div className="description-box">
                <h4>Farmer Boy</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
              <div className="description-box">
                <h4>Back-Office for liveChat Application</h4>
                <p> A portal for Live chat application which manages user queries, their resolution customer data, customer interaction, access business information.</p>
                <span className="categories"><i className="fa fa-tag" /><b>NEXT.JS, ReactJs, ExpressJs, MongooseJs, Material-UI, NodeJs, PHP & MySQL.</b></span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
              <div className="description-box">
                <h4>CRM</h4>
                <p> This web portal was designed to overcome manual efforts involved in Ontology generation process.</p>
                <span className="categories"><i className="fa fa-tag" /><b>NEXT.JS, ReactJs, ExpressJs, MongooseJs, Material-UI, NodeJs & MongoDb.</b></span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
              <div className="description-box">
                <h4>Retrocam</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
              </div>
              <div className="link-box">
                <a href="#">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
        </section>
      );
    }
  };