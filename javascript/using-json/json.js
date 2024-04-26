const mockJSON = "{ \"book\": { \"name\": \"JSON Primer\", \"price\": 29.99, \"inStock\": true, \"rating\": null } }"

// From JSON string to JS object
const jsonObject = JSON.parse(mockJSON);
console.log(jsonObject);


// From JS object to JSON string
const jsObject = {
  test: {
    grades: [56, 56, 78],
    students: ["A", "B", "C"]
  }
}

const newJSON = JSON.stringify(jsObject);
console.log(newJSON);