let cardOfArr = [
  {
    img:"./img/element-list-background-with-coffee-pencil_23-2147660040.avif",
    title: "Todos Website",
    about: "Task managing web application to help user to stay organized for his on day to day basis. Tech stack - js and CSS",
    github: `https://github.com/shekhawatbhawani/Todos-List`,
    live : `https://todos-list-beta.vercel.app/`
  },
  {
    img: "./img/covid.jpeg",
    title: "Covid 19",
    about:
      "The COVID-19 API is an online service that provides real-time and historical data related to the COVID-19 pandemic",
    github: `https://github.com/shekhawatbhawani/covid-19-API`,
    live: `https://covid-19-api-eta.vercel.app/`,
  },
  {
    img: "./img/engJokesh.jpeg",
    title: "English Random Jokes",
    about:
      "If you're looking for a website that can give you more random jokes, here are a few you can check out:",
    github: `https://github.com/shekhawatbhawani/English-Random-Jokes`,
    live: `hindi-random-jokes.vercel.app`,
  },
  {
    img: "./img/fronted.webp",
    title: "Frontend-Practice",
    about:" a platform or concept related to improving web development skills, particularly on the front end. If you'd like to include an section for a Frontend Practice webpage.",
    github: `https://github.com/shekhawatbhawani/Frontend-Practice`,
    live: `frontend-practice-lime.vercel.app`,
  },
  {
    img: "./img/github.webp",
    title: "Github Profile Search",
    about:" You can refine your search by specific criteria, such as location, followers, programming languages, etc.",
    github: `https://github.com/shekhawatbhawani/Github-API`,
    live: `github-api-wheat-nine.vercel.app
`,
  },
  {
    img: "./img/guess.webp",
    title: "Number Guessing Game",
    about:" This is a number guessing game ",
    github: `https://github.com/shekhawatbhawani/Number-Guessing-Game-`,
    live: `number-guessing-game-nu-rouge.vercel.app

`,
  },
]

let allProjectContainer = document.querySelector(".all-projects")

cardOfArr.forEach(element =>{
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
            <img src= ${element.img} alt="" id="card-img">
            <div class="content">
              <p class="title">${element.title}</p>
              <p class="raj">${element.about}</p>
              <div class="buttons">
                <a href=${element.github}i class="fa-brands fa-square-github"></i
                  ></a>
                  <button>
                    <a href=${element.live} style="font-weight: bolder;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg></a>
                  </button>
              </div>
            </div>
  `

  allProjectContainer.append(card)
})