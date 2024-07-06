let navbar = document.getElementById("nav");

const navplaceholder = document.getElementById("navplaceholder");

// set navbar width on resize
navbar.style.width=window.getComputedStyle(navplaceholder).width;
window.addEventListener("resize", () => {
    navbar.style.width=window.getComputedStyle(navplaceholder).width;
});

// set markdown to html converter
showdown.setOption('openLinksInNewWindow', true);
showdown.setOption('moreStyling', true);
showdown.setOption('ghCompatibleHeaderId', true);
const converter = new showdown.Converter();

// on page load
document.addEventListener('DOMContentLoaded', function() {
    // convert navigation menu markdown to html
    fetch("./doc-toc.md")
        .then(response => response.text())
        .then(data => {
            // convert mardown file to html format
            document.getElementById("nav").innerHTML = converter.makeHtml(data);
        });

    // convert content markdown to html
    fetch("./doc.md")
        .then(response => response.text())
        .then(data => {
            // convert mardown file to html format
            document.getElementById("content").innerHTML = converter.makeHtml(data);
            // set document title
            document.title = data.split("\n")[0].slice(2);
        });
});

// highlight all code blocks on content chanaged
observer = new MutationObserver(function(mutationsList, observer) {
    // highlight all code blocks
    hljs.highlightAll();
});

observer.observe(document.getElementById("content"), {characterData: false, childList: true, attributes: false});
