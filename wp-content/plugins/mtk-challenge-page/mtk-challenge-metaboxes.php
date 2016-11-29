<?php

	function mtk_challenge_page() {

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
	$mtk_stored_meta = get_post_meta( $post->ID ); ?>

<div class = "mtk_challenge_input">

<h1>What will I be making?</h1>
<textarea name = 'mtk_challengebox1' rows = '3' id = 'mtk_challengebox1'>
	<?php if ( ! empty ( $mtk_stored_meta['mtk_challengebox1'] ) ) {
					echo esc_attr( $mtk_stored_meta['mtk_challengebox1'][0] );
				} ?>

</textarea>

<h1>How can I make this?</h1>
<textarea name = 'mtk_challengebox2' id = 'mtk_challengebox2' rows = '3'>
<?php 	
		if ( ! empty ( $mtk_stored_meta['mtk_challengebox2'] ) ) {
					echo esc_attr( $mtk_stored_meta['mtk_challengebox2'][0] );
				} 
		else {
			echo ('In order to make your own version of this you can follow along with the video below. Remember when you see a change you can make to your project, pause the video and go do it. Don’t watch the whole video and try to remember it!');
		}

				?>
	
</textarea>


<h1>What if I want to find a specific skill in the video?</h1>


<p>Here is a list of skills with the time they appear in the video.</p>
<input type = "button" value = "+" class = "plus_button" onclick = "add_skill_input();">
<input type = "button" value = "-" onclick="remove_skill_input();")>


<div id = "skill_inputs"></div>


<h1>Okay, I think I’m finished. What can I check to make sure?</h1>

<?php> json_encode()   ?>

<div id = "check_input"></div>


<h1>You can find everything you need in the video below:</h1>
<input type = "text" id = "video_embed_url" placeholder="video embed url">


</div>
</html>

<?php 

}


function mtk_meta_save( $post_id ) {
	// Checks save status
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'mtk_jobs_nonce' ] ) && wp_verify_nonce( $_POST[ 'mtk_jobs_nonce' ], basename( __FILE__ ) ) ) ? 'true' : 'false';
    //Exits script depending on save status
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }
    if ( isset( $_POST[ 'mtk_challengebox1' ] ) ) {
    	update_post_meta( $post_id, 'mtk_challengebox1', sanitize_text_field( $_POST[ 'mtk_challengebox1' ] ) );
    }
    if ( isset( $_POST[ 'mtk_challengebox2' ] ) ) {
    	update_post_meta( $post_id, 'mtk_challengebox2', sanitize_text_field( $_POST[ 'mtk_challengebox2' ] ) );
    }
    //if ( )
 }

  add_action( 'save_post', 'mtk_meta_save' ); 
 
?>






