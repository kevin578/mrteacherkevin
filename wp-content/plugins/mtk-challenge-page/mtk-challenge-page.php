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


?>