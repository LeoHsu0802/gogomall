import React from 'react'
import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logInSwitch } from '../../actions'

function LoginModal() {
    const dispatch = useDispatch();
    const logInIsOpen = useSelector(state => state.logInSwitch); 


    return (
        <div>
            <Modal isOpen={logInIsOpen} toggle={() => dispatch(logInSwitch())}> 
                <ModalHeader>Sign in</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Please enter your email..." />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Please enter your password" />
                    </FormGroup>
                    <Button className="mt-3">Sign in</Button>
                    <Button color="warning" className="mt-3 ml-5 text-white">Register</Button>
                </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LoginModal
