<?php
function dwwp_add_custom_metabox() {
	add_meta_box(
		'dwwp_meta',
		__( 'Job Listing' ),
		'dwwp_meta_callback',
		'job_listing',
		'normal',
		'core'
	);
}
add_action( 'add_meta_boxes', 'dwwp_add_custom_metabox' );


function dwwp_meta_callback( $post ) {
	wp_nonce_field( basename( __FILE__ ), 'dwwp_jobs_nonce' );
	$dwwp_stored_meta = get_post_meta( $post->ID ); ?>

	<div>
		<div class="meta-row">
			<div class="meta-th">
				<label for="job-id" class="dwwp-row-title">job id</label>
			</div>
			<div class="meta-td">
				<input type="text" class="dwwp-row-content" name="job_id" id="job-id"
				value="<?php if ( ! empty ( $dwwp_stored_meta['job_id'] ) ) {
					echo esc_attr( $dwwp_stored_meta['job_id'][0] );
				} ?>"/>
			</div>
		</div> 
	</div>	
	<?php
}
function dwwp_meta_save( $post_id ) {
	// Checks save status
    /*$is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'dwwp_jobs_nonce' ] ) && wp_verify_nonce( $_POST[ 'dwwp_jobs_nonce' ], basename( __FILE__ ) ) ) ? 'true' : 'false';
    // Exits script depending on save status
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }*/
    if ( isset( $_POST[ 'job_id' ] ) ) {
    	update_post_meta( $post_id, 'job_id', sanitize_text_field( $_POST[ 'job_id' ] ) );
    }

}
add_action( 'save_post', 'dwwp_meta_save' );






