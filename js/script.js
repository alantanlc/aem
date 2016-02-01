// JavaScript Document
$(document).ready
(
 	function() {
		/* DROPDOWN MENU START */
		var timeout = 500;	//0.5 seconds
		var closetimer = 0;
		var ddmenuitem = 0;
		
		$("#menu > ul > li").bind("mouseover", dd_open);	// The use of '>' selects only first-level descendants (child)
		$("#menu > ul > li").bind("mouseout", dd_close);
		/* DROPDOWN MENU END */
	}
 );

function dd_open() {
	menu_mouseover($(this).find("a:first"));
	$(this).find("ul").css("visibility", "visible");
}

function dd_close() {
	menu_mouseout($(this).find("a:first"));
	$(this).find("ul").css("visibility", "hidden");
}

function menu_mouseover(a) {
	if($(a).attr("class").indexOf("_selected") == -1) {
		var hover = "url(images/" + $(a).attr("class") + "_button_hover.png)";
		$(a).css("backgroundImage", hover);
	}
}

function menu_mouseout(a) {
	if($(a).attr("class").indexOf("_selected") == -1) {
		var hover = "url(images/" + $(a).attr("class") + "_button.png)";
		$(a).css("backgroundImage", hover);
	}
}