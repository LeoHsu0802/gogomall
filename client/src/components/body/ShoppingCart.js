import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartSwitch } from '../../actions'
import './pagebody.css'

function ShoppingCart() {
    const dispatch = useDispatch();
    const cartSwitchIsOpen = useSelector(state => state.cartSwitch);
    const addToCart = useSelector(state => state.addToCart);
    const totalUnit = addToCart.reduce((acc, cur) => acc + cur.unit, 0);
    const totalPrice = addToCart.reduce((acc, cur) => acc + cur.price, 0);
    console.log(addToCart)

    return (
        <div>
            <Modal isOpen={cartSwitchIsOpen} toggle={() => dispatch(cartSwitch())} > 
                <ModalHeader>Your Shopping Cart</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit</th>
                                <th>Price</th>
                            </tr>
                        </thead>
  
                        <tbody>
                            {addToCart.map(
                                item =>(
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.price}</td>
                                </tr> 
                                )
                            )}
                                <tr>
                                    <td ><strong>TOTAL</strong></td>
                                    <td >{totalUnit}</td>
                                    <td >{totalPrice}</td>
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
