import React from "react";
import ReactDOM from "react-dom/client";

// this is JSX Element
const jsxHeading = <h1>Jai Ganeshaya Namaha !!!!</h1>;

//This is Functional Component in React
const FunctionalComponentHeader = () => (
  <div>
    {jsxHeading}
    <h1>Hello Sai Ganesh</h1>
  </div>
);

const HomeComponent = () => {
  return (
    <div>
      {jsxHeading} Home Component
      {FunctionalComponentHeader()}11
      <FunctionalComponentHeader />
      <FunctionalComponentHeader></FunctionalComponentHeader>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomeComponent />);
