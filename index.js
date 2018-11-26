const app = "I don't do much."

fetch('https://api.github.com/users/repos')
  .then(res => res.json())
  .then(json => console.log(json))
