
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () =>{
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "A HUMAN(🙎🏽‍♂️)"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
      <Row className="aligh-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Tushar Ranjan Sahoo`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "MERN Full stack web developer", "blockchain developer", "Artificial Intelligence & Cloud Computing Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  
                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                <button onClick={() => console.log('connect')}>Let’s download CV <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
       
          <p>I am a third-year CSE student at Trident Academy of Technology with a passion for using technology to improve society. My expertise in MERN full-stack web development, AI, machine learning, deep learning, and cloud principles makes me well-positioned to create impactful solutions. With a dedication to staying up-to-date on the latest trends, I am committed to delivering effective and elegant solutions. Let's connect and explore how I can contribute to your organization's success!</p>
          </Col>
        </Row>
      
      
         <div id="loop">
                <h1><b>MERN Full stack web developer</b>& Cloud Computing Enthusiast <b><i>Artificial Intelligence </i></b>  Computer Science & Engineering </h1>
                <h1><b>MERN Full stack web developer</b>& Cloud Computing Enthusiast <b><i>Artificial Intelligence </i></b>  Computer Science & Engineering </h1>
                <h1><b>MERN Full stack web developer</b>& Cloud Computing Enthusiast <b><i>Artificial Intelligence </i></b>  Computer Science & Engineering </h1>
           </div>
      </Container>
    </section>
  )
}
