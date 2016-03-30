//= require jquery
//= require react

//= require_tree ./utils
//= require_tree ./data

//= require components/encuesta/button
//= require components/encuesta/cards
//= require components/encuesta/stages
//= require components/encuesta/survey

//= require components/evalua/section-bar
//= require components/evalua/project-group
//= require components/evalua/organization-group
//= require components/evalua/evaluate

//= require components/profiles/resume
//= require components/profiles/action-components
//= require components/profiles/description
//= require components/profiles/related-organizations
//= require components/profiles/profile

//= require components/timeline/main.js

// require_tree .

$(document).ready(() => {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', (e) => {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

});

//modal
$(function() {
  $(".modal-js").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});


//scroll-menu
(function (jQuery) {

  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){
  jQuery.mark.jump();
});
