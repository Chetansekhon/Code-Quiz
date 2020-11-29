var players =document.getElementById("players");
var lastUser = JSON.parse(localStorage.getItem("playername"));
for(var i=0; i< lastUser.length; i++){
    var playerEl = document.createElement("h3");
    playerEl.textContent =lastUser[i].user+" - "+lastUser[i].score;
    players.appendChild(playerEl);
}
