import React,{ useState } from 'react';
import './pagebody.css';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, logInSwitch } from '../../actions/index';

function AddNewItem() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemImg, setItemImg] = useState("");
    const [itemDepartment, setItemDepartment] = useState("");
    const [itemAddSuccessMsg, setItemAddSuccessMsg] = useState(false);

    const handelSubmit = (e) => {
        e.preventDefault()
        if(itemName && itemPrice && itemImg && itemDepartment !== "" && auth.isAuthenticated){
            dispatch(addItem({
                name: itemName,
                price: itemPrice,
                img: itemImg,
                department: itemDepartment
                })
            );
            setItemAddSuccessMsg(true)
            window.setTimeout(()=>{
                setItemAddSuccessMsg(false)
            },3000)
        }else
            dispatch(logInSwitch())
            
    }

    return (
        <Form className="additem-box" onSubmit={handelSubmit}>
            <FormGroup>
            <Alert color="success" isOpen={itemAddSuccessMsg} >Add Item Success!</Alert>
            <Label >Item Name</Label>
                <Input 
                    name="itemName" 
                    placeholder="Enter item name..." 
                    onChange={(e) => setItemName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Item Price</Label>
                <Input 
                    name="itemPrice"  
                    type="number"
                    placeholder="Enter item price..." 
                    onChange={(e) => setItemPrice(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Item img url</Label>
                <Input 
                    name="itemImg"  
                    placeholder="Enter item img url..." 
                    onChange={(e) => setItemImg(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Item department</Label>
                <Input 
                    type="select" 
                    name="departmentSelect"
                    onChange={(e) => setItemDepartment(e.target.value)}
                >
                    <option value="" disabled selected>Select item department</option>
                    <option>3C</option>
                    <option>Fashion</option>
                    <option>Home&Kitchen</option>
                </Input>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}

export default AddNewItem
