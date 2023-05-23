function validar(){

let mail= document.getElementById("Email").value
let nombre=document.getElementById("nombre").value
let texto=document.getElementById("text_Area").value

if( mail==""){

alert("por favor agrega tu email")
return

}

if( nombre==""){

    alert("por favor agrega tu nombre")
    return
    
    }

    if( texto==""){

        alert("por favor agrega un texto")
        return
        
        }


  alert("Hola "+ nombre+ " pronto respondere tu propuesta muchas gracias!!")



}