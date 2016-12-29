



function render_checks() {


hide_button(box1_check, "#box1_check", "#box1_title", "#box1_content");
hide_button(box2_check, "#box2_check", "#box2_title", "#box2_content");
hide_button(box3_check, "#box3_check", "#skill_input_title", "#skill_input_subtitle", "#skill_inputs", "#skill_plus");
hide_button(box4_check, "#box4_check", "#check_input_title", "#check_input");
hide_button(box5_check, "#box5_check", "#video_title", "#video_embed_url");
}



//functions

function hide_button(check_id, click_id, title, content) {

var argument_array = [];
for (var i = 0; i < arguments.length; i++) {
	argument_array[i] = arguments[i];
}



jQuery(click_id).click(function(){
	
	if (check_id.checked) {
		jQuery(title).css("color", "#dbdbdb");
		jQuery(title).attr('contenteditable','false');
		jQuery(content).css("display", "none");
		
		if (argument_array.length > 4) {
		console.log(argument_array.length);
		for (var i = 4; i < argument_array.length; i++) {
			jQuery(argument_array[i]).css("display", "none");
		}

		}
	}
	
	else {
		jQuery(title).css("color", "black");
		jQuery(title).attr('contenteditable','true');
		jQuery(content).css("display", "");
		
		if (argument_array.length > 4) {
		for (var i = 4; i < argument_array.length; i++) {
			jQuery(argument_array[i]).css("display", "none");
		}
		}



	}
});

}



//pushes another item to the arrays when the plus button is press and calls the render function
function add_skill_input() {


//saves values from boxes into the array

for (var i = 0; i < mtk_challenge_boxes.skill_input.skills.length; i++){
mtk_challenge_boxes.skill_input.skills[i] = jQuery("#skill_input_id_" + i).val();
mtk_challenge_boxes.skill_input.time[i] = jQuery("#skill_time_id_" + i).val();
}


mtk_challenge_boxes.skill_input.skills.push('');
mtk_challenge_boxes.skill_input.time.push('');


render_skill_input();
}

function add_check_input() {
	
	for (var i = 0; i < mtk_challenge_boxes.check_input.skill_checks.length; i++){
    mtk_challenge_boxes.check_input.skill_checks[i] = jQuery("#check_input_id_" + i).val();
}
	mtk_challenge_boxes.check_input.skill_checks.push('');
	render_check_input();
	
}

//removes skill from array and renders it again
function remove_skill_input() {
	mtk_challenge_boxes.skill_input.skills.pop();
	mtk_challenge_boxes.skill_input.time.pop();

	render_skill_input();
}

function remove_check_input() {
	mtk_challenge_boxes.check_input.skill_checks.pop();

	render_check_input();
}


//displays the arrays
function render_skill_input() {

	jQuery("#skill_plus").html("");
	jQuery('#skill_input_subtitle').html(mtk_challenge_boxes.skill_input.subtitle);
	jQuery("#skill_inputs").html("");
	for (var i = 0; i < mtk_challenge_boxes.skill_input.skills.length; i++) {
		

		if (i == 0){
			jQuery("#skill_plus").append('<input type = "button" id = "skill_plus" value = "+" class = "plus_button" onclick = "add_skill_input();">')
		}

		if (i == 1){
			jQuery("#skill_plus").append('<input type = "button" value = "-" onclick="remove_skill_input();">');	
		}

		jQuery("#skill_inputs").append('<input type = "text" class = "video_time_left" id = "skill_input_id_'+
		i +'" placeholder = "Skill" value = "' + mtk_challenge_boxes.skill_input.skills[i] + '">');
		
		jQuery("#skill_inputs").append('<input type = "text" class = "video_time_right" id = "skill_time_id_'+
		i +'" placeholder = "Time" value = "' + mtk_challenge_boxes.skill_input.time[i] + '">');
	}
}

function render_check_input() {
	
	jQuery("#check_input").html("");


	for (var i = 0; i < mtk_challenge_boxes.check_input.skill_checks.length; i++) {

		jQuery("#check_input").append('<input type = "text" class = "check_input_box" id = "check_input_id_'+
		i +'" placeholder = "Item to be checked" value = "' + mtk_challenge_boxes.check_input.skill_checks[i] + '">');
		
		if (i == 0) {
			jQuery("#check_input").append('<input type = "button" value = "+" class = "plus_button" id = "check_plus" onclick = "add_check_input();">');
		}

		if (i == 1) {
			jQuery("#check_plus").after('<input type = "button" value = "-" onclick="remove_check_input();">');
		}

	}

}










