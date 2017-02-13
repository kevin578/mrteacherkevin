jQuery( document ).ready(function() {

	jQuery("#quiz_input").hide();
	jQuery("#victory_input").hide();

jQuery("#mtk_menu_main").click(function(){


	jQuery(this).addClass("selected_menu_item");
	jQuery("#mtk_menu_quiz").removeClass("selected_menu_item");
	jQuery("#mtk_menu_victory").removeClass("selected_menu_item");

	jQuery("#main_input").show();
	jQuery("#quiz_input").hide();
	jQuery("#victory_input").hide();

});


jQuery("#mtk_menu_quiz").click(function(){

	jQuery(this).addClass("selected_menu_item");
	jQuery("#mtk_menu_main").removeClass("selected_menu_item");
	jQuery("#mtk_menu_victory").removeClass("selected_menu_item");

	jQuery("#main_input").hide();
	jQuery("#quiz_input").show();
	jQuery("#victory_input").hide();

});

jQuery("#mtk_menu_victory").click(function(){

	jQuery(this).addClass("selected_menu_item");
	jQuery("#mtk_menu_main").removeClass("selected_menu_item");
	jQuery("#mtk_menu_quiz").removeClass("selected_menu_item");

	jQuery("#main_input").hide();
	jQuery("#quiz_input").hide();
	jQuery("#victory_input").show();

});
 





});