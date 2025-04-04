let cardOfArr = [
  {
    img: "https://imgs.search.brave.com/JUob_1Uo3DQUmQ0cEaE6X4K9HF5-VV5AaHvLLz8Y9w0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL29ubGlu/ZS1lY29tbWVyY2Ut/d2Vic2l0ZS1zdG9y/ZS1zaG9wcGluZy00/NTB3LTI0OTQ2ODEw/MzcuanBn",
    title: "Ayurvedia E-commerce Website",
    about: "Ayurvedia is an e-commerce platform for Ayurvedic products, offering secure ordering, authentication, and a responsive design.",
    live: "https://e-commerce-website-gamma-woad.vercel.app/",
  }
  ,
  {
    img: "./img/foodwebsite.webp", // Updated image for Food Website
    title: "Food Website",
    about: "A website dedicated to delicious food recipes and culinary inspiration.",
    github: `https://github.com/shekhawatbhawani/Food-Website-`,
    live: `https://food-website-eight-opal.vercel.app/`,
  },
  {
    img: "./img/job.jpg", // Updated image for Job App
    title: "Job App",
    about: "A platform to search and apply for jobs efficiently.",
    github: `https://github.com/shekhawatbhawani/Job-App-`,
    live: `https://job-app-steel-eta.vercel.app/`,
  },
  {
    img: "./img/github.webp",
    title: "Github Profile Search",
    about:
      "You can refine your search by specific criteria, such as location, followers, programming languages, etc.",
    github: `https://github.com/shekhawatbhawani/Github-API`,
    live: `https://github-api-wheat-nine.vercel.app`,
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



