function loadSite() {
    positionContent();
    var e = new InfiniteSlider($blockSlider, 1500, 9e3, "customSick", "easeInOutQuart", !1, !0)
}

function positionContent() {
    window.winWidth = $(window).width(), $fullHeight.height($(window).height()), $(window).width() > 992 ? $("#wrapper nav #menu").height($(window).height()) : $("#wrapper nav #menu").css("height", ""), $valign.each(function() {
        $(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2)
    });
    var e = $(window).width(),
        t = $("#block-1").height();
    $("#block-1 .slider ul li .img-slider").css("min-width", e), $("#block-1 .slider ul li").css("height", t), $(".slider-wrapper").each(function() {
        $object = $(this);
        var e = $object.width();
        $("li.active, li img", $object).width(e);
        var t = $("li.active img", $object).height();
        $object.height(t), $("li.active", $object).css("width", e), $("ul.slider", $object).css("width", e), $("li.active", $object).css("height", t), $("ul.slider", $object).css("height", t)
    });
    var i = $(".full-menu.active").outerHeight();
    $("#block-2").height(i);
    var o = $(".map img").height();
    $("#map").css("height", o), $imgFit.each(function() {
        var e = $(this),
            t = $(this).parent(),
            i = t.width(),
            o = t.height(),
            a = $(this).attr("data-size").split("|"),
            n = a[0] / a[1],
            s = i / o;
        e.hasClass("invert") ? n < s ? e.height(o).width(o * n).css("top", "0") : e.width(i).height(i / n).css("top", o / 2 - i / n / 2) : n > s ? e.height(o).width(o * n).css("top", "0") : e.width(i).height(i / n).css("top", o / 2 - i / n / 2)
    }), $("#background > div > img").each(function() {
        var e = ($(this).width() - $(this).parent().width()) / 2;
        $(this).css({
            left: -e
        })
    }), scrollContent()
}

function scrollContent() {
    var e = $(document).height() - $(window).height();
    newScroll = $(window).scrollTop(), currentScroll = newScroll, window.winWidth > 992 ? ($(".to-load").each(function() {
        var e = $(this);
        newScroll + .85 * $(window).height() > $(this).offset().top ? (e.removeClass("no-anim"), e.addClass("loaded")) : newScroll + $(window).height() < $(this).offset().top && (e.addClass("no-anim"), e.removeClass("loaded"))
    }), $("#pattern").each(function() {
        object = $(this).parent(), object.hasClass("loaded") || (object.removeClass("no-anim"), object.addClass("loaded"), $("svg", object).each(function() {
            var e = $(this),
                t = e.attr("id");
            vivusArray[t].reset(), vivusArray[t].play()
        }))
    }), $("#block-2").outerHeight() > 1.25 * $(window).height() ? $(".to-load-subnav").each(function() {
        $("#sub-nav ul").addClass("state-fixed");
        var e = $(this);
        newScroll > .75 * $("#block-2").offset().top && newScroll + $(window).height() < 1.25 * $("#block-2").offset().top + $("#block-2").outerHeight() ? (e.removeClass("no-anim"), e.addClass("loaded")) : (e.addClass("no-anim"), e.removeClass("loaded"))
    }) : $(".to-load-subnav").each(function() {
        $("#sub-nav ul").addClass("state-fixed");
        var e = $(this);
        newScroll + .5 * $(window).height() > $("#block-2").offset().top && newScroll + $(window).height() < 1.5 * $("#block-2").offset().top + $("#block-2").outerHeight() ? (e.removeClass("no-anim"), e.addClass("loaded")) : (e.addClass("no-anim"), e.removeClass("loaded"))
    }), $(".floating-things-up").each(function() {
        $object = $(this);
        var e = 1,
            t = newScroll + $(window).height() - $object.offset().top;
        t < 0 && (t = 0);
        var i = $(window).height() / 2,
            o = 0,
            a = 0;
        o = t < i ? (i - t) / i : -(t - i) / i;
        var a = 75 * o;
        $object.css("transform", "translate3d(0, " + Math.round(a) + "px, 0)")
    }), $(".floating-things-down").each(function() {
        $object = $(this);
        var e = 1,
            t = newScroll + $(window).height() - $object.offset().top;
        if (t < 0 && (t = 0), t) var i = $(window).height() / 2;
        var o = 0,
            a = 0;
        o = t < i ? -(i - t) / i : (t - i) / i;
        var a = 75 * o;
        $object.css("transform", "translate3d(0, " + Math.round(a) + "px, 0)")
    }), $(".floating-things-down-banner").each(function() {
        $object = $(this);
        var e = 2,
            t = newScroll + $(window).height() - $object.parent().offset().top;
        t < 0 && (t = 0);
        var i = $(window).height(),
            o = 0,
            a = 0;
        o = t < i ? -(i - t) / i : (t - i) / i;
        var a = 200 * o;
        $object.css("transform", "translate3d(0," + Math.round(a) + "px, 0)");
        var n = 200,
            s = $("#block-1"),
            l = .5 * newScroll,
            r = 1 - (newScroll - 200) / (1 * s.height());
        if (r <= 0) var r = 0;
        else var r = 1 - (newScroll - 200) / (1 * s.height());
        $(".slider-infos > li, .slider-controls, .slider > ul > li .text .text-container, .popup-wrapper", s).css("opacity", r)
    }), $(".parallax-pattern").each(function() {
        $object = $(this);
        var e = 2,
            t = newScroll + $(window).height() - $(".pattern").offset().top;
        t < 0 && (t = 0);
        var i = $(window).height() / 2,
            o = 0,
            a = 0;
        o = t < i ? -(i - t) / i : (t - i) / i;
        var a = 150 * o;
        $object.css("transform", "translate3d(0, " + a + "px, 0)")
    }), $(".floating-things-down-anim").each(function() {
        if ($object = $(this), objectParent = $(this).parent(), window.winWidth > 1440) var e = 1.5;
        else var e = 1;
        var t = newScroll + $(window).height() - $("#block-4").offset().top;
        t < 0 && (t = 0);
        var i = $(window).height() / 2,
            o = .55 * $(window).height(),
            a = 0,
            n = 0;
        a = t < o ? -(o - t) / o : (t - o) / o;
        var n = 125 * e * a;
        n > 100 && breakBone(), $object.css("transform", "translate3d(0, " + Math.round(n) + "px, 0)")
    }), $(".floating-things-down-burger").each(function() {
        if ($object = $(this), objectParent = $(this).parent(), window.winWidth > 1440) var e = 2.3;
        else var e = 1.8;
        var t = newScroll + $(window).height() - $("#block-6").offset().top;
        t < 0 && (t = 0);
        var i = $(window).height() / 2,
            o = .6 * $(window).height(),
            a = 0,
            n = 0;
        a = t < o ? -(o - t) / o : (t - o) / o;
        var n = 125 * e * a;
        $object.css("transform", "translate3d(0, " + Math.round(n) + "px, 0)")
    }), $(".burger-closing ul li").each(function() {
        if ($object = $(this), window.winWidth > 1440) var e = .75;
        else var e = .75;
        var t = newScroll + $(window).height() - $(".burger-closing").offset().top;
        t < 0 && (t = 0);
        var i = .45 * $(window).height(),
            o = 0,
            a = 0;
        o = t < i ? (i - t) / i : -(t - i) / i;
        var a = 125 * e * o;
        if (window.winWidth > 1699)
            if (a > -78) {
                var a = 125 * e * o;
                $("#block-6 .burger-closing p").removeClass("animated")
            } else a = -78, $("#block-6 .burger-closing p").addClass("animated");
        else if (a > -60) {
            var a = 125 * e * o;
            $("#block-6 .burger-closing p").removeClass("animated")
        } else a = -60, $("#block-6 .burger-closing p").addClass("animated");
        $object.css("margin", Math.round(a) + "px auto")
    }), $(".parallax-img").each(function() {
        $object = $(this);
        var e = 1,
            t = newScroll + $(window).height() - $object.offset().top;
        t < 0 && (t = 0);
        var i = $(window).height(),
            o = 0,
            a = 0;
        o = t < i ? -(i - t) / i : (t - i) / i;
        var a = 300 * o;
        $object.css("transform", "translate3d(0," + Math.round(a) + "px, 0)")
    }), $(".parallax-img-slider").each(function() {
        $object = $(this);
        var e = 1.5,
            t = newScroll + $(window).height() - $object.offset().top;
        t < 0 && (t = 0);
        var i = $(window).height() / 2,
            o = 0,
            a = 0;
        o = t < i ? -(i - t) / i : (t - i) / i;
        var a = 75 * o;
        $object.css("transform", "translate3d(0," + Math.round(a) + "px, 0) scale(1.2)")
    })) : ($(".to-load").each(function() {
        var e = $(this);
        e.removeClass("no-anim"), e.addClass("loaded")
    }), $(".burger-closing ul li").each(function() {
        $object = $(this), $object.css("margin", "-50px auto")
    }), $(".parallax-img-slider, .parallax-img, .floating-things-down, .floating-things-up, .floating-things-down-anim, .floating-things-down-burger, .floating-things-down-banner").css("transform", "translate3d(0, 0px, 0)"), newScroll > $("#block-1").outerHeight() - 150 && newScroll + 110 < $("#block-1").outerHeight() + $("#block-2").outerHeight() ? $(".mobile-sub-nav-container").addClass("animated") : (newScroll, $("#block-2").offset().top, $("#block-2").outerHeight(), $(".mobile-sub-nav-container").removeClass("animated")))
}

function breakBone() {
    return $(".bone-part").addClass("shake"), setTimeout(function() {
        $(".bone-part").css("display", "none"), $(".bone-part-broken").css("display", "block")
    }, 650), $("#block-4 .bone p").addClass("animated"), !1
}

function whichBrs() {
    var e = navigator.userAgent.toLowerCase();
    return -1 != e.indexOf("opera") ? "Opera" : -1 != e.indexOf("staroffice") ? "Star Office" : -1 != e.indexOf("webtv") ? "WebTV" : -1 != e.indexOf("beonex") ? "Beonex" : -1 != e.indexOf("chimera") ? "Chimera" : -1 != e.indexOf("netpositive") ? "NetPositive" : -1 != e.indexOf("phoenix") ? "Phoenix" : -1 != e.indexOf("firefox") ? "Firefox" : -1 != e.indexOf("chrome") ? "Chrome" : -1 != e.indexOf("safari") ? "Safari" : -1 != e.indexOf("skipstone") ? "SkipStone" : -1 != e.indexOf("msie") ? "Internet Explorer" : -1 != e.indexOf("netscape") ? "Netscape" : -1 != e.indexOf("mozilla/5.0") ? "Mozilla" : -1 != e.indexOf("/") ? "mozilla" != e.substr(0, e.indexOf("/")) ? navigator.userAgent.substr(0, e.indexOf("/")) : "Netscape" : -1 != e.indexOf(" ") ? navigator.userAgent.substr(0, e.indexOf(" ")) : navigator.userAgent
}
var browserIE = !1;
"Internet Explorer" == whichBrs() && (browserIE = !0);
var browserMobile = !1;
$("body").hasClass("layout-mobile") && (browserMobile = !0);
var $wrapper = $("#wrapper"),
    $header = $("header"),
    $section = $("section"),
    $footer = $("footer"),
    $valign = $(".valign"),
    $fullHeight = $(".full-height"),
    $imgFit = $(".img-fit"),
    $blockSlider = $("#block-1"),
    $toLoad = $(".to-load");
window.winWidth = $(window).width();
var animRunning = !1,
    currentScroll = -1,
    InfiniteSliderFade, vivusArray = [],
    doAnim = 0,
    mouseTO;
$(window).load(function() {

    $("#wrapper").imagesLoaded(function() {
        $(document).scrollTop(0), setTimeout(function() {
            loadSite(), $("#loading-mask img").fadeOut(750), $("#block-1 .slider").addClass("loaded")
        }, 0), setTimeout(function() {
            $("#loading-mask").fadeOut(750), $("#block-1 .slider .text").addClass("loaded"), $wrapper.addClass("site-loaded")
        }, 750), setTimeout(function() {
            $(".popup-wrapper").addClass("opened")
        }, 3e3), setTimeout(function() {
            $(".popup-wrapper").removeClass("opened")
        }, 7500), setTimeout(function() {
            $("#block-1 .slider-controls").addClass("loaded"), positionContent()
        }, 450)
    }), setTimeout(function() {
        positionContent()
    }, 2e3);
    var t, i = [{
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#000000"
        }, {
            lightness: 40
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#000000"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 29
        }, {
            weight: .2
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }]
    }];

    
}).resize(function() {
    positionContent()
}).scroll(function() {
    scrollContent()
}), $(document).ready(function() {
    positionContent(), $("svg").each(function() {
        var e = $(this),
            t = e.attr("id"),
            i = 130;
        vivusArray[t] = new Vivus(t, {
            type: "delayed",
            start: "manual",
            duration: 130,
            delay: 0,
            pathTimingFunction: Vivus.EASE,
            animTimingFunction: Vivus.EASE,
            forceRender: !0
        })
    }), $("#burger").on("click", function() {
        $("nav").toggleClass("opened"), $(this).toggleClass("opened")
    }), $(".icon-under").each(function() {
        $("li", $(this)).first().addClass("active")
    }), $(".slider-wrapper").on("click", function() {
        var e = $(this),
            t = e.find("ul.slider"),
            i = e.width(),
            o = $("li.active img", e).height();
        if (e.height(o), !t.hasClass("animating")) {
            t.addClass("animating");
            var a = $("> li", t).length - 1,
                n = $("> li.active", t).index();
            if ($object.hasClass("btn-previous")) {
                e.addClass("no-anim"), e.removeClass("right").addClass("left");
                var s = n - 1;
                s < 0 && (s = a)
            } else {
                e.addClass("no-anim"), e.removeClass("left").addClass("right");
                var s = n + 1;
                s > a && (s = 0)
            }
            $(".icon-under").each(function() {
                var e = $("li", $(this)).length - 1,
                    t = $("li.active", $(this)).index(),
                    i = t + 1;
                i > e && (i = 0), $("li", $(this)).eq(t).removeClass("active"), $("li", $(this)).eq(i).addClass("active")
            }), setTimeout(function() {
                e.removeClass("no-anim"), $("> li", t).eq(n).removeClass("animated").addClass("leaving"), $("> li", t).eq(s).addClass("animated active"), $(".icon-under", e).addClass("active"), setTimeout(function() {
                    $(".icon-under", e).removeClass("active")
                }, 750), $("li.active", e).css("width", i), $("ul.slider", e).css("width", i), $("li.active", e).css("height", o), $("ul.slider", e).css("height", o), setTimeout(function() {
                    $("li.leaving", e).css("width", ""), t.removeClass("animating"), $("> li", t).eq(n).removeClass("active").removeClass("leaving")
                }, 950)
            }, 50)
        }
        return !1
    }), $("body").on("click", "#block-2 #sub-nav ul li", function() {
        var e = $(this).attr("data-menu"),
            t = $(".full-menu[data-menu='" + e + "']"),
            i = $(".full-menu");
        $("#block-2 #sub-nav ul li").removeClass("active"), $(this).addClass("active");
        var o = t.outerHeight();
        return setTimeout(function() {
            $("#block-2").height(o)
        }, 2e3), $("html, body").animate({
            scrollTop: $("#block-2").offset().top
        }, 1200, "easeInOutQuart"), setTimeout(function() {
            i.removeClass("active"), setTimeout(function() {
                i.hide(), t.show()
            }, 1e3)
        }, 250), setTimeout(function() {
            t.addClass("active"), $(".to-load", t).removeClass("loaded")
        }, 1500), setTimeout(function() {
            positionContent()
        }, 1500), !1
    }), $(".close-popup").on("click", function() {
        $(".popup-wrapper").toggleClass("opened")
    }), $("body").on("click", "#mobile-sub-nav ul li", function() {
        var e = $(this).attr("data-menu"),
            t = $(".full-menu[data-menu='" + e + "']"),
            i = $(".full-menu");
        $("#mobile-sub-nav ul li").removeClass("active"), $(this).addClass("active");
        var o = t.height();
        return setTimeout(function() {
            $("#block-2").height(o)
        }, 2250), $("html, body").animate({
            scrollTop: $("#block-2").offset().top - 105
        }, 1200, "easeInOutQuart"), setTimeout(function() {
            i.removeClass("active"), setTimeout(function() {
                i.hide(), t.show()
            }, 1e3)
        }, 250), setTimeout(function() {
            t.addClass("active"), $(".to-load", t).removeClass("loaded")
        }, 1500), setTimeout(function() {
            positionContent()
        }, 1500), !1
    }), $(".js-anchors").click(function() {
        return $("nav").removeClass("opened"), $("#burger").removeClass("opened"), window.winWidth < 982 ? $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 55
        }, 1500, "easeInOutQuart") : $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1500, "easeInOutQuart"), !1
    })
});