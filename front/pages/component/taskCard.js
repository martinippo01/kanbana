import Card from 'react-bootstrap/Card';

function TaskCard({title, assignee}) {
    return (
        <Card className='mb-3'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">Assigned to {assignee}</Card.Footer>
        </Card>
    );
}

export default TaskCard;