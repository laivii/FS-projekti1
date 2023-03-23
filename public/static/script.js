//Tänne kaikki frontti koodi ei main.js

document.getElementById("form-submit").addEventListener("click", loadInfo);

function loadInfo() {
    var username = document.getElementById("aligned-name").value;
    console.log(username);

    var country = document.getElementById("aligned-country").value;
    console.log(country);

    var message = document.getElementById("aligned-message").value;
    console.log(country);
}

function ajax(){
    var xhr = new XMLHttpRequest();
    var url = "/ajaxmessage";
    xhr.open("POST", url, true);
    xhr.setRequestHeader();
    xhr.onreadystatechange(function () {
        document.getElementById().innerHTML = xhr.response;
    });

    var data = JSON.stringify({
        "username" : username,
        "country" : country,
        "message" : message
    });

    xhr.send(data);
}