import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, FloatingLabel } from 'react-bootstrap';



function FormForProject() {
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");


    return (
        <Container fluid>
            <Form fluid>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question1">
                        <Form.Label>1. What is the goal or purpose of the software project?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}
                            value={question1}
                            onChange={({ target }) => setQuestion1(target?.value)}
                        />
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