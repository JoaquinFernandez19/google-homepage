            // Declaro las variables de los objetos a ser utilizados
            //el input y el container del input
var searchContainer = document.getElementById("searchContainer");
var searchInput = document.getElementById("searchBox");
           //event listener para ejecutar dependiendo del estado del focus
searchInput.addEventListener("focus", focusSearchBar);
searchInput.addEventListener("focusout", focusSearchBarOff);
            // Si se focusea el input, el container adquiere las siguientes styles
function focusSearchBar(){
    searchContainer.style.boxShadow =  "0 1px 6px 0 rgba(32,33,36,0.28)";
    searchContainer.style.borderColor= "rgba(223,225,229,0)";
}   
             // Si se desfocusea el input, el container elimina esos styles de arriba
function focusSearchBarOff(){
    searchContainer.style.boxShadow =  "";
    searchContainer.style.borderColor= "";
}







