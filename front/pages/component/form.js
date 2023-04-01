import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Row, Col, Button, FloatingLabel } from 'react-bootstrap';


function FormForProject() {
    return (
        <Container fluid>
            <Form fluid>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question1">
                        <Form.Label>1. What is the goal or purpose of the software project?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question2">
                        <Form.Label>2. What are the key features and functionalities that the software project should include?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question3">
                        <Form.Label>3. What is the target audience for the software project?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question4">
                        <Form.Label>4. What are the technical requirements for the software project, such as programming languages or databases?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question5">
                        <Form.Label>5. Is there any additional information that we should know?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </Container>
            
        
    );
}

export default FormForProject;