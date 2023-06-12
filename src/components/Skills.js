
import React from 'react'
import { Container} from "react-bootstrap";
import reactlogo from '../assets/img/reactjs.png';
import nodelogo from '../assets/img/Node Js.avif';
import mongologo from '../assets/img/mongo2.png';
import expresslogo from '../assets/img/expressjs2.png';
import androidlogo from '../assets/img/Android.svg';
import pythonlogo from '../assets/img/python.png';
import javalogo from '../assets/img/java1.png';
import jslogo from '../assets/img/js.png';
import clogo from '../assets/img/c++.png';
import azurlogo from '../assets/img/azureml.jpeg';
import mllogo from '../assets/img/ml.avif';
import blockchainlogo from '../assets/img/blockchain.png';





export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
     
        <h1>Skills</h1>
        <div className="skill-containerr">
        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor: 'brown' }}><img className="skill-card__icon" src={javalogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">java</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>OOps concept </li>
            <li>Collection framework.</li>
            <li>JDBC</li>
            <li>Spring </li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor: 'lightblue' }}><img className="skill-card__icon" src={pythonlogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">python</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>Map Function</li>
            <li>itertools</li>
            <li>Exception Handling</li>
            <li>Collections</li>
          </ul>
        </section>
        </div>

        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor: '#f1f1f1' }}><img className="skill-card__icon" src={clogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">c++</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>OOPs concept</li>
            <li>Translation units and linkage</li>
            <li>Lvalues and rvalues</li>
            <li>Program termination</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header"style={{ backgroundColor: 'yellow' }}><img className="skill-card__icon" src={jslogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">javascript</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>DOM</li>
            <li>Cookies</li>
            <li>Handling</li>
            <li>Validation</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{backgroundColor:'#0c114d'}}><img className="skill-card__icon" src={mongologo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">mongo db</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>Shell</li>
            <li>Compass</li>
            <li>Cloud</li>
            <li> Commands</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{backgroundColor:'#02020d'}}><img className="skill-card__icon" src={expresslogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">express.js</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>Routing</li>
            <li>Middleware</li>
            <li>template engine</li>
            <li>Cookies Management</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor: 'blue' }}><img className="skill-card__icon" src={reactlogo} alt="react Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">react.js</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>reactjs</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor: 'green' }}><img className="skill-card__icon" src={nodelogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">node.js</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>HTML5</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
        </div>
 
        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor: '#f1f1f2' }} ><img className="skill-card__icon" src={azurlogo}  alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">azure</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>HTML5 & CSS</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
        </div>
    
        <div className="skill-card">
        <header className="skill-card__header" style={{ backgroundColor:'#122918'}}><img className="skill-card__icon" src={androidlogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">android</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>HTML5</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{backgroundColor:'#09595c'}}><img className="skill-card__icon" src={mllogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
          <h2 className="skill-card__title">machine learning</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>HTML5</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
        </div>
        <div className="skill-card">
        <header className="skill-card__header" style={{backgroundColor:'#56095c'}}><img className="skill-card__icon" src={blockchainlogo} alt="HTML5 Logo" /></header>
        <section className="skill-card__body">
        <h2 className="skill-card__title" >blockchain</h2><span className="skill-card__duration">Intermediate</span>
          <ul className="skill-card__knowledge">
            <li>HTML5</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
        </div>

        
        </div>
       
       </Container>
    </section>
  )
}

