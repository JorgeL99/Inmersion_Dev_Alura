function realizarConversion() {
    var usuario = prompt("Hola, Ingresa tu Nombre");
    alert('¡Bienvenido ' + usuario + '!');
    var opciones = ["Pesos Mexicanos a Dólares", "Criptomonedas a Euros", "Celsius a Fahrenheit"];
    var seleccion = parseInt(prompt(usuario + " ¿Qué conversión deseas hacer? :\n1. " + opciones[0] + "\n2. " + opciones[1] + "\n3. " + opciones[2]));

    if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= opciones.length) {
        switch (seleccion) {
            case 1:
                var cantidadPesos = parseFloat(prompt("¿Cuántos pesos mexicanos tienes?"));
                if (isNaN(cantidadPesos)) {
                    alert("Ingrese solo números, por favor.");
                    realizarConversion();
                    return;
                }
                var dolares = cantidadPesos / 20;
                alert(usuario + " Tienes $" + dolares.toFixed(2) + " dólares.");
                break;
            case 2:
                var cantidadCriptomonedas = parseFloat(prompt("Ingresa la cantidad de tus criptomonedas:"));
                if (isNaN(cantidadCriptomonedas)) {
                    alert("Ingrese solo números, por favor.");
                    realizarConversion();
                    return;
                }
                var euros = cantidadCriptomonedas * 0.85;
                document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/11/20/14/16/spaceship-3827533_960_720.jpg")';
                document.querySelector(".page-title").textContent = "Cripto";
                alert(usuario + " Tienes €" + euros.toFixed(2) + " euros.");
                break;
            case 3:
                var temperaturaCelsius = parseFloat(prompt("¿Cuál es la temperatura Celsius que deseas convertir?"));
                if (isNaN(temperaturaCelsius)) {
                    alert("Ingrese solo números, por favor.");
                    realizarConversion();
                    return;
                }
                var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
                document.body.style.backgroundImage = 'url("https://i0.wp.com/lanoticia.com/wp-content/uploads/2023/07/termometro.jpg?fit=1200%2C800&ssl=1")';
                document.querySelector(".page-title").textContent = "Temperatura";
                alert(usuario + " La temperatura en Fahrenheit es: " + temperaturaFahrenheit.toFixed(2) + " °F");
                break;
        }
    } else {
        var intentarNuevamente = confirm("Selección inválida. ¿Deseas intentarlo nuevamente?");
        if (intentarNuevamente) {
            realizarConversion();
        }
    }
}

realizarConversion();
