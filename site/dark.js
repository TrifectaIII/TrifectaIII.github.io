var mode_toggle = document.querySelector('.mode-toggle');

var dark_mode = false;

mode_toggle.addEventListener('click',function () {
    dark_mode = !dark_mode;
    if (dark_mode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});