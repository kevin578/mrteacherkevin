jQuery(document).ready(function(jQuery) {

	var sortList = jQuery( 'ul#custom-type-list' );
	var animation = jQuery( '#loading-animation');
	 pageTitle = jQuery('div h2');
	sortList.sortable({

		update: function( event, ui ) {
			animation.show();

			jQuery.ajax({

			url: ajaxurl,
			type: 'POST',
			dataType: 'json',
			data: {
				action: 'save_sort',
				order: sortList.sortable( 'toArray' ).toString(),
				security: WP_JOB_LISTING.security
			},
			success: function( response ) {
				jQuery( 'div#message' ).remove();
				animation.hide();
				
				if (response.success) {
					pageTitle.after( '<div id = "message" class="updated"><p>' + WP_JOB_LISTING.success + '</p></div>' );
				}	else{
					pageTitle.after( '<div id = "message" class="error"><p>' + WP_JOB_LISTING.failure + '</p></div>' );
				}
				
			},
			error: function( error ) {
				jQuery( 'div#message' ).remove();
				animation.hide();
				pageTitle.after( '<div id = "message" class="error"><p>' + WP_JOB_LISTING.failure + '</p></div>' );
			}


			});
		}

		});

})