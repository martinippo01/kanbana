import Head from 'next/head'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import styles from '<kanbana-front>/styles/Home.module.css'
import TaskCard from '<kanbana-front>/pages/component/taskCard'
import NavBar from "<kanbana-front>/pages/component/navBar";
import { Draggable, Droppable } from 'react-drag-and-drop';
import { useState } from 'react';

export default function projectView() {
    const [todoList, setTodoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTaskDescription, setNewTaskDescription] = useState("");
    const [newTaskAssignee, setNewTaskAssignee] = useState("");

    const resetNewTaskForm = () => {
        setNewTaskDescription('');
        setNewTaskAssignee('');
    }

    const handleCloseModal = () => {
        setShowModal(false);
        resetNewTaskForm();
    }
    const handleShowModal = () => setShowModal(true);

    const handleAddTask = () => {
        setTodoList([{title: newTaskDescription, assignee: newTaskAssignee}, ...todoList]);
        handleCloseModal();
    }

    const handleTodoDrop = (data, event) => {
        let origin = '';
        let entries = Object.entries(data);
        for (let entry of entries) {
            if (entry[1] != '') {
                origin = entry[0];
                data = JSON.parse(entry[1]);
            }
        }
        if (origin == "progress") {
            setInProgressList(() => {
                let arr = []
                for (let i = 0; i < inProgressList.length; i++) {
                    if (i != data.index) {
                        arr.push(inProgressList[i]);
                    }
                }
                return arr;
            });
        } else if (origin == "done") {
            setDoneList(() => {
                let arr = []
                for (let i = 0; i < doneList.length; i++) {
                    if (i != data.index) {
                        arr.push(doneList[i]);
                    }
                }
                return arr;
            });
        }
        setTodoList([{title: data.title, assignee: data.assignee}, ...todoList]);
    }

    const handleInProgressDrop = (data, event) => {
        let origin = '';
        let entries = Object.entries(data);
        for (let entry of entries) {
            if (entry[1] != '') {
                origin = entry[0];
                data = JSON.parse(entry[1]);
            }
        }
        if (origin == "todo") {
            setTodoList(() => {
                let arr = []
                for (let i = 0; i < todoList.length; i++) {
                    if (i != data.index) {
                        arr.push(todoList[i]);
                    }
                }
                return arr;
            });
        } else if (origin == "done") {
            setDoneList(() => {
                let arr = []
                for (let i = 0; i < doneList.length; i++) {
                    if (i != data.index) {
                        arr.push(doneList[i]);
                    }
                }
                return arr;
            });
        }
        setInProgressList([{title: data.title, assignee: data.assignee}, ...inProgressList]);
    }

    const handleDoneDrop = (data, event) => {
        let origin = '';
        let entries = Object.entries(data);
        for (let entry of entries) {
            if (entry[1] != '') {
                origin = entry[0];
                data = JSON.parse(entry[1]);
            }
        }
        if (origin == "todo") {
            setTodoList(() => {
                let arr = []
                for (let i = 0; i < todoList.length; i++) {
                    if (i != data.index) {
                        arr.push(todoList[i]);
                    }
                }
                return arr;
            });
        } else if (origin == "progress") {
            setInProgressList(() => {
                let arr = []
                for (let i = 0; i < inProgressList.length; i++) {
                    if (i != data.index) {
                        arr.push(inProgressList[i]);
                    }
                }
                return arr;
            });
        }
        setDoneList([{title: data.title, assignee: data.assignee}, ...doneList]);
    }

    const handleDeleteTask = (id, list) => {
        if (list == "todo") {
            setTodoList(() => {
                let arr = []
                for (let i = 0; i < todoList.length; i++) {
                    if (i != id) {
                        arr.push(todoList[i]);
                    }
                }
                return arr;
            });
        } else if (list == "progress") {
            setInProgressList(() => {
                let arr = []
                for (let i = 0; i < inProgressList.length; i++) {
                    if (i != id) {
                        arr.push(todoList[i]);
                    }
                }
                return arr;
            });
        } else if (list == "done") {
            setDoneList(() => {
                let arr = []
                for (let i = 0; i < doneList.length; i++) {
                    if (i != id) {
                        arr.push(todoList[i]);
                    }
                }
                return arr;
            });
        }
    }

    return (
        <>
            <Head>
                <title>projectView</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <main className={styles.main}>
                <Container>
                    <Row>
                        <h1>Project Name</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Droppable types={['progress', 'done']} onDrop={handleTodoDrop}>
                                <Card>
                                    <Card.Header className='pt-3'><h4>To-Do</h4></Card.Header>
                                    <Card.Body>
                                        {todoList.map((object, i) =>
                                            <Draggable key={i} type="todo" data={`{"index": ${i}, "title": "${object.title}", "assignee": "${object.assignee}"}`}>
                                                <TaskCard title={object.title} assignee={object.assignee} deleteTask={() => handleDeleteTask(i, "todo")}></TaskCard>
                                            </Draggable>
                                        )}
                                        <div className="d-grid gap-2">
                                            <Button variant="secondary" onClick={handleShowModal}>+</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Droppable>
                        </Col>
                        <Col>
                            <Droppable types={['todo', 'done']} onDrop={handleInProgressDrop}>
                                <Card>
                                    <Card.Header className='pt-3'><h4>In Progress</h4></Card.Header>
                                    <Card.Body>
                                        {inProgressList.map((object, i) =>
                                            <Draggable key={i} type="progress" data={`{"index": ${i}, "title": "${object.title}", "assignee": "${object.assignee}"}`}>
                                                <TaskCard title={object.title} assignee={object.assignee} deleteTask={() => handleDeleteTask(i, "progress")}></TaskCard>
                                            </Draggable>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Droppable>
                        </Col>
                        <Col>
                            <Droppable types={['todo', 'progress']} onDrop={handleDoneDrop}>
                                <Card>
                                    <Card.Header className='pt-3'><h4>Done</h4></Card.Header>
                                    <Card.Body>
                                        {doneList.map((object, i) =>
                                            <Draggable key={i} type="done" data={`{"index": ${i}, "title": "${object.title}", "assignee": "${object.assignee}"}`}>
                                                <TaskCard title={object.title} assignee={object.assignee} deleteTask={() => handleDeleteTask(i, "done")}></TaskCard>
                                            </Draggable>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Droppable>
                        </Col>
                    </Row>
                </Container>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Task Description:</Form.Label>
                                <Form.Control type="text" placeholder="Write something" value={newTaskDescription} onChange={(event) => setNewTaskDescription(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Assignee:</Form.Label>
                                <Form.Control type="text" placeholder="Write someone's name" value={newTaskAssignee} onChange={(event) => setNewTaskAssignee(event.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleAddTask}>
                        Save
                    </Button>
                    </Modal.Footer>
                </Modal>
            </main>
        </>
    )
}
