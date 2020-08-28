import React, { Component } from 'react';
import {Carousel, Button, Nav, Image,Row,Col} from 'react-bootstrap';
export default class HomeSlider extends Component {
    state={
        index: 1
    };
    handleSelect = (selectedIndex, e)=> {
        this.setState(()=> ({index: selectedIndex}) );
    };
    render() {
        return (
            <Row>       
                <Col className='self-justify-center' xs={12} md={8}>
                    <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                        <Carousel.Item>
                            <Image
                            fluid
                            src="images\stock-photo-computer-devices-mobile-phone-laptop-printer-camera-and-tablet-pc.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 className="text-dark">First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                            fluid
                            src="images\stock-photo-collection-of-consumer-electronics-flying-in-the-air.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3 className="text-dark">Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                            fluid
                            src="images\stock-photo-computer-devices-mobile-phone-laptop-printer-camera-and-tablet-pc.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3 className="text-dark">Third slide label</h3>
                            <p >
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} md={4}>
                    <Row className='mb-2'>
                        <Image fluid src="images\delivery-man-delivering-a-package.jpg" />
                        
                    </Row>
                    <Row>
                        <Image fluid src="images\contact-us-customer-support.jpg" />
                    </Row>
                    
                </Col>
            </Row>
                   );
    }
}
