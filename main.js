
const activeStar1 = document.querySelector('#stars--link--img1');
const activeStar2 = document.querySelector('#stars--link--img2');
const activeStar3 = document.querySelector('#stars--link--img3');
const activeStar4 = document.querySelector('#stars--link--img4');
const activeStar5 = document.querySelector('#stars--link--img5');


const starLinks = document.querySelector('#stars-links')

starLinks.onclick = function(event){
    let target = event.target;
    if (target.closest('#stars--link--img1')){
        target.closest('#stars--link--img1')
            .classList.add('stars--active')
    }else if(target.closest('#stars--link--img2')){
        target.closest('#stars--link--img2')
            .classList.add('stars--active')
            activeStar1.classList.add('stars--active')
    }else if(target.closest('#stars--link--img3')){
        target.closest('#stars--link--img3')
            .classList.add('stars--active')
            activeStar1.classList.add('stars--active')
            activeStar2.classList.add('stars--active')
    }else if(target.closest('#stars--link--img4')){
        target.closest('#stars--link--img4')
            .classList.add('stars--active')
            activeStar1.classList.add('stars--active')
            activeStar2.classList.add('stars--active')
            activeStar3.classList.add('stars--active')
    }else if(target.closest('#stars--link--img5')){
        target.closest('#stars--link--img5')
            .classList.add('stars--active')
            activeStar1.classList.add('stars--active')
            activeStar2.classList.add('stars--active')
            activeStar3.classList.add('stars--active')
            activeStar4.classList.add('stars--active')
    }
}