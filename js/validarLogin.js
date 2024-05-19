const form = document.querySelector('form');

form.addEventListener('submit',(event) => {


    if (!validarForm()){
        alert("Complete los campos");
        event.preventDefault();

    }else{
        alert("El formulario ha sido enviado con éxito");
    
    }
});


function validarForm(){

    return (validarCampo('password') && validarCampo('email'));

}


const validarCampo = (campo) => {
    //captura elemento por ID
    const field = document.getElementById(campo);

    //Obtengo valor del elemento capturado
    const value = field.value;

    if (value === '') {
        return false; //Retorna False si el campo está vacio
    }else {
      return true; //Retorna True si el campo está completo
    }

};


