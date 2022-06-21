export const mockDB = {
    0: {
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
    1: {
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
      title: "Euclide's algorithm.py",
    },
  };