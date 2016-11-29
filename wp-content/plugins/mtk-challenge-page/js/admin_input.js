
//sets arrays with one instance of a skill and one of a time. Third one sets array with skill for checkboxes and the plus and minus
var skill_input = ['<input type = "text" class = "video_time_left" placeholder = "Skill">'];
var time_input = ['<input type = "text" class = "video_time_right" placeholder = "Time">'];
var check_input = ['<input type = "text" class = "check_input_box" placeholder="Item to be checked">\
					<input type = "button" value = "+" class = "plus_button" onclick = "add_check_input();">\
					<input type = "button" value = "-" onclick="remove_check_input();")>'];


//displays one row on load
window.onload = function() {
var number_of_checks =  <?php echo('test') ?>
render_skill_input();




//for (var i; i < number_of_checks.legnth; i++) {
render_check_input();
//}
}

//pushes another item to the arrays when the plus button is press and calls the render function
function add_skill_input() {
skill_input.push('<input type = "text" class = "video_time_left" placeholder = "Skill">');
time_input.push('<input type = "text" class = "video_time_right" placeholder = "Time">');

render_skill_input();
}

function add_check_input() {
	check_input.push('<input type = "text" class = "check_input_box" placeholder="Item to be checked">');
	render_check_input();
}
//removes skill from array and renders it again
function remove_skill_input() {
	skill_input.pop();
	time_input.pop();

	render_skill_input();
}

function remove_check_input() {
	check_input.pop();

	render_check_input();
}


//diplays the arrays
function render_skill_input() {
	jQuery("#skill_inputs").html("");

	for (var i = 0; i < skill_input.length; i++) {
		jQuery("#skill_inputs").append(skill_input[i]);
		jQuery("#skill_inputs").append(time_input[i]);
	}
}

function render_check_input() {
	jQuery("#check_input").html("");

	for (var i = 0; i < check_input.length; i++) {
		jQuery("#check_input").append(check_input[i]);
	}
}








