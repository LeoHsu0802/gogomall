import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { likeItemSwitch } from '../../actions'
import './pagebody.css'

function LikeItem() {
    const dispatch = useDispatch();
    const addToLike = useSelector(state => state.addToLike)
    const likeItemSwitchIsOpen = useSelector(state => state.likeItemSwitch);

    return (
        <div>
            <Modal isOpen={likeItemSwitchIsOpen} toggle={() => dispatch(likeItemSwitch())} > 
                <ModalHeader>Like Lsit</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
  
                        <tbody>
                            {
                            addToLike.map(item =>
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>   
                                )
                            }
                        </tbody>
                            
                    </Table>    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Check Out</Button>
                    <Button color="secondary"  onClick={() => dispatch(likeItemSwitch())}>Back To Store</Button>
                </ModalFooter>
            </Modal>
      </div>
    )
}

export default LikeItem
