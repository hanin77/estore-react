import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {Container, Button, Image} from 'react-bootstrap';
import {getCustomerCart} from '../actions/cart';

class Cart extends Component {
    handleContinueShoping = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }
    handleCompleteOrder = (e) => {
        e.preventDefault();
        console.log('complete order');

    }
    render() {
        return (
            <Container className="p-2" >
                {this.props.quantity<2?<h3 className='text-center'>Cart({this.props.quantity} Product)</h3>:<h3 className='text-center'>Cart({this.props.quantity} Products)</h3>}
                <Container className="mx-0">
                    <Table responsive bordered hover className='text-center'>
                        <thead>
                            <tr className='lead align-middle'>
                            <th className='align-middle'>Product</th>
                            <th className='align-middle'>Name</th>
                            <th className='align-middle'>Quantity</th>
                            <th className='align-middle'>Unit Price</th>
                            <th className='align-middle'>Totals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.loggedIn && this.props.cart.map((product)=>
                                    <tr  key={product.id}>
                                        <td className="cart-primg-cnt"><Image className="cart-primg" fluid src={product.image}/></td>
                                        <td className='align-middle'>{product.title}</td>
                                        <td className='align-middle'><Button size="sm" variant="outline-dark" block><i className="fa fa-plus" /></Button><p>{product.quantity}</p> <Button size="sm" variant="outline-dark" block><i className="fa fa-minus" /></Button></td>
                                        <td className='align-middle'>{product.price} $</td>
                                        <td className='align-middle'>{product.price*product.quantity} $</td>
                                    </tr>
                                )
                            }
                            {
                                 (!this.props.loggedIn && JSON.parse(localStorage.getItem('reduxState'))) && JSON.parse(localStorage.getItem('reduxState')).cart.map((product)=>
                                    <tr key={product.id}>
                                        <td className="cart-primg-cnt"><Image className="cart-primg" fluid src={product.image}/></td>
                                        <td className='align-middle'>{product.title}</td>
                                        <td className='align-middle'><Button size="sm" variant="outline-dark" block><i className="fa fa-plus" /></Button><p>{product.quantity}</p> <Button size="sm" variant="outline-dark" block><i className="fa fa-minus" /></Button></td>
                                        <td className='align-middle'>{product.price} $</td>
                                        <td className='align-middle'>{product.price*product.quantity} $</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    
                </Container>
                    <h3 className='text-right mr-3'>Total: {this.props.cart.reduce((total,product)=>total+product.price*product.quantity,0)}$</h3>
                <Container className='text-right'>
                    <Button className='ml-1 btn d-sm-block d-md-inline' variant="outline-warning" onClick={this.handleContinueShoping}>Continue shopping</Button>
                    <Button className='ml-1 btn d-sm-block d-md-inline' variant="danger">Complete order</Button>
                </Container>
                
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getCustomerCart: (id) => dispatch(getCustomerCart(id))
    }
  }

const mapStateToProps = (state,props) => {
    return {
        cart: state.cart,
        quantity : state.cart.reduce((total,product)=>total+=product.quantity,0),
        loggedIn: state.authentication.loggedIn,
        userId:  state.authentication.id
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
