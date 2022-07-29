const d = document,
w = window;

// Declaramos la funcion
export default function scrollTopButton(btn){
    // Tomamos la clase del DOM y la ponemos en una variable
    const $scrollbtn = d.querySelector(btn);

    // asignamos a 'windows' un evento de tipo scroll
    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageXOffset || d.documentElement.scrollTop;
        // Estas propiedades toman la distancia de la barra de desplazamiento desde la parte de arriba

        if(scrollTop > 600){
            $scrollbtn.classList.remove("hidden")
        }else{
            $scrollbtn.classList.add("hidden")
        }

    });

    // Asignamos al 'document' un evento de tipo click
    d.addEventListener("click", (e) => {
        //delegamos el evento al boton y todo sus hijos
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){

            //Esta propiedad lleva el scroll al valor que le des
            w.scrollTo({
                behavior: "smooth", 
                top: 0
                //Estas propiedades ademas del parentesis llevan corchetes
            }
            )
        }
    })

}