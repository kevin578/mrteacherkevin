<?php


function mtk_challenge_page() {

	global $meta_content_1_object;


		add_meta_box(
		'mtk_box1',
		"Content Area",
		'mtk_challenge_box1_callback',
		'challenge_page',
		'normal',
		'core'
	);

}

add_action( 'add_meta_boxes', 'mtk_challenge_page' );

	

function mtk_challenge_box1_callback($post){
	wp_nonce_field( basename( __FILE__ ), 'mtk_jobs_nonce' );
	
	$meta_content_1_object = '
		{
		"box1":{
			"title":"What will I be making?",
			"content":"",
			"hide":false
		},
		"box2":{
			"title":"How can I make this?",
			"content":"In order to make your own version of this you can follow along with the video below. Remember when you see a change you can make to your project, pause the video and go do it. Don’t watch the whole video and try to remember it!",
			"hide":false
			}, 
			
		"extra_boxes": {
			"title":[],
			"content":[]
		},

		"skill_input":{
			"title":"What if I want to find a specific skill in the video?",
			"subtitle":"Here is a list of skills with the time they appear in the video.",
			"skills":[""],
			"time":[""],
			"hide":false
		},


		"check_input":{
			"title":"Okay, I think I’m finished. What can I check to make sure?",
			"skill_checks":[""],
			"hide":false
		},
		"video":{
			"title":"You can find everything you need in the video below:",
			"url":"",
			"hide":false
		}
		}';




	add_post_meta($post->ID, 'meta_content_1', $meta_content_1_object, true);
	//update_post_meta($post->ID, 'meta_content_1', $meta_content_1_object);

	?>



<div class = "mtk_challenge_input">



<div id = "admin_box1">
<h1 id ="box1_title" contenteditable = "true"></h1>





<input type="checkbox" name = "box1_check" id = "box1_check" value="box1_check">	
<label for = "box1_check"></label>




<textarea name = 'mtk_challengebox1' rows = '3' id = 'box1_content'>
</textarea>
</div>




<div id = "admin_box2">
<h1 id = "box2_title" contenteditable = "true"></h1>

<input type="checkbox" name = "box2_check" id = "box2_check" value="box2_check">	
<label for = "box2_check"></label>

<textarea name = 'mtk_challengebox2' id = 'box2_content' rows = '3'>
</textarea>
</div>

<input type = "button" id = "add_box" value = "Add field" onclick = "add_extra_boxes();">
<div id = "extra_boxes"></div>


<div id = "admin_box3">
<h1 id = "skill_input_title" class = "mtk_challenge_input" contenteditable = "true"></h1>

<input type="checkbox" name = "box3_check" id = "box3_check" value="box3_check">	
<label for = "box3_check"></label>


<p id = "skill_input_subtitle" contenteditable = "true"></p>
<span id = "skill_plus"></span>
<div id = "skill_inputs"></div>
</div>


<div id = admin_box4>
<h1 id = "check_input_title" contenteditable = "true"></h1>

<input type="checkbox" name = "box4_check" id = "box4_check" value="box4_check">	
<label for = "box4_check"></label>

<div id = "check_input"></div>
</div>

<div id = admin_box5>
<h1 id = "video_title" contenteditable = "true"></h1>

<input type="checkbox" name = "box5_check" id = "box5_check" value="box5_check">	
<label for = "box5_check"></label>

<input type = "text" id = "video_embed_url" placeholder="video embed url">
</div>



</div>
</html>

<?php 
}
?>








