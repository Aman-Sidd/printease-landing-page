import React from "react";

export const TermsAndConditions = ({ data }) => {
  console.log("DATA:", data);
  return (
    <section id="terms-and-conditions">
      <div className="container">
        <h2>Terms and Conditions</h2>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
    </section>
  );
};
