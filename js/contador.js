let visitas = localStorage.getItem("contadorVisitas");
if (!visitas) {
    visitas = 0;
}
visitas = parseInt(visitas) + 1;
localStorage.setItem("contadorVisitas", visitas);
document.getElementById("contador").textContent = visitas;