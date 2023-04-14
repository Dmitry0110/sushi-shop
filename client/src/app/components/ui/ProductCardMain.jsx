import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCardMain = ({ name, _id, price, img }) => {
  return (
    // <div className="row">
    <div className="col s2 m4">
      <div className="card">
        <div className="card-image">
          <img alt={name} src={img} width="50" height="160" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="card-content__header" id="height">
              {name}
            </p>
            {/* <p className="card-content__content">{`ID Товара: ${_id}`}</p> */}
            <p className="card-content__price">{`Цена: ${price}₽`}</p>
          </div>
          <div className="card-action" id="color">
            <Link to={`/product/${_id}`}>Открыть товар</Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

ProductCardMain.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
};

export default ProductCardMain;
