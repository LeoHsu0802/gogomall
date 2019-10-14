import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, addToCart, addSameItemToCart, addToLike, deleteLike } from '../../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagebody.css';
import { Icon, Intent } from "@blueprintjs/core";
import {
        Card, CardText, CardBody,CardTitle, 
        CardSubtitle, Button, Container, Row, Col
        } from 'reactstrap';


function Ccc() {
    const dispatch = useDispatch();
    const searchItem = useSelector(state => state.searchItem);
    const itemDatas = useSelector(state => state.getItem);
    const cartExistingItems = useSelector(state => state.addToCart);
    const likeExistingItems = useSelector(state => state.addToLike);
    //Set like button state (let heart turn red)
    const redLikeBtn = likeExistingItems.map(x => x.redLikeBtn)
    //Filter by department
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
        console.log(redLikeBtn)
        //handle the item already existing in the like list
        const likeExistingItem = likeExistingItems.filter(x => x._id === item._id)
        if(likeExistingItem.length > 0){
            //if item already in like list while click again, remove the item 
            //and change heart button color
            dispatch(deleteLike(item))
        }else{
            dispatch(addToLike(item, item.redLikeBtn = true))
        }
    };


    return (
        <Container>
            <Row>
            {searchItemDatas.map(
                item =>(
                <Col lg={4} md={6} key={item._id} className="item-box">
                    <Card  className="item">
                        <div className="item-img">

                            {/* Like item btn */}
                            <button 
                            className="like-btn"
                            onClick={()=>handleAddItemToLike(item)}
                            >
                                <Icon icon="heart" intent={ redLikeBtn[0] ? Intent.DANGER : Intent.NONE} />
                            </button>

                            {/* item Img */}
                            <img   src={item.img} alt={item.name} />
                        </div>
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
