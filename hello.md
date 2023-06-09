---
layout: default
page: hello
title: Hello GitHub
author: Dan Carroll
description: Hello GitHub page
---

<h1 class="display-1 fw-bold">Hello</h1>
<p class="text-center"><img src="{{ site.baseurl }}/assets/images/GitHub_Logo.png" alt="GitHub logo" width="50%"></p>
<h1 id="name" class="display-1 fw-bold text-end">Friends</h1>

<p class="text-center">
    Click the GitHub Image Above
</p>
<p class="text-center">
    <button>Change user</button>
</p>
<p>
  Learn some JavaScript at <a href="https://developer.mozilla.org/en-US/docs/Learn" alt="mdn web docs">MDN Web Docs</a> -- <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" alt="getting started with the web">Getting started with the web</a> -- <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" alt="javascript basics">Javascript basics</a>. The code for this page was in part from the Javascript Basics page. It is a good start for some interactive code for games.
</p>

<script>
    const myImage = document.querySelector("img");

    myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "{{ site.baseurl }}/assets/images/GitHub_Logo.png") {
        myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/github-mark.png");
        myImage.alt = "github mark";
        myImage.style.width = "50%";
    } else {
        myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/GitHub_Logo.png");
        myImage.setAttribute("alt", "github logo");
        myImage.setAttribute("width", "50%");
    }
    };

    let myButton = document.querySelector("button");
    let myHeading = document.getElementById("name");

    function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}`;
    }

</script>
