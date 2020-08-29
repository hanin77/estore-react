import React, { Component } from 'react';
import {Container, Tabs, Tab, Jumbotron, InputGroup, Form, Button, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { tryToLogin } from '../actions/authentication';
import { getCustomerCart } from '../actions/cart';
class Login extends Component {
    
    
    handleRegister = (e)=>{
        e.preventDefault();
    }

    handleLogin = (e)=>{
        e.preventDefault();
        !this.props.customer.loggedIn?this.props.tryToLogin(event.target.usermail.value, event.target.userpsw.value).then(()=>{
            console.log('executed ok');   
            this.props.getCustomerCart(this.props.customer.id);
            this.props.history.push("/");
        }).catch(error=>console.log("hhhhhhhhhhhh")):null;
        
            
    }

    render() {
        return (
            <Container className='mt-2'>
                <Container className="d-none d-md-inline-block">
                    <Row >
                        <Col md={5}>
                            
                            <Jumbotron className='bg-dark' fluid>
                                    <h5 className='text-center text-light'>RETURNING CUSTOMER</h5>
                                    <Form onSubmit={this.handleLogin} className='text-center'>
                                        <InputGroup className='p-2'>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text><i className='fa fa-envelope'></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control  name='usermail' style={{border: 'none'}} type="email" required placeholder="Enter your email addres" />
                                        </InputGroup>
                                        <InputGroup className='p-2'>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text><i className='fa fa-key'></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control  name='userpsw' style={{border: 'none'}} type="password" required placeholder="Enter your password" />
                                        </InputGroup>
                                        <Button variant="info" type="submit">Sign in</Button>
                                    </Form>
                                    
                            </Jumbotron>               
                        </Col>             
                
                        <Col md={7}>

                            <Jumbotron className='bg-dark' fluid>
                                <h5 className='text-center text-light'>CREATE AN ACCOUNT</h5>
                                <p className='text- text-light p-2'>Creating an account with us is quick and easy, and will allow you to simply access your details when you return to the site. You can add multiple delivery addresses, track your order and much more.</p>
                                <Form onSubmit={this.handleRegister} className='text-center'>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className='fa fa-user'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control name='username' aria-label="Username" aria-describedby="basic-addon1" style={{border: 'none'}} type="text" required placeholder="Enter your full name" />
                                    </InputGroup>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text><i className='fa fa-envelope'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control  name='usermail' style={{border: 'none'}} type="email" required placeholder="Enter your email addres" />
                                    </InputGroup>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text><i className='fa fa-key'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control  name='userpsw' style={{border: 'none'}} type="password" required placeholder="Enter your password" />
                                        <Form.Text id="passwordHelpBlock" muted>
                                            Your password must be 8-20 characters long, contain letters and numbers, and
                                            must not contain spaces, special characters, or emoji.
                                        </Form.Text>
                                    </InputGroup>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text><i className='fa fa-phone'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control  name='usertel' style={{border: 'none'}} type="tel" required placeholder="Enter your phone number" />
                                    </InputGroup>
                                    <Button className='text-center' variant="warning" type="submit">
                                        Register
                                    </Button>
                                </Form>
                                
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-md-none">
                    <Tabs defaultActiveKey="sign in" id="uncontrolled-tab-example">
                        <Tab eventKey="sign in" title="Sign in">
                            <Jumbotron className='bg-dark' fluid>
                                    <h5 className='text-center text-light'>RETURNING CUSTOMER</h5>
                                    <Form onSubmit={this.handleLogin} className='text-center'>
                                        <InputGroup className='p-2'>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text><i className='fa fa-envelope'></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control  name='usermail' style={{border: 'none'}} type="email" required placeholder="Enter your email addres" />
                                        </InputGroup>
                                        <InputGroup className='p-2'>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text><i className='fa fa-key'></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control  name='userpsw' style={{border: 'none'}} type="password" required placeholder="Enter your password" />
                                        </InputGroup>
                                        <Button variant="info" type="submit">Sign in</Button>
                                    </Form>
                                    
                            </Jumbotron>               
                        
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <Jumbotron className='bg-dark' fluid>
                                <h5 className='text-center text-light'>CREATE AN ACCOUNT</h5>
                                <p className='text-justify text-light p-2'>Creating an account with us is quick and easy, and will allow you to simply access your details when you return to the site. You can add multiple delivery addresses, track your order and much more.</p>
                                <Form onSubmit={this.handleRegister} className='text-center'>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className='fa fa-user'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control name='username' aria-label="Username" aria-describedby="basic-addon1" style={{border: 'none'}} type="text" required placeholder="Enter your full name" />
                                    </InputGroup>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text><i className='fa fa-envelope'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control  name='usermail' style={{border: 'none'}} type="email" required placeholder="Enter your email addres" />
                                    </InputGroup>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text><i className='fa fa-key'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control  name='userpsw' style={{border: 'none'}} type="password" required placeholder="Enter your password" />
                                        <Form.Text id="passwordHelpBlock" muted>
                                            Your password must be 8-20 characters long, contain letters and numbers, and
                                            must not contain spaces, special characters, or emoji.
                                        </Form.Text>
                                    </InputGroup>
                                    <InputGroup className='p-2'>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text><i className='fa fa-phone'></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control  name='usertel' style={{border: 'none'}} type="tel" required placeholder="Enter your phone number" />
                                    </InputGroup>
                                    <Button className='text-center' variant="success" type="submit">
                                        Register
                                    </Button>
                                </Form>
                                
                            </Jumbotron>
                        
                        </Tab>
                    </Tabs>
                </Container>
                
               
                {this.props.customer.loggingIn && <div className='loader text-center'>
                    <i id = "spin" className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                </div>
                }
            </Container>
            
        )
    }
}

const mapStateToProps = (state,props) => ({
    customer: state.authentication
});

const mapDispatchToProps = dispatch => {
    return {
        getCustomerCart: (id) => dispatch(getCustomerCart(id)),
        tryToLogin: (mail, psw) => dispatch(tryToLogin(mail, psw))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);