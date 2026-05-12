botao = document.getElementById('mudarCor');
botao.addEventListener('click', function() {
    document.body.style.backgroundColor = "lightblue";
    alert("Parabéns! Você ganhou um Iphone 17!");
    var audio = new Audio('assets/ilari.mp3');
    audio.play();
});