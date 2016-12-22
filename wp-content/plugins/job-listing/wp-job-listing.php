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


require (  plugin_dir_path(__FILE__) . 'wp-job-cpt.php');
require (  plugin_dir_path(__FILE__) . 'wp-job-fields.php');   
require (  plugin_dir_path(__FILE__) . 'wp-job-settings.php'); 


function job_enqueue(){

wp_enqueue_style( 'job-admin-css', plugins_url( 'css/admin-jobs.css', __FILE__ ) );

wp_enqueue_script( 'reorder-js', plugins_url( 'js/reorder.js', __FILE__ ), array( 'jquery', 'jquery-ui-sortable' ), '201612', true );

wp_localize_script('reorder-js', 'WP_JOB_LISTING', array(
		security => wp_create_nonce( 'wp-job-order'),
		success => 'Job sort order has been saved',
		failure => 'Failed to save job order'


	));

}

add_action('admin_enqueue_scripts', 'job_enqueue');


?>