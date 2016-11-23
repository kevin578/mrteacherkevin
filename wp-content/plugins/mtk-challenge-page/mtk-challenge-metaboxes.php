<?php

	function mtk_challenge_box1() {

		add_meta_box(
		'mtk_box1',
		"What am I doing?",
		'mtk_challenge_box1_callback',
		'challenge_page'
	);
}

add_action( 'add_meta_boxes', 'mtk_challenge_box1' );

	function mtk_challenge_box1_callback(){
		include('mtk_challenge_box1_form.php');
	}

?>






