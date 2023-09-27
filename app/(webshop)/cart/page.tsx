import Link from "next/link";
import React from "react";

const ShoppingCart = () => {
  return (
    <main>
      <h1>ShoppingCart</h1>
      <Link href="/checkout">Checkout</Link>
    </main>
  );
};

export default ShoppingCart;
