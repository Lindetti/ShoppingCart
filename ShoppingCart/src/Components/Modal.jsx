import "./Modal.css";

const Modal = ({showModalCart, closeModalCart, selectedProduct, deleteProduct}) => {
const showModalClassName = showModalCart ? "modal display-block" : "modal display-none";

let totalPrice = 0;
selectedProduct.forEach((product) => {
    totalPrice += product.price;
})

    return (
        <div className={showModalClassName}>
            <div className="modal">
            <div className="modal-content">
            <div className="cartAmount">
            <h2>Cart {selectedProduct.length} {selectedProduct.length === 1 ? "Product" : "Products"}</h2>
            </div>

          {selectedProduct.map((product, key) => (
            <div className="cartProducts" key={key}>
                <div className="close-icon-cart">
              <span  onClick={() => deleteProduct(product)} className="close-x-cart">&times;</span>
            </div>
            <div className="product-cart-info"> 
            <div className="image-product-name">
            <img src={product.image_url} alt="image" />
              <p>{product.name}</p>
            </div>
              <p className="modal-price">$ {product.price}</p>
              </div>
            </div>
          ))}
          {selectedProduct.length === 0 && <p>No items in cart</p>}
          <div className="totalPrice">
               <p>Subtotal</p>
               <p className="modal-price">{totalPrice}</p>
           </div>
            <div className="closeDiv">
            <div className="close-icon" onClick={closeModalCart}>
              <span className="close-x">&times;</span>
            </div>
        </div>
            </div>
            </div>
        </div>
    )
}

export default Modal;