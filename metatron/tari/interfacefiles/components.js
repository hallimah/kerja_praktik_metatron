/**

 Core layout handlers and component wrappers

 **/
// BEGIN: Layout Brand
var LayoutBrand = function() {
	return {
		//main function to initiate the module
		init: function() {
			$('body').on('click', '.c-hor-nav-toggler', function() {
				var target = $(this).data('target');
				$(target).toggleClass("c-shown");
			});
		}
	};
}();
// END
// BEGIN: Layout Brand
var LayoutHeaderCart = function() {
	return {
		//main function to initiate the module
		init: function() {
			var cart = $('.c-cart-menu');
			if (cart.size() === 0) {
				return;
			}
			if (App.getViewPort().width < App.getBreakpoint('md')) { // mpbile mode
				$('body').on('click', '.c-cart-toggler', function(e) {
					e.preventDefault();
					e.stopPropagation();
					$('body').toggleClass("c-header-cart-shown");
				});
				$('body').on('click', function(e) {
					if (!cart.is(e.target) && cart.has(e.target).length === 0) {
						$('body').removeClass('c-header-cart-shown');
					}
				});
			} else { // desktop
				$('body').on('hover', '.c-cart-toggler, .c-cart-menu', function(e) {
					$('body').addClass("c-header-cart-shown");
				});
				$('body').on('hover', '.c-mega-menu > .navbar-nav > li:not(.c-cart-toggler-wrapper)', function(e) {
					$('body').removeClass("c-header-cart-shown");
				});
				$('body').on('mouseleave', '.c-cart-menu', function(e) {
					$('body').removeClass("c-header-cart-shown");
				});
			}
		}
	};
}();
// END
// BEGIN: Layout Header
var LayoutHeader = function() {
	var offset = parseInt($('.c-layout-header').attr('data-minimize-offset') > 0 ? parseInt($('.c-layout-header').attr('data-minimize-offset')) : 0);
	var _handleHeaderOnScroll = function() {
		if ($(window).scrollTop() > offset) {
			$("body").addClass("c-page-on-scroll");
		} else {
			$("body").removeClass("c-page-on-scroll");
		}
	}
	var _handleTopbarCollapse = function() {
		$('.c-layout-header .c-topbar-toggler').on('click', function(e) {
			$('.c-layout-header-topbar-collapse').toggleClass("c-topbar-expanded");
		});
	}
	return {
		//main function to initiate the module
		init: function() {
			$('.c-quick-search').submit(function (event) {
				event.preventDefault();
				var query = $(this).find('input[name="query"]').val().trim();
				if (query) {
					document.location.href = base_url() + 'search/' + query;
				}
				//$('body').removeClass('c-layout-quick-search-shown');
			});
			if ($('body').hasClass('c-layout-header-fixed-non-minimized')) {
				return;
			}
			_handleHeaderOnScroll();
			_handleTopbarCollapse();
			$(window).scroll(function() {
				_handleHeaderOnScroll();
			});
		}
	};
}();
// END
// BEGIN: Layout Mega Menu
var LayoutMegaMenu = function() {
	return {
		//main function to initiate the module
		init: function() {
			var viewportWidth, layoutWidth, navWidth, brandWidth;
			$(window).on('resize', function() {
				viewportWidth = $('body').outerWidth();
				layoutWidth = $('.c-navbar-wrapper').outerWidth();
				navWidth = $('.c-mega-menu').outerWidth();
				if (viewportWidth < 992) {
					brandWidth = '100%';
				} else {
					brandWidth = layoutWidth - navWidth - 1;
				}
				$('.c-brand').css('max-width', brandWidth);
			});
			$('.c-mega-menu').on('click', '.c-toggler', function(e) {
				if (App.getViewPort().width < App.getBreakpoint('md')) {
					e.preventDefault();
					if ($(this).closest("li").hasClass('c-open')) {
						$(this).closest("li").removeClass('c-open');
					} else {
						$(this).closest("li").addClass('c-open');
					}
				}
			});
			$('.c-layout-header .c-hor-nav-toggler:not(.c-quick-sidebar-toggler)').on('click', function() {
				$('.c-layout-header').toggleClass('c-mega-menu-shown');
				if ($('body').hasClass('c-layout-header-mobile-fixed')) {
					var height = App.getViewPort().height - $('.c-layout-header').outerHeight(true);
					$('.c-mega-menu').css('max-height', height);
				}
			});
		}
	};
}();
// END
// BEGIN: Layout Mega Menu
var LayoutSidebarMenu = function() {
	return {
		//main function to initiate the module
		init: function() {
			$('.c-layout-sidebar-menu > .c-sidebar-menu .c-toggler').on('click', function(e) {
				e.preventDefault();
				$(this).closest('.c-dropdown').toggleClass('c-open');
			});
		}
	};
}();
// END
// BEGIN: Layout Mega Menu
var LayoutQuickSearch = function() {
	return {
		//main function to initiate the module
		init: function() {
			// desktop mode
			$('.c-layout-header').on('click', '.c-mega-menu .c-search-toggler', function(e) {
				e.preventDefault();
				$('body').addClass('c-layout-quick-search-shown');
				if (App.isIE() === false) {
					$('.c-quick-search > .form-control').focus();
				}
			});
			// mobile mode
			$('.c-layout-header').on('click', '.c-brand .c-search-toggler', function(e) {
				e.preventDefault();
				$('body').addClass('c-layout-quick-search-shown');
				if (App.isIE() === false) {
					$('.c-quick-search > .form-control').focus();
				}
			});
			// handle close icon for mobile and desktop
			$('.c-quick-search').on('click', '> span', function(e) {
				e.preventDefault();
				$('body').removeClass('c-layout-quick-search-shown');
			});
		}
	};
}();
// END
var LayoutCartMenu = function() {
	return {
		//main function to initiate the module
		init: function() {
			// desktop mode
			$('.c-layout-header').on('mouseenter', '.c-mega-menu .c-cart-toggler-wrapper', function(e) {
				e.preventDefault();
				$('.c-cart-menu').addClass('c-layout-cart-menu-shown');
			});
			$('.c-cart-menu, .c-layout-header').on('mouseleave', function(e) {
				e.preventDefault();
				$('.c-cart-menu').removeClass('c-layout-cart-menu-shown');
			});
			// mobile mode
			$('.c-layout-header').on('click', '.c-brand .c-cart-toggler', function(e) {
				e.preventDefault();
				$('.c-cart-menu').toggleClass('c-layout-cart-menu-shown');
			});
		}
	};
}();
// END
// BEGIN: Layout Mega Menu
var LayoutQuickSidebar = function() {
	return {
		//main function to initiate the module
		init: function() {
			// desktop mode
			$('.c-layout-header').on('click', '.c-quick-sidebar-toggler', function(e) {
				e.preventDefault();
				e.stopPropagation();
				if ($('body').hasClass("c-layout-quick-sidebar-shown")) {
					$('body').removeClass("c-layout-quick-sidebar-shown");
				} else {
					$('body').addClass("c-layout-quick-sidebar-shown");
				}
			});
			$('.c-layout-quick-sidebar').on('click', '.c-close', function(e) {
				e.preventDefault();
				$('body').removeClass("c-layout-quick-sidebar-shown");
			});
			$('.c-layout-quick-sidebar').on('click', function(e) {
				e.stopPropagation();
			});
			$(document).on('click', '.c-layout-quick-sidebar-shown', function(e) {
				$(this).removeClass("c-layout-quick-sidebar-shown");
			});
		}
	};
}();
// END
// BEGIN: Layout Go To Top
var LayoutGo2Top = function() {
	var handle = function() {
		var currentWindowPosition = $(window).scrollTop(); // current vertical position
		if (currentWindowPosition > 300) {
			$(".c-layout-go2top").show();
		} else {
			$(".c-layout-go2top").hide();
		}
	};
	return {
		//main function to initiate the module
		init: function() {
			handle(); // call headerFix() when the page was loaded
			if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
				$(window).bind("touchend touchcancel touchleave", function(e) {
					handle();
				});
			} else {
				$(window).scroll(function() {
					handle();
				});
			}
			$(".c-layout-go2top").on('click', function(e) {
				e.preventDefault();
				$("html, body").animate({
					scrollTop: 0
				}, 600);
			});
		}
	};
}();
// END: Layout Go To Top
// BEGIN: Onepage Nav
var LayoutOnepageNav = function() {
	var handle = function() {
		var offset;
		var scrollspy;
		var speed;
		var nav;
		$('body').addClass('c-page-on-scroll');
		offset = $('.c-layout-header-onepage').outerHeight(true);
		$('body').removeClass('c-page-on-scroll');
		if ($('.c-mega-menu-onepage-dots').size() > 0) {
			if ($('.c-onepage-dots-nav').size() > 0) {
				$('.c-onepage-dots-nav').css('margin-top', -($('.c-onepage-dots-nav').outerHeight(true) / 2));
			}
			scrollspy = $('body').scrollspy({
				target: '.c-mega-menu-onepage-dots',
				offset: offset
			});
			speed = parseInt($('.c-mega-menu-onepage-dots').attr('data-onepage-animation-speed'));
		} else {
			scrollspy = $('body').scrollspy({
				target: '.c-mega-menu-onepage',
				offset: offset
			});
			speed = parseInt($('.c-mega-menu-onepage').attr('data-onepage-animation-speed'));
		}
		scrollspy.on('activate.bs.scrollspy', function() {
			$(this).find('.c-onepage-link.c-active').removeClass('c-active');
			$(this).find('.c-onepage-link.active').addClass('c-active');
		});
		$('.c-onepage-link > a').on('click', function(e) {
			var section = $(this).attr('href');
			var top = 0;
			if (section !== "#home") {
				top = $(section).offset().top - offset + 1;
			}
			$('html, body').stop().animate({
				scrollTop: top,
			}, speed, 'easeInExpo');
			e.preventDefault();
			if (App.getViewPort().width < App.getBreakpoint('md')) {
				$('.c-hor-nav-toggler').click();
			}
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			handle(); // call headerFix() when the page was loaded
		}
	};
}();
// END: Onepage Nav
// BEGIN: Handle Theme Settings
var LayoutThemeSettings = function() {
	var handle = function() {
		$('.c-settings .c-color').on('click', function() {
			var val = $(this).attr('data-color');
			$('#style_theme').attr('href', '../assets/base/css/themes/' + val + '.css');
			$('.c-settings .c-color').removeClass('c-active');
			$(this).addClass('c-active');
		});
		$('.c-setting_header-type').on('click', function() {
			var val = $(this).attr('data-value');
			if (val == 'fluid') {
				$('.c-layout-header .c-topbar > .container').removeClass('container').addClass('container-fluid');
				$('.c-layout-header .c-navbar > .container').removeClass('container').addClass('container-fluid');
			} else {
				$('.c-layout-header .c-topbar > .container-fluid').removeClass('container-fluid').addClass('container');
				$('.c-layout-header .c-navbar > .container-fluid').removeClass('container-fluid').addClass('container');
			}
			$('.c-setting_header-type').removeClass('active');
			$(this).addClass('active');
		});
		$('.c-setting_header-mode').on('click', function() {
			var val = $(this).attr('data-value');
			if (val == 'static') {
				$('body').removeClass('c-layout-header-fixed').addClass('c-layout-header-static');
			} else {
				$('body').removeClass('c-layout-header-static').addClass('c-layout-header-fixed');
			}
			$('.c-setting_header-mode').removeClass('active');
			$(this).addClass('active');
		});
		$('.c-setting_font-style').on('click', function() {
			var val = $(this).attr('data-value');
			if (val == 'light') {
				$('.c-font-uppercase').addClass('c-font-uppercase-reset').removeClass('c-font-uppercase');
				$('.c-font-bold').addClass('c-font-bold-reset').removeClass('c-font-bold');
				$('.c-fonts-uppercase').addClass('c-fonts-uppercase-reset').removeClass('c-fonts-uppercase');
				$('.c-fonts-bold').addClass('c-fonts-bold-reset').removeClass('c-fonts-bold');
			} else {
				$('.c-font-uppercase-reset').addClass('c-font-uppercase').removeClass('c-font-uppercase-reset');
				$('.c-font-bold-reset').addClass('c-font-bold').removeClass('c-font-bold-reset');
				$('.c-fonts-uppercase-reset').addClass('c-fonts-uppercase').removeClass('c-fonts-uppercase-reset');
				$('.c-fonts-bold-reset').addClass('c-fonts-bold').removeClass('c-fonts-bold-reset');
			}
			$('.c-setting_font-style').removeClass('active');
			$(this).addClass('active');
		});
		$('.c-setting_megamenu-style').on('click', function() {
			var val = $(this).attr('data-value');
			if (val == 'dark') {
				$('.c-mega-menu').removeClass('c-mega-menu-light').addClass('c-mega-menu-dark');
			} else {
				$('.c-mega-menu').removeClass('c-mega-menu-dark').addClass('c-mega-menu-light');
			}
			$('.c-setting_megamenu-style').removeClass('active');
			$(this).addClass('active');
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			handle();
		}
	};
}();
// END: Handle Theme Settings
// BEGIN: LayoutResponsive
var LayoutResponsive = function() {
	var _init = function() {
		if ($('.equal-height').length) {
			$(window).on('resize', function() {
				setTimeout(function () {
					$('.equal-height').each(function () {
						var height = $(this).outerWidth();
						$(this).css({
							height: height,
							lineHeight: height + 'px',
							fontSize: (height * 3/5) + 'px'
						});
					});
				}, 500);
			});
		}

		if ($('.equal-child-height').length) {
			$(window).on('resize', function() {
				$('.equal-child-height').find('.equal-target-height').css({
					height: 'auto'
				});
				setTimeout(function () {
					$('.equal-child-height').each(function () {
						var parent = $(this);
						var height = 0;
						if (parent.find('.equal-target-height').length) {
							parent.find('.equal-target-height').each(function () {
								var child = $(this);
								if (height < child.outerHeight()) {
									height = child.outerHeight();
								}
							});
							parent.find('.equal-target-height').css({
								height: height
							});
						}
					});
				}, 500);
			});
		}

		if ($('.c-dukung-button').length) {
			$(window).on('resize', function() {
				setTimeout(function() {
					$('.c-dukung-button').each(function () {
						var parent = $(this).closest('.c-dukung-container');
						var height = parent.length ? parent.find('.c-dukung-content').outerHeight() : 100
						$(this).css({
							height: height
						});
					});
				}, 500);
			});
		}

		if ($('.responsive-img').length) {
			$(window).on('resize', function() {
				setTimeout(function() {
					$('.responsive-img').each(function () {
						var imgWidth = $(this).outerWidth();
						var imgHeight = imgWidth * (1/2.5);
						$(this).css({
							height: imgHeight
						});
					});
				}, 500);
			});
		}

		if ($('.c-content-media-2').length) {
			$(window).on('resize', function() {
				setTimeout(function() {
					viewportWidth = $('body').outerWidth();
					layoutHeight = viewportWidth * (1/3);
					
					$('.c-content-media-2').each(function () {
						$(this).css({
							height: layoutHeight
						});
					});
				}, 500);
			});
		}

		if ($('iframe').length) {
			$(window).on('resize', function() {
				setTimeout(function() {
					$('iframe').each(function () {
						var iframe = $(this);

						iframe.css({
							width: '100%'
						});

						var iframeHeight = $(this).attr('height');
						var iframeWidth = $(this).attr('width');

						if ( ! iframeHeight || ! iframeWidth) {
							iframeHeight = 768;
							iframeWidth = 1366;
						}

						var height = 0;
						var width = iframe.outerWidth();

						if (iframeHeight && iframeWidth) {
							height = iframeHeight / iframeWidth * width;
							iframe.css({
								height: height
							});
						}
					});
				}, 500);
			});
		}
	};
	return {
		//main function to initiate the module
		init: function() {
			_init();
		}
	};
}();
// END: LayoutResponsive
// BEGIN: OwlCarousel
var ContentOwlcarousel = function() {
	var _initInstances = function() {
		$("[data-slider='owl'] .owl-carousel").each(function() {
			var parent = $(this);
			
			var items;
			var itemsDesktop;
			var itemsDesktopSmall;
			var itemsTablet;
			var itemsTabletSmall;
			var itemsMobile;

			var rtl_mode = (typeof parent.data('rtl') !== 'undefined') ? parent.data('rtl') : false;
			var items_loop = (typeof parent.data('loop') !== 'undefined') ? parent.data('loop') : true;
			var items_nav_dots = (typeof parent.data('navigation-dots') !== 'undefined') ? parent.data('navigation-dots') : true;
			var items_nav_label = (typeof parent.data('navigation-label') !== 'undefined') ? parent.data('navigation-label') : false;
			var auto_play = (typeof parent.data("auto-play") !== 'undefined') ? parent.data("auto-play") : true;
			var auto_play_hover_pause = (typeof parent.data('auto-play-hover-pause') !== 'undefined') ? parent.data('auto-play-hover-pause') : false;
			var slide_speed = (typeof parent.data('slide-speed') !== 'undefined') ? parent.data('slide-speed') : 5000;

			if (parent.data("single-item") == true) {
				items = 1;
				itemsDesktop = 1;
				itemsDesktopSmall = 1;
				itemsTablet = 1;
				itemsTabletSmall = 1;
				itemsMobile = 1;
			} else {
				items = parent.data('items');
				itemsDesktop = parent.data('desktop-items') ? parent.data('desktop-items') : items;
				itemsDesktopSmall = parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3;
				itemsTablet = parent.data('tablet-items') ? parent.data('tablet-items') : 2;
				itemsMobile = parent.data('mobile-items') ? parent.data('mobile-items') : 1;
			}

			parent.owlCarousel({
				rtl: rtl_mode,
				loop: items_loop,
				items: items,
				responsive: {
					0: {
						items: itemsMobile
					},
					480: {
						items: itemsMobile
					},
					768: {
						items: itemsTablet
					},
					980: {
						items: itemsDesktopSmall
					},
					1200: {
						items: itemsDesktop
					}
				},
				dots: items_nav_dots,
				nav: items_nav_label,
				navText: false,
				autoplay: auto_play,
				autoplayHoverPause: auto_play_hover_pause,
				autoplayTimeout: slide_speed,
				dotsSpeed: 400,
			});
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END: OwlCarousel
// BEGIN: ContentCubeLatestPortfolio
var ContentCubeLatestPortfolio = function() {
	var _initInstances = function() {
		// init cubeportfolio
		$('.c-content-latest-works').cubeportfolio({
			filters: '#filters-container',
			loadMore: '#loadMore-container',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'quicksand',
			gapHorizontal: 20,
			gapVertical: 23,
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 500,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'lazyLoading',
			displayTypeSpeed: 100,
			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
			// singlePage popup
			singlePageDelegate: '.cbp-singlePage',
			singlePageDeeplinking: true,
			singlePageStickyNavigation: true,
			singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
			singlePageCallback: function(url, element) {
				// to update singlePage content use the following method: this.updateSinglePage(yourContent)
				var t = this;
				$.ajax({
					url: url,
					type: 'GET',
					dataType: 'html',
					timeout: 5000
				}).done(function(result) {
					t.updateSinglePage(result);
				}).fail(function() {
					t.updateSinglePage("Error! Please refresh the page!");
				});
			},
		});
		$('.c-content-latest-works-fullwidth').cubeportfolio({
			loadMoreAction: 'auto',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'fadeOutTop',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1600,
				cols: 5
			}, {
				width: 1200,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 500,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'lazyLoading',
			displayTypeSpeed: 100,
			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END: ContentCubeLatestPortfolio
// BEGIN: Isotope Gallery
var IsotopeGallery = function() {
	var _init = function() {
		// BEGIN: ISOTOPE GALLERY 1 INIT
		// init ilightbox
		$('.c-ilightbox-image-1').iLightBox();
		// init isotope gallery
		var $grid1 = $('.c-content-isotope-gallery.c-opt-1').imagesLoaded(function() {
			// init Isotope after all images have loaded
			$grid1.isotope({
				// options...
				itemSelector: '.c-content-isotope-item',
				layoutMode: 'packery',
				fitWidth: true,
				percentPosition: true,
			});
		});
		// END: ISOTOPE GALLERY 1
		// BEGIN: ISOTOPE GALLERY 2 INIT
		// init ilightbox
		$('.c-ilightbox-image-2').iLightBox({
			skin: 'light'
		});
		// init isotope gallery
		var $grid2 = $('.c-content-isotope-gallery.c-opt-2').imagesLoaded(function() {
			// init Isotope after all images have loaded
			$grid2.isotope({
				// options...
				itemSelector: '.c-content-isotope-item',
				layoutMode: 'packery',
				fitWidth: true,
				percentPosition: true,
			});
		});
		// END: ISOTOPE GALLERY 2
		// BEGIN: ISOTOPE GALLERY 3 INIT
		// init ilightbox
		$('.c-ilightbox-image-3').iLightBox();
		// init isotope gallery
		var $grid3 = $('.c-content-isotope-gallery.c-opt-3').imagesLoaded(function() {
			// init Isotope after all images have loaded
			$grid3.isotope({
				// options...
				itemSelector: '.c-content-isotope-item',
				layoutMode: 'packery',
				fitWidth: true,
				percentPosition: true,
			});
		});
		// END: ISOTOPE GALLERY 3
		// BEGIN: ISOTOPE GALLERY 4 INIT
		// init ilightbox
		$('.c-ilightbox-image-4').iLightBox();
		// init isotope gallery
		var $grid4 = $('.c-content-isotope-gallery.c-opt-4').imagesLoaded(function() {
			// init Isotope after all images have loaded
			$grid4.isotope({
				// options...
				itemSelector: '.c-content-isotope-item',
				layoutMode: 'packery',
				fitWidth: true,
				percentPosition: true,
			});
		});
		// Filter buttons
		$('.c-content-isotope-filter-1').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid4.isotope({
				filter: filterValue
			});
			$('.c-content-isotope-filter-1 .c-isotope-filter-btn').removeClass('c-active');
			$(this).addClass('c-active');
			// scroll to top of element on click
			$('html, body').stop();
			$('html, body').animate({
				scrollTop: $("#c-isotope-anchor-1").offset().top
			}, 500);
		});
		// END: ISOTOPE GALLERY 4
		// BEGIN: ISOTOPE GALLERY 5 INIT
		// init ilightbox
		$('.c-ilightbox-image-5').iLightBox();
		// init isotope gallery
		var $grid5 = $('.c-content-isotope-gallery.c-opt-5').imagesLoaded(function() {
			// init Isotope after all images have loaded
			$grid5.isotope({
				// options...
				itemSelector: '.c-content-isotope-item',
				layoutMode: 'packery',
				fitWidth: true,
				percentPosition: true,
			});
		});
		// Filter buttons
		$('.c-content-isotope-filter-2').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid5.isotope({
				filter: filterValue
			});
			$('.c-content-isotope-filter-2 .c-isotope-filter-btn').removeClass('c-active');
			$(this).addClass('c-active');
			// scroll to top of element on click
			$('html, body').stop();
			$('html, body').animate({
				scrollTop: $("#c-isotope-anchor-2").offset().top
			}, 500);
		});
		// END: ISOTOPE GALLERY 5
	}
	return {
		//main function to initiate the module
		init: function() {
			_init();
		}
	};
}();
// END: Isotope Gallery
// BEGIN: Revolution slider
var RevolutionSlider = function() {
	var _init = function() {
		var slider = $('.c-layout-revo-slider .tp-banner');
		if (slider.length) {
			var cont = $('.c-layout-revo-slider .tp-banner-container');
			var api = slider.show().revolution({
				sliderType: "standard",
				sliderLayout: "fullscreen",
				responsiveLevels: [2048, 1024, 778, 320],
				gridwidth: [1240, 1024, 778, 320],
				gridheight: [868, 768, 960, 720],
				delay: 15000,
				startwidth: 1170,
				startheight: App.getViewPort().height,
				navigationType: "hide",
				navigationArrows: "solo",
				touchenabled: "on",
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "on",
					bullets: {
						style: "round",
						enable: true,
						hide_onmobile: false,
						hide_onleave: true,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 2,
						hide_over: 9999,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						space: 5,
						h_offset: 0,
						v_offset: 60,
					},
				},
				spinner: "spinner2",
				shadow: 0,
				disableProgressBar: "on",
				hideThumbsOnMobile: "on",
				hideNavDelayOnMobile: 1500,
				hideBulletsOnMobile: "on",
				hideArrowsOnMobile: "on",
				hideThumbsUnderResolution: 0
			});
		}
	}
	return {
		//main function to initiate the module
		init: function() {
			_init();
		}
	};
}();
// END: Revolution slider
// BEGIN: Banner slider
var BannerSlider = function() {
	var _init = function() {
		var layout = $('.c-layout-banner');
		var slider = $('.c-layout-banner #home-banner');
		if (slider.length) {
			var children = slider.children('.banner-item');
			children.eq(0).addClass('active');
			if (children.length > 1) {
				var bullets = $('<div class="banner-bullets"></div>');
				for (var i = 0; i < children.length; i++) {
					bullets.append('<span class="bullet-item"></span>');
				};
				bullets.appendTo(layout);

				var sliderNav = bullets.children('.bullet-item');

				sliderNav.eq(0).addClass('active');
				sliderNav.on('click', function () {
					if ( ! $(this).hasClass('active')) {
						var index = $(this).index();
						children.removeClass('active');
						sliderNav.removeClass('active');

						children.eq(index).addClass('active');
						sliderNav.eq(index).addClass('active');
					}
				});
			}
		}
	}
	return {
		//main function to initiate the module
		init: function() {
			_init();
		}
	};
}();
// END: Banner slider
// BEGIN: CounterUp
var ContentCounterUp = function() {
	var _initInstances = function() {
		// init counter up
		$("[data-counter='counterup']").counterUp({
			delay: 10,
			time: 1000
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END: CounterUp
// BEGIN: Fancybox
var ContentFancybox = function() {
	var _initInstances = function() {
		// init fancybox
		$("[data-lightbox='fancybox']").fancybox();
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END: Fancybox
// BEGIN: Twitter
var ContentTwitter = function() {
	var _initInstances = function() {
		// init twitter
		if ($(".twitter-timeline")[0]) {
			! function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0],
					p = /^http:/.test(d.location) ? 'http' : 'https';
				if (!d.getElementById(id)) {
					js = d.createElement(s);
					js.id = id;
					js.src = p + "://platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js, fjs);
				}
			}(document, "script", "twitter-wjs");
		}
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END: Twitter
// BEGIN : SCROLL TO VIEW DETECTION
function isScrolledIntoView(elem) {
	var $elem = $(elem);
	var $window = $(window);
	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();
	var elemTop = $elem.offset().top;
	var elemBottom = elemTop + $elem.height();
	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// END : SCROLL TO VIEW FUNCTION
// BEGIN : PROGRESS BAR 
var LayoutProgressBar = function($) {
	return {
		init: function() {
			var id_count = 0; // init progress bar id number
			$('.c-progress-bar-line').each(function() {
				id_count++; // progress bar id running number
				// build progress bar class selector with running id number
				var this_id = $(this).attr('data-id', id_count);
				var this_bar = '.c-progress-bar-line[data-id="' + id_count + '"]';
				// build progress bar object key
				var progress_data = $(this).data('progress-bar');
				progress_data = progress_data.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});
				if (progress_data == 'Semicircle') {
					progress_data = 'SemiCircle';
				}
				// grab options
				var bar_color = $(this).css('border-top-color'); // color	
				var this_animation = $(this).data('animation'); // animation type : linear, easeIn, easeOut, easeInOut, bounce
				var stroke_width = $(this).data('stroke-width'); // stroke width
				var bar_duration = $(this).data('duration'); // duration
				var trail_width = $(this).data('trail-width'); // trail width
				var trail_color = $(this).data('trail-color'); // trail color
				var bar_progress = $(this).data('progress'); // progress value
				var font_color = $(this).css('color'); // progress font color
				// set default data if options is null / undefined
				if (bar_color == 'rgb(92, 104, 115)') {
					bar_color = '#32c5d2';
				} // set default color 
				if (trail_color == '') {
					trail_color = '#5c6873';
				}
				if (trail_width == '') {
					trail_width = '0';
				}
				if (bar_progress == "") {
					bar_progress = '1';
				}
				if (stroke_width == "") {
					stroke_width = '3';
				}
				if (this_animation == "") {
					this_animation = 'easeInOut';
				}
				if (bar_duration == "") {
					bar_duration = '1500';
				}
				// set progress bar
				var bar = new ProgressBar[progress_data](this_bar, {
					strokeWidth: stroke_width,
					easing: this_animation,
					duration: bar_duration,
					color: bar_color,
					trailWidth: trail_width,
					trailColor: trail_color,
					svgStyle: null,
					step: function(state, bar) {
						bar.setText(Math.round(bar.value() * 100) + '%');
					},
					text: {
						style: {
							color: font_color,
						}
					},
				});
				// init animation when progress bar in view without scroll
				var check_scroll = isScrolledIntoView(this_bar); // check if progress bar is in view - return true / false
				if (check_scroll == true) {
					bar.animate(bar_progress); // Number from 0.0 to 1.0
				}
				// start progress bar animation upon scroll view
				$(window).scroll(function(event) {
					var check_scroll = isScrolledIntoView(this_bar); // check if progress bar is in view - return true / false
					if (check_scroll == true) {
						bar.animate(bar_progress); // Number from 0.0 to 1.0
					}
				});
			});
		}
	}
}(jQuery);
// END : PROGRESS BAR
// BEGIN : COOKIES NOTIFICATION BAR
var LayoutCookies = function() {
	var _initInstances = function() {
		$('.c-cookies-bar-close').click(function() {
			$('.c-cookies-bar').animate({
				opacity: 0,
			}, 500, function() {
				$('.c-cookies-bar').css('display', 'none');
			});
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END : COOKIES NOTIFICATION BAR
// BEGIN : JQUERY SMOOTH SCROLL
var LayoutSmoothScroll = function() {
	var _initInstances = function() {
		$('.js-smoothscroll').on('click', function() {
			var scroll_target = $(this).data('target');
			$.smoothScroll({
				scrollTarget: '#' + scroll_target
			});
			return false;
		});
	};
	return {
		//main function to initiate the module
		init: function() {
			_initInstances();
		}
	};
}();
// END : JQUERY SMOOTH SCROLL
// Main theme initialization
$(document).ready(function() {
	// init layout handlers
	LayoutBrand.init();
	LayoutHeader.init();
	LayoutHeaderCart.init();
	LayoutMegaMenu.init();
	LayoutSidebarMenu.init();
	LayoutQuickSearch.init();
	LayoutCartMenu.init();
	LayoutQuickSidebar.init();
	LayoutGo2Top.init();
	LayoutOnepageNav.init();
	LayoutThemeSettings.init();
	LayoutProgressBar.init();
	LayoutCookies.init();
	LayoutSmoothScroll.init();
	// init plugin wrappers
	LayoutResponsive.init();
	ContentOwlcarousel.init();
	ContentCubeLatestPortfolio.init();
	IsotopeGallery.init();
	RevolutionSlider.init();
	BannerSlider.init();
	ContentCounterUp.init();
	ContentFancybox.init();
	ContentTwitter.init();
	$(window).trigger('resize');
});