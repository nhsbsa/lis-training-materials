$('#click').click(function()
{   
    $("#display").show();     
});

$(document).ready(function() {
    $(".tabs-list a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("selected");
        $(this).parent().siblings().removeClass("selected");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).removeClass("selected");
        $(tab).addClass("selected");
    });
});

$(window).load(function () {
	// Only set focus for the error example pages
	// if ($('.js-error-example').length) {
	// If there is an error summary, set focus to the summary
	if ($('.error-summary').length) {
		$('.error-summary').focus()

		var id = $('.error-summary:first').attr('id');
		if(id){
			location.hash = "#" + id;
		}

		// $('.error-summary a').click(function (e) {
		//   e.preventDefault()
		//   var href = $(this).attr('href')
		//   $(href).focus()
		// })
	} else {
		// Otherwise, set focus to the field with the error
		$('.error input:first').focus()
	}
	// }
})

//Details contain links 
//toggles tabindex on links when details opened
$(document).ready(function() {

  var linkIndex = "div.panel > p > a";
  //sets tabindex onload
  $(linkIndex).attr("tabindex", "-1");
  $("details").click( function() {
    // Only looks for child elements
    var $anchor = $(this).find('div.panel > p > a');
    if ($anchor.attr("tabindex") == -1) {
      $anchor.attr("tabindex", 0);
    } else {
      $anchor.attr("tabindex", -1);
    }
  });
});

//Details contain inputs
//toggles tabindex on inputs when details opened
$(document).ready(function() {

var inputIndex = "div.panel > input";
  //sets tabindex onload
  $(inputIndex).attr("tabindex", "-1");
  $("details").click( function() {
    // Only looks for child elements
    var $inputFocus = $(this).find('div.panel > input');
    if ($inputFocus.attr("tabindex") == -1) {
      $inputFocus.attr("tabindex", 0);
    } else {
      $inputFocus.attr("tabindex", -1);
    }
  });
});

//Details contain inputs in a fieldset
$(document).ready(function() {

var inputSet = "div.panel > fieldset > div.panel-form-group > input";
//sets tabindex onload
$(inputSet).attr("tabindex", "-1");
$("details").click( function() {
  var $inputFocus = $(this).find('div.panel > fieldset > div.panel-form-group > input');
  if ($inputFocus.attr("tabindex") == -1) {
    $inputFocus.attr("tabindex", 0);
  } else {
    $inputFocus.attr("tabindex", -1);
  }
});
});

//bullet point links 
//toggles tabindex on links when details opened
$(document).ready(function() {

var listIndex = "div.panel > ul > li > a";
//sets tabindex onload
$(listIndex).attr("tabindex", "-1");
$("details").click( function() {
  // Only looks for child elements
  var $anchor = $(this).find('div.panel > ul > li > a');
  if ($anchor.attr("tabindex") == -1) {
    $anchor.attr("tabindex", 0);
  } else {
    $anchor.attr("tabindex", -1);
  }
});
});