$(document).ready(function () {
        var carousel = $('.slick-carousel');

        carousel.slick({
            dots: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next')
        });

        carousel.on('afterChange', function (event, slick, currentSlide) {
            // Reset all thumbnails to grayscale
            $('.thumbnail img').addClass('parallax-image');

            // Remove grayscale from the current thumbnail
            $('.thumbnail img').eq(currentSlide).removeClass('parallax-image');
        });

        // Inisialisasi Slick Carousel untuk konten
        $('.content-carousel').slick({
            dots: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next')
        });
    });

       function showMenu(menuType) {
            // Sembunyikan semua menu
            document.querySelectorAll('.menu').forEach(menu => {
                menu.classList.remove('active');
            });

            // Tampilkan menu yang sesuai dengan tombol yang diklik
            document.getElementById(`menu${menuType.charAt(0).toUpperCase() + menuType.slice(1)}`).classList.add('active');
        }