// $('.main').onepage_scroll(
// { //
//     sectionContainer: "section",
//     easing: "ease-in",
//     animationTime: 900,
//     pagination: false,
//     updateURL: false,
//     loop: false,                    
//     keyboard: true,                  
//     responsiveFallback: false,      
//     direction: "vertical"
// });
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
    $('.minImg').hide();
    var minImg = document.getElementsByClassName('minImg');
    minImg[0].style.display = 'block';
    minImg[1].style.display = 'block';
    minImg[2].style.display = 'block';
    var slideImg = document.getElementsByClassName('slideImg');
    slideImg[0].style.opacity = '1';
});

var target = 0;
function scrollActMinImg(){
    if(target == 8){
        return;
    }
    actMinImg(target);
    target++;
};
function actMinImg(n){
    target = n;
    var t = n;
    var i = 0;
    var minImg = document.getElementsByClassName('minImg');
    for(i = 0; i < t; i++){
        minImg[i].classList.add('opacity');
    }
    
    slideAnimate(n);
    scaleMinImg(n);
};
function slideAnimate(n){
    var slides = document.getElementsByClassName('Slide');
    var i;
    for(i=0;i<n;i++){
        slides[i].style.opacity = '0';
    }
    slides[n].style.opacity = '0';
    slides[n + 1].style.opacity = '1';
};
function scaleMinImg(n){
    var minImg = document.getElementsByClassName('minImg');
    var block = minImg[n];
    var time = setInterval(scalemoveImg, 2);
    var h = 356;
    var w = 238;
    var pr = 1200;
    function scalemoveImg(){
        block.style.position = 'fixed';
        block.style.bottom = '0px';
        if(h >= 960 && w >= 640){
            
            var slideImg = document.getElementsByClassName('slideImg');
            slideImg[n + 1].style.opacity = '1';
            clearInterval(time);
            minImg[n].style.display = 'none';
            addMinImg(n);
        }else{
            if(h < 960){
                h = h + 6;
            }else{
                h = 960;
            }
            if(w < 640){
                w = w + 4;
            }else{
                w = 640;
            }
            if(pr > 680){
                pr = pr - 5;
            }else{
                pr = 680;
            }
            block.style.width = w + 'px';
            block.style.height = h + 'px';
            block.style.left = pr + 'px';
        }
    }
};
function addMinImg(n){
    var t = n;
    var minImg = document.getElementsByClassName('minImg');
    var i = 0;
    for(i = 0; i < n; i++){
        minImg[i].style.display = 'none';
    }
    t++;
    minImg[t].style.display = 'block';
    t++;
    minImg[t].style.display = 'block';
    t++;
    minImg[t].style.display = 'block';
    
};
var pageOne = document.getElementsByClassName('page-one');
pageOne[0].addEventListener('wheel', scrollOne);
function scrollOne(event){
    $('.page-one').slideToggle(800);
}
var pageTwo = document.getElementsByClassName('page-two');
pageTwo[0].addEventListener('wheel', scrollTwo);
function scrollTwo(event){
    event.preventDefault();
    if(event.deltaY > 0){
        if(target == 8){
            return;
        }
        actMinImg(target);
        target++;
    }else{
        if(target == 0){
            $('.page-one').slideToggle(800);
            return;
        }
        if(event.deltaY < 0){
            // if(target == 0){
            //     return;
            // }
            var slides = document.getElementsByClassName('Slide');
            slides[target].style.opacity = '0';
            slides[target - 1].style.opacity = '1';
            setMinImg();
    
            target--;
        }
        
    }
};
function setMinImg(){
    var minImg = document.getElementsByClassName('minImg');
    var n = target;
    var i;
    for(i = 0; i < n; i++){
        minImg[i].style.display = 'none';
        minImg[i].style.opacity = '';
    }
    n = n -1;
    if(n < 8){
        minImg[n].style.display = 'block';
        minImg[n].style.position = 'relative';
        minImg[n].style.width = '238px';
        minImg[n].style.height = '356.5px';
        minImg[n].style.left = '0px';
        minImg[n].style.opacity = '1';
    }
    n = n + 1;
    if(n < 8){
        minImg[n].style.display = 'block';
        minImg[n].style.position = 'relative';
        minImg[n].style.width = '238px';
        minImg[n].style.height = '356.5px';
        minImg[n].style.left = '0px';
        minImg[n].style.opacity = '1';
    }
    n = n + 1;
    if(n < 8){
        minImg[n].style.display = 'block';
        minImg[n].style.position = 'relative';
        minImg[n].style.width = '238px';
        minImg[n].style.height = '356.5px';
        minImg[n].style.left = '0px';
        minImg[n].style.opacity = '1';
    }
};