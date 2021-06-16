$(document).ready(function() {
  $(".tabs-list a").click(function(event) {
      event.preventDefault();
      $(this).parent().addClass("selected");
      $(this).parent().siblings().removeClass("selected");
      var tab = $(this).attr("href");
      $(".tab-content").not(tab).removeClass("selected");
      $(tab).addClass("selected");
  });

      //When page loads...
      $('.tab-parent').each(function(){
          $(this).find(".tab_content").hide(); //Hide all content
          $(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
          $(this).find(".tab_content:first").show(); //Show first tab content
      });
      //On Click Event
      $("ul.tabs li").click(function() {
          var parents = $(this).parentsUntil('.tab-parent').parent();
          $("li", parents).removeClass("active"); //Remove any "active" class
          $(this).addClass("active"); //Add "active" class to selected tab
          $(".tab_content", parents).hide(); //Hide all tab content
          var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
          $(activeTab).fadeIn(); //Fade in the active ID content
          return false;
      });


  $('.show-input').each(function(i){
    if($(this).is(":radio") && i==0){
      $(".show-hide-js");
    }
    showHideFields($(this));
  });

  $('.plusminus').text('-');
  $('.showhide').css("display", "block")
  $('.accordion-expand-all').show();

  $('.accordian input').each(function(){
    var panel = $(this).closest('.accordian');
    if ($(this).is(":checked")){
      panel['slideDown']().trigger('show');
      panel.prev().find('.plusminus').text("-");
    }
  });
  
  $("input").each(function(){
    if($(this).attr("checked")=="checked" && !$(this).is(":checked")){
      $(this).click();
    }
  });

  $('.list-button').each(function() {
    $(this).replaceWith($('<button class="list-button">' + this.innerHTML + '</button>'));
  });
});

$('.show-input').click(function(){
if($(this).is(":radio")){
  $(".show-hide-js").hide();
}
showHideFields($(this));
});

function showHideFields(currField){
  var id = $(currField).attr("data-target");
  if($(currField).is(":checked")){
      $('#' + id).show();
  }
  else{
      $('#' + id).hide();
  }
}

var headers = $('#accordion .list-expand');
var contentAreas = $('#accordion .ui-accordion-content ');
var expandLink = $('.accordion-expand-all');
// add the accordion functionality
headers.click(function() {
  var panel = $(this).next();
  var isOpen = panel.is(':visible');
  // open or close as necessary
  panel[isOpen? 'slideUp': 'slideDown']()
      // trigger the correct custom event
      .trigger(isOpen? 'hide': 'show');
  // stop the link from causing a pagescroll
  if(isOpen){
    // Show +
    $(this).find('.plusminus').text('+');
    $(this).find('.showhide').text('Show');
  }else{
    // Show -
    $(this).find('.plusminus').text('-');
    $(this).find('.showhide').text('Hide');
  }
  return false;
});
// hook up the expand/collapse all
expandLink.click(function(){
  var isAllOpen = $(this).data('isAllOpen');
  contentAreas[isAllOpen? 'hide': 'show']()
      .trigger(isAllOpen? 'hide': 'show');    
  if(isAllOpen){
      $('.plusminus').text('+');
      $('.showhide').text('Show');
  }else{
      $('.plusminus').text('-');
      $('.showhide').text('Hide');
  }
});
// when panels open or close, check to see if they're all open
contentAreas.on({
  // whenever we open a panel, check to see if they're all open
  // if all open, swap the button to collapser
  show: function(){
      var isAllOpen = !contentAreas.is(':hidden');   
      if(isAllOpen){
          expandLink.text('Hide all')
              .data('isAllOpen', true);
      }
  },
  // whenever we close a panel, check to see if they're all open
  // if not all open, swap the button to expander
  hide: function(){
      var isAllOpen = !contentAreas.is(':hidden');
      if(!isAllOpen){
          expandLink.text('Show all')
          .data('isAllOpen', false);
      } 
  }
});

//Checked and unchecked for Benefits
//$(".noneOption input").click(function() {	
//	checkAndUnCheck('benefitOptions', $(this));
//});
//
//$(".benefitOptions input").click(function() {
//	checkAndUnCheck('§Option', $(this));
//});



////Check and Uncheck fields for Enum Set
$(".none input").click(function() {
checkAndUnCheck('group', $(this));
});

$(".group input").click(function() {	
checkAndUnCheck('none', $(this));
});

function checkAndUnCheck(className, currentField){
if (currentField.is(":checked" )){		
  $('.' + className).each(function(){
    if($(this).find('input').is(":checked")){
      $(this).find('input').prop('checked',false);
      $(this).removeClass('selected');
    }
  });
  }
}

//Stop User to click twice the Register button
$(document).ready(function(){
$("[data-locked]").click(function(){
  var locked = $(this);
      $(locked).addClass("autoProgress");
      setTimeout(function(){ 
      $(locked).removeClass("autoProgress");
      }, 5000); 
  });
});

// Only allow 0-9 and . to be typed in field with 'data-numeric' attribute
$(document).ready(function() {

  // adding initial charCode for '.' and enter
  var allowedCharacters = [46, 13]

  // 0-9
  for(var i = 48; i < 58; i++) {
      allowedCharacters.push(i)
  }

  // Key press listener
  $('[data-decimal]').keypress(function (event) {
      var $input = $(this)
      var e = event || window.event

      var key = e.keyCode || e.charCode

      if (!key) {
          return
      }

      if (!($.inArray(key, allowedCharacters) >= 0)) {
          e.preventDefault()
      }
  })

});

$(document).ready(function() {
  $(".display-js").show();
  $('.display-js').css('display','inline-block');
  $(".no-display-js").hide();
});