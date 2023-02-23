const iconMenu = document.getElementById("iconMenu");
const vehicle = document.getElementById("vehicle")
const spaceport = document.getElementById("spaceport")
const capsule = document.getElementById("capsule")
const mainVideo = document.getElementById("mainVideo")
const mainName = document.getElementById("mainName")
const description = document.getElementById("description")

const options = [vehicle, spaceport, capsule]
console.log(options);

const infoOptions = [
    {
      type: "vehicle",
      completeName: "LAUNCH VEHICLE",
      video: "/SpaceX Falcon Heavy- Elon Musk's Engineering Masterpiece.mp4",
      description: `A launch vehicle or carrier rocket is a 
      rocket-propelled vehicle used to carry a payload
      from Earth's surface to space, usually to Earth
      orbit or beyond. Our WEB-X carrier rocket is the
      most powerful in operation. Standing 150 metres
      tall, it's quite an awe-inspiring sight on the launch pad!`
    },
    {
        type: "spaceport",
        completeName: "SPACEPORT",
        video: "/El primer puerto espacial europeo.mp4",
        description: `A spaceport or cosmodrome is a site for launching (or
            receiving) spacecraft, by analogy to the seaport for ships
            or airport for aircraft. Based in the famous Cape
            Canaveral, our spaceport is ideally situated to take
            advantage of the Earth’s rotation for launch.`
    },
    {
        type: "capsule",
        completeName: "SPACE CAPSULE",
        video: "/y2mate.com - Inside SpaceXs Crew Dragon Capsule  Space Launch LIVE_720p.mp4",
        description: `A space capsule is an often-crewed spacecraft that uses
        a blunt-body reentry capsule to reenter the Earth's
        atmosphere without wings. Our capsule is where you'll
        spend your time during the flight. It includes a space
        gym, cinema, and plenty of other activities to keep you
        entertained.`
    },
]



iconMenu.addEventListener("click", () => {
    iconMenu.classList.toggle("open");
    menu.classList.toggle("inactive");
  });

  vehicle.addEventListener("click", selectedOption )
  spaceport.addEventListener("click", selectedOption)
  capsule.addEventListener("click", selectedOption)


function selectedOption (event) {
    

   options.map(element => {
   element.style.backgroundColor = "transparent"
   element.style.color = "#FFFFFF"

    
   })

event.target.style.backgroundColor = "#FFFFFF"
event.target.style.color = "black"




infoDeploy(event.target.id)


}

function infoDeploy (element) {
    infoOptions.forEach((option) => {
        if(option.type == element ) {
            mainName.textContent = option.completeName
            mainVideo.src = option.video
               
                   
            description.textContent = option.description 
            
            
            
            
        }
    } )
}

  