import React, { useState, Redirect } from 'react'
import { useNavigate } from 'react-router-dom'
export const AddProduct = ({ addNewProduct }) => {
     const redirect = useNavigate();
     const [data, setData] = useState({})

     const onHandleChange = (event) => {
          setData({
               ...data, 
               [event.target.name]: event.target.value
          })
          
     }
     const addProduct = () => {
          addNewProduct(data);
          redirect('/admin/product')
     }
  return (
     <form id="addProduct" 
          onSubmit={(event)=> {
               event.preventDefault()
               addProduct()
          }}>
     <div className="form-group">
          <label htmlFor="product-name">Tên sản phẩm</label>
          <input type="text" id="product-name" name="name" onChange={onHandleChange}/>
     </div>
     <div className="form-group">
          <label htmlFor="product-price">Giá sản phẩm</label>
          <input type="number" id="product-price" name="price" onChange={onHandleChange}/>
     </div>
     <button>Thêm</button>
</form>
  )
}
