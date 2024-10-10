
    document.addEventListener('scroll', function () {
        const navbarScrolled = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbarScrolled.classList.add('scrolled');
        } else {
            navbarScrolled.classList.remove('scrolled');
        }
    }); 

