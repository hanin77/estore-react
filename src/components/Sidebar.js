import React, { Component, Fragment } from 'react';
import {Nav} from 'react-bootstrap';
export default class Sidebar extends Component {
    render() {
        return (
            
            <Fragment>
                
                <Nav.Item>
                    <Nav.Link className="text-light" href="/"><i className="fas fa-tshirt" aria-hidden="true" /> Clothing & footwear</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-1"><i className="fas fa-mobile-alt" aria-hidden="true" /> Phone & Tablet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2"><i className="fas fa-heartbeat" /> Beauty & Health</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2"><i className="fas fa-home" aria-hidden="true" /> Home & Kitchen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2"><i className="fas fa-apple-alt" /> Supemarket</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2"><i className="fas fa-tv" aria-hidden="true" /> TV & Hi Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2"><i className="fas fa-gamepad" /> Baby & Toys</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light" eventKey="link-2"><i className="fas fa-dumbbell" aria-hidden="true" /> Sport & Leisure</Nav.Link>
                </Nav.Item>
            </Fragment>

        )
    }
}
