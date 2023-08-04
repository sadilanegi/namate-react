//what if we want to create nested element inside react
//then we will have to use React.createElement as the third parameter which create a
//a child element.lets see the same in the below code

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div>

ReactELement(Object)=> HTML (Browser Understands) */}



const parent = React.createElement(
    "div",
    {id:"parent"},     
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm h2 tag"
                )
            ]
        )
    ]
);

console.log(parent) 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 
