//render track
//start race with button click
//trigger move every second - setInterval()
//move tortoise randomly - Math.random()
//move hare randomly
//fix position if they go beyond the range (0-70)
//render track with new positions
//when one of animals reach 70+, show result message

const TRACK_LENGTH = 70 //sometimes const variables are all caps
const startBtn = document.getElementById("startBtn")
const messageEl = document.getElementById("message")
const trackEl = document.getElementById("track")

let tortoisePosition = 1
let harePosition = 1
let raceIntervalId = null
let stepCount = 0

startBtn.addEventListener("click", startRace)

function startRace(){
    messageEl.textContent = "BANG!!! AND THEY ARE OFF!"
    startBtn.disabled = true

    if (raceIntervalId !== null){ //avoid double tracks
        clearInterval(raceIntervalId)
    }
    raceIntervalId = setInterval(raceStep, 1000)
}

function raceStep(){
   stepCount+= 1
   moveTortoise() 
   moveHare()
   clampPositions()
   if (tortoisePosition>= TRACK_LENGTH || harePosition >= TRACK_LENGTH){
    clearInterval(raceIntervalId)
    raceIntervalId = null
    showResult()
    startBtn.disabled = false
}
   renderTrack()
}

function moveTortoise(){
    let roll = Math.floor(Math.random()*10)+1
//1-5 fast plod
    if (roll >=1 && roll<=5){
        tortoisePosition+=4
    } else if (roll>=6 && roll<=7){
        //6-7 slip
        tortoisePosition-=5
    } else {
        //8-10 slow plod
        tortoisePosition+=1
    }
}

function moveHare(){
    let roll = Math.floor(Math.random()*10)+1
    if (roll<=1 && roll<=4){
        //1-4 slow plod
        harePosition+=4
    } else if (roll>=5 && roll<=6){
        //5-6 small hop
        harePosition+=1
    } else if (roll>=7 && roll<=8){
        //7-8 big hop
        harePosition+=8
    } else {
        harePosition-=2
    }
}

function clampPositions(){
    tortoisePosition = Math.min(TRACK_LENGTH, Math.max(1, tortoisePosition))
    harePosition = Math.min(TRACK_LENGTH, Math.max(1, harePosition))
}

function renderTrack(){
    trackEl.innerHTML = ""

    for (let i=1; i<=TRACK_LENGTH; i++){
        let cell = document.createElement("div")
        cell.classList.add("cell")
        let isTortoiseHere = tortoisePosition === i
        let isHareHere = harePosition === i
        if(isTortoiseHere&& isHareHere){
            cell.classList.add("both")
            cell.textContent = "🔥"
    } else if (isTortoiseHere){
        cell.classList.add("tortoise")
        cell.textContent = "🐢"
    } else if (isHareHere){
        cell.classList.add("hare")
        cell.textContent = "🐇"
    }
    trackEl.appendChild(cell)
}
}

function showResult(){
    if(tortoisePosition>= TRACK_LENGTH && harePosition >= TRACK_LENGTH){
        messageEl.textContent = "It's a tie"
    } else if (tortoisePosition >= TRACK_LENGTH){
        messageEl.textContent = "TORTOISE WINS!"
    } else if (harePosition >= TRACK_LENGTH){
        messageEl.textContent = "HARE WINS!"
    } else {
        messageEl.textContent = "Race stopped..."
    }
}

//initial render empty track
renderTrack()