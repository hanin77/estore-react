import React, { Component, Fragment } from 'react';
import {Nav} from 'react-bootstrap';
export default class Sidebar extends Component {
    render() {
        return (
            
            <Fragment>
                
                <Nav.Item>
                    <Nav.Link className="text-light" href="/">Clothing and footwear</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-1">Phone & Tablet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">Beauty & Health</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">Home & Kitchen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">Supemarket</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">TV & Hi Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">Baby & Toys</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">Sport & Leisure</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2">Sport & Leisure</Nav.Link>
                </Nav.Item>
            </Fragment>

        )
    }
}
