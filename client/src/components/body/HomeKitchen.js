import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, addToCart, addSameItemToCart, addToLike, deleteLike } from '../../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagebody.css';
import { Icon} from "@blueprintjs/core";
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
    // const redLikeBtn = likeExistingItems.map(x => x.redLikeBtn)
    //Filter by department
    const departmentDatas = itemDatas.item.filter(x => x.department === 'Home&Kitchen')
    //Search Function
    const searchItemDatas = departmentDatas.filter(items => 
        {return items.name.toLowerCase().indexOf(searchItem) !== -1});

    //UseEffect instead of componentdidmount
    useEffect(()=>{
        dispatch(getItem())
    },[]);

    //handle the item already existing in the cart, if item already in cart when user clicking 
    //AddToCart item unit will plus 1,else add item to cart
    const handelAddItemToCart = (item) => {
        const cartExistingItem = cartExistingItems.filter(x => x._id === item._id)
        if(cartExistingItem.length > 0){
            dispatch(addSameItemToCart(item, item.unit = 1))
        }else{
            dispatch(addToCart(item, item.unit = 1))
        }
    };

    //handle the item already existing in the like list, if item already in like list while click again, 
    //remove the item from list, else add item to like list
    const handleAddItemToLike = (item) => {
        const likeExistingItem = likeExistingItems.filter(x => x._id === item._id)
        if(likeExistingItem.length > 0){
            dispatch(deleteLike(item))
        }else{
            dispatch(addToLike(item, item.redLikeBtn = true))
        }
    };
    
    // if item in like list, the heart btu will turn red (by change className)
    const heartTurnRed = (item) => {
        const IdInLikeList = likeExistingItems.map(x => x._id)
        if (IdInLikeList.indexOf(item._id) > -1){
            return "red-heart-icon"
        }else{
            return "normal-heart-icon"
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
                            {/* Like item btn with heart icon*/}
                            <button className="like-btn" onClick={()=>handleAddItemToLike(item)}>
                                <Icon icon="heart" className={heartTurnRed(item)} />
                            </button>
                            {/* item Img */}
                            <img   src={item.img} alt={item.name} />
                        </div>
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                <CardSubtitle>${item.price}</CardSubtitle>
                                <CardText />
                                <Button onClick={()=>handelAddItemToCart(item)}>
                                    Add to cart
                                </Button>
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
