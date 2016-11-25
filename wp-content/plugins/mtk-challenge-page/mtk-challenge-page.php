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
require (  plugin_dir_path(__FILE__) . 'mtk-challenge-metaboxes.php'); 



add_action( 'admin_enqueue_scripts', 'mtk_admin_enqueue_scripts' );

function mtk_admin_enqueue_scripts() {
wp_enqueue_style( 'mtk-admin-css', plugins_url( 'css/challenge_page.css', __FILE__ ) );
wp_enqueue_script('mtk_admin-js', plugins_url( 'js/admin_input.js', __FILE__ ) );
wp_enqueue_script( 'jquery' );
}



?>