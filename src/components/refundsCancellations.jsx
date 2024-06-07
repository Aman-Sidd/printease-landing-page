import React from "react";

export const RefundsCancellation = ({ data }) => {
  return (
    <section id="refunds-cancellation">
      <div className="container">
        <h2>Refunds and Cancellation Policy</h2>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
    </section>
  );
};
