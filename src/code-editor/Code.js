export default class Code {
  constructor(formData) {
    this.id = this.createNewId();
    this.title = formData.title;
    this.description = formData.description;
    this.code = formData.code;
    this.language = formData.language;
    this.color = formData.color;
    this.likes = 0;
    this.isliked = false;
    this.comments = [];
    this.author = {
      username: formData.author.username,
      photourl: formData.author.photourl,
    };
  }

  createNewId() {
    if (!window.localStorage.codes) return 0;

    const codes = JSON.parse(window.localStorage.codes);
    const keys = Object.keys(codes);
    const lastKey = keys[keys.length - 1];
    return codes[lastKey].id + 1;
  }
}
