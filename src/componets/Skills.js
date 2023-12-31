import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/planeta1.svg";
import meter2 from "../assets/img/planeta2.svg";
import meter3 from "../assets/img/planeta3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section ClassName="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                            Skills
                            </h2>
                            <p>These are some of my programming skills, I am willing to continue learning many more</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image"/>
                                    <h5> PHP developer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image"/>
                                    <h5>javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image"/>
                                    <h5>illustrator</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image"/>
                                    <h5>Android Studio</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}