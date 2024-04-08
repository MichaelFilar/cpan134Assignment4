
function greenify() {
    document.body.style.backgroundColor = "green";
};


function yellowify() {
    document.body.style.backgroundColor = "yellow";
}

function showCapital() {
    document.getElementById("capitalMsg").innerHTML = "OTTAWA";
}

function hideCapital() {
    document.getElementById("capitalMsg").innerHTML = "";
}

function toggleCapital() {
    if (document.getElementById("capitalMsg").innerHTML == "") {
        document.getElementById("capitalMsg").innerHTML = "OTTAWA"
    } else if (document.getElementById("capitalMsg").innerHTML == "OTTAWA") {
        document.getElementById("capitalMsg").innerHTML = ""
    }
}