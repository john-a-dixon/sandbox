// Basic instance of an object
const story = {
  acts: [1, 2, 3],
  characters: ["Michael", "Lozen"]
}

// Mutating the object
story["title"] = "Sojourner's Odyssey";

// Nested objects

const acts = {
  sequences: [1, 2, 3, 4, 5]
}

story["acts"] = acts

console.log(story);

