
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = './src/headerBar/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = './src/home/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = './src/footer/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})


// scroll top
var btn = $('#backToTop');
// btn.on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, '300');
//     alert("top");
// });
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#backToTop').fadeIn(200);    // Fade in the arrow
    } else {
        $('#backToTop').fadeOut(200);   // Else fade out the arrow
    }
});
$('#backToTop').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});




// header menu

function slideShow() {
    var x = document.getElementById('checkBar');
    /*var closeIcon = document.getElementById('mobile-icon-closed');
    var barIcon = document.getElementById('bar-icon');*/
    if (x.style.display === "none") {
        x.style.display = "block";
        	closeIcon.style.display="block";


    } else {
        x.style.display = "none";
    }
}