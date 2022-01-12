function confirmacion(){
    var pregunta=confirm("deseas visitar google.com y buscar fotos?")
    if (pregunta){
        alert("te eviare rapidamente")
        window.location="https:google.com"
    }
    else{
        alert("no hay problema, nos vemos luego")
    }
}


function cambiarcolor(nuevocolor){
    var elem=document.getElementById("parrafo");
    elem.style.color=nuevocolor;
    }

    function accion(tipo){
        var elem=document.getElementById("DivBotones")
        if(tipo=="ocultar")
        elem.style.display='none';
        else
        elem.style.display='';

    }