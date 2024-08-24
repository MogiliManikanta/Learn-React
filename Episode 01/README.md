# Episode 1
# Project Name

## Episode 01: Introduction to React

### Code Example


# Project Name

## Episode 01: Introduction to React

### HTML Structure

Below is the HTML structure used in this example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Episode 1</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"></div>
    <div id="root1"></div>

    <!-- Load React and ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Your custom JavaScript file -->
    <script src="index.js"></script>

    <!-- Inline JavaScript -->
    <script>
        const parent1 = document.createElement("div");
        parent1.innerText = "This is a div tag using JavaScript";
        document.getElementById("root1").appendChild(parent1);
    </script>
</body>
</html>
# javascript
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


## Output
I am Child Div
H1 Tag
h2 Tag
Paragraph
