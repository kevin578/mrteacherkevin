<?php
/**
*Plugin Name: Basic Plugin
*Author: Kevin
*
**/

function mtk_remove_widgets() {
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );   // WordPress blog
}

add_action( 'wp_dashboard_setup', 'mtk_remove_widgets' );

function mtk_add_link() {
	global $wp_admin_bar;
	$wp_admin_bar->add_menu ( array(
		'id' => 'google_analytics',
		'title' => 'Google Analytics',
		'href' => 'http://google.com/analytics' 
		) 
	);
}

add_action( 'wp_before_admin_bar_render', 'mtk_add_link');

?>


