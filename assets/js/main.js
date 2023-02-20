$(document).ready(function(){

    $('#profile__ripple').ripples({
        resolution:512,
        dropRadiys: 20
    });

    // FOR PROGRESS BAR --------
    const bars = document.querySelectorAll('.progress__bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })
    

    // WORKS---------------Image Filter
    var $wrapper  = $('.portfolio__wrapper');

    // Initilize isotope 
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;


        link.addEventListener('click', function(e) {
            e.preventDefault();


            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

           

            links.forEach(link => {
                link.classList.remove('active')
            })

            e.target.classList.add('active');

        });
    })



    // Magnify POP - UP 
    $('.magnify').magnificPopup({
        type:'image',
        gallery: {
            enabled :true
        },
        zoom: {
            enable: true
        }
    })



});




