import ReactDOM from "react-dom/client";

const Value = () =>{
    return(
        <div id="1">
        <div id="2">
          <h1 >Heading</h1>
          <h1>Heading</h1>
        </div>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(Value())
