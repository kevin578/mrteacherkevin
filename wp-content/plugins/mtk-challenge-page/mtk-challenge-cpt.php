<?php

function mtk_register_challenge_page(){

	$singular = 'Challenge Page';
	$plural = 'Challenge Pages';

		$labels = array(
		'name' 				=> $plural,
		'singular_name' 	=> $singular,
		'add_new' 			=> 'Add New',
		'add_new_item'  	=> 'Add New ' . $singular,
		'edit'		        => 'Edit',
		'edit_item'	        => 'Edit ' . $singular,
		'new_item'	        => 'New ' . $singular,
		'view' 				=> 'View ' . $singular,
		'view_item' 		=> 'View ' . $singular,
		'search_term'   	=> 'Search ' . $plural,
		'parent' 			=> 'Parent ' . $singular,
		'not_found' 		=> 'No ' . $plural .' found',
		'not_found_in_trash'=> 'No ' . $plural .' in Trash'
		);


	
	$args = array(
		'labels'              => $labels,
	        'public'              => true,
	        'publicly_queryable'  => true,
	        'exclude_from_search' => false,
	        'show_in_nav_menus'   => true,
	        'show_ui'             => true,
	        'show_in_menu'        => true,
	        'show_in_admin_bar'   => true,
	        'menu_position'       => 15,
	        'menu_icon'           => 'dashicons-welcome-learn-more',
	        'can_export'          => true,
	        'delete_with_user'    => false,
	        'hierarchical'        => true,
	        'has_archive'         => true,
	        'query_var'           => true,
	        'capability_type'     => 'page',
	        'map_meta_cap'        => true,
	        'show_in_rest'       => true,
  			'rest_base'          => 'challenge_page',
  			'rest_controller_class' => 'WP_REST_Posts_Controller',
	        //'capabilities' => array(),
	        'rewrite'             => array( 
	        	'slug' => $slug,
	        	'with_front' => true,
	        	'pages' => true,
	        	'feeds' => true,
	        ),
	        'supports'            => array( 
	        	'title', 
	        	'page-attributes',
	        )
	);
	register_post_type( 'challenge_page', $args );
}
add_action( 'init', 'mtk_register_challenge_page');




?>