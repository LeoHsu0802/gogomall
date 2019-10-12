import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, addToCart, addSameItemToCart, addToLike } from '../../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagebody.css';
import { Icon } from "@blueprintjs/core";
import {
        Card, CardImg, CardText, CardBody,CardTitle, 
        CardSubtitle, Button, Container, Row, Col
        } from 'reactstrap';


function Ccc() {
    const dispatch = useDispatch();
    const searchItem = useSelector(state => state.searchItem);
    const itemDatas = useSelector(state => state.getItem);
    const cartExistingItems = useSelector(state => state.addToCart);
    const likeExistingItems = useSelector(state => state.addToLike);
    //filter by department
    const departmentDatas = itemDatas.item.filter(x => x.department === '3C')
    //Search Function
    const searchItemDatas = departmentDatas.filter(items => 
        {return items.name.toLowerCase().indexOf(searchItem) !== -1});
    //UseEffect instead of componentdidmount
    useEffect(()=>{
        dispatch(getItem())
    },[]);

    const handelAddItemToCart = (item) => {
        //handle the item already existing in the cart
        const cartExistingItem = cartExistingItems.filter(x => x._id === item._id)
        if(cartExistingItem.length > 0){
            dispatch(addSameItemToCart(item, item.unit = 1))
        }else{
            dispatch(addToCart(item, item.unit = 1))
        }
    };

    const handleAddItemToLike = (item) => {
        //handle the item already existing in the like list
        const likeExistingItem = likeExistingItems.filter(x => x._id === item._id)
        if(likeExistingItem.length > 0){
            //prepare write remove fun (if item already in like list)
            return
        }else{
            dispatch(addToLike(item))
        }
    };

    return (
        <Container className="item-container">
            <Row>
            {searchItemDatas.map(
                item =>(
                <Col lg={4} md={6} key={item._id}>
                    <Card  className="item">
                        <button className="like-btn" onClick={()=>handleAddItemToLike(item)}>
                            <Icon icon="heart"/>
                        </button>
                        <CardImg   src={item.img} alt={item.name} />
                            {/* Like item btn */}
                            
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                <CardSubtitle>${item.price}</CardSubtitle>
                                <CardText />
                                <Button onClick={()=>handelAddItemToCart(item)}
                                >Add to cart</Button>
                            </CardBody>
                    </Card>
                </Col> 
                )
             )}
            </Row>
        </Container>
    )
}

export default Ccc
