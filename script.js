let countdownTimer = new Date("July 1, 2024 15:05:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countdownTimer - now

    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((distance%(1000*60*60)/(1000*60)))
    let seconds = Math.floor((distance%(1000*60)/(1000)))

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s "

    if (distance < 0) {
        clearInterval(x)
        document.getElementById("demo").innerHTML = "EXPIRED"
    }
}, 1000)

