var skill_input_id = 0;

window.onload = function() {

jQuery( "#skill_inputs" ).append(skill_input);

}


	var skill_input = 
'<input type = "text" class = "video_time_left" placeholder = "Skill">\
<input type = "text" class = "video_time_right" placeholder = "Time">'


function add_skill_input() {

	jQuery( "#skill_inputs" ).append(skill_input);
}