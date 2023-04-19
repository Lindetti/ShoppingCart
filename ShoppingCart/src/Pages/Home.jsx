import "./Home.css";
import {useEffect, useState} from "react";
import Modal from "../Components/Modal";


const Home = () => {
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState([]);

useEffect(() => {
fetch('https://fake-coffee-api.vercel.app/api')
.then((response) => response.json())
.then((data) => {
    setProducts(data);
})
}, []);

const addToCart = (product) => {
 setCart([...cart, product])
 setSelectedProduct([...selectedProduct, product]);
}

const showModalFunc = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

const deleteProduct = (productToDelete) => {
  const updatedCart = cart.filter((product) => product !== productToDelete);
  setCart(updatedCart);
  
  const updatedSelectedProduct = selectedProduct.filter(
    (product) => product !== productToDelete
  );
  setSelectedProduct(updatedSelectedProduct);
};

    return (
    <div className="home">
      <Modal showModalCart={isModalOpen} closeModalCart={closeModal} selectedProduct={selectedProduct} deleteProduct={deleteProduct} />
            <div className="cart-div">
           <button onClick={showModalFunc} className="cart">{cart.length}</button>
        </div>
        <div className="product-container">
      <div className="products-found">
        <p>{products.length} Product(s) found</p>
      </div>
      <div className="products">
      {products.map((product, key) => {
        return (
            <div key={key} className="product">
          <div className="imageDiv">
     <img src={product.image_url} alt="image" /> 
     <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.region}</p>
    </div>

          </div>
           <div className="product-title">
           {product.name} 
           </div>
           <div className="product-price">
           <p>$ <span className="price">{product.price} </span> </p>
           </div>
           <div className="addToCart">
            <button className="addToCartBtn" onClick={() => addToCart(product)}>Add to Cart</button>
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