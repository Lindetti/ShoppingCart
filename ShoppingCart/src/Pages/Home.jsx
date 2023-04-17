import "./Home.css";
import {useEffect, useState} from "react";

const Home = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
fetch('https://fake-coffee-api.vercel.app/api')
.then((response) => response.json())
.then((data) => {
    console.log(data);
    setProducts(data);
})
}, []);



    return (
    <div className="home">
        <div className="product-container">
      <div className="products-found">
        <p>{products.length} Product(s) found</p>
      </div>
      <div className="products">
      {products.map((items, key) => {
        return (
            <div key={key} className="product">
          <div className="imageDiv">
     <img src={items.image_url} alt="image" /> 
     <div className="product-info">
      <h3>{items.name}</h3>
      <p>{items.description}</p>
      <p>{items.region}</p>
    </div>

          </div>
           <div className="product-title">
           {items.name} 
           </div>
           <div className="product-price">
            {items.price} 
           </div>
           <div className="addToCart">
            <button className="addToCartBtn">Add to Cart</button>
           </div>
            </div>
        )
      })}
      </div>
      </div>
    </div>
    )
}

export default Home;