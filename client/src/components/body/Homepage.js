import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, addToCart, addSameItemToCart, addToLike } from '../../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagebody.css';
import { Icon } from "@blueprintjs/core";
import {UncontrolledCarousel,
        Card, CardText, CardBody,CardTitle, 
        CardSubtitle, Button, Container, Row, Col
        } from 'reactstrap';


function Ccc() {
    const dispatch = useDispatch();
    const searchItem = useSelector(state => state.searchItem);
    const itemDatas = useSelector(state => state.getItem);
    const cartExistingItems = useSelector(state => state.addToCart);
    const likeExistingItems = useSelector(state => state.addToLike);
    //filter by department
    const departmentDatas = itemDatas.item.filter(x => x)
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

    const carouselItems = [
        {
            src : 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            key: '1',
        },{
            src : 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            key: '2',
        },{
            src : 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            key: '3',
        }
    ]

    return (
        <React.Fragment>
        <div className="home-carousel">
            <UncontrolledCarousel items={carouselItems} className="home-carousel-img" />
        </div>
        <Container>
            <Row>
            {searchItemDatas.map(
                item =>(
                <Col lg={4} md={6} key={item._id} className="item-box">
                    <Card  className="item">
                        <div className="item-img">
                            {/* Like item btn */}
                            <button className="like-btn" onClick={()=>handleAddItemToLike(item)}>
                                <Icon icon="heart"/>
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
        </React.Fragment>
    )
}

export default Ccc
