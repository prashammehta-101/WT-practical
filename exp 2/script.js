function showMessage() {
    alert("Welcome to Anime World!");
}

const characters = ["Naruto Uzumaki", "Luffy", "Eren Yeager", "Light Yagami", "Gojo Satoru"];

let list = document.getElementById("characterList");

characters.forEach(function(character) {
    let li = document.createElement("li");
    li.textContent = character;
    list.appendChild(li);
});