import React from 'react';
import { Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

export const Experience = () => {


  return (
    <section className="experience" id="experience" style={{ backgroundColor: "black", height:"100vh",
    width:"100vw" , top: "20px"}}>
      <Container>
        <h4>Experience</h4>
        <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i class="fa fa-briefcase"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                     
                    </div>
                </div>
            </div>
        
      </Container>
    </section>
  );
};

export default Experience;
