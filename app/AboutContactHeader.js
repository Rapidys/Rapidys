let aboutHeader = document.querySelector('.without_inherit ')

window.addEventListener('scroll' , () => {
    let scrollPos = window.scrollY

    if(scrollPos > 0 ) {
        aboutHeader.style.background = 'rgba(92, 177, 154, 0.7)'

    }
    else{
        aboutHeader.style.background = 'rgba(92, 177, 154, 1)'
    }
})