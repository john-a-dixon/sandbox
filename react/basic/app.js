const willBeListItems = ["A", "B", "C"];

const myElement = (
  <div id="myElement" className="myClass"> {/* Use className to add classes to JSX. */}
    <p>An element!</p> 
    <br /> {/* All self-closing tags must have a forward slash. */}
    <p>{9 + 1}</p> {/* All injected JS must be in curly braces. */}
    <p>{true ? "This is true" : "This is false"}</p> {/* Ternary operations can be used in injected JS but not if statements. */}
    {true && <p>"This is another option."</p>} {/* Can use this as well in place of ternary operations. */}
    <button onClick={() => console.log("Click")}></button> {/* All events listeners are camel case. */}
  </div>
);