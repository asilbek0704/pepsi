const items = document.querySelectorAll('.items-div .item'),
    mainImg = document.querySelector('.section-1__main-div img'),
    glass = document.querySelector('.glass');



for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        let getItemSrc = items[i].getAttribute('src');
        mainImg.setAttribute('src', getItemSrc);
        let getMainImg = mainImg.getAttribute('src');


        items[i].classList.toggle('rotate-60');

        if (items[i].classList.contains('rotate-60')) {
            glass.classList.remove('none')
        } else {
            glass.classList.add('none')
        }


        if (getMainImg == items[1].getAttribute('src')) {
            document.body.classList.remove('blackBG');
            document.body.classList.remove('blueBG');
            document.body.classList.add('redBG');

            items[0].classList.remove('rotate-60');
            items[2].classList.remove('rotate-60');

            glass.style = `transform: translateX(83%) translateY(100px)`;
        } else if (getMainImg == items[2].getAttribute('src')) {
            document.body.classList.remove('redBG');
            document.body.classList.remove('blueBG');
            document.body.classList.add('blackBG');

            items[0].classList.remove('rotate-60');
            items[1].classList.remove('rotate-60');

            glass.style = `transform: translateX(172%) translateY(100px)`;
        } else {
            document.body.classList.remove('redBG');
            document.body.classList.remove('blackBG');
            document.body.classList.add('blueBG');

            items[1].classList.remove('rotate-60');
            items[2].classList.remove('rotate-60');

            glass.style = `transform: translateX(0%) translateY(100px)`;
        }
    })


}



let logo = document.querySelector('.nav .logo');
let navUl = document.querySelector('.nav ul');


window.addEventListener('scroll', () => {
    if (window.pageYOffset > '201.999') {
        logo.style = `display: none`;
        navUl.style = `width: 100%;
                    margin-top: 30px;`

    } else {
        logo.style = `display: block`;
        navUl.style = `width: 50%
                    margin-top: 0;`
    }
})


let leftMenuSpan = document.querySelector('.left-menu span');
let leftMenu = document.querySelector('.left-menu');


leftMenu.addEventListener('click', ()=> {
    leftMenu.style = `display: none`
})