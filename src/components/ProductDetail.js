import React, { Component } from 'react';
import {Image, Col, Card, Row,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {startAddToCart} from '../actions/cart';
class ProductDetail extends Component {
    handelclick = () => {
        console.log("from productdetail cart: ",this.props.cart);
        this.props.startAddToCart({...this.props.location.state}, {...this.props.cart}, this.props.loggedIn);
    }
    render() {
        const {price, description, image, title} = this.props.location.state;
        return (
            <Row className="mt-5 ml-1 mr-0">
                <Col xs="12" md="4">
                    <Image fluid src={image}/>
                </Col>
                <Col className="p-5" xs="12" md="8">
                    <h3 className="lead">{title}</h3>
                    <h4 >{price}$</h4>
                    <p>{description}</p>
                    <Button onClick={this.handelclick} size="lg" variant="info" block><i className="fa fa-cart-plus" aria-hidden="true" /> Buy</Button>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddToCart : (product, cart) => dispatch(startAddToCart(product, cart))
  });
const mapStateToProps = (state,props) => ({
    cart: state.cart.find((product) => product.id === props.match.params.id),
    loggedIn: state.authentication.loggedIn
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
