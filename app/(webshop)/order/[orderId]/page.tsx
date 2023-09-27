import React from "react";

const ConfirmOrderPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <main>
      <h1>ConfirmOrderPage for {params.orderId}</h1>
    </main>
  );
};

export default ConfirmOrderPage;
