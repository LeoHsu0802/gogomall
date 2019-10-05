import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartSwitch } from '../../actions'
import './pagebody.css'

function ShoppingCart() {
    const dispatch = useDispatch();
    const cartSwitchIsOpen = useSelector(state => state.cartSwitch);

    return (
        <div>
            <Modal isOpen={cartSwitchIsOpen} toggle={() => dispatch(cartSwitch())} > 
                <ModalHeader>Your Shopping Cart</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>QTY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr> 
                        </tbody>
                    </Table>    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Check Out</Button>
                    <Button color="secondary"  onClick={() => dispatch(cartSwitch())}>Back To Store</Button>
                </ModalFooter>
            </Modal>
      </div>
    )
}

export default ShoppingCart
