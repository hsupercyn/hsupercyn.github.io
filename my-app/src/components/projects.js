import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
              <section class="col-xs-4">
                <h2>Projects</h2>
              </section>
                <div class="row">
                  <div class="card col-sm-6 col-md-4">
                    <h3>Auto-Billing</h3>
                    <p>For my summer internship, I took responsibility over designing and implementing a
                      feature to the main customer portal that would allow clients to be automatically billed
                      for any charges that occured during the prior day. I used React.JS primarily to implement
                      the frontend and also used JavaScript with Stripe API to implement the backend. This
                      addition went-live and yields over $3,000 of revenue monthly.</p>
                  </div>
                  <div class="card col-sm-6 col-md-4">
                    <h3>CPU Design</h3>
                    <p>I designed a 2-cycle pipelined processor using Logisim, a visual RTL, that successfully implemented the core RISC-V instruction set.</p>
                  </div>
                  <div class="card col-sm-6 col-md-4">
                    <h3>Git-let</h3>
                    <p>I created a miniaturized version-control system using several Java classes to represent and serialize files and commits. </p>
                  </div>
                </div>
            </div>
        );
    } 
}

export default Projects;
