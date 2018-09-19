let url;

function sendUrlToHook(webhook){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", webhook);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "content": url
    }))
}

function createButtons(){
    let btn2 = document.createElement("BUTTON");
    btn2.classList.toggle("btn");
    btn2.classList.toggle("btn-primary");
    btn2.appendChild(document.createTextNode("HC Link Share"));
    document.body.appendChild(btn2);
    btn2.onclick = function() {
        sendUrlToHook("https://canary.discordapp.com/api/webhooks/492055862542860308/3uItZdWt0uwP4iLzUl7KzziXXVYXfp-kVhcJtqteRJtRDVfAsbm4ojO-FWuo_cyfxZat");
    }
    let button = document.createElement("BUTTON");
    button.classList.toggle("btn");
    button.classList.toggle("btn-primary");
    button.appendChild(document.createTextNode("Author"));
    document.body.appendChild(button);
    button.onclick = function() {
        alert("Created by Lala Sabathil <admin@latias.eu>");
    }
}

window.onload = function(){
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
        url = tabs[0].url;
        console.log(url);
        
        createButtons();
    })
}