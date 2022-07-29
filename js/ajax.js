
(() => {
    const d = document;
    // Instanciar el objeto HttpRequest
    const xhr = new XMLHttpRequest(),
        //variables para el manejo del dom
        $xhr = d.getElementById("xhr"),
        $fragment = d.createDocumentFragment();
        
        
        // asignamos el evento readystatechange que se lanza cuando la peticion cambia de estado
        xhr.addEventListener("readystatechange", (e) => {
            // Aca adentro va la callback.
            
            // Validacion que hace que el codigo dentro de la callback SOLO se ejecute cuando el readyState sea 4
            if(xhr.readyState !== 4) return;
            
            console.log(xhr);
            
            // Validacion que permite ejecutar jel codigo solo si el codigo de estado es el 200 (ok)
            if(xhr.status >= 200 && xhr.status < 300){
                console.log("Exito");
                
                // convertimos el texto en formato json en un objeto y lo guardamos en una variable 
                let json = JSON.parse(xhr.responseText);
                console.log(json);
                
                json.forEach((el) => {
                    // creamos una lista para imprimirla en el html
                    const $li = d.createElement("li");
                    // Imprimimos los elementos que necesitemos del objeto
                    $li.innerHTML = `-- Nombre: ${el.name}. -- Email: ${el.email}. -- Telefono: ${el.phone}.`
                    // Por ultimo lo agregamos al fragment para no pegarle continuamente al dom
                    $fragment.appendChild($li);
                });
                
                // le asignamos al html el fragmento kdonde cargamos todos los elementos del objeto
                $xhr.appendChild($fragment);
                
            }else {
                console.log("Error");
                let message = xhr.statusText || "Ocurrio un error";
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
            };
            
    });
    
    // https://developer.mozilla.org/es/docs/Web/HTTP/Status
    // Instruccion que va a abrir la peticion:              
    //   -   El 1° parametro el el metodo por el cual vamos a comunicarnos
    //   -   El 2° parametro el el recurso, la url a la cual vamos a hacer la peticion
    xhr.open("GET", "https://jsonplaceholder.typicode.com/user");
    
    //   -   El ultimo paso es enviar la peticion
    xhr.send();

})();