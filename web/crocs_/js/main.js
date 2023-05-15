$(document).ready(function(){


    let ww = $(window).width();
    let wh = $(window).height();
    let clickNum = 0;
    

    $(window).resize(function(){
        ww = $(window).width();
        console.log(ww);
        wh = $(window).height();
        layout();
    })

    $('.menu_btn i').click(function(){
        console.log('test');
        $('.m_btn_wrap').animate({
            right:0
        });
    });

    $('.fa-xmark').click(function(){
        $('.m_btn_wrap').animate({
            right:`-80%`
        });
    })


    $(window).scroll(function(){

        let sct = $(window).scrollTop();


        if(sct > 1000){
            $('header').css({
                backgroundColor : `rgba(0,0,0,0.5)`,
                transition : 'all 0.3s',
                color:'black'
            })
        }else if(sct == 0){
            $('header').css({
                backgroundColor :  `transparent`
            })
        }

        console.log(sct)
    })


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
    }else if(ww <= 1023 && ww>768 ) {
        $('.scroll').click(function(){
            $('html,body').animate({
                scrollTop:1000
            })
            console.log('클릭')
        })
    }else if(ww <= 767){
        $('.scroll').click(function(){
            $('html,body').animate({
               scrollTop:800 
            })
        })
    }

    // $('.n_img_1 >img').hover(function(){
    //     $('.n_img_1 >img').css({
    //         transform:`rotateZ(360deg) translate(500px, 500px) skew(450deg)`
    //     })
    // })


    



    

   function layout(){

    $('.mask').css({
        width:ww*0.8,
    });

    $('.img_wrap_5').css({
        width:(ww*0.8)*7  ,
    });

    $('.test_img_5').css({
        width:(ww*0.8)/4  ,
        padding:`5px`
    });

    $('.test_img_5 > img').css({
        width:`100%` ,
    });


    $('.right').click(function(){
        clickNum++;
        if(clickNum > 4){
            clickNum = 0;
        }
        $(".img_wrap_5").stop().animate({
            left:-(imgWidth+5)*clickNum
        })
    });


    $('.left').click(function(){
        clickNum--;
        if(clickNum < 0){
            clickNum = 4;
        }
        $(".img_wrap_5").stop().animate({
            left:-(imgWidth+5)*clickNum
        })
    });

   }


   let num = $('-80wh').width();

    $('.menu_btn i').click(function(){
        // console.log('클릭');
        $('.m_btn_wrap').stop().animate({
            left: 100
        });

        $('.bg').css({
            display:`block`
        })
        $('.m_btn_wrap').css({
            boxShadow:'none'
        })
    })

    $('.m_b_txt i').click(function(){
        // console.log('클릭');
        $('.m_btn_wrap').stop().animate({
            left: 500
        })
        $('.bg').css({
            display:`none`
        })
        
    })


    $('.bg').css({
        display:`none`,
        width:`100vw`,
        height:`700vh`,
        backgroundColor:`#000`,
        opacity:`0.7`,
        position:`absolute`,
        top:0,
        left:0,
        zIndex:999,
       

    })






  

   layout()

   




    let imgWidth = $('.test_img_5').width();
    console.log(imgWidth);


   





});//end