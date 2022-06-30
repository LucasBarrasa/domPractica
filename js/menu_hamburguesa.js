export default function hamburgerMenu(panelbtn, panel, menuLink) {

    const d = document;

    d.addEventListener("click", (e) => {

        // Delegamos el evento click a panel y al boton de hamburguesa
        // para que al presionarlos tengan interactividad.

        if(e.target.matches(panelbtn) || e.target.matches(`${panelbtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelbtn).classList.toggle("is-active")
        }
        
        
        // Delegamos el evento click para quitar la clase active
        // y se cierren el panel y el boton. 
        
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelbtn).classList.remove("is-active")
        }

    })

}
