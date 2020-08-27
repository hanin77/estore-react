import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {Navbar, NavItem, Nav,InputGroup, Row, Button,NavDropdown} from 'react-bootstrap';
import SearchProduct from './SearchProduct';
import { tryToLogout } from '../actions/authentication';
import { getCustomerCart } from '../actions/cart';
class NavBar extends Component {

    handleLogout = () => {
        console.log('loginOut', this.props.history);
        this.props.getCustomerCart('');
        this.props.tryToLogout();
    }
    render() {
        return (
            <Navbar className='fixed-top' bg="primary" expand="sm">
                <Navbar.Brand className='text-light font-weight-bold ml-md-2 ml-sm-0 ml-lg-5' as={NavLink} to="/"><i className="fa-cog fa fa-store md-xl" aria-hidden="true" /><span className="text-light font-weight-bold"> STORE</span></Navbar.Brand>
                <NavItem className="d-none d-md-inline-block ml-lg-5 ml-sm-1" style={{width: '50%'}}>
                    <SearchProduct className="text-align-center" />
                </NavItem>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ml-auto'>
                        <NavDropdown className='text-light' title={!this.props.customer.loggedIn? <span className="text-light font-weight-bold"><i className="fa-cog fa fa-user"/>  Login</span>:<span className="text-light font-weight-bold">Hellow {this.props.customer.username}</span> } id="basic-nav-dropdown">                           
                            {
                                !this.props.customer.loggedIn && <Fragment>
                                    <Button className='mx-2 d-block' variant="warning" as={NavLink} to="/login" >Login</Button> 
                                    <NavDropdown.Divider /> 
                                    <Button className='mx-2 d-block' variant="outline-warning" as={NavLink} to="/register">Register</Button> 
                                    <NavDropdown.Divider />
                                </Fragment>
                                
                            }
                            {this.props.customer.loggedIn && <Fragment>
                                <NavDropdown.Item as={NavLink} to="/customer/account"><i className="fa fa-user" aria-hidden="true">  Your account</i></NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/customer/orders"><i className="fa fa-box" aria-hidden="true">  Your orders</i></NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/customer/wishlist"><i className="fa fa-heart" aria-hidden="true">  Your wishlist</i></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <Button className='mx-2 d-block' as={NavLink} to="/" variant="outline-warning" onClick={this.handleLogout} >Logout</Button>
                            </Fragment>}
                        </NavDropdown>
                        <Nav.Link className='text-light'  as={NavLink} to="/about"><span className="text-light font-weight-bold"> <i className="fa-cog fa fa-question-circle" aria-hidden="true"/> Help</span></Nav.Link>
                        <Nav.Link className='text-light'  as={NavLink} to="/cart"><span className="text-light font-weight-bold"> <i className="fa-cog fa fa-shopping-cart" aria-hidden="true"/> Cart</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {this.props.customer.loggingOut && <div className='loader text-center'>
                    <i id = "spin" className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                </div>
                }
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    customer: state.authentication
});

const mapDispatchToProps = dispatch => {
    return {
        tryToLogout: () => dispatch(tryToLogout()),
        getCustomerCart: (id) => dispatch(getCustomerCart(id))
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));


