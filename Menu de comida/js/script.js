
let lomito                   = 600;
let pizza                    = 480;
let hamburguesa              = 500;
let empanadas                = 990;
let lomopizza                = 1000;
let Sandwiches_de_milanesa   = 500;
let papas_y_gaseosa          = 200;

alert ("Hola usuario, aqui encontraras nuestro menu con las comidas que trabajamos y nos especializamos, para ver el precio coloca el nombre de la comida");

let solicitud = prompt("Ingresa el nombre de la comida deseada.")

if (solicitud == "lomito") {
    document.write ("El lomito tiene un precio de $" ,lomito, ", con papas y gaseosa tiene un precio de $", lomito + papas_y_gaseosa);
}

if (solicitud == "pizza") {
    document.write ("La pizza tiene un precio de $" ,pizza);
}

if (solicitud == "hamburguesa") {
    document.write ("La hamburguesa tiene un precio de $" ,hamburguesa, ", con papas y gaseosa tiene un precio de $", hamburguesa + papas_y_gaseosa);
}

if (solicitud == "empanadas") {
    document.write ("Las empanadas tienen un precio de $" ,empanadas);
}

if (solicitud == "lomopizza") {
    document.write ("El lomopizza tiene un precio de $" ,lomopizza);
}

if (solicitud == "Sandwiches de milansea") {
    document.write ("Los sandwiches tienen un precio de $" ,Sandwiches_de_milanesa, ", con papas y gaseosa tiene un precio de $", Sandwiches_de_milanesa + papas_y_gaseosa);
}
