export default class Code {
  constructor(title, description, code, language, color, user) {
    this.id = this.createNewId();
    this.title = title;
    this.description = description;
    this.code = code;
    this.language = language;
    this.color = color;
    this.likes = 0;
    this.isliked = false;
    this.comments = [];
    this.author = {
      username: user.username,
      photourl: user.photourl,
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
