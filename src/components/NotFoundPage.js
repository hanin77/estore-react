import React, {Component, Fragement} from 'react';
import {Button, Card,Col, Row, Container} from 'react-bootstrap';
import NavBar from './NavBar';

export default class NotFoundPage extends Component {

    handleclick= () =>{
        console.log(this.props.history);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Container className="my-5">
                    <Row>
                        <Col>
                            <Card className="text-center mx-auto" style={{ width: '18rem' }}>
                                <Card.Img src='images\404.jpg'></Card.Img>
                                <Card.Body>
                                    <Card.Title>Error</Card.Title>
                                    <Card.Text>
                                        Page not found
                                    </Card.Text>
                                    <Button variant="info" onClick={this.handleclick}>GO BACK HOME</Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

