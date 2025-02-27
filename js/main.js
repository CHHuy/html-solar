// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.
import "../third_party/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

jQuery(document).ready(function () {
  jQuery(".select_option").each(function () {
    var $this = jQuery(this),
      numberOfOptions = jQuery(this).children("option").length;
    var val = $this.val();
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after(
      '<div class="select-styled">' +
        jQuery(this).find(":selected").text() +
        "</div>"
    );
    var $styledSelect = $this.next("div.select-styled");
    var $list = jQuery("<ul />", { class: "select-options" }).insertAfter(
      $styledSelect
    );
    for (var i = 0; i < numberOfOptions; i++) {
      var active = "";
      if (val) {
        if ($this.children("option").eq(i).val() == val) {
          active = "active";
        }
      } else {
        if (!i) {
          active = "active";
        }
      }
      jQuery("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
        class: active,
      }).appendTo($list);
    }
    var $listItems = $list.children("li");
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text(jQuery(this).text()).removeClass("active");
      if (!jQuery(this).hasClass("active")) {
        $list.children(".active").removeClass("active");
        $styledSelect.children().removeClass("active");
        jQuery(this).addClass("active");
        $this.val(jQuery(this).attr("rel"));
        $this.trigger("change");
      }
    });
    jQuery(document).click(function () {
      $styledSelect.removeClass("active");
    });
  });
  jQuery(".select-styled").click(function () {
    jQuery(this).next().fadeToggle("fast");
  });
  jQuery(document).click(function (e) {
    if (e.target.className != "select-styled") {
      jQuery(".select-options").fadeOut("fast");
    }
  });
  jQuery(".select-options li").click(function () {
    jQuery(this).parent().fadeOut("fast");
  });
  jQuery(document).on("click", ".select_option", function (event) {
    jQuery(".select-options").fadeOut("fast");
  });
  jQuery(document).delegate(".select .select-styled", "click", function () {
    var elementTarget = this;
    jQuery(".select .select-styled").each(function (index, item) {
      if (!jQuery(item).is(elementTarget)) {
        jQuery(this).next(".select-options").fadeOut("fast");
      }
    });
  });
  if (jQuery(".top_bar_scroll").length > 0) {
    jQuery(window).scroll(function () {
      var TopVal = jQuery(".about_enterprise,.scroll_topbar").position().top;
      if (jQuery(this).scrollTop() > TopVal) {
        jQuery(".top_bar_scroll").addClass("active");
      } else {
        jQuery(".top_bar_scroll").removeClass("active");
      }
    });
  }
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("#masthead_solar").addClass("sticky");
      jQuery("#masthead_solar_scroll").addClass("sticky");
    } else {
      jQuery("#masthead_solar").removeClass("sticky");
      jQuery("#masthead_solar_scroll").removeClass("sticky");
    }
  });
  jQuery(".btn_oppen_menu").click(function () {
    jQuery(this).toggleClass("toggle");
    jQuery(".mobile_main_menu").toggleClass("toggle");
    jQuery(".mobile_main_menu li").removeClass("toggle");
  });
  jQuery(".solution_tab_box .solution_tab_icon").click(function () {
    jQuery(".solution_tab_box .solution_tab_icon").removeClass("buzz");
    jQuery(this).addClass("buzz");
  });
  jQuery(".btn_menu_cat").click(function () {
    jQuery(this).toggleClass("toggle");
    jQuery(
      ".top_menu ul,.cat_product_page .grid-25.tablet-grid-30"
    ).toggleClass("toggle");
  });
  jQuery(
    ".about_enterprise .box_content a.button_style,.solution_family .item .button_style,.open_popup"
  ).click(function (even) {
    even.preventDefault();
    jQuery(".popup_tuvan").addClass("active");
  });
  jQuery(".close_popup,.bg_popup_close").click(function (even) {
    even.preventDefault();
    jQuery(".popup_tuvan").removeClass("active");
    jQuery(".consultation_form_sec.step1").removeClass("display_none");
    jQuery(".consultation_form_sec.step3").addClass("display_none");
    jQuery(".close_popup_video").removeClass("display_none");
    jQuery(".popup_tuvan .content > h2").removeClass("display_none");
    var vid = document.getElementById("myVideo");
    vid.pause();
  });
  jQuery(".banner_slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    dots: !1,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: !0,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          dots: !1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
          fade: !0,
          autoplaySpeed: 3000,
          arrows: !1,
          dots: !0,
        },
      },
    ],
  });
  jQuery(".estimation_system .slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    dots: !1,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    adaptiveHeight: !0,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          dots: !0,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
          autoplaySpeed: 3000,
        },
      },
    ],
  });
  jQuery(".product_family .slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    dots: !1,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    adaptiveHeight: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          dots: !0,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".project_slider").slick({
    infinite: !0,
    centerMode: !0,
    arrows: !0,
    dots: !1,
    centerPadding: "30%",
    slidesToShow: 1,
    speed: 500,
    autoplay: !1,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          centerMode: !0,
          arrows: !0,
          dots: !1,
          centerPadding: "25%",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 1,
          centerMode: !0,
          arrows: !0,
          dots: !1,
          centerPadding: "20%",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerMode: !0,
          arrows: !0,
          dots: !1,
          centerPadding: "20%",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 876,
        settings: {
          slidesToShow: 1,
          centerMode: !0,
          arrows: !0,
          dots: !1,
          centerPadding: "10%",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          centerMode: !0,
          arrows: !1,
          dots: !0,
          centerPadding: "0%",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  });
  jQuery(".trust .slider").slick({
    infinite: !0,
    centerMode: !0,
    arrows: !0,
    dots: !1,
    centerPadding: "30%",
    slidesToShow: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          centerMode: !0,
          arrows: !1,
          dots: !0,
          centerPadding: "10%",
          slidesToShow: 1,
          speed: 1000,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: !0,
          centerMode: !0,
          arrows: !1,
          dots: !0,
          centerPadding: "0%",
          slidesToShow: 1,
          speed: 1000,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".product_tab_haveslider").slick({
    rows: 2,
    dots: !1,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: !0,
          dots: !0,
          arrows: !1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: !0,
          dots: !0,
          arrows: !1,
          rows: 1,
        },
      },
    ],
  });
  const tab = document.querySelectorAll(".button_tab");
  const panel = document.querySelectorAll(".single__tab");
  function tabClick(event) {
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove("active");
    }
    for (let i = 0; i < panel.length; i++) {
      panel[i].classList.remove("active");
    }
    event.target.classList.add("active");
    let classString = event.target.getAttribute("data-target");
    document
      .getElementById("tabs__content")
      .getElementsByClassName(classString)[0]
      .classList.add("active");
  }
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", tabClick, !1);
  }
  const tab1 = document.querySelectorAll(".button_tab1");
  const panel1 = document.querySelectorAll(".single__tab1");
  function tabClick1(event) {
    jQuery(".project_slider").slick("refresh");
    for (let i = 0; i < tab1.length; i++) {
      tab1[i].classList.remove("active");
    }
    for (let i = 0; i < panel1.length; i++) {
      panel1[i].classList.remove("active");
    }
    event.target.classList.add("active");
    let classString = event.target.getAttribute("data-target");
    document
      .getElementById("tabs__content1")
      .getElementsByClassName(classString)[0]
      .classList.add("active");
  }
  for (let i = 0; i < tab1.length; i++) {
    tab1[i].addEventListener("click", tabClick1, !1);
  }
  const tab2 = document.querySelectorAll(".button_tab2");
  const panel2 = document.querySelectorAll(".single__tab2");
  function tabClick2(event) {
    jQuery(".product_tab_haveslider").slick("refresh");
    for (let i = 0; i < tab2.length; i++) {
      tab2[i].classList.remove("active");
    }
    for (let i = 0; i < panel2.length; i++) {
      panel2[i].classList.remove("active");
    }
    event.target.classList.add("active");
    let classString = event.target.getAttribute("data-target");
    document
      .getElementById("tabs__content2")
      .getElementsByClassName(classString)[0]
      .classList.add("active");
  }
  for (let i = 0; i < tab2.length; i++) {
    tab2[i].addEventListener("click", tabClick2, !1);
  }
  jQuery(".partners_list").slick({
    infinite: !0,
    arrows: !0,
    dots: !1,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          arrows: !1,
          dots: !0,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          arrows: !1,
          dots: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  jQuery(".solution_family .slider").slick({
    infinite: !0,
    arrows: !0,
    dots: !1,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          arrows: !1,
          dots: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".box_cat_product .slider").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  jQuery(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !1,
    speed: 1000,
    adaptiveHeight: !0,
    fade: !0,
    asNavFor: ".slider-nav",
  });
  jQuery(".slider-nav").slick({
    infinite: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    asNavFor: ".slider-for",
    dots: !1,
    arrows: !0,
    focusOnSelect: !0,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });
  jQuery(".nav_scoll li a").click(function (even) {
    even.preventDefault();
    jQuery(".nav_scoll li a").removeClass("active");
    jQuery(this).addClass("active");
  });
  jQuery(".view_info_more").click(function (even) {
    even.preventDefault();
    jQuery(".specifications_datails").addClass("active");
    jQuery(this).addClass("active");
  });
  jQuery("#certificate .slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: !0,
          dots: !1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: !0,
          dots: !1,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          dots: !1,
        },
      },
    ],
  });
  jQuery(".practical_project .slider").slick({
    dots: !1,
    infinite: !0,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          infinite: !0,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: !1,
          dots: !0,
        },
      },
      {
        breakpoint: 601,
        settings: {
          infinite: !0,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          dots: !0,
        },
      },
    ],
  });
  jQuery(".contact_page .slider").slick({
    dots: !1,
    infinite: !0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 876,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: !0,
          dots: !0,
          arrows: !1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          dots: !0,
          arrows: !1,
        },
      },
    ],
  });
  jQuery(".js-anchor-link").click(function (e) {
    e.preventDefault();
    var target = jQuery(jQuery(this).attr("href"));
    console.log(jQuery(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top - 100;
      jQuery("body, html").animate({ scrollTop: scrollTo + "px" }, 1000);
      jQuery("body").removeClass("active");
    }
  });
  jQuery(".slider_for_gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".slider_nav_gallery",
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    adaptiveHeight: !0,
  });
  jQuery(".slider_nav_gallery").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider_for_gallery",
    dots: !1,
    focusOnSelect: !0,
    arrows: !0,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          asNavFor: ".slider_for_gallery",
          dots: !1,
          focusOnSelect: !0,
          arrows: !0,
          prevArrow:
            '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
          nextArrow:
            '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
          speed: 800,
        },
      },
    ],
  });
  jQuery(".partner_section .slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    dots: !1,
    arrows: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:
            '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
          nextArrow:
            '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
          dots: !0,
          arrows: !1,
        },
      },
    ],
  });
  jQuery(".partner_general .slider").slick({
    infinite: !0,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    dots: !1,
    arrows: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow:
            '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
          nextArrow:
            '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
          dots: !0,
          arrows: !1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          infinite: !0,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow:
            '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
          nextArrow:
            '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
          dots: !0,
          arrows: !1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:
            '<div class="arrow arrow-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
          nextArrow:
            '<div class="arrow arrow-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
          dots: !0,
          arrows: !1,
        },
      },
    ],
  });
  jQuery(".slick_for_action").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !1,
    speed: 100,
    fade: !0,
    autoplay: !1,
    asNavFor: ".slick_nav_action",
  });
  jQuery(".slick_nav_action").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !1,
    asNavFor: ".slick_for_action",
    dots: !1,
    arrows: !1,
    focusOnSelect: !0,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });
  jQuery(".benefit_solution_2 .slider").slick({
    infinite: !0,
    arrows: !0,
    dots: !1,
    slidesToShow: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          infinite: !0,
          arrows: !1,
          dots: !0,
          slidesToShow: 1,
          speed: 1000,
        },
      },
    ],
  });
  jQuery(".why_choose_solar_solution .slider").slick({
    infinite: !0,
    arrows: !0,
    dots: !1,
    slidesToShow: 1,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: !0,
          arrows: !1,
          dots: !0,
          slidesToShow: 1,
          speed: 1000,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".procedure_solution .slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: !0,
          arrows: !1,
          infinite: !0,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: !0,
          arrows: !1,
          infinite: !0,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: !0,
          arrows: !1,
          infinite: !0,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".list_solution_page .slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".general_knowledge .slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
    nextArrow: '<div class="arrow arrow-next"><span></span></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: !0,
          infinite: !0,
          arrows: !1,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<div class="arrow arrow-prev"><span></span></div>',
          nextArrow: '<div class="arrow arrow-next"><span></span></div>',
        },
      },
    ],
  });
  jQuery(".question_answer .item_q").click(function () {
    jQuery(".question_answer .item").removeClass("toggle");
    jQuery(this).parent(".item").addClass("toggle");
  });
  jQuery("li.term_parent i").click(function () {
    jQuery(this).parent("li.term_parent").toggleClass("toggle");
  });
  jQuery(".menu_cat_product_tax_page ul a.active")
    .parent(".menu_cat_product_tax_page .sub_menu li")
    .parent(".menu_cat_product_tax_page .sub_menu")
    .parent(".menu_cat_product_tax_page .term_parent")
    .addClass("toggle active");
  jQuery(".list_cat_solution ul.sub_menu li a.active")
    .parent(".list_cat_solution .sub_menu li")
    .parent(".list_cat_solution .sub_menu")
    .parent(".list_cat_solution .item_parent")
    .addClass("toggle active");
  jQuery(document).ready(function () {
    jQuery(".question_answer .item").slice(0, 6).show();
    jQuery("#loadMore").on("click", function (e) {
      e.preventDefault();
      jQuery(".item:hidden").slice(0, 6).slideDown();
      if (jQuery(".item:hidden").length == 0) {
        jQuery("#loadMore").remove();
      }
    });
  });
  jQuery(".menu_cat_product_tax_page ul a.active")
    .parent(".menu_cat_product_tax_page .sub_menu li")
    .parent(".menu_cat_product_tax_page .sub_menu")
    .parent(".menu_cat_product_tax_page .term_parent")
    .addClass("toggle active");
  jQuery(".list_cat_solution ul.sub_menu li a.active")
    .parent(".list_cat_solution .sub_menu li")
    .parent(".list_cat_solution .sub_menu")
    .parent(".list_cat_solution .item_parent")
    .addClass("toggle active");
  jQuery(".document_page .menu_cat_product_tax_page a label").click(
    function () {
      jQuery(".document_page .menu_cat_product_tax_page a").removeClass(
        "active"
      );
      jQuery(this)
        .parent(".document_page .menu_cat_product_tax_page a")
        .addClass("active");
    }
  );
  jQuery(".btn_cat_document").click(function () {
    jQuery(this).toggleClass("toggle");
    jQuery(
      ".general_knowledge .content_left , .list_cat_question ,.sidebar_post"
    ).toggleClass("toggle");
  });
  jQuery(".form_dk_partner .box .info").click(function () {
    jQuery(".form_dk_partner .form_dk input.wpcf7-submit").click();
  });
  jQuery(
    ".document_page.active a.down_load_file,.about_solution a.button_style,.benefit_solution_2 a.button_style"
  ).click(function (even) {
    even.preventDefault();
    jQuery(".popup_tuvan").addClass("active");
  });
  jQuery(
    ".page-template-document_knowledge .popup_tuvan.popup_dowload_document input.wpcf7-submit"
  ).click(function () {
    jQuery(".popup_tuvan,.general_knowledge").removeClass("active");
  });
  jQuery(function () {
    jQuery(".tabs__navigation button").on("click", function () {
      jQuery(".bg_load").addClass("active");
      setTimeout(RemoveClass, 1000);
    });
    function RemoveClass() {
      jQuery(".bg_load").removeClass("active");
    }
  });
  jQuery(".mobile_main_menu").prepend(jQuery(".search_mobile"));
  jQuery(".mobile_main_menu>ul>li.menu-item-has-children").append(
    '<span class="toggle_menu"><i class="fa fa-caret-right" aria-hidden="true"></i></span>'
  );
  jQuery("span.toggle_menu").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(this).parent("li").toggleClass("toggle");
  });
  scroll_to_section();
});
function scroll_to_section() {
  jQuery(".top_bar_scroll ul li a").click(function () {
    jQuery(this).parent(".top_bar_scroll ul li").addClass("active");
    jQuery("html, body").animate(
      { scrollTop: jQuery(jQuery(this).attr("href")).offset().top },
      500
    );
    return !1;
  });
  var topMenu = jQuery(".top_bar_scroll"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var item = jQuery(jQuery(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  jQuery(window).scroll(function () {
    var fromTop = jQuery(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
      if (jQuery(this).offset().top < fromTop) return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  });
}
