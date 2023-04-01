import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ProjectCard(props) {
    return (
        <Card style={{width: '18rem', opacity: "80%", margin: '10px'}} >
            <Card.Body>
                <Card.Title><a style={{color: "black"}}>{props.title}</a></Card.Title>
                <Button variant="primary" style={{marginBottom: '10px'}}>btn</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;