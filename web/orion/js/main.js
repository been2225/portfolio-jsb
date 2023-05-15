

$(document).ready(function(){
    let ww = $(window).width();
    let wh = $(window).height();
    
    AOS.init();
    let clickNum = 0;

    $('.menu_btn').click(function(){
        console.log('test');
        $('.m_btn_wrap').animate({
            top:0
        });
    });

    $('.fa-xmark').click(function(){
        $('.m_btn_wrap').animate({
            top:`-75%`
        });

        
    
    })



    $('.menu_wrap').mouseenter(function(){
        $('.drop_menu, .headerBg').stop().slideDown();
    })
    $('.menu_wrap').mouseleave(function(){
        $('.drop_menu, .headerBg').stop().slideUp();
    });

    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        layout();
    });

    $(window).scroll(function(){
        let sct = $(window).scrollTop();
    
        console.log(sct);
    });
    
        $('.topBtn').click(function(){
            $('html,body').animate({
                scrollTop:0
            })
        })
    
   

    function layout(){
        if(ww >= 768 && ww <= 1023){
            console.log(`resize`);
            // $('.section_2_img').slick({
            //     slidesToShow: 1,
            //          slidesToScroll: 1,
            //          // autoplay: true,
            //          autoplaySpeed: 2000,
            //          speed: 1000,
            //          arrows: false,
            //          dots: true,
            //          appendDots: $('.one_4'),
            //  });
           }
        
    }
    layout();


   
   

    function layout(){
       
        // $('.mask_1').css({
        //     width:ww,
        // });
    
        // $('.s_1_img_wrap').css({
        //     width:(ww*0.8)*5 ,
        // });
    
        // $('.s_1').css({
        //     width:(ww*0.8)/4  ,
        //     padding:`5px`
        // });
    
        // $('.s_1_img_wrap > img').css({
        //     width:`100%` ,
        // });

        // $('.right').click(function(){
        //     clickNum++;
        //     if(clickNum > 4){
        //         clickNum = 0;
        //     }
        //     $(".s_1_img_wrap").stop().animate({
        //         left:-(imgWidth+5)*clickNum
        //     })
        // });
    
    
        // $('.left').click(function(){
        //     clickNum--;
        //     if(clickNum < 0){
        //         clickNum = 4;
        //     }
        //     $(".s_1_img_wrap").stop().animate({
        //         left:-(imgWidth+5)*clickNum
        $('.inner_4>li').click(function(){
            console.log('클릭됨')
            // $(this).parent().addClass('active').siblings().removeClass('active');
        });

        
      
    }
});

