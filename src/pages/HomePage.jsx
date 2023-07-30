import React, { useState } from 'react'
import { Header } from '../components';
import { Link } from 'react-router-dom';

export const HomePage = ({ data }) => {
     
     const products = data;
  return (
    <div>
          {
               
               products.map((product, index) => {
                    
                       return (
                         <li key={index+1}>
                              <a href={product.path}>{product.name}</a>
                              <Link to={ "/detail/" + product.id }>Chi tiet</Link>
                         </li>
                       )
               })
          }
    </div>
  )
}
