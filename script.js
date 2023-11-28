function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById('hour').innerText = hrs;
    document.getElementById('minute').innerText = mins;
    document.getElementById('seccond').innerText = secs;
    document.getElementById('ampm').innerText = am_pm;
}
setInterval(clock,1000);


function setTime(){
    var w = document.getElementById('morning').values
    var x = document.getElementById('afternoon').values
    var y = document.getElementById('evening').values
    var z = document.getElementById('night').values
    var hour = new Date().getHours();

    if(w==hour){
        document.querySelector('image').style.backgroundImage="url(./Assets/morning.svg)";
        document.getElementById('text-right').style.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById('text-left').style.innerText="GOOD MORNING !! WAKE UP !!";
    }
    if(x==hour){
        document.querySelector('image').style.backgroundImage="url(./Assets/lunch.png)";
        document.getElementById('text-right').style.innerText="LET'S HAVE SOME LUNCH";
        document.getElementById('text-left').style.innerText="GOOD AFTERNOON!! FOOD TIME";
    }
    if(y==hour){
        document.querySelector('image').style.backgroundImage="url(./Assets/evening1.jpg)";
        document.getElementById('text-right').style.innerText="GET SOME NICE TEA!!!";
        document.getElementById('text-left').style.innerText="GOOD EVENING !!";
    }
    if(z==hour){
        document.querySelector('image').style.backgroundImage="url(./Assets/night.png)";
        document.getElementById('text-right').style.innerText="CLOSE YOUR EYES & GO TO SLEEP";
        document.getElementById('text-left').style.innerText="GOOD NIGHT !!";
    }
}


