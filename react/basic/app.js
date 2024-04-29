const willBeListItems = ["A", "B", "C"];

const myElement = (
  <div id="myElement" className="myClass"> {/* Use className to add classes to JSX. */}
    <p>An element!</p> 
    <br /> {/* All self-closing tags must have a forward slash. */}
    <p>{9 + 1}</p> {/* All injected JS must be in curly braces. */}
  </div>
);