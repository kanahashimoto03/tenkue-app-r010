/*フェードイン*/
$(window).on('load scroll', function () {
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
