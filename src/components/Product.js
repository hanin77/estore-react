import React, { Component } from 'react';
import {Card, Button, Col,Image} from 'react-bootstrap';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
class Product extends Component {

    handleclick = ()=> {
        this.props.history.push('/productDetails');
        
    }
    render() { 
        const {id, title, description, price,category, image} = this.props.product;
         
        return (
            <Col className='my-2'>
                <Card id='productcard' className="mx-auto shadow-lg" style={{ width: '15rem', height:'30rem' }}>
                    <Card.Img style={{ maxHeight:'21rem' }} variant="top" src={image} alt='product img'></Card.Img>
                    <Card.Body className='ml-1'>
                        <Card.Title>{price} $</Card.Title>
                        <Card.Subtitle style={{  fontSize:'0.7em' }}>{title}</Card.Subtitle>
                        
                    </Card.Body>
                    <Card.Footer className="mx-auto">
                        <Link to={{ pathname: `/productDetails/${id}`, state: { ...this.props.product}}} className='btn btn-sm btn-dark text-light' variant="primary">More details</Link>
                    </Card.Footer>
                </Card>                            
            </Col>
        )
    }
}
  
  
  export default Product;
