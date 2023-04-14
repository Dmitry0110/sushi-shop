import React from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <div className="flex-center mt-7">
      <h3>Благодарим за заказ,</h3>
      <h3> в скором времени с вами свяжется наш менеджер</h3>
      <Link to="/">
        {" "}
        <span className="btn blue">вернуться на главную </span>
      </Link>
      <h6>Это не настоящая страница оплаты.</h6>
      <h6>Сайт создан для демонстрации кода</h6>
    </div>
  );
};

export default OrderPage;
