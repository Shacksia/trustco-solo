function toggleMenu() {
    document.querySelector('.menu-container').classList.toggle('active');
}
 // Set current year dynamically
 document.getElementById('year').textContent = new Date().getFullYear();