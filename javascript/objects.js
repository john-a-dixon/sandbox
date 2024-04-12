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


const actFactory = (number, title) => {
  return {
    number,
    title,
    sequences: []
  }
}

console.log(story.title);
story.title = "Sojourner's Odyssey";
console.log(story.title);

console.log(actFactory(1, "Test"));


console.log(Object.keys(story));