//Tänne kaikki frontti koodi ei main.js

document.getElementById("form-submit").addEventListener("click", loadInfo);

function loadInfo() {
    var username = document.getElementById("aligned-name").value;
    var country = document.getElementById("aligned-country").value;
    var message = document.getElementById("aligned-message").value;

    document.getElementById("demo").innerHTML = username;
    document.getElementById("demo").innerHTML = country;
    document.getElementById("demo").innerHTML = message;
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