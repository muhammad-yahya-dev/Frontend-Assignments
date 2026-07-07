
        // Change navbar style on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#navbar').addClass('bg-dark navbar-dark').removeClass('bg-light navbar-light');
            } else {
                $('#navbar').addClass('bg-light navbar-light').removeClass('bg-dark navbar-dark');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Details Button Toggle Feature
    const detailButtons = document.querySelectorAll('.details-btn');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const detailsDiv = this.nextElementSibling;
            if (detailsDiv.style.display === "block") {
                detailsDiv.style.display = "none";
                this.textContent = "Details";
            } else {
                detailsDiv.style.display = "block";
                this.textContent = "Hide Details";
            }
        });
    });

    // 2. Change Card Colors Feature
    const changeColorBtn = document.getElementById('changeColorBtn');
    const cards = document.querySelectorAll('.pricing-card');

    changeColorBtn.addEventListener('click', function() {
        cards.forEach(card => {
            const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
            card.style.backgroundColor = randomColor;
        });
    });

    // 3. Enroll Button Alert
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const courseName = this.parentElement.querySelector('.card-title').innerText;
            alert("Thank you for enrolling in: " + courseName);
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    this.reset(); 
});

$(document).ready(function() {
    // 1. Toggle Paragraph
    $('#toggleBtn').click(function() {
        $('#paragraph').fadeToggle(300);
    });

    // 2. Slide Image
    $('#slideBtn').click(function() {
        $('#slideImage').slideToggle(500);
    });

    // 3. Show Alert with FadeIn
    $('#showAlertBtn').click(function() {
        $('#customAlert').fadeIn(600).delay(2000).fadeOut(600);
    });

    // 4. Dynamic List Builder
    let itemCount = 1;
    $('#addItemBtn').click(function() {
        itemCount++;
        const newItem = $(`<li class="list-group-item bg-transparent text-light border-secondary" style="display:none;">✨ New Item ${itemCount}</li>`);
        $('#itemList').append(newItem);
        newItem.slideDown(300);
    });
});