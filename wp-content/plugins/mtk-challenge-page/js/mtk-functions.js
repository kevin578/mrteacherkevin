
//All of the functions that get called in during ajax and the buttons being pressed



//Gets the check marks ready that show up on the main input page.
function render_checks() {

hide_button(box1_check, "#box1_check", "#box1_title", "#box1_content");
hide_button(box2_check, "#box2_check", "#box2_title", "#box2_content");
hide_button(box3_check, "#box3_check", "#skill_input_title", "#skill_input_subtitle", "#skill_inputs", "#skill_plus");
hide_button(box4_check, "#box4_check", "#check_input_title", "#check_input");
hide_button(box5_check, "#box5_check", "#video_title", "#video_embed_url");
}





function hide_button(check_id, click_id, title, content) {



var argument_array = [];
for (var i = 0; i < arguments.length; i++) {
	argument_array[i] = arguments[i];
}


if (check_id.checked) { switch_css(); }

jQuery(click_id).click(switch_css);

function switch_css() {
	
	if (check_id.checked) {
		jQuery(title).css("color", "#dbdbdb");
		jQuery(title).attr('contenteditable','false');
		jQuery(content).css("display", "none");
		
		if (argument_array.length > 4) {
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
			jQuery(argument_array[i]).css("display", "");
		}
		}



	}
}

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
			jQuery("#skill_plus").append('<input type = "button" class = "minus_button" value = "-" onclick="remove_skill_input();">');	
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
			jQuery("#check_plus").after('<input type = "button" class = "minus_button" value = "-" onclick="remove_check_input();">');
		}

	}

}

function add_extra_boxes(){


	for (var i = 0; i < mtk_challenge_boxes.extra_boxes.title.length; i++) {
		mtk_challenge_boxes.extra_boxes.title[i] = jQuery("#extra_title_" + i).html();
		mtk_challenge_boxes.extra_boxes.content[i] = jQuery("#extra_content_" + i).val();
	}
	mtk_challenge_boxes.extra_boxes.title.push('Title');
	mtk_challenge_boxes.extra_boxes.content.push('');

	render_extra_boxes();
}

function remove_extra_boxes(value){
	mtk_challenge_boxes.extra_boxes.title.splice(value, 1);
	render_extra_boxes();
}


function render_extra_boxes() {

	jQuery('#extra_boxes').html('');

	for (var i = 0; i < mtk_challenge_boxes.extra_boxes.title.length; i++) {
	jQuery("#extra_boxes").append('<h1 class = "extra_box_title" contenteditable = "true" id = "extra_title_' + i +'">'+ 
	mtk_challenge_boxes.extra_boxes.title[i] +'</h1>');
	jQuery("#extra_boxes").append('<input type = "button" class = "remove_boxes" value = "x" onclick = "remove_extra_boxes('+ i +')">');
	jQuery("#extra_boxes").append('<textarea id = "extra_content_' + i +'" class = "extra_box_content" rows = "3">' + mtk_challenge_boxes.extra_boxes.content[i] + '</textarea>');
	
	}
}

//quiz


jQuery( document ).ready(function() {

	var mtk_quiz_questions = [];
	

	jQuery("#quiz_text").click(function(){
		add_text_question();
	});

	jQuery("#quiz_mc").click(function(){
		add_mc_question();
	});	

});



function render_question(){


 

//clears all of the html away so it can be repopulated with the arrays

	jQuery("#mtk_quiz_questions").html("");


//for each question in the array, it will create...
	for(var i = 0; i < mtk_quiz_questions.length; i++) {
		var question_num = i + 1;
		
		//the box the indiviual questions are contained in 
		jQuery("#mtk_quiz_questions").append('<div id = "mtk_question_container_'+i+'" class = "mtk_question_container"></div>');
		//the x block to delete the questions 
		jQuery("#mtk_question_container_" + i).append('<input type = "button" id = "remove_question_'+question_num+'" class = "remove_question" value = "x" onclick = "remove_question('+ i +')">');
		//the question title
		jQuery("#mtk_question_container_" + i).append('<div class = "quiz_titles">Question '+ question_num +'</div>');
		//actual text of the question
		jQuery("#mtk_question_container_" + i).append('<input type = "text" class = "question_text" id = "question' + question_num + '" value = "'+ mtk_quiz_questions[i].question+'">');

		//if it's a text quesitontion it makes the answer title and text input box
		if (mtk_quiz_questions[i].type == "text") {
			

			jQuery("#mtk_question_container_" + i).append('<div class = "answer_titles"><em>Answer</em></div>');
			jQuery("#mtk_question_container_" + i).append('<input type = "text" class = "answer_text" id = "answer_'+ question_num+'" value = "'+ mtk_quiz_questions[i].answer+'">');
		}
		//if it's multiple choice it goes to the choices array loctated at mtk_quiz_questions[i].choices
		else if (mtk_quiz_questions[i].type == "mc") {
			
			//first adds the plus and minus button
			jQuery("#mtk_question_container_" + i).append('<input type = "button" value = "+" class = "plus_button" onclick = "add_mc_choice('+i+');" id = "plus_mc">');
			jQuery("#mtk_question_container_" + i).append('<input type = "button" value = "-" class = "minus_button" onclick = "remove_mc_choice('+i+','+x+');" id = "plus_mc"><br>');			
			
			//for each choice it creates the radio button and box to write the choice in
			for (var x = 0; x < mtk_quiz_questions[i].choices.length; x++){

				jQuery("#mtk_question_container_" + i).append('<input type = "radio" name = "question'+ question_num +'" id = "mc_radio">');
				jQuery("#mtk_question_container_" + i).append('<input type = "text" value = "'+mtk_quiz_questions[i].choices[x]+'" class = "mc_choice" id = "mc_choice_'+x+'"><br>');
			}
		}

	}
}

function add_text_question(){

	var question = {
		id: mtk_quiz_questions.length,
		type: "text",
		question: "",
		answer:""
	} 
	mtk_quiz_questions.push(question); 
	record_quiz();
	render_question();
}


function add_mc_question(){
		var question = {
		id: mtk_quiz_questions.length,
		type: "mc",
		question: "",
		choices:["",""],
		answer:""
	}

		mtk_quiz_questions.push(question); 
		record_quiz();
		render_question();
}

function add_mc_choice(question_num) {
	mtk_quiz_questions[question_num].choices.push("");
	record_quiz();
	render_question();

}

function remove_mc_choice(question_num, choice_num) {
	mtk_quiz_questions[question_num].choices.splice(choice_num, 1);
	record_quiz();
	render_question();

}



function remove_question(value){
	record_quiz();
	mtk_quiz_questions.splice(value, 1);
	render_question();
}

function record_quiz() {
		for(var i = 0; i < mtk_quiz_questions.length; i++) {

		var question = "#question" + parseInt(i + 1);
		var question_val = jQuery(question).val();

		if (typeof question_val != "undefined") {
					
			mtk_quiz_questions[i].question = question_val;



			if (mtk_quiz_questions[i].type == "text") {
				var answer = "#answer_" + parseInt(i + 1);
				var answer_val = jQuery(answer).val();	
				
				if (typeof answer_val != "undefined"){
				mtk_quiz_questions[i].answer = answer_val;
			}
			}

			else if (mtk_quiz_questions[i].type == "mc") {
				for (var x = 0; x < mtk_quiz_questions[i].choices.length; x++) {
					var choice = "#mc_choice_" + parseInt(x);
					var choice_val = jQuery(choice).val();	
				
				if (typeof choice_val != "undefined"){
					mtk_quiz_questions[i].choices[x] = choice_val; 
				}
			}
		}
}
}


}








