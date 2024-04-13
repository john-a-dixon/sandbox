// Basic instance of an object
const story = {
  _title: "Untitled",
  content: {
    _acts: [9],
    _parts: [],
    get acts() {
      return this._acts;
    },
    get parts() {
      return this._parts;
    }
  },
  structure: {
    _characters: []
  },

  set title(x) {
    this._title = x
  },
  get title() {
    return this._title
  }
};

// Demonstrating object factory
const actFactory = (number, title) => {
  return {
    number,
    title,
    sequences: []
  }
}

// Demonstrating reassigning properies via setters
console.log(story.title);
story.title = "Sojourner's Odyssey";
console.log(story.title);

console.log(actFactory(1, "Test"));

// Demonstrating .keys and .entries
console.log(Object.keys(story));
console.log(Object.entries(story.content));

// Demonstrated object seal
Object.seal(story);
delete story["content"];
console.log(story)
console.log(Object.isSealed(story));

// Demonstrated Object freeze
Object.freeze(story);
story.scene = "TEST";
console.log(story)
console.log(Object.isFrozen(story));

// Demonstrating hasOwn
console.log(Object.hasOwn(story, "scenes"));
console.log(Object.hasOwn(story, "content"));