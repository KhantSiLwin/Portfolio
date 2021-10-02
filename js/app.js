function closenav() {
    document.querySelector('.nav-menu-wrap').style.display = "none";
    document.querySelector('.nav-menu').style.marginRight = "-100%";
    document.querySelector('body').style.overflow = "auto";
};

document.querySelector('.nav-menu-open').addEventListener("click", function() {
    document.querySelector('.nav-menu-wrap').style.display = "block";
    document.querySelector('.nav-menu').style.marginRight = "0%";
    document.querySelector('body').style.overflow = "hidden";
});

let x = true;

function showMoreClick() {
    let collapse = document.querySelector('#showmoreSkill');

    if (x == true) {
        console.log('hel');
        document.querySelector('.showMoreBtn').style.display = 'none';
        document.querySelector('.showLessBtn').style.display = 'block';
        x = false
    } else {
        document.querySelector('.showLessBtn').style.display = 'none';
        document.querySelector('.showMoreBtn').style.display = 'block';
        x = true
    }
}

new TypeIt("#head-text", {
        speed: 50,
        loop: true,
        loopDelay: 4000,

    })
    .type('Noel', {
        speed: 100,

    })
    .pause(900)
    .delete()
    .pause(500)
    .type('A Full Stack Dev', {
        speed: 100,
    })
    .go();


new Splide('#splide', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        lazyLoad: 'nearby',
        pauseOnHover: false,
        breakpoints: {
            '800': {
                perPage: 2,
                gap: '1rem',
            },
            '480': {
                perPage: 1,
                gap: '1rem',
            },
        },
    })
    .mount();
    
(function getYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
})()
