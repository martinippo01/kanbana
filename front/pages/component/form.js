import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { Alert } from 'bootstrap';



function FormForProject() {
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");

    useEffect(() => {
        localStorage.setItem("question1", JSON.stringify(question1));
    }, [question1])
    useEffect(() => {
        localStorage.setItem("question2", JSON.stringify(question2));
    }, [question2])
    useEffect(() => {
        localStorage.setItem("question3", JSON.stringify(question3));
    }, [question3])
    useEffect(() => {
        localStorage.setItem("question4", JSON.stringify(question4));
    }, [question4])
    useEffect(() => {
        localStorage.setItem("question5", JSON.stringify(question5));
    }, [question5])

    return (
        <Container fluid>
            <Form fluid>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question1">
                        <Form.Label>1. What is the goal or purpose of the software project?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}
                            value={question1} onChange={e => setQuestion1(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question2">
                        <Form.Label>2. What are the key features and functionalities that the software project should include?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}
                            value={question2} onChange={e => setQuestion2(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question3">
                        <Form.Label>3. What is the target audience for the software project?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}
                            value={question3} onChange={e => setQuestion3(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question4">
                        <Form.Label>4. What are the technical requirements for the software project, such as programming languages or databases?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}
                            value={question4} onChange={e => setQuestion4(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className='add-space'>
                    <Form.Group as={Col} controlId="question5">
                        <Form.Label>5. Is there any additional information that we should know?</Form.Label>
                        <Form.Control as="textarea" placeholder="Answer" style={{ height: '100px' }}
                            value={question5} onChange={e => setQuestion5(e.target.value)}/>
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