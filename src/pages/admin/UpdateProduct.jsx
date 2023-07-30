import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export const UpdateProduct = ({products, updateNewProduct}) => {
     const redirect = useNavigate();
     const { id } = useParams();

     const currentProduct = products?.find(product=> product.id===Number(id));
     
     const [data, setData] = useState(currentProduct)
     const onHandleChange = (event)=> {
          setData({
               ...data,
               [event.target.name]: event.target.value
          })
     }

     const updateProduct = () => {
          console.log(data);
          updateNewProduct(data)
          redirect('/admin/product')
     }
     return (
          <form id="updateProduct" 
               onSubmit={(event)=> {
                    event.preventDefault();
                    updateProduct()
               }}>
               <div className='form-group'>
                    <label htmlFor="product-name">Tên sản phẩm</label>
                    <input type="text" id="product-name" name='name' onChange={onHandleChange} defaultValue={currentProduct?.name}/>
               </div>
               <div className='form-group'>
                    <label htmlFor="product-price">Giá sản phẩm</label>
                    <input type="text" id="product-price" name='price' onChange={onHandleChange} defaultValue={currentProduct?.price}/>
               </div>
               <button>Them</button>
          </form>
     )
}
