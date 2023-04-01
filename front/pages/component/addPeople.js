import {Button, Form, ListGroup, Modal} from "react-bootstrap";
import {useState} from "react";

function Person(props) {
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <a style={{margin: "15px", marginTop: "5px", marginBottom: "5px"}}>{props.name}</a>
            <div style={{marginLeft: "15px", margin: "5px"}} onClick={() => console.log("delete")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        </div>
    );
}


function AddPeople() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ListGroup>
                <ListGroup.Item>
                    <Person name="Nehuen Gabriel Llanos"></Person>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Person name="lafd"></Person>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Person name="Nehu"></Person>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Person name="Nehue"></Person>
                </ListGroup.Item>
                <ListGroup.Item onClick={handleShow}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                             className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </div>
                </ListGroup.Item>
            </ListGroup>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><a style={{color: "black"}}>Modal title</a></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><a style={{color: "black"}}>Name</a></Form.Label>
                            <Form.Control placeholder="Enter name"/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><a style={{color: "black"}}>Skill</a></Form.Label>
                            <Form.Control placeholder="React Native, Front end, Graphic design, ..." />
                            <Form.Text className="text-muted">
                                Enter the skills separated with ','
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddPeople;