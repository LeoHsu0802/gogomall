import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagebody.css';
import {
        Card, CardImg, CardText, CardBody,CardTitle, 
        CardSubtitle, Button, Container, Row, Col
        } from 'reactstrap';
function Ccc() {
    const dispatch = useDispatch();
    const searchItem = useSelector(state => state.searchItem)
    const itemDatas = useSelector(state => state.getItem);
    const departmentDatas = itemDatas.item.filter(x => x.department === '3C')
    //Search Function
    const searchItemDatas = departmentDatas.filter(items => 
        {return items.name.toLowerCase().indexOf(searchItem) !== -1});
    //UseEffect instead of componentdidmount
    useEffect(()=>{
        dispatch(getItem())
    },[]);

    return (
        <Container className="item-container">
            <Row>
            {searchItemDatas.map(
                item =>(
                        <Col lg={4} md={6} key={item._id}>
                            <Card  className="item">
                                <CardImg   src={item.img} alt={item.name} />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardSubtitle>${item.price}</CardSubtitle>
                                        <CardText />
                                        <Button>Add to cart</Button>
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
