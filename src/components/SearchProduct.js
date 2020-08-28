import React, { Component } from 'react';
import {Form,InputGroup, Button, Col, Row} from 'react-bootstrap';
export default class SearchProduct extends Component {
    onSubmitForm =(e)=> {
        e.preventDefault();
    }
    render() {
        return (
            <Form className="bg-primary" onSubmit = {this.onSubmitForm}>
                    <InputGroup className="border border-primary mb-1 w-100" >
                        <Form.Control type="search" required placeholder="Product,Reference,..." />
                        <InputGroup.Prepend>
                            <Button variant="outline-light"><i className='fa fa-search'></i></Button>
                        </InputGroup.Prepend>
                    </InputGroup>
            </Form>
                    
        )
    }
}
