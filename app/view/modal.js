document.getElementById("reminder_exp").onclick = function() {
    document.getElementById('reminder_modal').style.display = "block";
}

document.getElementById("metrics_exp").onclick = function() {
    document.getElementById('metrics_modal').style.display = "block";
}

document.getElementById("patients_exp").onclick = function() {
    document.getElementById('patients_modal').style.display = "block";
}

document.getElementById("charts_exp").onclick = function() {
    document.getElementById('charts_modal').style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("reminder_modal").style.display = "none";
}

document.getElementsByClassName("close")[1].onclick = function() {
    document.getElementById("metrics_modal").style.display = "none";
}

document.getElementsByClassName("close")[2].onclick = function() {
    document.getElementById("patients_modal").style.display = "none";
}

document.getElementsByClassName("close")[3].onclick = function() {
    document.getElementById("charts_modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('reminder_modal')) {
        document.getElementById('reminder_modal').style.display = "none";
    }
    if (event.target == document.getElementById('metrics_modal')) {
        document.getElementById('metrics_modal').style.display = "none";
    }
    if (event.target == document.getElementById('patients_modal')) {
        document.getElementById('patients_modal').style.display = "none";
    }
    if (event.target == document.getElementById('charts_modal')) {
        document.getElementById('charts_modal').style.display = "none";
    }

}

document.getElementById('reminder_modal').style.display = "none";
document.getElementById('metrics_modal').style.display = "none";
document.getElementById('patients_modal').style.display = "none";
document.getElementById('charts_modal').style.display = "none";
