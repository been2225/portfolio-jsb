let popup1 = $('.section_3_crocs_popup').css('display')
let moreViewButton = $('.more_view')
let moreViewBack = $('.more_view_back')
let moreViewCrocs = $('.more_crocs')
let moreViewOrion = $('.more_orion')
let moreViewNivea = $('.more_nivea')
let popupCrocs = $('.popup_crocs').css('display')
let popupOrion = $('.popup_orion').css('display')
let popupNivea = $('.popup_nivea').css('display')
let ww = $(window).width();
let wh = $(window).height();
let clickNum = 0;

$(window).scroll(function(){
    let sct = $(window).scrollTop();

    console.log(sct);
});
if(ww>=1024){
    $('.scroll').click(function(){
        $('html,body').animate({
            scrollTop:1000
        })
    })
}

$(window).scroll(function(){
    let sct = $(window).scrollTop();

    // console.log(sct);
});
if(ww>=1024){
    $('#header > ul > li:last-child').click(function(){
        $('html,body').animate({
            scrollTop:1000
        })
    })
}
if(ww>=1024){
    $('#header > ul > li:first-child').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
}
if(ww>=1024){
    $('#header > ul > li:nth-child(2)').click(function(){
        $('html,body').animate({
            scrollTop:2000
        })
    })
}
if(ww>=1024){
    $('#header > ul > li:nth-child(3)').click(function(){
        $('html,body').animate({
            scrollTop:4000
        })
    })
}
if(ww>=1024){
    $('.topBtn_hover').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
}
if(ww>=768){
    $('.topBtn_hover').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
}
if(ww>=300){
    $('.topBtn_hover').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
}
// if(wh>=1024){
//     $('.section_1 > ul l> li:first-child').scroll(function(){
//         $('html,body').css({
//             backgroundColor:'red'
//         })
//     })
// }



//section_2//

moreViewCrocs.on({
    click: function(){
        if(popupCrocs == 'none'){
            $('.popup_crocs').css({
                display: 'block'
            })
        }
    }
})
moreViewOrion.on({
    click: function(){
        if(popupOrion == 'none'){
            $('.popup_orion').css({
                display: 'block'
            })
        }
    }
})
moreViewNivea.on({
    click: function(){
        if(popupNivea == 'none'){
            $('.popup_nivea').css({
                display: 'block'
            })
        }
    }
})
moreViewBack.on({
    click: function(){
        $('.section_3_crocs_popup').css({
            display: 'none'
        })
    }
})

if (popup1 == 'block') {
    $('.section_3_back_items').css({
        filter: 'blur(2px)',
        visibility: 'hidden',
    })
    $('.section_3').css({
        backgroundColor: '#bbb'
    })
}
if (popup1 == 'none') {
    $('.section_3_crocs_popup h5').css({
        filter: 'none',
        visibility: 'none',
    })
    $('.section_3').css({
        backgroundColor: '#fff'
    })
}




//footer//
$('.prod_btn .heart_btn i').click(function(){
    $(this).attr({
        class:"fa-solid fa-heart",
    })
});

$('.section_3_con_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrow: true,
    prevArrow: '.section_3_arrow .section_3_arrow_left',
    nextArrow: '.section_3_arrow .section_3_arrow_right'
})

$('.section_3_one').css({
    width:`100%`,
    display: `flex`,
    justifyContent: `center`,
});

$('.section_4_con_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    dots: true,
    appendDots: $('.one_4'),
    responsive:[{
        breakpoint : 1200,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            arrows: false,
            dots: true,
            appendDots: $('.one_4'),
        }
        
    }]
}); 


$('.slick-dots').css({
    display: `flex`,
    justifyContent: `center`,
});

$('.slick-dots > li').css({
    display: 'flex',
    width: 15,
    height: 15,
    backgroundColor: `black`,
    borderRadius: `50%`,
});

$('.slick-dots button').css({
    display: 'flex',
    width: 15,
    height: 15,
    backgroundColor: `black`,
    borderRadius: `50%`,
});

$('.slick-dots li:nth-child(2)').css({
    margin: `0 10px`,
});

$('#slick-slide-control10 , #slick-slide-control11, #slick-slide-control12').css({
    display: 'none',
});


$('.slick-slide').css({
    margin: "0 10px"
});






$(window).on('resize',()=>{

    ww = $(window).width();
    console.log("window width",ww);


    if(ww <= 1200){
        setTimeout("location.reload()",1000);
    }

});


