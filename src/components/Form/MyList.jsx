import React from 'react'
import {Accordion, Card, Button,ListGroup} from "react-bootstrap"

function List(props) {
        
        function deleteUserId(){
            const id = props.item.id
            const deleteUser = props.deleteFunc
            deleteUser(id)
        }
        
        return(
            <Accordion className = "mt-3 text-dark">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {props.index + 1}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup>
                        <ListGroup.Item>Adı: {props.item.name}</ListGroup.Item>
                        <ListGroup.Item>Soyad: {props.item.surname}</ListGroup.Item>
                        <ListGroup.Item>Email: {props.item.mail}</ListGroup.Item>
                        <ListGroup.Item>Mesaj: {props.item.mycomment}</ListGroup.Item>
                        <Button className="btn btn-secondary mb-2" onClick={deleteUserId}>Delete</Button>
                        </ListGroup>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
    )
}

export default List

