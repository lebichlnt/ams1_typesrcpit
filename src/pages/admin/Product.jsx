import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ products , removeProduct}) => {
	
	const deleteProduct = (id) =>{
		removeProduct(id);
	}

  return (

    <div>
      	<Link to={`/admin/product/add`}><button>Thêm sản phẩm</button></Link>
      	<table>
			<thead>
				<tr>
					<td>#</td>
					<td>Product Name</td>
					<td>Price</td>
					<td>Action</td>
				</tr>
			</thead>
			
			<tbody>
				{
					products.map((product, index) => {
						return (
							<tr key={index+1}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>
									<Link to={`/admin/product/update/${product.id}`}><button>update</button></Link>
									<button onClick={()=> {deleteProduct(product?.id)}}>Delete</button>
								</td>
							</tr>
						)
					})
				}
			</tbody>
      	</table>
    </div>
  )
}
