// DECLARO VARIABLOS CON LOS ID DE LOS ELEMENTSO HTML
const user = document.getElementById("user");
const contra = document.getElementById("contra");
const cookieBtn = document.getElementById("aceptar-cookies");
const ncookieBtn = document.getElementById("rebug-cookies");
const table = document.getElementById("form");
const slectd = document.getElementById("selector-dinamic");
const valid = document.getElementById("validar");
const as = document.getElementById("a");

// DESABILITO LOS INPUTS
user.disabled = true;
contra.disabled = true;
valid.disabled = true;

// CREEM UN ARRAY DELS USUARIS I LES SEVES CONTRASENYES
const cuentas = [
  ["oriol", "marc", "jeremy"],
  ["123", "456", "789"]
];


// FUNCION PARA CREAR FECHA
function updateTime() {

  // CREO NUEVA FECHA Y LE AÑADO TODOS LOS PARAMATROS HORARIOS
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // GUARDO EN UN AVARIABLE TODOS LOS PARAMETROS HORARIO
  const temps = `${day} – ${month} – ${year} ${hours}:${minutes}:${seconds}`;
  // IMRPIMO LA VARIABLE CREADA
  document.getElementById('tempsactual').textContent = temps;
}

// LE DIGO QUE SE ACTUALICE LA FUNCION CADA SEGUNDO COGIENDO LOS PARAMETRO CADA VEZ
setInterval(updateTime, 1000);


// FUNCIONES DE COOKIES DADAS EN CLASE
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  let galeta = getCookie(cname);
  if (galeta) {
    galeta = Number(galeta) + 1;
    document.cookie = "total=" + galeta + ";max-age=60*60*24";
  } else {
    document.cookie = "total=1;max-age=60*60*24*7";
  }
}



// AL PULSAAR EL BOTON DE COOKIES
cookieBtn.addEventListener("click", () => {
  // GENERO LOG PARA COMPROVAR QUE FUNCIONA
  console.log("Botón de aceptar cookies pulsado");

   // VERIFICAMOS SI TENEMOS LA COOKI
   if (!getCookie("galeta")) {
    // SI NO LA TENEMOS LA CREAMOS CON UNA DURACIION DE UNSA SEMANA Y SU RUTA
    document.cookie = "galeta=aceptada; max-age=" + 60 * 60 * 24 * 7 + "; path=/";
    checkCookie("total");
  }

  // HACEMOS APARECER FORM
  table.style.display = "block";

  // HABILITAMOS INPUTS
  user.disabled = false;
  contra.disabled = false;
  valid.disabled = false;

});

// AL PULSAR BOTON REBUTJAT DESAPARECE EL FOOTER
ncookieBtn.addEventListener("click", () => {

  as.style.display = "none";

});

// AL CLICAR EL BOTO DE VALIDACIO RECORREM EL ARRAY DE COMPTES
// PARA VALIDAR QUE EL USUARIO Y CONTRASEÑA SEAN CORRECTOS
valid.addEventListener("click", () => {

  var valoru = user.value;
  var valorc = contra.value 
  let error = false;
  
    for (let i = 0; i < 3; i++) {
      // SI EL USUARIO COINCIDE CON LA CONTRASEÑA SE EJECUTA EL SCRIPT PT2
      if(cuentas[0][i] == valoru && cuentas[1][i] == valorc){
        alert("Login correcte");
        error = false;
        part2();
        break
      }
      else{
        error = true;
      }
    }
    if (error == true) {
      alert("Dades invàlides");
    }


});

// CREAMOS LOCALSTORAGE QUITAMOS DIV LOGIN Y MOSTRAMOS SELECTOR
function part2(){
  localStorage.setItem("login", contra.value)

  table.style.display = "none";
  slectd.style.display = "block";
  as.style.display = "none";
}

// BOTON LOGOUT, QUITAMOS STORAGE Y RECARGAMOS PAGINA
function logOut() {
  localStorage.removeItem("login")
  location.reload();
}

// SI ESTA EL LOCAL STORAGE AL RECARGAR LA PAGINA NOMES ENS
// MOSTRA EL SELECTOR 
window.onload = (event) => {
  if(localStorage.getItem("login")){
    table.style.display = "none";
    slectd.style.display = "block";
    as.style.display = "none";
  }
  else{
    slectd.style.display = "none";
  }
};


