<?php
/**
*Plugin Name: mrteacherkevin custom post type
*Description: Streamlines all of the work of making the challenge pages
*Author: Kevin Briggs
**/

//exit if accessed directly

if (! defined('ABSPATH')){
	exit;
}



require (  plugin_dir_path(__FILE__) . 'mtk-challenge-cpt.php');  
require (  plugin_dir_path(__FILE__) . 'mtk-rest-api-registration.php'); 
require (  plugin_dir_path(__FILE__) . 'mtk-challenge-metaboxes.php'); 



function mtk_admin_enqueue_scripts() {

global $post;

wp_enqueue_style( 'mtk-admin-css', plugins_url( 'css/challenge_page.css', __FILE__ ) );
wp_enqueue_script('mtk_admin-js', plugins_url( 'js/admin_input.js', __FILE__) );
wp_enqueue_script( 'jquery' );
wp_enqueue_script('ajax-js', plugins_url( 'js/ajax.js', __FILE__ ), array('mtk_admin-js'), true );

wp_localize_script( 'mtk_admin-js', 'wpApiSettings', array( 'root' => esc_url_raw( rest_url() ), 'nonce' => wp_create_nonce( 'wp_rest' ) ) );
wp_localize_script('ajax-js', 'get_post_id', array( 'post_id'=>$post->ID));
wp_localize_script('ajax-js', 'mtk_challenge_boxes', $meta_content_1_object);

}

add_action( 'admin_enqueue_scripts', 'mtk_admin_enqueue_scripts' );






?>