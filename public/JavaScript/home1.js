function MenuButtons({ title}) {
    return (
      <div className="product-card">
        <div className="product-image">
          {/* <img src={silver} alt="Silver Product" /> */}
        </div>
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <div className="add-cart">
          <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }