$(function(){
   var score = 0,
       remaining = 4,
       clicksRemaining = 10,
       pauseRemaining = 'yes';

    pauseRemaining = 'no';


    $('.intro span').click(function(){

        $('.intro').hide();
        $('.lvl-1').fadeIn(4000);
        pauseRemaining = 'yes';
        remaining = 4;
        clicksRemaining = 11;
        lvlOne();
    });


    $('body').click(function(){
       if(clicksRemaining > 0 && pauseRemaining == 'yes'){
           clicksRemaining--;
           $('label#clicks-remaining span').text(clicksRemaining);
       }

        //lose lvl 1
        if (clicksRemaining == 0 && remaining > 0){
            $('h2.lose').fadeIn();
            $('.lvl-1 .lvl-1-balls').remove();
        }


        //lose lvl 2
        if (clicksRemaining == 0 && remaining > 0){
            $('h2.lose').fadeIn();
            $('.lvl-2 .lvl-2-balls').remove();
        }


        //lose lvl 3
        if (clicksRemaining == 0 && remaining > 0){
            $('h2.lose').fadeIn();
            $('.lvl-3 .lvl-3-balls').remove();
        }
    });

//lvl balls clicking 1
    $('.lvl-1 .lvl-1-balls').click(function(){
    $(this).remove();
        score +=2;
        remaining--;
        $('label#score span').text(score);
        $('label#remaining span').text(remaining);

        if(score == 8){
            $('.win-message-1 .win').fadeIn();
            pauseRemaining = 'no'
        }
    });

//lvl balls clicking 2
    $('.lvl-2 .lvl-2-balls').click(function(){
        $(this).remove();
        score +=4;
        remaining--;
        $('label#score span').text(score);
        $('label#remaining span').text(remaining);
        if(score == 24){
            $('.win-message-2 .win').fadeIn();
            pauseRemaining = 'no'
        }

    });

    //lvl balls clicking 3
    $('.lvl-3 .lvl-3-balls').click(function(){
        $(this).remove();
        score +=6;
        remaining--;
        $('label#score span').text(score);
        $('label#remaining span').text(remaining);
        if(score == 48){
            $('.win-message-3 .win').fadeIn();
            pauseRemaining = 'no'
        }

    });




    var min = -50,
        max = 150,
        random,
        random2;

    ///////////////trigger balls lvl 1//////////////////
   function lvlOne(){
       setInterval(function(){
           random = Math.floor(Math.random() * (max - min + 1) + min);
           random2 = Math.floor(Math.random() * (max - min + 1) + min);

           $('.lvl-1 .lvl-1-balls:nth-child(1)').animate({
               'left':random + '%',
               'top':random2 + '%'
           },2000);

           random = Math.floor(Math.random() * (max - min + 1) + min);
           random2 = Math.floor(Math.random() * (max - min + 1) + min);

           $('.lvl-1 .lvl-1-balls:nth-child(2)').animate({
               'left':random + '%',
               'top':random2 + '%'
           },1800);

           random = Math.floor(Math.random() * (max - min + 1) + min);
           random2 = Math.floor(Math.random() * (max - min + 1) + min);

           $('.lvl-1 .lvl-1-balls:nth-child(3)').animate({
               'left':random + '%',
               'top':random2 + '%'
           },1700);

           random = Math.floor(Math.random() * (max - min + 1) + min);
           random2 = Math.floor(Math.random() * (max - min + 1) + min);

           $('.lvl-1 .lvl-1-balls:nth-child(4)').animate({
               'left':random + '%',
               'top':random2 + '%'
           },1500);


       });
   }lvlOne();

    $('.win-message-1 span').click(function(){
       $('.win-message-1 .win').hide();
        $('.lvl-2').fadeIn(2000);
        pauseRemaining = 'yes';
        remaining = 4;
        clicksRemaining = 11;
        $('label#remaining span').text(remaining);
        lvlTwo();

    });

///////////////end trigger balls lvl 1//////////////////



    ///////////////trigger balls lvl 2//////////////////
    function lvlTwo(){
        setInterval(function(){
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-2 .lvl-2-balls:nth-child(1)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },1100);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-2 .lvl-2-balls:nth-child(2)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },1000);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-2 .lvl-2-balls:nth-child(3)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },1100);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-2 .lvl-2-balls:nth-child(4)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },900);


        });
    }

    $('.win-message-2 span').click(function(){
        $('.win-message-2 .win').hide();
        $('.lvl-3').fadeIn(2000);
        pauseRemaining = 'yes';
        remaining = 4;
        clicksRemaining = 11;
        $('label#remaining span').text(remaining);
        lvlThree();
    });

///////////////trigger balls lvl 2//////////////////


    ///////////////trigger balls lvl 2//////////////////
    function lvlThree(){
        setInterval(function(){
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-3 .lvl-3-balls:nth-child(1)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },800);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-3 .lvl-3-balls:nth-child(2)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },500);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-3 .lvl-3-balls:nth-child(3)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },300);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $('.lvl-3 .lvl-3-balls:nth-child(4)').animate({
                'left':random + '%',
                'top':random2 + '%'
            },200);


        });
    }

    //$('.win-message-2 span').click(function(){
    //    $('.win-message-2 .win').hide();
    //    $('.lvl-3').fadeIn();
    //    pauseRemaining = 'yes';
    //    remaining = 4;
    //    clicksRemaining = 11;
    //    lvlThree();
    //});

///////////////trigger balls lvl 2//////////////////



});


//var ourCountdown = setInterval(function() {
//    var counter = parseInt($('#countdown').html());
//    if(counter !== 0){
//        $('#countdown').html(counter - 1);
//    }else {
//        clearInterval(ourCountdown);
//        $('h2.lose').fadeIn();
//        $('.lvl-1 .lvl-1-balls').remove();
//    }
//}, 100);


