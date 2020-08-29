import React, { Component } from 'react';
import {Row, Col, Form, Button, FormGroup, Container} from 'react-bootstrap';
import ProductsList from './ProductsList';
import SearchProduct from './SearchProduct';
import HomeSlider from './HomeSlider';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: 'hanin',
            searchOrNot: false,
            loading: false
        }
    }
    
    render() {
        return (
            <Container className="mt-5">
                <Container className="d-md-none">
                    <SearchProduct />
                </Container>
                <HomeSlider />
                <ProductsList category='electronics' />
                
            </Container>
        )
    }
}

