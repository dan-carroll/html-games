// script for use with the "hello" page

const myImage = document.querySelector("img");

myImage.onclick = () => {
const mySrc = myImage.getAttribute("src");
if (mySrc === "{{ site.baseurl }}/assets/images/GitHub_Logo.png") {
    myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/github-mark.png");
    myImage.alt = "github mark";
    myImage.style.width = "35%";
} else {
    myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/GitHub_Logo.png");
    myImage.alt = "github logo";
    myImage.style.width = "50%";
}
};

let myButton = document.querySelector("button");
let myHeading = document.getElementById("whoIsIt");

function setUserName() {
const myName = prompt("Please enter your name.");
if (!myName) {
    setUserName();
} else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}`;
}
}

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `${storedName}`;
}

myButton.onclick = () => {
setUserName();
};
