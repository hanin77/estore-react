import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
class Customer extends Component {
    render() {
        console.log(this.props.customer);
        return (
            <Container className='mt-2'>
                <Row>
                    <Col xs={6}>
                        {this.props.customer.email}
                    </Col>
                    <Col xs={6}>
                        2
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

const mapStateToProps = (state,props) => ({
    customer: state.authentication
});

export default connect(mapStateToProps)(Customer);