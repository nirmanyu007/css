import React from 'react'
import '../css/Signup.css'
import { Container, Row, Col } from "react-bootstrap";

export default function Signup() {
  return (
    <div className="desktop">
      <div>
        <Container fluid>
          <Row>
            <Col className="position" xs md lg="5">
              <div className="done">
                <h2>Who we are?</h2>
                <p className="max">
                  We are technology consulting company. We are experienced
                  professionals having more then 17 years of industry experience
                  and SMES to provide wide range of project and product
                  development services for industries and corporates. Our
                  variety of top industry services includes Project, Product,
                  web and APP development. We implement Agile/Scrum practices
                  across all industries. Our SMES and industry leaders conducts
                  cutting edge technology trainings for professional across the
                  industries.
                </p>
              </div>
            </Col>
            <Col xs md lg="2">
              <div className="g"></div>
            </Col>
            <Col xs md lg="5">
              <div className="center">
                <div className="head">
                  <h2>Contact us</h2>
                </div>

                <div className="box">
                  <div className="name">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="email">
                    <input type="email" placeholder="Email" size={47} />
                  </div>
                  <div className="email">
                    <input type="number" placeholder="Phone Number" size="40" />
                  </div>
                  <div className="form">
                    <input type="file" placeholder="resume" />
                    <input type="file" placeholder='resume' />
                  </div>
                  <div className='area'>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                  </div>
                  <div className="button2">
                    <button className='button'>Submit</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
