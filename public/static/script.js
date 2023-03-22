//Tänne kaikki frontti koodi ei main.js


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