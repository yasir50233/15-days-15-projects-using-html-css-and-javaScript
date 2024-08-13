const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function displaytime () {
    let date = new Date();
    //getting hh mm ss
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    /*
    12 hours =360deg
    1 hour = 360/12 = 30
    h hour = 30h + m/2

    60 min = 360deg
    1 min = 360 /60 = 6deg
    m min = 6m

    60 sec = 360deg
    1 sec = 360/60 = 6deg 
    m sec = 6s
    */
   let hrotate = 30 * hh + mm /2 ;
   let mrotate = 6 * mm ;
   let ssrotate = 6 * ss ;
  hr.style.transform = `rotate(${hrotate}deg)`;
  min.style.transform = `rotate(${mrotate}deg)`;
  sec.style.transform = `rotate(${ssrotate}deg`;
}

setInterval(displaytime, 1000);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Add leading zeros
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // Display time
    var timeString = hours + ' : ' + minutes + ' : ' + seconds;
    document.getElementById('time').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately when the page loads
updateClock();