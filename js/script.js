// ハンバーガーボタンのクリックイベント
$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('show');
});

// ナビゲーションメニューのリンククリックイベント
$(".nav_menu_li a").click(function () {
    // メニューを閉じる
    $('.nav').removeClass('show');
    // ハンバーガーボタンを三本線に戻す
    $('.openbtn').removeClass('active');
});

// スライダー
$('.slider1').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1.5枚見せる
        }
    }
]
});
$('.top-slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    rtl:true,
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
        }
    }
]
});
$('.bottom-slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    rtl:true,
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
        }
    }
]
});
// カスタムNEXTボタンのクリックイベントを設定
document.querySelector('.next').addEventListener('click', function() {
    $('.slider2').slick('slickNext');
});
// FAQスライダー
$('.slider2').slick({
    dots: true, // ドットナビゲーションを表示
    dotsClass: 'slick-dots', // ドットのクラス名（デフォルト）
    arrows: true,//左右の矢印はなし
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 0,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1.5枚見せる
        }
    }
]
});
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("faq-question");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
window.addEventListener('scroll', function() {
    var contactButtonImg = document.querySelector('.contact-button img');
    
    if (window.innerHeight + window.scrollY >= 845) {
        contactButtonImg.classList.add('visible');
    } else {
        contactButtonImg.classList.remove('visible');
    }
});
// FAQのボタン
$(document).ready(function() {
    $('.faq-question').click(function() {
        // クリックされた質問に対応する回答要素
        const answer = $(this).next('.faq-answer');

        // すべての.faq-answer要素のborder-bottomをリセット
        $('.faq-answer').not(answer).css('border-bottom', '');

        // クリックされた質問の次の兄弟要素が.faq-answerであれば
        if (answer.css('border-bottom') === '2px solid rgb(46, 45, 44)') {
            // 既に表示されている場合は非表示にする
            answer.css('border-bottom', '');
        } else {
            // そうでなければ、border-bottomを設定
            answer.css('border-bottom', '2px solid #2E2D2C');
        }
    });
});
