<?php
/**
*Plugin Name: Job listing plugin
*Description: This plugin lets you list jobs. It's cool!
*Author: Kevin Briggs
**/

//exit if accessed directly

if (! defined('ABSPATH')){
	exit;
}

function mtk_register_post_type(){

	$singular = 'Job Listing';
	$plural = 'Job Listings';
	$slug = str_replace( ' ', '_', strtolower( $singular ) );

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
	        'menu_icon'           => 'dashicons-businessman',
	        'can_export'          => true,
	        'delete_with_user'    => false,
	        'hierarchical'        => false,
	        'has_archive'         => true,
	        'query_var'           => true,
	        'capability_type'     => 'post',
	        'map_meta_cap'        => true,
	        // 'capabilities' => array(),
	        'rewrite'             => array( 
	        	'slug' => $slug,
	        	'with_front' => true,
	        	'pages' => true,
	        	'feeds' => true,
	        ),
	        'supports'            => array( 
	        	'title', 
	        	'editor', 
	        	'author', 
	        	'custom-fields' 
	        )
	);
	register_post_type( $slug, $args );
}
add_action( 'init', 'mtk_register_post_type');


?>


