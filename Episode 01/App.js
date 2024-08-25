import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "1" }, "I am Child Div"),
  React.createElement("h1", { key: "2" }, "H1 Tag"),
  React.createElement("h2", { key: "3" }, "h2 Tag"),
  React.createElement("p", { key: "4" }, "Paragraph"),
]);

const child = React.createElement("div", { id: "child2" }, [
  React.createElement("h1", { key: "1" }, "Hai I am Child2 h1 Tag"),
  React.createElement("p", { key: "2" }, "I am para"),
]);

// console.log(parent);
// console.log(child);

// React Functional Componenet

const Title = () => (
  <div>
    <h3> This is a functional component under the title component</h3>
    <h4>this is a h4 tag under the title tag</h4>
  </div>
);

// React Functional Componenet

const Headingcomponent = () => (
  <div>
    <h1>Before title component</h1>
    <Title />
    <h1>Calculation</h1>
    <h1>{1000 + 1000}</h1>
    {something}
    <h3>This is done componenet Composition</h3>
    <p>After Title component</p>
  </div>
);

// React Element nothing but java Script Element

const something = (
  <div>
    <h1> hai form something tag h1</h1>
    <h2> hai from something tag h2</h2>
  </div>
);

// Jsx (transpiled before it reaches the JS) - PARCEL - BABEL

//JSX => Babel Transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const Heading = <h1 id="heading"> Hai Manikanta</h1>;
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// root.render(child);
root.render(<Headingcomponent />);
