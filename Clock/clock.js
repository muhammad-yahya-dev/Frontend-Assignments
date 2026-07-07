const body = document.querySelector("body");
const hourHand = document.querySelector(".hand.hour");
const minuteHand = document.querySelector(".hand.minute");
const secondHand = document.querySelector(".hand.second");
const modSwitch = document.querySelector(".mod-switch"); 

if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modSwitch.textContent = "Light Mode";
} else {
    modSwitch.textContent = "Dark Mode"; 
}

modSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isdark = body.classList.contains("dark");
    modSwitch.textContent = isdark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isdark ? "Dark Mode" : "Light Mode");
});

const updatetime = () => {
    let date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    const secToDeg = currentSeconds * 6;
    const minToDeg = (currentMinutes * 6) + (currentSeconds / 60) * 6;
    const hrToDeg = (currentHours % 12) * 30 + (currentMinutes / 60) * 30;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

updatetime();

setInterval(updatetime, 1000);