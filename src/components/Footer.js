import React, { Component } from 'react';
import {Form, Button, Row, Col, Container, InputGroup} from 'react-bootstrap';
export default class Footer extends Component {
    onSubmitForm =(e)=> {
        e.preventDefault();
    }
    render() {
        const d = new Date();
        return (
            <footer className='bg-dark'>
                <Container >
                    <p className='text-light mt-1'>New to our store?</p>
                    <p className='text-light'>Subscribe to our newsletter for updates!</p>
                    <Form  onSubmit = {this.onSubmitForm}>
                        <Row className='mb-4'>
                            <Col xs={12} md={9}>
                            <InputGroup className='mb-1'>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-envelope'></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control  aria-label="Username" aria-describedby="basic-addon1" style={{border: 'none'}} type="email" required placeholder="Enter your email addres" />
                            </InputGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <Button className='mb-1'  block variant="outline-warning" type="submit">Subscribe</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row className='justify-content-center'>
                            <p className='text-light font-weight-bold'>Store Corporation © {d.getFullYear()}</p>
                    </Row>                    
                </Container>
            </footer>
            
        )
    }
}
