const modal_img = document.querySelector('.modal_img')
const lmodalPos = document.querySelector('.lmodalPos')
const lmodalWindow = document.querySelector('.lmodalWindow')
let modalWindow_Title = document.querySelector('.modalWindow_Title')
const product_Describe = document.querySelector('.product_Describe')
const close = document.querySelector('.close')
const btn_add = document.querySelector('.btn-add')
const btn_massege = document.querySelector('.btn-massege')
let btn_number = document.querySelector('.btn-number')
let content_img = document.querySelectorAll('.content_img')

let lmodal_close = document.querySelector('.lmodal_close')
let lmodalpos_buy = document.querySelector('.lmodalpos_buy')
let lmodal_window_buy = document.querySelector('.lmodal_window_buy')
let close_buy = document.querySelector('.close_buy')

let modal = (content_img,ProductCatalog,Productions ) => {
    btn_number.addEventListener('click', function () {
        btn_number.classList.toggle('animate')

        if (btn_number.innerHTML !== '599 40 33 02') {
            btn_number.innerHTML = '599 40 33 02'

        } else {
            btn_number.innerHTML = 'საკონტაქტო ნომ'

        }
    })


    for (let i = 0; i <= ProductCatalog.length; i++) {


        content_img[i].addEventListener('click',  () => {
            lmodalWindow.classList.add('open')
            lmodalPos.classList.add('open')
            modal_img.src = Productions[i].img
            modalWindow_Title.innerHTML = Productions[i].title
            product_Describe.innerHTML =  Productions[i].title
        })
        close.addEventListener('click', function () {
            lmodalPos.classList.remove('open')
            lmodalWindow.classList.remove('open')
            lmodalWindow.classList.add('hide')

            setTimeout(() => {
                lmodalWindow.classList.remove('hide')
            }, 500)
        })


        lmodal_close.addEventListener('click', function () {
            lmodalPos.classList.remove('open')
            lmodalWindow.classList.remove('open')
            lmodalWindow.classList.add('hide')

            setTimeout(() => {
                lmodalWindow.classList.remove('hide')
            }, 500)
        })
        btn_add.addEventListener('click', function () {
            lmodal_window_buy.classList.add('open')
            lmodalpos_buy.classList.add('open')
            // modalWindow_Title.innerHTML = Catalog[i].title
        })
        close_buy.addEventListener('click', function () {
            lmodalpos_buy.classList.remove('open')
            lmodal_window_buy.classList.remove('open')
            lmodal_window_buy.classList.add('hide')

            setTimeout(() => {
                lmodal_window_buy.classList.remove('hide')
            }, 500)
        })
        btn_massege.addEventListener('click', function () {
            window.open("https://www.facebook.com/EBRAceramics");

        })

    }


}

modal(content_img,Catalog,Catalog)
