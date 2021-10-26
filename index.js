const toggleBtn = document.getElementById('toggle');
const open = document.querySelector('#open');
const close = document.getElementById('close');
const modal = document.getElementById('modal-container')

// toggle nav
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
})

// open modal
open.addEventListener('click', () => modal.classList.add('show-modal'))

// close modal
close.addEventListener('click', () => modal.classList.remove('show-modal'))

// click window close modal
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false)