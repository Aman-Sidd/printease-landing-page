import React from "react";

export const ShippingPolicy = ({ data }) => {
  return (
    <section id="shipping-policy">
      <div className="container">
        <h2>Shipping Policy</h2>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
    </section>
  );
};
