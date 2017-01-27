$(document).ready(function() {

    $('.js-scroll-form').on('click', function() {
        destination = $('.main-form').offset().top;
        $('html,body').animate({ scrollTop: destination }, 1000);
        return false;
    });

    // accordian download page

    function swichAccordion(parent) {
        $(parent + ' .item__title').on('click', function(e) {
            $(parent + ' .item').not($(this).parents('.item')).removeClass('opened');
            $(this).parents('.item').toggleClass('opened');
            if ($(this).parents('.item').hasClass('opened')) {
                $(parent + ' .item__info').slideUp();
                $(this).parents('.item').find('.item__info').slideDown();
            } else {
                $(this).parents('.item').find('.item__info').slideUp();
            }
            if (document.body.clientWidth < 768) {
                $('html,body').animate({ scrollTop: $(this).offset().top - 50 }, 1000);
            }
        });

        $(parent + ' .item__close').on('click', function(e) {
            $(this).parents('.item').removeClass('opened');
            $(this).parents('.item').find('.item__info').slideUp();
            if (document.body.clientWidth < 768) {
                $('html,body').animate({ scrollTop: $(this).parents('.item').offset().top - 50 }, 1000);
            }
        });
    }

    swichAccordion('.download__accordion');

    // gallery sort

    $('.js-gallery-sort').on('click', function() {

        if (!$(this).hasClass("active")) {

            if ($(this).hasClass('tabs__btn')) {
                $('.tabs__btn,.tabs__type').removeClass('active');
            }
            if ($(this).hasClass('tabs__type')) {
                $('.tabs__type').removeClass('active');
            }
            $(this).addClass("active")

            $('.tabs__content').hide();
            var type = $(this).data('pagin')
            $.ajax({
                url: 'ajax/' + type + '.html',
                success: function(html) {
                    $('.tabs__content').html(html);
                    $('.tabs__content').fadeIn();
                }
            });
        }
    });

    $('.js-gallery-more').on('click', function() {

        $.ajax({
            url: 'ajax/more.html',
            success: function(html) {
                $('.tabs__content').append(html);
                $('.tabs__add').slideDown();
            }
        });
    });

    // tabs

    $(".js-tabs__item").hide().eq(0).show();

    $(".js-tabs__btn").click(function() {
        if (!$(this).hasClass("active")) {
            $(".js-tabs__btn").removeClass("active").eq($(this).index()).addClass("active");
            $(".js-tabs__item").hide().eq($(this).index()).fadeIn();
        }
    }).eq(0).addClass("active");


    $('.js-review-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.js-fancybox').fancybox({
        // padding: 0
    });

    $('.js-popup').fancybox({
        padding: 0,
        closeBtn: false
    });

    $('.js-fancy-close').on('click', function() {
        $.fancybox.close();
    })


    $('.js-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplaySpeed: 5000,
    });

    // search
    // if (document.body.clientWidth > 1199) {

    $('.search__icon').on('click', function() {
        $('.search__block').slideDown();
    });

    $('.search__close').on('click', function() {
        $('.search__block').hide();
    });
    // }

    // sidebar
    $('.js-sidebar-arr').on('click', function() {
        $(this).parent().toggleClass('opened').find('.side-submenu').slideToggle();
    })

    if (document.body.clientWidth > 1199) {

        // menu

        $('.menu__item').eq(1).hover(function() {
            $(this).addClass('js-menu-item-active');
            $('.menu__item').eq(0).removeClass('js-menu-item-active');
        }, function() {
            $('.menu__item').eq(0).addClass('js-menu-item-active');
            $(this).removeClass('js-menu-item-active');
        });

        // submenu  

        $('.sub-menu__item_drop').hover(function() {
            $(this).children('.sub-menu__drop').stop(true, true).slideDown();
            $(this).children('.sub-menu__link_drop').addClass('active');

        }, function() {
            $(this).children('.sub-menu__drop').stop(true, true).hide();
            $(this).children('.sub-menu__link_drop').removeClass('active');
        });

        // windows form

        $('.js-windows-form-open').on('click', function() {
            $('.windows-banner__form').fadeIn();
            $('.js-windows-form-open').hide();

        })
        $('.js-windows-form-close').on('click', function() {
            $('.windows-banner__form').fadeOut();
            $('.js-windows-form-open').show();

        })
    }

    if (document.body.clientWidth < 1200) {

        // menu

        $('.menu__item').on('click', function(e) {
            if (!$(this).hasClass('js-menu-item-active')) {
                $(this).addClass('js-menu-item-active');
                $('.menu__item').not($(this)).removeClass('js-menu-item-active');
            }
        })

        // sidebar menu

        $('.js-sidebar-open').on('click', function(e) {
            $('.sidebar__menu').fadeIn();
            $('.overlay_sidebar').toggle();
        })

        $('.js-sidebar-close').on('click', function(e) {
            $('.sidebar__menu').hide();
            $('.overlay_sidebar').hide();
        })

        // windows form

        $('.js-windows-form-open').on('click', function() {
            $.fancybox.open({
                href: '#windows',
                padding: 0,
                closeBtn: false
            });

        })

        $('.js-tabs__sort').slick({
            dots: false,
            arrows: true,
            infinite: false,
            // centerMode: true,
            variableWidth: true,
            // initialSlide: 3
        });


    }

    if (document.body.clientWidth < 1200 && document.body.clientWidth > 767) {

        $('.sub-menu__link_drop').on('click', function(e) {
            if (!$(this).hasClass('active')) {
                $('.sub-menu__drop').not($(this).next()).hide();
                $('.sub-menu__link_drop').not($(this)).removeClass('active');
            }
            $(this).next().stop(true, true).slideToggle();
            $(this).toggleClass('active');
        })

        $('.sub-menu__link_drop').on('click', function(e) {
            e.preventDefault();
        })
    }

    if (document.body.clientWidth > 767) {
        $('.js-reviews-group').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });
    }


    if (document.body.clientWidth < 768) {

        $('.js-sub-menu').slick({
            dots: false,
            arrows: true,
            infinite: false,
            centerMode: true,
            variableWidth: true,
            initialSlide: 1
        });

        $('.js-slider-feature').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            autoplaySpeed: 5000,
        });


        $('.js-accordian-toggle').on('click', function() {
            $(this).toggleClass('active');
            $(this).next('.js-accordian-inner').slideToggle();
        })

        // reviews page

        function displayReviews() {
            var count = $('.reviews-group__item').length;
            var init = 2;
            $('.reviews-group__item').slice(init, count).hide();

            $('.js-reviews-more').on('click', function() {
                $('.reviews-group__item').slice(init, init + 2).slideDown();
                init += 2;
                if (init >= count) {
                    $('.js-reviews-more').hide();
                }
            })

        }
        displayReviews();
    }


    // menu mobile

    $('.js-toggle').on('click', function(e) {
        e.stopPropagation();
        $('.header-top__menu,.top-menu__close').toggleClass('active');
        $('.overlay_menu').toggle();

    })

    function hideNotTarget(event, targetElems, hideElems, removeClassElems) {
        if (!$(event.target).is(targetElems)) {
            $(hideElems).hide();
            removeClassElems ? $(removeClassElems).removeClass('active') : false;
        };
    };

    $(document).on('click touchstart', function(e) {

        hideNotTarget(e, '.search__icon, .search__block, .search__block *', '.search__block');

        if (document.body.clientWidth < 1200) {

            hideNotTarget(e, '.toggle, .header-top__menu, .header-top__menu *', '.overlay_menu', '.header-top__menu,.top-menu__close');

            hideNotTarget(e, '.sub-menu__item_drop, .sub-menu__item_drop *', '.sub-menu__drop', '.sub-menu__link_drop');

            hideNotTarget(e, '.sidebar__btn, .sidebar__menu, .sidebar__menu *', '.sidebar__menu, .overlay_sidebar');

        }

    });

    $('.js-radio-call').on('click', function(event) {

        if (!$('#radio_call').prop("checked")) {
            $("#message_feed").attr("disabled", "disabled").removeAttr("data-valid");
            $('#message_feed').removeClass('err');
            $('#message_feed').next(".err-text").remove();            
        } 
    });

    $('.js-radio-ask').on('click', function(event) {

        if (!$('#radio_ask').prop("checked")) {
            $("#message_feed").attr("disabled", false).attr("data-valid", "text");
            $('#message_feed').removeClass('err');
            $('#message_feed').next(".err-text").remove();
        } 
    });


    // form validate

    $('form button[type=submit]').click(function() {
        var er = 0;
        var form = $(this).parents('form');
        $(".err-text").remove();
        $.each(form.find('[data-valid]'), function(index, val) {

            var validType = $(this).data('valid');

            switch (validType) {

                case "email":
                    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(this).val()))) {
                        er++;
                        $(this).addClass('err');
                        $(this).parent().append('<span class="err-text">введите правильно e-mail!</span>');
                    } else {
                        $(this).removeClass('err');
                        $(this).parent().children(".err-text").remove();
                    }
                    break;

                case "phone":
                    if (!/[0-9()-\s+]{3,20}/.test($(this).val())) {
                        er++;
                        $(this).addClass('err');
                        $(this).parent().append('<span class="err-text">введите правильно номер!</span>');
                    } else {
                        $(this).removeClass('err');
                        $(this).parent().children(".err-text").remove();
                    }
                    break;

                case "services":
                    if ($(this).find('.checkbox__hidden:checked').length) {
                        $(this).removeClass('err');
                        $(this).parent().children(".err-text").remove();
                    } else {
                        er++;
                        $(this).addClass('err');
                        $(this).parent().append('<span class="err-text">выберите услугу!</span>');
                    }
                    break;

                case "select":
                    if ($(this).val() == '') {
                        er++;
                        $(this).parents('.dropdown').addClass('err');
                        $(this).parents('.form__block').append('<span class="err-text">выберите пункт!</span>');
                    } else {
                        $(this).parents('.dropdown').removeClass('err');
                        $(this).parents('.form__block').children(".err-text").remove();
                    }
                    break;

                default:
                    if ($(this).val() == '') {
                        er++;
                        $(this).addClass('err');
                        $(this).parent().append('<span class="err-text">заполните поле!</span>');
                    } else {
                        $(this).removeClass('err');
                        $(this).parent().children(".err-text").remove();
                    }

            }

        });
        if (er == 0) {
            $.fancybox.open({
                href: '#success',
                padding: 0,
                closeBtn: false
            });
            return false;
        } else {
            return false;
        }
    });

    $('form input, form textarea').focus(function() {
        $(this).removeClass('err');
        $(this).parent().children(".err-text").remove();
        $(this).addClass('active');
    });
    $('.select').on('change', function() {
        $(this).parents('.dropdown').removeClass('err');
        $(this).parents('.form__block').children(".err-text").remove();
    })
    $('.checkbox').on('click', function() {
        $(this).parents('.services').removeClass('err');
        $(this).parents('.services').next(".err-text").remove();
    })

    $('form input, form textarea').blur(function() {
        if ($(this).val() === '') {
            $(this).removeClass('active');
        }
    });

    // Maps

    function map() {
        var myLatlng = new google.maps.LatLng(53.930116, 27.579205);

        var zoom = 17;

        var posMinsk = new google.maps.LatLng(53.9298819, 27.5794092);

        var mapOptions = {
            zoom: zoom,
            center: myLatlng,
            scrollwheel: false
        }

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var markerMinsk = new google.maps.Marker({
            position: posMinsk,
            map: map,
            title: 'Минск, улица Сурганова, 61, пом. 27-7',
            icon: 'img/marker.png'
        });

    };

    if ($('#map').length) {
        map();
    }

    function mapContacts() {
        var myLatlng = new google.maps.LatLng(53.512446, 28.318036);
        var zoom = 8;

        if (document.body.clientWidth < 1200) {
            zoom = 7;
            myLatlng = new google.maps.LatLng(53.388137, 28.095563);
        }

        if (document.body.clientWidth < 767) {
            myLatlng = new google.maps.LatLng(53.707983, 28.216413);
        }

        var posMinsk = new google.maps.LatLng(53.9298819, 27.5794092);

        var posBobr = new google.maps.LatLng(53.122841, 29.234296);


        var mapOptions = {
            zoom: zoom,
            center: myLatlng,
            scrollwheel: false
        }

        var map = new google.maps.Map(document.getElementById('mapContacts'), mapOptions);

        var markerMinsk = new google.maps.Marker({
            position: posMinsk,
            map: map,
            title: 'Минск, улица Сурганова, 61, пом. 27-7',
            icon: 'img/marker.png'
        });

        markerMinsk.addListener('click', function() {
            map.setZoom(17);
            map.setCenter(markerMinsk.position);
        });


        var markerBobr = new google.maps.Marker({
            position: posBobr,
            map: map,
            title: 'Могилевская область, г. Бобруйск, Парковая, 57',
            icon: 'img/marker-red.png'
        });

        markerBobr.addListener('click', function() {
            map.setZoom(17);
            map.setCenter(markerBobr.position);
        });

    };

    if ($('#mapContacts').length) {
        mapContacts();
    }

});
