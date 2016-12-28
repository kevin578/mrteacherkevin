<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
			<div class = "container">
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					
						

					<h1 class="entry-title"><?php the_title(); ?></h1>
					
					</header><!-- .entry-header -->
	
					<div class="entry-content">
						<?php require("challenge_page/challenge_page.php");?>
					</div><!-- .entry-content -->
					
			</div><!-- #container -->
					<footer class="entry-meta">
						<?php edit_post_link( __( 'Edit', 'twentythirteen' ), '<span class="edit-link">', '</span>' ); ?>
					</footer><!-- .entry-meta -->
				</article><!-- #post -->


			<?php endwhile; ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>