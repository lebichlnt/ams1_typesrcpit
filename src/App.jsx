import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HomePage, Detail, NotFound, Dashboard, Product, AddProduct, UpdateProduct  } from './pages';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addNewProduct = (product) =>{
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    .then(()=> {
      setProducts(products.push(product));
      window.location.href = "/admin/product"
    })
  }
  
  const updateNewProduct = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then((res)=> res.json())
    .then(data => {
      const newData = products.map((product) => product.id == data.id ? data : product)
      setProducts(newData)
    })
  }

  const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {method: 'DELETE'})
      .then(() =>{
        setProducts(products.filter(product => product.id !== Number(id)))
      })
  }



  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage data={products} />} />
        <Route path="/detail/:id" element={<Detail products={products} />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product products={products} removeProduct={removeProduct}/>} />
        <Route path="/admin/product/add" element={<AddProduct addNewProduct={addNewProduct}/>} />
        <Route path="/admin/product/update/:id" element={<UpdateProduct products={products} updateNewProduct={updateNewProduct}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App