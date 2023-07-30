import React from 'react'
import { useParams } from 'react-router-dom'
export const Detail = ({products}) => {

    const { id } = useParams()

    const product = products.find(product => product.id === Number(id))
	
  return (
    <>
    <table border="1">
		<thead>
			<tr>
				<td>id</td>
				<td>name</td>
				<td>price</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{product?.id}</td>
				<td>{product?.name}</td>
				<td>{product?.price}</td>
			</tr>
		</tbody>
	</table>
    </>
  )
}
