const form = document.querySelector('.footer-subscribe-form');
const footerSubscribePreloader = document.querySelector('.footer-subscribe-preloader');
const preloaderModes = document.querySelectorAll('.preloader-modes .mode');

if(form != null){

    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        footerSubscribePreloader.classList.add('d');
        setTimeout(function(){
            footerSubscribePreloader.classList.add('a');

            setTimeout(function(){
                preloaderModes[0].classList.remove('on');
                preloaderModes[1].classList.add('on');

                setTimeout(function(){
                    preloaderModes[1].classList.remove('on');
                    preloaderModes[2].classList.add('on');
                }, 5000);
            }, 7000);
        }, 10);
    });
}

