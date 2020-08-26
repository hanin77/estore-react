import React, { Component } from 'react'
import Product from './Product';
import Cart from './Cart';
import {connect} from 'react-redux';
import {Row, Pagination} from 'react-bootstrap';
import axios from 'axios';
export default class ProductsList extends Component {
    
    state= {
        products: [],
        index: 1
    }
    componentDidMount() {
        this.getProducts();
        
        
    }

    handlToFirstPage = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({index: 1}));
    }
    handlToLastPage = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({index: Math.ceil(this.state.products.length/10)}));
    }

    handlClick = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
                return ({index: Number(event.target.text)?Number(event.target.text):prevState.index});
        });
    }


    
    getProducts = () => {
        axios.get('/api/products').then((resp) => {
            console.log('respond from express server',resp.data);
            this.setState((prevState) => ({products: resp.data}));
        }).catch(error=> console.log(error));
    }
    render() {
        const indexEnd = this.state.index*10;

        const indexStart = this.state.index==1?  0: this.state.index*10-10;
        return (
            <div>
                <Row className='justify-content-center mt-3'>
                    <Pagination as ='Row'>
                        <Pagination.First onClick={this.handlToFirstPage} />
                        <Pagination.Prev />
                        {
                            [...Array(Math.ceil(this.state.products.length/10))].map((pr,index)=>
                                        <Pagination.Item active={index+1 === this.state.index} onClick={this.handlClick} key={index+1}>{index+1}</Pagination.Item>        
                            )
                        }
                        <Pagination.Next />
                        <Pagination.Last onClick={this.handlToLastPage} />
                    </Pagination>
                </Row>
                <Row className="mr-0">
                    {
                        this.state.products.map((product,idx) =>{if(idx<indexEnd  && idx>=indexStart) return(<Product key={product.id} product = {product} />)})
                    }        
                </Row>
            </div>
                
        )
    }
}
