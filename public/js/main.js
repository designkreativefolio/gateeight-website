;(function ($) {

  $(document).ready(function () {

    /*========== HEADER STICKY ==========*/
    if ($("#header").length > 0) {
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $(".header-area").removeClass("sticky");
        } else {
          $(".header-area").addClass("sticky");
        }
      });
    }

/*========== TEAM CAROUSEL ==========*/
(function ($) {
  $(function () {
    const $carousel = $('.team-carousel');

    if ($carousel.length && $.fn.owlCarousel) {
      const teamCarousel = $carousel.owlCarousel({
        items: 4,
        margin: 24,
        loop: true,
        dots: true,
        nav: false, // we use custom arrows
        autoplay: false,
        autoplayTimeout: 4500,
        smartSpeed: 700,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 }
        }
      });

      // Custom navigation
      $('.team-prev').on('click', function (e) {
        e.preventDefault();
        teamCarousel.trigger('prev.owl.carousel');
      });

      $('.team-next').on('click', function (e) {
        e.preventDefault();
        teamCarousel.trigger('next.owl.carousel');
      });
    } else {
      console.warn("Owl Carousel not found or .team-carousel missing");
    }
  });
})(jQuery);


    /*========== PROGRESS BAR ==========*/
    function progress_bar() {
      var speed = 30;
      var items = $('.progress_bar').find('.progress_bar_item');
      items.each(function () {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);

        var count = setInterval(function () {
          if (i <= itemValue) {
            var iStr = i.toString();
            item.css({ 'width': iStr + '%' });
            value.find('.item_value').html(iStr + '%');
          } else {
            clearInterval(count);
          }
          i++;
        }, speed);
      });
    }
    progress_bar();

    /*========== PAGE SCROLL PROGRESS ==========*/
    var progressPath = document.querySelector(".progress-wrap path");
    if (progressPath) {
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);

      var offset = 50;
      var duration = 550;
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
          $(".progress-wrap").addClass("active-progress");
        } else {
          $(".progress-wrap").removeClass("active-progress");
        }
      });
      $(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    }

    /*========== YOUTUBE POPUP ==========*/
    if ($.fn.magnificPopup && $(".popup-youtube").length) {
      $(".popup-youtube").magnificPopup({ type: "iframe" });
    }

    /*========== AOS ==========*/
    if (typeof AOS !== 'undefined') {
      AOS.init({ disable: 'mobile' });
    }

    /*========== NICE SELECT ==========*/
    if ($.fn.niceSelect) {
      $('select').niceSelect();
    }

  }); // end document.ready


  /*========== COUNTER UP ==========*/
  (function () {
    var $counters = $('.counter');
    if ($counters.length > 0 && $.fn.countUp) {
      try {
        $counters.countUp();
      } catch (e) {
        console.error('countUp error:', e);
      }
    }
  })();


  /*========== HERO / OTHER OWL CAROUSELS ==========*/
  if ($.fn.owlCarousel) {
    // Hero slider
    $('.slider-header-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoHeight: true,
      dots: true,
      mouseDrag: false,
      items: 1,
      autoplay: true,
      vertical: true, // ignored by Owl if not supported – harmless
      navText: ["<i class='fa-solid fa-angle-up'></i>", "<i class='fa-solid fa-angle-down'></i>"],
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 2000,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      responsiveClass: true,
      responsive: {
        0: { items: 1, nav: true },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });

    // Case study slider
    $('.casestudy-slider-area').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      mouseDrag: true,
      items: 10,
      autoplay: true,
      navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
      smartSpeed: 2000,
      autoplayTimeout: 2500,
      responsiveClass: true,
      responsive: {
        0: { items: 1, nav: true },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    // Testimonial slider #4
    $('.testimonial-slider-boxarea4').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      mouseDrag: true,
      items: 10,
      autoplay: true,
      navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
      smartSpeed: 3000,
      autoplayTimeout: 4000,
      responsiveClass: true,
      responsive: {
        0: { items: 1, nav: true },
        600: { items: 2 },
        1000: { items: 2 }
      }
    });

    // Slider images strip
    $('.slider-images').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      mouseDrag: true,
      items: 10,
      autoplay: true,
      smartSpeed: 2000,
      autoplayTimeout: 3000,
      responsiveClass: true,
      responsive: {
        0: { items: 2, nav: false },
        600: { items: 3 },
        1000: { items: 5 }
      }
    });

    // Testimonials (dots)
    $('.testimonial-slider-area').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      mouseDrag: true,
      items: 10,
      autoplay: true,
      smartSpeed: 2000,
      autoplayTimeout: 3000,
      responsiveClass: true,
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  }

  /*========== SLICK CAROUSELS (guarded) ==========*/
  if ($.fn.slick) {
    // Big + thumbs gallery
    $('.slider-galeria').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      asNavFor: '.slider-galeria-thumbs',
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow')
    });

    $('.slider-galeria-thumbs').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      items: 15,
      arrows: true,
      asNavFor: '.slider-galeria',
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      infinite: false,
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow')
    });

    // Footer/product linked sliders
    $(".product-slider-nav").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: true,
      asNavFor: ".foter-carousel",
      autoplay: true,
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow')
    });

    $('.slider-nav1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.foter-carousel',
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      autoplay: true,
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow')
    });

    $('.foter-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow'),
      fade: true,
      asNavFor: '.slider-nav1'
    });

    // Vertical image reels
    $('.all-images-area').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 9000,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      touchMove: true,
      swipeToSlide: true,
      swipe: true,
      responsive: [
        { breakpoint: 1024, settings: { autoplay: false } },
        { breakpoint: 600,  settings: { autoplay: false } },
        { breakpoint: 480,  settings: { autoplay: false, touchMove: false } },
        { breakpoint: 375,  settings: { autoplay: false, touchMove: false } },
        { breakpoint: 320,  settings: { autoplay: false, touchMove: false } }
      ]
    });

    $('.all-images-area2').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      touchMove: true,
      swipeToSlide: true,
      swipe: true,
      responsive: [
        { breakpoint: 1024, settings: { autoplay: false } },
        { breakpoint: 600,  settings: { autoplay: false } },
        { breakpoint: 480,  settings: { autoplay: false } },
        { breakpoint: 375,  settings: { autoplay: false } },
        { breakpoint: 320,  settings: { autoplay: false } }
      ]
    });
  }

  /*========== PRELOADER ==========*/
  $(window).on("load", function () {
    setTimeout(function () {
      $(".preloader").fadeToggle();
    }, 400);
  });

  /*========== GSAP REVEAL (kept as-is) ==========*/
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.config({ nullTargetWarn: false, trialWarn: false });

    // Title animation helper (optional call if used elsewhere)
    function pbmit_title_animation() {
      ScrollTrigger.matchMedia({
        "(max-width: 375px)": function () {
          var pbmit_var = $('.pbmit-heading, .pbmit-heading-subheading');
          if (!pbmit_var.length) return;
          const quotes = document.querySelectorAll(".pbmit-heading .pbmit-title , .pbmit-heading-subheading .pbmit-title");
          quotes.forEach(quote => {
            var getclass = quote.closest('.pbmit-heading ,.pbmit-heading-subheading').className;
            var animation = getclass.split('animation-');
            if (animation[1] == "style4") return;

            quote.split = new SplitText(quote, { type: "lines,words,chars", linesClass: "split-line" });
            gsap.set(quote, { perspective: 400 });

            if (animation[1] == "style1") {
              gsap.set(quote.split.chars, { opacity: 0, y: "90%", rotateX: "-40deg" });
            }
            if (animation[1] == "style2") {
              gsap.set(quote.split.chars, { opacity: 0, x: "50" });
            }
            if (animation[1] == "style3") {
              gsap.set(quote.split.chars, { opacity: 0 });
            }
            gsap.to(quote.split.chars, {
              scrollTrigger: { trigger: quote, start: "top 90%" },
              x: "0", y: "0", rotateX: "0", opacity: 1, duration: 1, ease: Back.easeOut, stagger: .02
            });
          });
        }
      });
    }

    // Image reveal
    if ($('.reveal').length) {
      let revealContainers = document.querySelectorAll(".reveal");
      revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({ scrollTrigger: { trigger: container, toggleActions: "play none none none" } });
        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, { xPercent: -100, ease: Power2.out });
        tl.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out });
      });
    }
  }

})(jQuery);
