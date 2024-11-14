const form = document.querySelector('.footer-subscribe-form');
const formPreloaderOverlay = document.querySelector('#fs > .form-preloader-overlay');
const preloaderModes = document.querySelectorAll('.preloader-modes .mode');

if(form != null){

    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        formPreloaderOverlay.classList.add('d');
        setTimeout(function(){
            formPreloaderOverlay.classList.add('a');

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

