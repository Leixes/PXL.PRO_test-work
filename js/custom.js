$('.main').onepage_scroll(
    { //
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
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


        // $('.scroll').click(function()
        // {
        //     $(".main").moveDown();
        // });
        
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

    minImg[1].style.display = 'block';
    minImg[2].style.display = 'block';
    minImg[3].style.display = 'block';
}

var SlideIndex = 1;
showSlide(SlideIndex);