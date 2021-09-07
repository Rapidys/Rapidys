$(function () {

    $('.header_burger').click(function () {
        $('.header_burger,.nav_items,.header ').toggleClass('active')
        $('body').toggleClass('lock');
    })


    $('.big_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small_imgs',
        draggable: false,
    });
    $('.small_imgs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big_img',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

    $('.newWorks_Wrapper').slick({
        draggable: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    })

})


///////////////სლაიდერები  და ბურგერ მენიუ


/////////////ფიქსირებული ჰედერი და ფერის შეცვლა///////////////////////


const logo_pos = document.querySelector('.logo_pos')
let header = document.querySelector('.header')
const itemsColor = document.querySelectorAll('.items')
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY

    if (scrollPos > 0) {
        header.style.background = 'rgba(92, 177, 154, 0.8)'
        logo_pos.src = "small_logos/black.png"
        itemsColor.forEach(function (items) {
            items.classList.add('Fixed')

        })
    } else {

        logo_pos.src = "imgs/ebra_logo_white-01%20(1).png"
        itemsColor.forEach(function (items) {
            items.classList.remove('Fixed')

        })


    }
})

/////////////ფიქსირებული ჰედერი///////////////////////


/////////ინდექს გვერდზე რესფონსივისას , პატარა ზომაზე ჩნდება აკორდეონი


let acc = document.getElementsByClassName("accordion");
let i;
let plusMinus = document.querySelector('.plusMinus')
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        if (panel.style.display === "block") {
            plusMinus.innerHTML = '-'
        } else if (panel.style.display === "none") {
            plusMinus.innerHTML = '+'

        }
    });

}


///////live search /////////////////////////////
document.querySelector('#input').oninput = function () {
    let production = document.querySelectorAll('.content_img')
    let val = this.value.trim()
    if (val !== '') {
        production.forEach((elem) => {
            if (elem.innerText.search(val) === -1) {

                elem.classList.add('hide')

            } else {

                elem.classList.remove('hide')

            }
        })
    } else {
        production.forEach((elem) => {
            elem.classList.remove('hide')
        })
    }
}

/////////live search ////////////////////////////////////////


/////// kategoriis archeva     /////////////////////////////


