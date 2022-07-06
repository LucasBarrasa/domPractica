const d = document;

export function digitalClock(clock, playbtn,stopbtn) {
    let clockTempo;
    
    d.addEventListener("click", (e) => {

        if(e.target.matches(playbtn)){
            clockTempo = setInterval(() =>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
                e.target.disabled = true;
                d.querySelector(stopbtn).disabled = false;
                
            },1000);
        }
        
        if(e.target.matches(stopbtn)){
            clearInterval(clockTempo)
            d.querySelector(clock).innerHTML = null;
            d.querySelector(playbtn).disabled = false;
            e.target.disabled = true;
        }
        
    })
};

export function alarm(sound, playbtn,stopbtn) {
    let alarmTempo;
    const $audio = d.createElement("audio");
    $audio.src = sound;
    
    d.addEventListener("click", (e) => {
        
        if(e.target.matches(playbtn)){
            alarmTempo = setTimeout(()=>{
                $audio.play();
            })
            
            e.target.disabled = true;
        }

        
        if(e.target.matches(stopbtn)){
            clearTimeout(alarmTempo);
            $audio.pause();
            $audio.currentTime = 0;
            
            d.querySelector(playbtn).disabled = false;
        }
        
    })
}