import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {Navbar, NavItem, Nav,InputGroup, Row, Button,NavDropdown} from 'react-bootstrap';
import SearchProduct from './SearchProduct';
import { tryToLogout } from '../actions/authentication';
import { getCustomerCart } from '../actions/cart';
import Sidebar from './Sidebar';
class NavBar extends Component {

    handleLogout = () => {
        console.log('loginOut', this.props.history);
        this.props.getCustomerCart('');
        this.props.tryToLogout();
    }
    render() {
        return (
            <Navbar className='fixed-top' bg="primary shadow-lg" expand="sm">
                <Navbar.Toggle className='mr-auto' aria-controls="basic-navbar-nav" />  
                <Navbar.Brand className='text-light font-weight-bold ml-sm-1' as={NavLink} to="/"><i className="fa-cog fa fa-store md-xl" aria-hidden="true" /><span className="text-light font-weight-bold"> STORE</span></Navbar.Brand>
                <NavItem className="d-none d-md-inline-block ml-lg-5 ml-sm-1" style={{width: '50%'}}>
                    <SearchProduct className="text-align-center" />
                </NavItem>

                <NavItem className='mx-auto'>
                    <NavDropdown className='text-light' title={!this.props.customer.loggedIn? <span className="text-light font-weight-bold"><i className="fa-cog fa fa-user"/>  <span className="d-none d-sm-inline-block">Login</span></span>:<span className="text-light font-weight-bold">Hi {this.props.customer.username}</span> } id="basic-nav-dropdown">                           
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
                </NavItem>
                <NavItem className='mx-auto'>
                    <Nav.Link className='text-light'  as={NavLink} to="/cart"><span className="text-light font-weight-bold"> <i className="fa-cog fa fa-shopping-cart" aria-hidden="true"/>  <span className="d-none d-sm-inline-block">Cart</span></span></Nav.Link>
                </NavItem>
                <NavItem className="d-none d-sm-inline-block mx-auto">
                    <Nav.Link className='text-light'  as={NavLink} to="/about"><span className="text-light font-weight-bold"> <i className="fa-cog fa fa-question-circle" aria-hidden="true"/> Help</span></Nav.Link>
                </NavItem>

                            
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='mr-auto'>
                        <NavItem className="d-sm-none">
                            <Nav.Link className='text-light'  as={NavLink} to="/about"><span className="text-light font-weight-bold"> <i className="fa-cog fa fa-question-circle" aria-hidden="true"/> Help</span></Nav.Link>

                            <Sidebar />
                        </NavItem>
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


