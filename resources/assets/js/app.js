global.$ = global.jQuery = require('jquery');

require('bootstrap');
require('./plugins/cursor');
/*
 |--------------------------------------------------------------------------
 | Document Ready Function
 |--------------------------------------------------------------------------
 */
$(function() {

    'use strict';

    $('body').scrollspy({ target: '.navbar' });
});

$(function() {
  if (screen.width > 1800) {
    $('.container-changue').removeClass('container');
    $('.container-changue').addClass('container-fluid');
  }
});

localStorage['color'];

$('.select-color-day' ).click(function() {
    localStorage.color= 'day';
    $(".line-black").removeClass("circle-night");
    $(".body").removeClass("night");
    $(".navigation").removeClass("navigation-night");
});

$('.select-color-night' ).click(function() {
    localStorage.color= 'night';
    $(".line-black").addClass("circle-night");
    $(".body").addClass("night");
    $(".navigation").addClass("navigation-night");
});

if(localStorage.color == "day"){
    $(".line-").removeClass("circle-night");
    $(".body").removeClass("night");
    $(".navigation").removeClass("navigation-night");    
}else if(localStorage.color == "night"){
    $(".line-black").addClass("circle-night");
    $(".body").addClass("night");
    $(".navigation").addClass("navigation-night");    
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-142.3px";
  }
  prevScrollpos = currentScrollPos;
};

$(function() {
    var go = true;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10 && go) {
            $("#navbar").addClass('atomBackground-white');
            go = false;
        } else if ($(this).scrollTop() < 10 && !go) {
            $("#navbar").removeClass('atomBackground-white');
            go = true;
        }
    });
});