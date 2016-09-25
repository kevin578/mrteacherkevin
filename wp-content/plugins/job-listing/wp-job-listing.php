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


require (  plugin_dir_path(__FILE__) . 'wp-job-cpt.php') 

?>