const iconMenu = document.getElementById("iconMenu");
const menu = document.getElementById("menu");
const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");
const planetName = document.querySelector("#planetName");
const planetDescription = document.querySelector("#descriptionPlanet");
const totalDistance = document.querySelector("#totalDistance");
const totalEstimated = document.querySelector("#totalEstimated");
const planetIMG = document.querySelector("#planet");
const planetsInfo = [
  {
    planet: "MOON",
    img: "(/assets/destination/image-moon.png)",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.!",
    averageDistance: "384,400 KM",
    estimatedTravelTime: "3 DAYS",
  },
  {
    planet: "MARS",
    img: "(/assets/destination/image-mars.png)",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!!",
    averageDistance: "225 MIL. KM",
    estimatedTravelTime: "9 MONTS",
  },
  {
    planet: "EUROPA",
    img: "(/assets/destination/image-europa.png)",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.pa!",
    averageDistance: "384,402 KM",
    estimatedTravelTime: "3 YEARS",
  },
  {
    planet: "TITAN",
    img: "(/assets/destination/image-titan.png)",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.tan!",
    averageDistance: "384,410 KM",
    estimatedTravelTime: "7 YEARS",
  },
];

function setInfo(value) {
  planetName.innerHTML = value;
}

function deployInfo(planet) {
  planetsInfo.forEach((element) => {
    if (element.planet == planet) {
      planetName.innerHTML = element.planet;
      planetDescription.innerHTML = element.description;
      totalDistance.innerHTML = element.averageDistance;
      totalEstimated.innerHTML = element.estimatedTravelTime;
      planetIMG.style.backgroundImage = `url${element.img}`;
    }
  });
}

function showPlanet(event) {
  
  
  if (moon.style.borderBottom !== "") {
    moon.style.borderBottom = "";
  }
  if (mars.style.borderBottom !== "") {
    mars.style.borderBottom = "";
  }
  if (europa.style.borderBottom !== "") {
    europa.style.borderBottom = "";
  }
  if (titan.style.borderBottom !== "") {
    titan.style.borderBottom = "";
  }
  moon.style.borderBottom = "3px solid transparent";
  event.target.style.borderBottom = "3px solid #FFFFFF";
  
  deployInfo(event.target.innerHTML);

  console.log(event.target.innerHTML);
}

moon.addEventListener("click", showPlanet);
mars.addEventListener("click", showPlanet);
europa.addEventListener("click", showPlanet);
titan.addEventListener("click", showPlanet);

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("open");
  menu.classList.toggle("inactive");
});
