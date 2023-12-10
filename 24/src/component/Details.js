import React, {useContext} from 'react'
import { DataContext } from "./Context";
import { useParams } from 'react-router-dom';
import formatCurrency from '../util'


function Details() {

    const {id}  = useParams();

    const value = useContext(DataContext);
    const [products, setProducts] = value.products;

    const details = products.filter((product, index)=>{
        return product._id === id
    })

    console.log(details)


  return (
    <div>Details</div>
  )
}

export default Details