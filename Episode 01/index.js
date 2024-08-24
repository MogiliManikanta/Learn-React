const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "1" }, "I am Child Div"),
    React.createElement("h1", { key: "2" }, "H1 Tag"),
    React.createElement("h2", { key: "3" }, "h2 Tag"),
    React.createElement("p", { key: "4" }, "Paragraph")
]);

const child = React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "1" }, "Hai I am Child2 h1 Tag"),
    React.createElement("p", { key: "2" }, "I am para")
]);

console.log(parent);
console.log(child);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
root.render(child);
