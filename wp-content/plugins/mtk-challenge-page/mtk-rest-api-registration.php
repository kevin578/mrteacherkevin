<?php

add_action('rest_api_init', 'mtk_add_custom_fields');

function mtk_add_custom_fields() {
	
	
	register_rest_field('challenge_page', 'meta_content_1',
		array(
            'get_callback'    => 'get_metabox',
            'update_callback' => 'update_metabox',
            'schema'          => null,
        ));











function get_metabox( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], $field_name, true );
}


function update_metabox( $value, $object, $field_name ) {
    
    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );


}
}



?>