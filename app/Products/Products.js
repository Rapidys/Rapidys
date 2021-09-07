let Root_Production = document.querySelector('.content')
let htmltags = ({img, title, price, id}) => {
    return (`
<div class="content_img">
                <div class="imgSection">
                     <img src="${img}" class="product_imgs" alt="Snow">
                      <div class="overlay">
                             <div class="text"></div>
                      </div>
                     <div class="infoSec">
                            <h3 class="product_title">${title}</h3>
                            <span>${price}</span>


                      </div>
</div>
</div>

`)
}
let CatalogSlice = Catalog.slice(0, 18)

class Products {
    render() {
        let htmlCatalog = ``
        CatalogSlice.forEach(({img, id, price, title}) => {
            htmlCatalog += htmltags({img, id, price, title})


        })
        Root_Production.innerHTML = htmlCatalog

    }

}

let notesOnPage = 18
const pagination_section = document.querySelectorAll('.pagination_section li')
pagination_section.forEach((elem) => {
    elem.addEventListener('click', function () {

        pagination_section.forEach((el) => {
            el.classList.remove('paginationActive')
        })
        elem.classList.add('paginationActive')
    })
})
for (let items of pagination_section) {

    items.addEventListener('click', function () {

        let pageNum = +this.innerHTML

        let start = (pageNum - 1) * notesOnPage
        let end = start + notesOnPage

        let notes = Catalog.slice(start, end)

        let htmlCatalog = ''


        notes.forEach(({id, price, title, img}) => {
            setTimeout(() => {

            }, 1000)

            htmlCatalog += htmltags({id, price, title, img})

            Root_Production.innerHTML = htmlCatalog

            setTimeout(() => {

                for (let i = 0; i <= notes.length; i++) {
                    let content_img = document.querySelectorAll('.content_img')
                    if(content_img){
                        modal(content_img, notes, notes)

                    }

                }
            }, 1000)

            setTimeout(() => {
                let overlay = document.querySelectorAll('.overlay')


                for (let i = 0; i <= notes.length; i++) {

                    overlay[i].addEventListener('mouseover', function () {

                        let someUrl = notes[i].img

                        overlay[i].style.backgroundImage = 'url(' + someUrl + ')'
                    })

                }

            }, 1000)


        })

    })

}

let ProductsCatalog = new Products()
ProductsCatalog.render()

let overlay = document.querySelectorAll('.overlay')
let product_imgs = document.querySelectorAll('.product_imgs')
let product_title = document.querySelectorAll('.product_title')

for (let i = 0; i <= Catalog.length; i++) {
    overlay[i].addEventListener('mouseover', function () {

        let someUrl = Catalog[i].img

        overlay[i].style.backgroundImage = 'url(' + someUrl + ')'
    })

}
for (let i = 0; i <= Catalog.length; i++) {
    product_imgs[i].src = Catalog[i].img
    product_title[i].innerHTML = Catalog[i].title
}

