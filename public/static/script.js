//Tänne kaikki frontti koodi ei main.js
document.getElementById("form-submit").addEventListener("click", ajaxmessage);

function ajaxmessage(){
    //Getting values
    let username = document.getElementById("aligned-name").value;
    let country = document.getElementById("aligned-country").value;
    let message = document.getElementById("aligned-message").value;

    if(username == "" && country == "" && message == ""){
        alert("Invalid input! All the fields must be filled!")
        return;
    }

    if (username == "") {
        alert("Invalid input! Please state your username!")
        return;
    }

    if (country == "") {
        alert("Invalid input! Please state your country!")
        return;
    }

    if (message == "") {
        alert("Invalid input! Please write a message!")
        return;
    }

    console.log(username, country, message);

    var xhr = new XMLHttpRequest();
    var url = "/ajaxmessage";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        document.getElementById("table-container").innerHTML = xhr.response;
    };

    var data = JSON.stringify({
        "username" : username,
        "country" : country,
        "message" : message
    });

    xhr.send(data);
}