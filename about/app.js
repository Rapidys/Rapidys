
$(function () {
    $('.header_burger').click(function () {
        $('.header_burger,.nav_items,.header').toggleClass('active')
        $('body').toggleClass('lock');
    })
})