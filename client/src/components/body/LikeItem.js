import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { likeItemSwitch, deleteLike } from '../../actions'
import './pagebody.css'

function LikeItem() {
    const dispatch = useDispatch();
    const addToLike = useSelector(state => state.addToLike)
    const likeItemSwitchIsOpen = useSelector(state => state.likeItemSwitch);

    return (
        <div>
            <Modal isOpen={likeItemSwitchIsOpen} toggle={() => dispatch(likeItemSwitch())} > 
                <ModalHeader>Your Like List</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr> 
                                <th>Item</th>  
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
  
                        <tbody>
                            {
                            addToLike.map(item =>
                                <tr key={item._id}>
                                    <td><img className="modal-item-img" src={item.img} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>  
                                    <td>
                                        <button 
                                        className="bp3-button bp3-minimal bp3-icon-small-cross" 
                                        onClick = {() => dispatch(deleteLike(item))}
                                        />
                                    </td>                        
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
