/*Generador de mensajes en toast para el sistema - plantilla se genera en el document ready*/
var toastAutogen_consecutivo = 0;
var toastAutogen_plantilla = "";
/*No olvidar si se enva el color obligatoriamente enviar el tiempo de cierre, por defecto esta en 8000*/
function toastgendefault(titulo, contenido, segautocierretoast = 8000, bellcolor = "") {
    /*Agregar el tast consecutivo con un adicional*/
    toastAutogen_consecutivo = toastAutogen_consecutivo + 1
    var toastAutogen_consecutivonew = toastAutogen_consecutivo
    /*Tomar codigo default reemplazar numerdor consecutivo*/
    var toastAutogen_nuevaplantilla = toastAutogen_plantilla.replaceAll("toastAutogen", "toastAutogen" + toastAutogen_consecutivonew)
    /*Enviar al toast container como un hijo*/
    $("#toastAutogen_container").append(toastAutogen_nuevaplantilla);
    /*Registrar contenido de titulo*/
    document.getElementById("toastAutogen" + toastAutogen_consecutivonew + "_titulo").innerHTML = titulo
    /*Registrar contenido de titulo*/
    document.getElementById("toastAutogen" + toastAutogen_consecutivonew + "_contenido").innerHTML = contenido
    /*Si el estlo de la alerta es distinto cambiar el color de la campana - Danger rojo / Warning amarillo / vacio es azul */
    if (bellcolor == "danger") { $("#toastAutogen" + toastAutogen_consecutivonew + "_bellcolor").css('color', '#dc3545'); }
    else if (bellcolor == "warning") { $("#toastAutogen" + toastAutogen_consecutivonew + "_bellcolor").css('color', '#ffc107'); }
    else { $("#toastAutogen" + toastAutogen_consecutivonew + "_bellcolor").css('color', '#0094ff'); }
    /*Mostrar show el nuevo toast*/
    $('#toastAutogen' + toastAutogen_consecutivonew + '_toastall').slideDown("slow");
    /*Reactivar todas las tooltips existentes*/
    reactivartooltip();
    /*Generar el autohide en cada toast con tiempos separados*/
    eval("toastAutogen" + toastAutogen_consecutivonew + "_Tout = " + setTimeout(function () { laoultacionxDtoast(toastAutogen_consecutivonew); }, segautocierretoast))
    /*Si el tipo de alerta es danger entonces parar el cierre automatico y agregar clase de sombreado*/
    if (bellcolor == "danger") { ladetenciontoast("toastAutogen"+toastAutogen_consecutivonew); }
}

/*Cerrar u ocultar toast*/
function cerrarsolotoast(toastAutogen_consecutivoC) {
    $('#' + toastAutogen_consecutivoC + '_toastall').slideUp("slow");
}
/*Eliminar del DOM el toast seleccionado*/
function elimninartoast(toastAutogen_consecutivoE) {
    $('#' + toastAutogen_consecutivoE + '_toastall').fadeOut("slow");
}
/*Ocultar con fade out el toast creado en segundos*/
function laoultacionxDtoast(toastAutogen_consecutivoDEF) {
    $('#toastAutogen' + toastAutogen_consecutivoDEF + '_toastall').fadeOut("slow");
}
/*Si se posiciona con el cursor sobre el cuadro limpia el hide automatico*/
function ladetenciontoast(toastAutogen_consecutivoN) {
    $("#" + toastAutogen_consecutivoN + "_toastall").addClass("toastAutogenovershadow")
    clearTimeout(eval(toastAutogen_consecutivoN + "_Tout"));
}
