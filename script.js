$(document).ready(function() {
    $('.carousel-indicators button').click(function() {
        var slideIndex = $(this).attr('data-slide-to');
        $('#carouselExampleDark').carousel(parseInt(slideIndex));
    });
});

// search icon
document.querySelector('.search-icon').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('#search-input').style.display = 'block';
});

