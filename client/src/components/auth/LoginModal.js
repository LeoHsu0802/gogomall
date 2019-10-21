import React,{useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logInSwitch, login, clearErrors  } from '../../actions'
import { NavLink } from 'react-router-dom'

function LoginModal() {
    const dispatch = useDispatch();
    const logInIsOpen = useSelector(state => state.logInSwitch); 
    const Error = useSelector(state => state.error);
    const auth = useSelector(state => state.auth);
    const [signInEmail, setSingInEmail] = useState("");
    const [signInPassword, setSingInPassword] = useState("");
    const [SignInErrorMsg, setSignInErrorMsg] = useState("");
    const [SignInErrorMsgOpen, setSignInErrorMsgOpen] = useState(false)

    //*same as componentdidmount* if error throw error message, if login success then colse modal 
    useEffect(() => {
        if(Error.id === 'LOGIN_FAIL') {
            setSignInErrorMsgOpen(true)
            setSignInErrorMsg(Error.msg.msg)
            window.setTimeout(()=>{
                setSignInErrorMsgOpen(false)
            },3000)
            dispatch(clearErrors())
        };
        if(logInIsOpen){
            if(auth.isAuthenticated){
                dispatch(logInSwitch())
            }
        };
    },[setSignInErrorMsgOpen, Error.id, Error.msg.msg, auth.isAuthenticated, logInIsOpen, dispatch])
        
    const handelLoginSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            email : signInEmail,
            password : signInPassword
        };
        dispatch(login(newUser))
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
                        onChange={(e) => setSingInEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Please enter your password..." 
                        onChange={(e) => setSingInPassword(e.target.value)}
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
