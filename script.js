let cardOfArr = [
  {
    img: "./img/trevels.jpeg",
    title: "Travel Website",
    about: "This is travel website",
    github: `https://github.com/shekhawatbhawani/Trevels-Website`,
    live: `https://trevels-website.vercel.app`,
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
    live: `https://hindi-random-jokes.vercel.app`,
  },
  {
    img: "./img/dic.webp",
    title: "Dictionary",
    about:
      "A comprehensive resource providing definitions, meanings, and usage examples of words in the English language to help improve vocabulary and language skills.",
    github: `https://github.com/shekhawatbhawani/Dictionary`,
    live: `https://dictionary-eight-smoky.vercel.app`,
  },
  {
    img: "./img/github.webp",
    title: "Github Profile Search",
    about:
      " You can refine your search by specific criteria, such as location, followers, programming languages, etc.",
    github: `https://github.com/shekhawatbhawani/Github-API`,
    live: `https://github-api-wheat-nine.vercel.app`,
  },
  {
    img: "./img/guess.webp",
    title: "Number Guessing Game",
    about: " This is a number guessing game ",
    github: `https://github.com/shekhawatbhawani/Number-Guessing-Game-`,
    live: `https://number-guessing-game-nu-rouge.vercel.app`,
  },
];

let allProjectContainer = document.querySelector(".all-projects");

cardOfArr.forEach((element) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
            <img src= ${element.img} alt="" id="card-img">
            <div class="content">
              <p class="title">${element.title}</p>
              <p class="raj">${element.about}</p>
              <div class="buttons">
                <a href=${element.github} target="_blank"><i class="fa-brands fa-square-github"></i
                  </a>
                  <button>
                    <a href=${element.live} style="font-weight: bolder;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg></a>
                  </button>
              </div>
            </div>
  `;

  allProjectContainer.append(card);
});

const raj = document.getElementById("ul");
function toggle() {
  raj.classList.toggle("none");
}
