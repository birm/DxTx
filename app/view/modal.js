document.getElementById("reminder_exp").onclick = function() {
    document.getElementById('reminder_modal').style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("reminder_modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('reminder_modal')) {
        document.getElementById('reminder_modal').style.display = "none";
    }
}

document.getElementById('reminder_modal').style.display = "none";
