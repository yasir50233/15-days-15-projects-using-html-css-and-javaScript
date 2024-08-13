const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const icons = {
    applause: '<i class="fas fa-thumbs-up"></i>',
    boo: '<i class="fas fa-thumbs-down"></i>',
    gasp: '<i class="fas fa-surprise"></i>',
    tada: '<i class="fas fa-magic"></i>',
    victory: '<i class="fas fa-trophy"></i>',
    wrong: '<i class="fas fa-times"></i>'
};

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopPlaying();
        document.getElementById(sound).play();
    })
    btn.addEventListener('mouseover', () => {
        btn.innerHTML = icons[sound];
    });

    btn.addEventListener('mouseout', () => {
        btn.innerHTML = sound;
    });

    document.getElementById('buttons').append(btn);
})


function stopPlaying() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}