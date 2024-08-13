const loading_text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");


var load = 0;
let set = setInterval(bluring,40);
function bluring(){
    load++;
    if(load == 100){
        clearInterval(set);
    }
    loading_text.innerHTML = `${load}%`;
    loading_text.style.opacity=scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }