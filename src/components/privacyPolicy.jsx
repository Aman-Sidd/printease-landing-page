import React from "react";

export const PrivacyPolicy = ({ data }) => {
  return (
    <section id="privacy-policy">
      <div className="container">
        <h2>Privacy Policy</h2>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
    </section>
  );
};
