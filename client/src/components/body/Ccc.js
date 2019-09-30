import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../actions/index';

function Ccc() {
    const dispatch = useDispatch();
    const itemDatas = useSelector(state => state.getItem);
    const items = itemDatas.item

    // useEffect instead of componentdidmount
    useEffect(()=>{
        dispatch(getItem())
    },[]);
    console.log(itemDatas)




    return (
        <div> 
            <div>
                <h1>OKK</h1>
            </div>
        </div>
    )
}

export default Ccc
