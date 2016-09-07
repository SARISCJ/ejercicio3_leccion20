window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var segundos = parseInt(document.getElementById("segundos").value);
        var numero = parseInt(document.getElementById("numero").value);
        var resultado = document.getElementById("resultado");
        setInterval(function(){document.getElementById("resultado").innerHTML = numero++; }, segundos*1000);
        document.getElementById("segundos").value = "";
        document.getElementById("numero").value = "";
    });
});