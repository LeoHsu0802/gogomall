import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register, login, clearErrors } from '../../actions'

function Register() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const Error = useSelector(state => state.error);
    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [signInEmail, setSingInEmail] = useState("");
    const [signInPassword, setSingInPassword] = useState("");
    const [RegErrorMsg, setRegErrorMsg] = useState("");
    const [SignInErrorMsg, setSignInErrorMsg] = useState("");
    const [RegErrorMsgOpen, setRegErrorMsgOpen] = useState(false);
    const [SignInErrorMsgOpen, setSignInErrorMsgOpen] = useState(false);
    const [SuccessMsgOpen, setSuccessMsgOpen] = useState(false);

    //Show Sign in or Register error message and remove after 3's
    useEffect(() => {
            if(Error.id === 'REGISTER_FAIL') {
                setRegErrorMsgOpen(true)
                setRegErrorMsg(Error.msg.msg)
                window.setTimeout(()=>{
                    setRegErrorMsgOpen(false)
                },3000)
                dispatch(clearErrors())
            } else if(Error.id === 'LOGIN_FAIL') {
                setSignInErrorMsgOpen(true)
                setSignInErrorMsg(Error.msg.msg)
                window.setTimeout(()=>{
                    setSignInErrorMsgOpen(false)
                },3000)
                dispatch(clearErrors())
            };
            //if register or login success the show alert Success
            if(auth.isAuthenticated){
                setSuccessMsgOpen(true)
                window.setTimeout(()=>{
                    setSuccessMsgOpen(false)
                },3000)
            }
    },[ setRegErrorMsgOpen, 
        setSignInErrorMsgOpen, 
        setSuccessMsgOpen, 
        Error.id, 
        Error.msg.msg, 
        auth.isAuthenticated,
        dispatch
     ]
    )
  

    const handelRegisterSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name : regName,
            email : regEmail,
            password : regPassword
          };
          dispatch(register(newUser))
    }

    const handelLoginSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            email : signInEmail,
            password : signInPassword
          };
          dispatch(login(newUser))
    }


    return (
        <Container className="p-5">
            {SuccessMsgOpen?
            <Alert color="success" className="w-50 text-center mb-3 ml-auto mr-auto">Success!</Alert> :
            null
             }
            <Row>
                <Col lg="6" md="12" sm="12" className="mb-5 p-5 bg-light">
                    {/* Sign in form */}
                    <Form onSubmit={handelLoginSubmit}>
                        <h3 className="mb -3">Sign in</h3>
                        <Alert color="danger" isOpen={SignInErrorMsgOpen}>{SignInErrorMsg}</Alert> 
                        <FormGroup className="mb-2 mr-sm-2">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input 
                            type="email" 
                            name="email" i
                            d="signInEmail" 
                            placeholder="Please enter your email..." 
                            onChange={(e) => setSingInEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input 
                            type="password" 
                            name="password" 
                            id="signInPassword" 
                            placeholder="Please enter your password..." 
                            onChange={(e) => setSingInPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button className="mt-3">Sign in</Button>
                    </Form>
                </Col>

                <Col lg="6" md="12" sm="12" className="mb-5 p-5 bg-light">
                    {/* Register form */}
                    <Form onSubmit={handelRegisterSubmit}>
                        <h3 className="mb-3 ">Register</h3>
                        <Alert color="danger" isOpen={RegErrorMsgOpen}>{RegErrorMsg}</Alert> 
                        <FormGroup className="mb-2 mr-sm-2">
                            <Label for="exampleEmail" className="mr-sm-2">Name</Label>
                            <Input 
                            name="name" 
                            id="name" 
                            placeholder="Please enter your name..." 
                            onChange={(e) => setRegName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Please enter your email..." 
                            onChange={(e) => setRegEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Please enter your password..." 
                            onChange={(e) => setRegPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button color="warning" className="mt-3">Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register
