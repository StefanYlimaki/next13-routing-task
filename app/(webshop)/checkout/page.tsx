import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
  return (
    <main>
      <h1>CheckoutPage</h1>
      <Link href="/order/myOrder">Confirm Order</Link>
    </main>
  );
};

export default CheckoutPage;
