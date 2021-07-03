const toggleBtn = document.getElementById('bar');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    if(toggleBtn.className == 'fas fa-bars'){
        toggleBtn.className = 'fas fa-times';
    }
    else if(toggleBtn.className == 'fas fa-times'){
        toggleBtn.className = 'fas fa-bars';
    }
});
