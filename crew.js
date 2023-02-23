const iconMenu = document.getElementById("iconMenu");
const commander = document.getElementById("commander")
const missionSpecialist = document.getElementById("mission")
const pilot = document.getElementById("pilot")
const flightEnginner = document.getElementById("enginner")
const role = document.getElementById("role")
const personalName = document.getElementById("personalName")
const personalInfo = document.getElementById("personalInfo")
const personalIMG = document.getElementById("personalImg")

const crewInfo = [
  {
    name: "DOUGLAS HURLEY",
    rol: "COMMANDER",
    img: "/assets/crew/image-douglas-hurley.png",
    personalInfo: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    name: "MARK SHUTTLEWORTH",
    rol: "MISSION SPECIALIST",
    img: "/assets/crew/image-mark-shuttleworth.png",
    personalInfo: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    name: "VICTOR GLOVER",
    rol: "PILOT",
    img: "/assets/crew/image-victor-glover.png",
    personalInfo: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
  },
  {
    name: "ANOUSHEH ANSARI",
    rol: "FLIGHT ENGINNER",
    img: "/assets/crew/image-anousheh-ansari.png",
    personalInfo: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
  },
]

function deployInfo(rol) {
  crewInfo.forEach((person) =>{
    if(person.rol == rol) {
      personalName.innerText = person.name
      role.textContent= person.rol
      personalInfo.innerText = person.personalInfo
      personalIMG.style.backgroundImage = `url(${person.img})`
    }
  })
}


iconMenu.addEventListener("click", () => {
    iconMenu.classList.toggle("open");
    menu.classList.toggle("inactive");
  });

  function showRole(event) {
  
  
    if (commander.style.backgroundColor !== "#979797") {
      commander.style.backgroundColor = "#979797";
    }
    if (missionSpecialist.style.backgroundColor !== "#979797") {
      missionSpecialist.style.backgroundColor = "#979797";
    }
    if (pilot.style.backgroundColor !== "#979797") {
      pilot.style.backgroundColor = "#979797";
    }
    if (flightEnginner.style.backgroundColor !== "#979797") {
      flightEnginner.style.backgroundColor = "#979797";
    }
    commander.style.backgroundColor = "#979797";
    event.target.style.backgroundColor = "#FFFFFF";

    deployInfo(event.target.innerHTML)
    
    console.log("exito");
  }

  commander.addEventListener("click", showRole)
  missionSpecialist.addEventListener("click", showRole)
  pilot.addEventListener("click", showRole)
  flightEnginner.addEventListener("click", showRole)