const navBtnTrigger = document.querySelector('#navbtn');
const bodyElement = document.querySelector('body');

navBtnTrigger.addEventListener('click', () => {
  bodyElement.classList.toggle('is-active');
});

/*フェードイン*/

$(window).on('load', function () {
    $('.fv-fadein').addClass('load');
});

$(window).on('scroll', function () {
    $('.fadein').each(function () {
        /*要素の位置を取得*/
        let position = $(this).offset().top;
        /*ウィンドウの高さを取得*/
        let windowHeight = $(window).height();
        /*スクロールの位置を取得*/
        let scroll = $(window).scrollTop();
        if (scroll > position - windowHeight + 150) {
            $(this).addClass('scrollin');
        }
    });
});