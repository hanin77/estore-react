import React, { Component, Fragment } from 'react';
import {Nav} from 'react-bootstrap';
export default class Sidebar extends Component {
    render() {
        return (
            
            <Fragment>
                
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" href="/"><i className="fas fa-tshirt fa-fw" aria-hidden="true" /> Clothing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="text-light sidebarr" eventKey="link-1"><i className="fas fa-mobile-alt fa-fw" aria-hidden="true" /> Phone & Tablet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" eventKey="link-2"><i className="fas fa-heartbeat fa-fw" /> Beauty & Health</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" eventKey="link-2"><i className="fas fa-home fa-fw" aria-hidden="true" /> Home & Kitchen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" eventKey="link-2"><i className="fas fa-apple-alt fa-fw" /> Supemarket</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" eventKey="link-2"><i className="fas fa-tv fa-fw" aria-hidden="true" /> TV & Hi Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" eventKey="link-2"><i className="fas fa-gamepad fa-fw" /> Baby & Toys</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-light sidebarr" eventKey="link-2"><i className="fas fa-dumbbell fa-fw" aria-hidden="true" /> Sport & Leisure</Nav.Link>
                </Nav.Item>
            </Fragment>

        )
    }
}
