import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import './style.css';
import login from "../login/login.js"
import '../font.css';
import { Link } from 'react-router-dom';

function MyComponent() {
    const audioRef = React.useRef(null);
    function handleMouseOver() {
        audioRef.current.play();
    }
    function on_click_ware(){
        window.location.href='/warehouse';
    }
    function on_click_shop() {
        window.location.href = '/store';
    }
    function on_click_learn() {
        window.location.href = '/learn_more';
    }
    function on_click_product() {
        window.location.href = '/product';
    }
    return (
        <>
            <Container>
                <Row id='r1'>

                    <Col md={6} className="text-center" id="c1">
                        <h1 id="logo">ButterMeUp</h1>
                        <p>ButterMeUp is a cutting-edge dairy inventory management system designed to streamline and optimize the operations of dairy farmers and other stakeholders. Our software provides a centralized and automated way to track inventory, including the type of product, quantity, and expiration dates, and provides real-time data and reporting tools to help users make informed business decisions.</p>
                        <Row id='r2' className="d-flex justify-content-center align-items-center">
                            <Button className="button-main" id="b1" onClick={on_click_ware} >Warehouse<br></br>Login</Button>
                            <Button className="button-main" onClick={on_click_shop} >Shop<br></br>Login</Button>
                            <Button className="button-main" onClick={on_click_learn} >Learn<br></br> more</Button>
                        </Row>
                    </Col>
                    <Col md={6} id="c2">
                        <audio ref={audioRef} id="moo">
                            <source src={require('../MyComponent/assets/Moo.mp3')} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <img src={require('../MyComponent/assets/milk_bottle.png')} alt="Placeholder" onMouseOver={handleMouseOver} />
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default MyComponent;
