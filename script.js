const formulario = document.getElementById('miFormulario');
const validar = document.getElementById('enviar');
const barraMenu = document.getElementById('menu');


// ---------------------- Cambio Modo --------------------

const claro = () => {
    document.querySelector('body').setAttribute('data-bs-theme','dark')
    document.querySelector('#iconoModo').setAttribute('class', 'bi bi-sun-fill')
    document.querySelector('#next').style.color = 'white';
    document.querySelector('#prev').style.color = 'white';
    document.querySelector('#menu').style.backgroundColor = '#4e4e4e';
   
}
const oscuro = () => {
    document.querySelector('body').setAttribute('data-bs-theme','light')
    document.querySelector('#iconoModo').setAttribute('class', 'bi bi-moon-fill')
    document.querySelector('#next').style.color = 'black';
    document.querySelector('#prev').style.color = 'black';
    document.querySelector('#menu').style.backgroundColor = '#dbd9d9';
}
const cambiarTema  = () => {
    document.querySelector('body').getAttribute('data-bs-theme') === 'dark'?
    oscuro() : claro();
}

//  - - - - -  Cartel Alerta de los campos

function alert(campo, mensaje, tipo) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' +'<i class="bi bi-exclamation-triangle"></i>' +"  "+ mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    var campo = document.getElementById(campo);
    campo.append(wrapper);
    
    }

// --------- Validacion de los datos ---------------


validar.onclick = (e) => {
    e.preventDefault();
    console.log("si");
    const vnombre = document.getElementById('nombre').value;
    const vapellido = document.getElementById('apellido').value;
    const vemail = document.getElementById('email').value;
    var modal = document.getElementById('contacto');
    var modalInstancia = bootstrap.Modal.getInstance(modal);
    
    let isValid = true;

    if( vnombre == null || vnombre.length < 2 || vnombre.length > 30  || /^\s+$/.test(vnombre) ) { 
        alert('errorNombre', 'Debes ingresar datos en el nombre y entre 2 a 30 caracteres', 'danger');
        isValid = false;
    return
    }
    if( vapellido == null || vapellido.length < 2 || vapellido.length > 20 || /^\s+$/.test(vapellido) ) { 
        alert('errorApellido', "Debe ingresar datos en el Apellido y entre 2 a 20 caracteres", 'danger');
        isValid = false;
    return 
    }
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+/.test(vemail)) ) { 
        alert('errorEmail', "Debe ingresar formato válido en el E-mail. valor@valor.valor", 'danger');
        isValid = false;
    return 
    }
    
    if (isValid) {
        console.log("si");
        confirmacion();
        // Ajusta el tiempo según sea necesario
        setTimeout(() => {
            modalInstancia.hide(); // Oculta el formulario
            formulario.submit();
        }, 2300); 
        
         
        formulario.reset();// Borra los datos del formulario
       
    }
   
   
}
    
function confirmacion() {
    document.getElementById('alertaExito').style.display = 'block';   
    setTimeout(function() {
        document.getElementById('alertaExito').style.display = 'none';
    }, 2000);
    
    }