const productosTarjetas = [
  {
    marca: "NVIDIA",
    modelo: "GeForce RTX 3080",
    precio: 38000,
    añoLanzamiento: 2020,
  },
  {
    marca: "NVIDIA",
    modelo: "GeForce RTX 3070",
    precio: 35000,
    añoLanzamiento: 2020,
  },
  {
    marca: "NVIDIA",
    modelo: "GeForce RTX 3060 Ti",
    precio: 33000,
    añoLanzamiento: 2020,
  },
  {
    marca: "NVIDIA",
    modelo: "GeForce GTX 1660 Super",
    precio: 25000,
    añoLanzamiento: 2019,
  },
  {
    marca: "NVIDIA",
    modelo: "GeForce GTX 1650",
    precio: 20000,
    añoLanzamiento: 2019,
  },
  {
    marca: "NVIDIA",
    modelo: "GeForce GTX 1050 2GB",
    precio: 15000,
    añoLanzamiento: 2016,
  },
  {
    marca: "AMD",
    modelo: "Radeon RX 6900 XT",
    precio: 40000,
    añoLanzamiento: 2020,
  },
  {
    marca: "AMD",
    modelo: "Radeon RX 6800 XT",
    precio: 38000,
    añoLanzamiento: 2020,
  },
  {
    marca: "AMD",
    modelo: "Radeon RX 6700 XT",
    precio: 35000,
    añoLanzamiento: 2021,
  },
  {
    marca: "AMD",
    modelo: "Radeon RX 5700 XT",
    precio: 27800,
    añoLanzamiento: 2019,
  },
  {
    marca: "AMD",
    modelo: "Radeon RX 5600 XT",
    precio: 26000,
    añoLanzamiento: 2020,
  },
  {
    marca: "AMD",
    modelo: "Radeon Pro WX 7100",
    precio: 15000,
    añoLanzamiento: 2016,
  },
];
const usuariosSistema = [
  {
    usuario: "1",
    contrasena: "1",
    nombre: "Test",
    saldo: 999999999,
  },
  {
    usuario: "pepito123",
    contrasena: "95123",
    nombre: "Tutor/a",
    saldo: 50000,
  },
  {
    usuario: "canela23",
    contrasena: "amor5",
    nombre: "Zoe",
    saldo: 200,
  },
  {
    usuario: "elmascapo456",
    contrasena: "7895123",
    nombre: "Jesús de Nazaret",
    saldo: 50000,
  },
  {
    usuario: "cabraroja",
    contrasena: "holamama123",
    nombre: "Leo Messi",
    saldo: 50000,
  },
];
class UsuarioNuevo {
  constructor(usuarioR, contrasenaR, nombreR) {
    this.usuario = usuarioR;
    this.contrasena = contrasenaR;
    this.nombre = nombreR;
    this.administrador = false;
    this.saldo = 350000;
  }
}
let ingresoUsuarioCorrecto;
let estadoLogin = true;

while (estadoLogin) {
  let ingresoNum = prompt(
    "Hola, antes de comenzar, porfavor elija de las siguientes opciones: \n 1- Logearse \n 2- Registrarse"
  );
  // Si se ingreso algo
  if (ingresoNum != "") {
    switch (ingresoNum) {
      // Logearse
      case "1":
        let intentosUsuario = 0;
        while (intentosUsuario <= 5) {
          let ingresoUsuario = prompt("Ingrese su usuario, posee 5 intentos.");
          ingresoUsuarioCorrecto = usuariosSistema.find(
            (el) => el.usuario === ingresoUsuario
          );
          if (ingresoUsuarioCorrecto != undefined) {
            break;
          } else if (ingresoUsuarioCorrecto === undefined) {
            alert("El usuario no está en el sistema");
            intentosUsuario++;
          }
        }
        console.log(ingresoUsuarioCorrecto);
        let intentosContrasena = 0;
        while (intentosContrasena <= 3) {
          let ingresoContrasena = prompt(
            "Ingrese su contraseña, posee 3 intentos."
          );
          if (ingresoContrasena === ingresoUsuarioCorrecto.contrasena) {
            alert("Bienvenido " + ingresoUsuarioCorrecto.nombre + ".");
            break;
          } else if (ingresoContrasena != ingresoUsuarioCorrecto.contrasena) {
            alert("La contraseña para este usuario es incorrecta");
            intentosContrasena++;
          }
        }
        estadoLogin = false;
        break;
      // Registrarse
      case "2":
        alert(
          "Para crear su cuenta deberá elegir usuario, contraseña y poner su nombre."
        );
        let usuarioNuevo = prompt("Porfavor ingrese su usuario");
        let contrasenaNueva = prompt("Porfavor ingrese su contraseña");
        let nombreNuevo = prompt("Porfavor ingrese su nombre");
        let usuarioNuevoArray = new UsuarioNuevo(
          usuarioNuevo,
          contrasenaNueva,
          nombreNuevo
        );
        usuariosSistema.push(usuarioNuevoArray);
        estadoLogin = false;
        break;
    }
  } else {
    // Si no se ingreso algo
    alert("Caracter no válido");
  }

  continue;
}

let estado = true;
let arrayNvidia = [];
let arrayAmd = [];
let arrayModelo = [];
let carrito = [];
let compraParaCarritoN = 0;
let compraTarjeta = [];

while (true) {
  let menuPrincipal = prompt(
    "¿Qué quiere hacer? \n 1 - Verificar saldo \n 2 - Comprar componentes \n 3 - Ver carrito"
  );

  switch (menuPrincipal) {
    // Ver saldo
    case "1":
      alert("Su saldo actual es de $" + ingresoUsuarioCorrecto.saldo);
      break;
    // Comprar tarjeta
    case "2":
      let elegirMarcaTarjeta = prompt(
        "¿Qué marca quiere ver? \n Marcas disponibles: NVIDIA o AMD"
      );
      // Switch de marcas
      switch (elegirMarcaTarjeta.toUpperCase()) {
        // Comprar nvidia
        case "NVIDIA":
          arrayNvidia = productosTarjetas.filter((el) =>
            el.marca.includes("NVIDIA")
          );
          arrayModelo = [];
          function stockNvidia() {
            for (i = 0; i < arrayNvidia.length; i++) {
              arrayNvidia[i].modelo;
              arrayModelo.push(
                [i + 1] +
                  " " +
                  arrayNvidia[i].modelo +
                  " - $" +
                  arrayNvidia[i].precio
              );
            }
          }
          stockNvidia();
          compraParaCarritoN = prompt(
            "Los productos en stock son : \n" +
              arrayModelo.join("\n") +
              "\n ¿Qué producto desea comprar? (escribir el número de la izquierda)"
          );
          if (
            compraParaCarritoN > arrayModelo.length ||
            compraParaCarritoN === NaN
          ) {
            alert("No es un valor permitido");
          } else {
            function actualizacionSaldo() {
              if (
                ingresoUsuarioCorrecto.saldo >=
                arrayNvidia[compraParaCarritoN - 1].precio
              ) {
                ingresoUsuarioCorrecto.saldo =
                  ingresoUsuarioCorrecto.saldo -
                  arrayNvidia[compraParaCarritoN - 1].precio;
                compraTarjeta.push(arrayNvidia[compraParaCarritoN - 1]);
                for (i = 0; i < usuariosSistema.length; i++) {
                  if (
                    usuariosSistema[i].nombre === ingresoUsuarioCorrecto.nombre
                  ) {
                    usuariosSistema[i].saldo = ingresoUsuarioCorrecto.saldo;
                  } else {
                    continue;
                  }
                }
                alert(
                  "Compraste " +
                    arrayNvidia[compraParaCarritoN - 1].modelo +
                    "\n Tu nuevo saldo es de : $" +
                    ingresoUsuarioCorrecto.saldo
                );
              } else {
                alert("Saldo insuficiente");
              }
            }
            actualizacionSaldo();
          }
          break;
        // Comprar amd
        case "AMD":
          arrayAmd = productosTarjetas.filter((el) => el.marca.includes("AMD"));
          arrayModelo = [];
          function stockAmd() {
            for (i = 0; i < arrayAmd.length; i++) {
              arrayAmd[i].modelo;
              arrayModelo.push(
                [i + 1] + " " + arrayAmd[i].modelo + " - $" + arrayAmd[i].precio
              );
            }
          }
          stockAmd();
          compraParaCarritoN = prompt(
            "Los productos en stock son : \n" +
              arrayModelo.join("\n") +
              "\n ¿Qué producto desea comprar? (escribir el número de la izquierda)"
          );
          if (
            compraParaCarritoN > arrayModelo.length ||
            compraParaCarritoN === NaN
          ) {
            alert("No es un valor permitido");
          } else {
            function actualizacionSaldo() {
              if (
                ingresoUsuarioCorrecto.saldo >=
                arrayAmd[compraParaCarritoN - 1].precio
              ) {
                ingresoUsuarioCorrecto.saldo =
                  ingresoUsuarioCorrecto.saldo -
                  arrayAmd[compraParaCarritoN - 1].precio;
                compraTarjeta.push(arrayAmd[compraParaCarritoN - 1]);
                console.log(compraTarjeta);
                for (i = 0; i < usuariosSistema.length; i++) {
                  if (
                    usuariosSistema[i].nombre === ingresoUsuarioCorrecto.nombre
                  ) {
                    usuariosSistema[i].saldo = ingresoUsuarioCorrecto.saldo;
                  } else {
                    continue;
                  }
                }
                alert(
                  "Compraste " +
                    arrayAmd[compraParaCarritoN - 1].modelo +
                    "\n Tu nuevo saldo es de : $" +
                    ingresoUsuarioCorrecto.saldo
                );
              } else {
                alert("Saldo insuficiente");
              }
            }
            actualizacionSaldo();
          }
          break;
      }
      break;
    // Ver carrito
    case "3":
      // Si no esta vacio
      if (compraParaCarritoN != 0) {
        let arrayTexto = [];
        function carritoCompras() {
          for (i = 0; i < compraTarjeta.length; i++) {
            arrayTexto.push(
              [i + 1] +
                " " +
                compraTarjeta[i].modelo +
                "-  $" +
                compraTarjeta[i].precio
            );
          }
        }
        carritoCompras();
        alert("Usted tiene en el carrito \n" + arrayTexto.join("\n") + "\n");
      } else {
        // Si esta vacio
        alert("Usted no tiene nada en el carrito");
      }
      break;
  }
}
