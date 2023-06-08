---
layout: default
page: hello
title: Hello GitHub
author: Dan Carroll
description: Hello GitHub page
---

<h1 class="display-1 fw-bold">Hello</h1>
<img class="img-fluid" src="{{ site.baseurl }}/assets/images/GitHub_Logo.png" alt="GitHub logo">
<h6 class="text-center">Click Image Above</h6>
<h1 class="display-1 fw-bold text-end">Friends</h1>


<p>
  Learn some JavaScript at <a href="https://developer.mozilla.org/en-US/docs/Learn" alt="mdn web docs">MDN Web Docs</a> -- <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" alt="getting started with the web">Getting started with the web</a> -- <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" alt="javascript basics">Javascript basics</a>
</p>

<script>
    const myImage = document.querySelector("img");

    myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "{{ site.baseurl }}/assets/images/GitHub_Logo.png") {
        myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/github-mark.png");
    } else {
        myImage.setAttribute("src", "{{ site.baseurl }}/assets/images/GitHub_Logo.png");
    }
    };

</script>
