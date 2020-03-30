import React from "react";

const Contact = props => {
  setTimeout(() => {
    props.history.push("./about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="centre">You're now in Contact</h4>
    </div>
  );
};

export default Contact;
