const body = document.querySelector('.body');
const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuPanel = document.querySelector('.mobile-menu-panel');
const mobileMenuPanelClose = document.querySelector('.mobile-manu-panel-close');

mobileBtn.addEventListener('click', mobileMenuOpen);
mobileMenuPanelClose.addEventListener('click', mobileMunuClose);

function mobileMenuOpen() {
    mobileMenuOverlay.classList.add('d');

    setTimeout(() => {
        mobileMenuOverlay.classList.add('a');
        body.classList.add('scroll-off');

        setTimeout(() => {
            mobileMenuPanel.classList.add('open');
        }, 200);
    }, 10);
}

function mobileMunuClose() {
    mobileMenuPanel.classList.remove('open');

    setTimeout(() => {
        mobileMenuOverlay.classList.remove('a');

        setTimeout(() => {
            mobileMenuOverlay.classList.remove('d');
            body.classList.remove('scroll-off');
        }, 200);
    }, 100);
}