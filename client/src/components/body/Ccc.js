import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../actions/index';
import {
        Card, CardImg, CardText, CardBody,CardTitle, 
        CardSubtitle, Button, Container, Row, Col
        } from 'reactstrap';

function Ccc() {
    const dispatch = useDispatch();
    const itemDatas = useSelector(state => state.getItem);

    // useEffect instead of componentdidmount
    useEffect(()=>{
        dispatch(getItem())
    },[]);

    return (
        <Container>
            <Row>
            {itemDatas.item.map(
                item =>(
                        <Col xl="4" sm="4" key={item._id}>
                            <Card body outline color="info">
                                <CardImg src={item.img} alt={item.name} />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardSubtitle>$ {item.price}</CardSubtitle>
                                        <Button>Button</Button>
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
