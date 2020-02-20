$('.main').onepage_scroll(
    { //
            sectionContainer: "section",
            easing: "ease-in",
            animationTime: 900,
            pagination: false,
            updateURL: false,
            loop: false,                    
            keyboard: true,                  
            responsiveFallback: false,      
            direction: "vertical"
        });
///


        $.fn.animate_Text = function() 
        {
            var string = this.text();
            return this.each(function()
            {
                var $this = $(this);
                $this.html(string.replace(/./g, '<span class="new">$&</span>'));
                $this.find('span.new').each(function(i, el)
                {
                    setTimeout(function(){ $(el).addClass('div_opacity'); }, 80 * i);
                });
            }); 
        };
///

        $('.a__about').click(function()
        {
            $('.paga_main').fadeOut(300);
            $('.page_about').fadeIn(1000);
            $('.page-two').fadeIn(1000);
            $('.__bottom').animate(
            {
                paddingTop:"40"
            },
            1400);
            $('.transition__top').animate(
            {
                paddingTop:"0"
                    
            },
            1400);

            $('#swap2').show();
            // $('#swap2').animate_Text();

            $('#swap1').show();
            $('#swap1').animate_Text();

            $('#swap3').show();
            $('#swap3').animate_Text();

            $('#swap4').show();
            $('#swap4').animate_Text();

            $('#swap5').show();
            $('#swap5').animate_Text();

        });

// function plusSlide(n){
//     showSlide(SlideIndex += n);
// }

// function currentSlide(n){
//     showSlide(SlideIndex = n);
// }

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName('Slide');
    var minImg = document.getElementsByClassName('minImg');

    $('.Slide').hide();
    $('.minImg').hide();
    slides[0].style.display = 'block';

    minImg[0].style.display = 'block';
    minImg[1].style.display = 'block';
    minImg[2].style.display = 'block';
}

var SlideIndex = 1;
showSlide(SlideIndex);

var target = 0;

// window.addEventListener('scroll', function(){

// });

var pageTwo = document.getElementsByClassName('page-two');
pageTwo[0].addEventListener('wheel', scrollTwo);
function scrollTwo(event){
    event.preventDefault();
    if(event.deltaY > 0){
        actMinImg(target);
        target++;
    }
}
function scrollActMinImg(){
    actMinImg(target);
    target++;
}
function actMinImg(n){
    if(n == 0){
        return;
    }
    var i = 0;
    var minImg = document.getElementsByClassName('minImg');
    target = n;

    for(; n > 0; --n){
        --n;
        var i;
        for(i = 0; i < target; i++){
            minImg[i].classList.add('opacity');
        }
        moveMinImg(minImg[n]);
    }
}
function moveMinImg(block){
    var coord = 0;
    var time = setInterval(moveImg, 10);
    function moveImg(){
        if(coord == 100){
            clearInterval(time);
            minImgHide();
        }else{
            coord++;
            block.style.paddingRight = coord + 'px';
        }
    }
}
function minImgHide(){
    var i;
    var minImg = document.getElementsByClassName('minImg');
    for(i = 0; i < target; i++){
        minImg[i].style.display = 'none';
    }
    var n = target;
    n++;
    if(n < minImg.length){
        minImg[n].style.display = 'block';
    }
    n++;
    if(n < minImg.length){
        minImg[n].style.display = 'block';
    }
}

// var length = minImg.length;
//     var block = minImg[i];
//     block.classList.add('opacity');
    // var coord = 0;
    // var time = setInterval(moveImg, 10);
    // function moveImg(){
    //     block.style.display = 'block';
    //     if(coord == 100){
    //         clearInterval(time);
    //         for(i = 0; i < n; i++){
    //             minImg[i].style.display = 'none';
    //         }
    //         target++;
    //         if(target < length){
    //             console.log(target);
    //             minImg[target].style.display = 'block';
    //         }
    //         target++;
    //         if(target < length){
    //             console.log(target);
    //             minImg[target].style.display = 'block';
    //         }
            
    //     }else{
    //         coord++;
    //         block.style.paddingRight = coord + 'px';
    //     }
    // }