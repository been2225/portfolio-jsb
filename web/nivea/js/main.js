$(document).ready(function(){

    AOS.init(); 

    let ww = $(window).width();
    let wh = $(window).height();
    // let scrollTop = $(window).scrollTop();

    $('.bar').click(function(){
        console.log('test');
        $('.btn_wrap').animate({
            right:0
        });
    });

    $('.fa-xmark').click(function(){
        $('.btn_wrap').animate({
            right:`-603px`
        });
    })

    $(window).scroll(function(){

        let sct = $(window).scrollTop();


        if(sct > 100){
            $('.header').css({
                backgroundColor : `rgba(255,255,255,0.7)`,
                transition : 'all 0.3s'
            })
        }else if(sct == 0){
            $('.header').css({
                backgroundColor :  `transparent`
            })
        }

        console.log(sct)
    })

    
    $(window).resize(function(){
        ww = $(window).width();

        console.log(ww);

        if(ww <= 760){
            $('.con_1').css({
                position: `initial`
            });
        }else if(ww <= 1023){
            $('.con_1:nth-child(1)').css({
                position: `absolute`,
                top:`660px`,
                left:`60%`,
                alignItems:`center`,
                textEmphasis : `center`
            });

            $('.con_1:nth-child(2)').css({
                position: `absolute`,
                top:`1265px`,
                left:`16%`,
                alignItems:`center`,
            });

            $('.con_1:nth-child(3)').css({
                position: `absolute`,
                top:`1850px`,
                left:`60%`,
            });


        }

        if(ww <= 1023){
            $('.con_1').css({
                position: `initial`
            });
        }

        // if(wh <= 1000){
        //     $('.header').css({
        //         backgroundColor:'white'
        //     });

       

        
       
    });

    let num = $('-80wh').width();
    

    $('.bar i').click(function(){
        $('.menu_wrap > ul > li > a').stop().animate({
            top: 100,
            display : 'block'
        })
    })


    


        if(ww < 760){
            $('.con_1').css({
                position: `initial`
            });
        }
    
        // $('.menu_wrap > ul > li > a, .drop_menu > li').mouseenter(function(){
        //     $('.drop_menu').stop().slideDown();
        // });



       
        // if(ww < 1023){
        //     $('.con_1').css({
        //         position: `initial`
        //     })
        //      setTimeout("location.reload()",1000)
            
        // }else{
        //     clearTimeout(setTimeout("location.reload()",1000))
        // }

    


});//end