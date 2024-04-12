// Basic instance of an object
const story = {
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
  }
};

console.log(story.content.acts);