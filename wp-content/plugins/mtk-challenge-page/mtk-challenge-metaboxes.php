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



<div id = "mtk_challenge_menu">
<?php require (  plugin_dir_path(__FILE__) . 'html/mtk-challenge-menu.php'); ?>
</div>


<div id = "main_input" class = "mtk_challenge_input">
<?php require (  plugin_dir_path(__FILE__) . 'html/mtk-main-input.php'); ?>
</div>

<div id = "quiz_input">
<?php require (  plugin_dir_path(__FILE__) . 'html/mtk-quiz-input.php'); ?>
</div>

<div id = "victory_input">Victory</div>



</html>

<?php 
}
?>








