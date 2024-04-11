// Basic instance of an object
const story = {
  acts: [1, 2, 3],
  characters: ["Michael", "Lozen"]
}

// Mutating the object
story["title"] = "Sojourner's Odyssey";

// Nested objects

const acts = {
  sequences: [1, 2, 3, 4, 5],
  settings: ["A", "B", "C"]
}

story["acts"] = acts

console.log(story);

// Iterating through objects
for(let sequence in story.acts) {
  console.log(story["acts"][sequence]);
}