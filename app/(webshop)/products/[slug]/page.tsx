import React from "react";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  return <main>ProductPage for {params.slug}</main>;
};

export default ProductPage;
