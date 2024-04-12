// Basic instance of an object
const story = () => {
  return {
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
  
    set title(title) {
      this._title = title
    },
    get title() {
      return this._title
    }
  }
};


console.log(story.title);
story.title = "Sojourner's Odyssey";
console.log(story.title);