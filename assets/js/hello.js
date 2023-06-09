---
---

// script for use with the "hello" page

let myImage = document.querySelector("img");
let myButton = document.getElementById("setName");
let myHeading = document.getElementById("whoIsIt");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "{{ site.baseurl }}/assets/images/GitHub_Logo.png") {
        myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/github-mark.png");
        myImage.alt = "github mark";
        myImage.style.width = "35%";
    } else {
        myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/GitHub_Logo.png");
        myImage.alt = "github logo";
        myImage.style.width = "50%";
    }
}

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = storedName;
}

myButton.addEventListener("click", function() {
    setUserName();
});
