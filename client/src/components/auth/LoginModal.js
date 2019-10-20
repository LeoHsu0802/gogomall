import React,{useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logInSwitch, login, clearErrors  } from '../../actions'
import { NavLink } from 'react-router-dom'

function LoginModal() {
    const dispatch = useDispatch();
    const logInIsOpen = useSelector(state => state.logInSwitch); 
    const Error = useSelector(state => state.error);
    const [signInEmail, SetSingInEmail] = useState("");
    const [signInPassword, SetSingInPassword] = useState("");
    const [SignInErrorMsg, SetSignInErrorMsg] = useState("");
    const [SignInErrorMsgOpen, SetSignInErrorMsgOpen] = useState(false)

    useEffect(() => {
        if(Error.id === 'LOGIN_FAIL') {
            SetSignInErrorMsgOpen(true)
            SetSignInErrorMsg(Error.msg.msg)
            window.setTimeout(()=>{
                SetSignInErrorMsgOpen(false)
            },3000)
            dispatch(clearErrors())
        }
    })
        
    const handelLoginSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            email : signInEmail,
            password : signInPassword
        };
        dispatch(login(newUser))
        dispatch(logInSwitch())
    }

    return (
        <div>
            <Modal isOpen={logInIsOpen} toggle={() => dispatch(logInSwitch())}> 
                <ModalHeader>Sign in</ModalHeader>
                <ModalBody>
                <Form onSubmit={handelLoginSubmit} >
                    <Alert color="danger" isOpen={SignInErrorMsgOpen}>{SignInErrorMsg}</Alert>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input 
                        type="email" 
                        name="email"
                        id="email" 
                        placeholder="Please enter your email..." 
                        onChange={(e) => SetSingInEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Please enter your password..." 
                        onChange={(e) => SetSingInPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button className="mt-3">Sign in</Button>
                </Form>
                </ModalBody>
                <ModalFooter className="text-center">
                <NavLink to='./user-register' style={{ textDecoration: 'none', outline: 'none'}}>
                    <Button color="warning" onClick={() => dispatch(logInSwitch())}>Register Now</Button>
                </NavLink>
                    <Button color="secondary" onClick={() => dispatch(logInSwitch())}>Cancel</Button>
                </ModalFooter>
                
            </Modal>
        </div>
    )
}

export default LoginModal
