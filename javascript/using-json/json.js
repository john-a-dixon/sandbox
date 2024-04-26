const mockJSON = "{ \"book\": { \"name\": \"JSON Primer\", \"price\": 29.99, \"inStock\": true, \"rating\": null } }"

const jsonObject = JSON.parse(mockJSON);
console.log(jsonObject);