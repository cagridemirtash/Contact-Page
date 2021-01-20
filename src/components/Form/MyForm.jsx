import React,{useRef,useState} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Lists from './MyList'

function MyForm(){
    const [input, setInput] = useState([])

    const firstname = useRef()
    const secondname = useRef()
    const email = useRef()
    const comment = useRef()

    let id = () => {
        return '_' + Math.random().toString(36).substr(2, 9)
    };
    
    const Formss = input.map((item , index) =>
        {
            return(
                <Lists key = {index} item = {item} index = {index} deleteFunc={handleDelete}/>
            )
        }
    )
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = firstname.current.value
        const surname = secondname.current.value
        const mail = email.current.value
        const mycomment = comment.current.value

        const data = {id:id(),
                    name : name,
                    surname : surname,
                    mail : mail,
                    mycomment : mycomment}
    
        if(data.name && data.surname && data.mail && data.mycomment){
            setInput([...input, data])
            firstname.current.value = ""
            secondname.current.value = ""
            email.current.value = ""
            comment.current.value =""
        }else{
            console.log("oopss")
        }
    }
    function handleDelete(id) {
        setInput(input.filter(forms => id !== forms.id))
    }

    return(
        <Container>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref = {firstname} type="text" placeholder="Name.." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control ref = {secondname} type="text" placeholder="Surname.." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref = {email} type="email" placeholder="E-Mail" />
                        <Form.Text> Please, Enter like "asd@asd.com"</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control ref = {comment} as="textarea" rows={3} placeholder = "Notes :)"/>
                    </Form.Group>
                    <Button className = "btn-lg" onClick={handleSubmit} variant="success" type="submit">Submit</Button>
                </Form>
                </Col>
            </Row>
            
            {Formss}
        </Container>
    )
}

export default MyForm