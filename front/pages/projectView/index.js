import Head from 'next/head'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import styles from '<kanbana-front>/styles/Home.module.css'
import TaskCard from '<kanbana-front>/pages/component/taskCard'
import NavBar from "<kanbana-front>/pages/component/navBar";
import { Draggable, Droppable } from 'react-drag-and-drop';
import { useState, useEffect } from 'react';

export default function projectView() {
    const [todoList, setTodoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTaskDescription, setNewTaskDescription] = useState("");
    const [newTaskAssignee, setNewTaskAssignee] = useState("");
    const [projectName, setProjectName] = useState("");

    useEffect(() => {
        const ls_projectName = localStorage.getItem("projectName");
        if (ls_projectName) {
            setProjectName(ls_projectName);
        }

        const ls_todoList = JSON.parse(localStorage.getItem("todoList"));
        if (ls_todoList) {
            setTodoList(ls_todoList);
        }
        const ls_progressList = JSON.parse(localStorage.getItem("progressList"));
        if (ls_progressList) {
            setInProgressList(ls_progressList);
        }
        const ls_doneList = JSON.parse(localStorage.getItem("doneList"));
        if (ls_doneList) {
            setDoneList(ls_doneList);
        }
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("todoList", JSON.stringify(todoList));
    // }, [todoList])
    // useEffect(() => {
    //     localStorage.setItem("progressList", JSON.stringify(inProgressList));
    // }, [inProgressList])
    // useEffect(() => {
    //     localStorage.setItem("doneList", JSON.stringify(doneList));
    // }, [doneList])

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
        let arr = [{task: newTaskDescription, assignee: newTaskAssignee}, ...todoList]
        setTodoList(arr);
        localStorage.setItem("todoList", JSON.stringify(arr));
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
                localStorage.setItem("progressList", JSON.stringify(arr));
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
                localStorage.setItem("doneList", JSON.stringify(arr));
                return arr;
            });
        }
        let arr = [{task: data.task, assignee: data.assignee}, ...todoList]
        setTodoList(arr);
        localStorage.setItem("todoList", JSON.stringify(arr));
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
                localStorage.setItem("todoList", JSON.stringify(arr));
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
                localStorage.setItem("doneList", JSON.stringify(arr));
                return arr;
            });
        }
        let arr = [{task: data.task, assignee: data.assignee}, ...inProgressList]
        setInProgressList(arr);
        localStorage.setItem("progressList", JSON.stringify(arr));
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
                localStorage.setItem("todoList", JSON.stringify(arr));
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
                localStorage.setItem("progressList", JSON.stringify(arr));
                return arr;
            });
        }
        let arr = [{task: data.task, assignee: data.assignee}, ...doneList]
        setDoneList(arr);
        localStorage.setItem("doneList", JSON.stringify(arr));
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
                localStorage.setItem("todoList", JSON.stringify(arr));
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
                localStorage.setItem("progressList", JSON.stringify(arr));
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
                localStorage.setItem("doneList", JSON.stringify(arr));
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
            <NavBar color="#FFFFFF"></NavBar>
            <main className={styles.main}>
                <Container>
                    <Row>
                        <h1>{projectName}</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Droppable types={['progress', 'done']} onDrop={handleTodoDrop}>
                                <Card>
                                    <Card.Header className='pt-3'><h4>To-Do</h4></Card.Header>
                                    <Card.Body>
                                        {todoList.map((object, i) =>
                                            <Draggable key={i} type="todo" data={`{"index": ${i}, "task": "${object.task}", "assignee": "${object.assignee}"}`}>
                                                <TaskCard title={object.task} assignee={object.assignee} deleteTask={() => handleDeleteTask(i, "todo")}></TaskCard>
                                            </Draggable>
                                        )}
                                        <div className="d-grid gap-2">
                                            <Button variant="secondary" onClick={handleShowModal}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                </svg>
                                            </Button>
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
                                            <Draggable key={i} type="progress" data={`{"index": ${i}, "task": "${object.task}", "assignee": "${object.assignee}"}`}>
                                                <TaskCard title={object.task} assignee={object.assignee} deleteTask={() => handleDeleteTask(i, "progress")}></TaskCard>
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
                                            <Draggable key={i} type="done" data={`{"index": ${i}, "task": "${object.task}", "assignee": "${object.assignee}"}`}>
                                                <TaskCard title={object.task} assignee={object.assignee} deleteTask={() => handleDeleteTask(i, "done")}></TaskCard>
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
                    <Button variant="primary" onClick={handleAddTask} disabled={(newTaskDescription != "" && newTaskAssignee != "") ? false : true}>
                        Save
                    </Button>
                    </Modal.Footer>
                </Modal>
            </main>
        </>
    )
}
