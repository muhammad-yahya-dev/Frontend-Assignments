// Is script ko apne footer ke paas add karein
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.inventory-col, .services-col, .testimonial-col');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        } else {
            reveals[i].style.opacity = "0";
            reveals[i].style.transform = "translateY(50px)";
        }
    }
}

// Initial CSS setup for Reveal
document.querySelectorAll('.inventory-col, .services-col, .testimonial-col').forEach(el => {
    el.style.transition = "all 0.8s ease-out";
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
});


const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
}

// Trigger counter when section is visible
let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounter();
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-section'));


