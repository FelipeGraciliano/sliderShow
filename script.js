let totalSlides = document.querySelectorAll('.slider--item').length;
let correntSlides = 0;


document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev()
{
    correntSlides--;

    if(correntSlides < 0)
    {
        correntSlides = totalSlides - 1;
    }
    
    updateMargin();

}

function goNext()
{
    correntSlides++;

    if(correntSlides > (totalSlides - 1))
    {
        correntSlides = 0;
    }

    updateMargin();
}

function updateMargin()
{
    let slderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (correntSlides * slderItemWidth);
    
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext,5000);