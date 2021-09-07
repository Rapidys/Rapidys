
const lmodule_position = document.querySelector('.lmodule_position')
const lmodule_img_window = document.querySelector('.lmodule_img_window')
const lmodule_window_close = document.querySelector('.lmodule_window_close')
const OurWorks = document.querySelectorAll('.works')
const bigImg = document.querySelector('.bigImg')


let ourWorksMassive = [
    {id : 1 , ImgSrc : "imgs/ebra/namushevrebi1.jpg"},
    {id : 2 , ImgSrc : "imgs/ebra/namushevrebi2.jpg"},
    {id : 3 , ImgSrc : "imgs/ebra/namushevrebi3.jpg"},
    {id : 4 , ImgSrc : "imgs/ebra/namushevrebi4.jpg"},
    {id : 5 , ImgSrc : "imgs/ebra/namushevrebi5.jpg"},
    {id : 6 , ImgSrc : "imgs/ebra/namushevrebi6.jpg"},
    {id : 7 , ImgSrc : "imgs/ebra/namushevrebi7.jpg"},
    {id : 8 , ImgSrc : "imgs/ebra/namushevrebi8.jpg"},

]

for (let i = 0 ; i < OurWorks.length ; i++){
    OurWorks[i].addEventListener('click' , function (){
        lmodule_position.classList.add('open')
        lmodule_img_window.classList.add('open')
        bigImg.src = ourWorksMassive[i].ImgSrc
    })
    lmodule_window_close.addEventListener('click',function (){
        lmodule_position.classList.remove('open')
        lmodule_img_window.classList.remove('open')
        lmodule_position.classList.add('hide')
        lmodule_img_window.classList.add('hide')
        setTimeout(function (){
            lmodule_position.classList.remove('hide')
            lmodule_img_window.classList.remove('hide')
        },5000)
    })
}