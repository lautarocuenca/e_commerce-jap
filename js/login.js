const userForm = document.getElementById("userForm");


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    userForm.addEventListener("submit" , (e) => {
        e.preventDefault();
        sessionStorage.setItem ("log", true);
        location.replace("index.html");
    });

});