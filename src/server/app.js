import express from "express";
const app = express();
app.use(express.json());

const codes = [
  {
    author: {
      username: "Daniel Ben",
      photourl: "https://github.com/daniel-ben.png?size=32",
    },
    code: "console.log('hello world')",
    color: "#1e3cd2",
    comments: [],
    description: "Say hello to the world",
    id: 0,
    isliked: false,
    language: "Javascript",
    likes: 0,
    title: "First javascript code",
  },
  {
    author: {
      username: "Daniel Ben",
      photourl: "https://github.com/daniel-ben.png?size=32",
    },
    code: "def findGCD(big_num, small_num):\n\n    if big_num < small_num:\n        big_num, small_num = small_num, big_num\n    \n    if small_num == 0:\n        return big_num\n    elif big_num % small_num == 0:\n        return small_num\n    else:\n        return findGCD(small_num, big_num % small_num)",
    color: "#d2991e",
    comments: [],
    description: "Returns the greater common divider between two numbers",
    id: 1,
    isliked: false,
    language: "Python",
    likes: 0,
    title: "Euclide's algorithm .py",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Connected");
});

// CODE
app.get("/codes", (req, res) => {
  res.status(200).json(getCodes());
});

function getCodes() {
  return codes;
}

app.get("/codes/:id", (req, res) => {
  const { id } = req.params;
  const code = getCodeById(id);
  res.status(200).json(code);
});

function getCodeById(id) {
  return codes.find((code) => code.id === parseInt(id));
}

app.post("/codes", (req, res) => {
  postCode(req.body);
  res.status(201).json("new code created");
});

function postCode(code) {
  codes.push(code);
}

app.put("/codes/:id", (req, res) => {
  const { id } = req.params;
  const code = req.body;
  updateCode(id, code);
  res.status(200).send("code updated");
});

function getCodeIndexById(id) {
  return codes.findIndex((code) => code.id === parseInt(id));
}

function updateCode(id, code) {
  const index = getCodeIndexById(id);
  codes[index] = code;
  console.log(codes)
}

app.delete("/codes/:id", (req, res) => {
  const { id } = req.params;
  deleteCode(id);
  res.send("code deleted");
});

function deleteCode(id) {
  const index = getCodeIndexById(id);
  codes.splice(index, 1);
}
// CODE

export default app;