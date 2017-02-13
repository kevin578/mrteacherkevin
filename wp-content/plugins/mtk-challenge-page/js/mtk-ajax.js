

//get post ID
var post_id = get_post_id.post_id;

var mtk_challenge_boxes;
var mtk_quiz_questions = [];
//once page is loaded, get content with ajax

jQuery( document ).ready(function() {


//start ajax
jQuery.ajax({
	url: "http://localhost/mrteacherkevin/wp-json/wp/v2/challenge_page/" + post_id,
	method: 'GET',
	dataType: 'json',
	beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
    },		
 
    //success function parses json then sets html to the loaded data

	 success: function(data){
            
            mtk_challenge_boxes = JSON.parse(data.meta_content_1);
            jQuery('#box1_title').html(mtk_challenge_boxes.box1.title);
            jQuery('#box1_content').html(mtk_challenge_boxes.box1.content);
            box1_check.checked = mtk_challenge_boxes.box1.hide;
            
            jQuery('#box2_title').html(mtk_challenge_boxes.box2.title);
            jQuery('#box2_content').html(mtk_challenge_boxes.box2.content);
            box2_check.checked = mtk_challenge_boxes.box2.hide;
            
            render_extra_boxes();
            
            jQuery('#skill_input_title').html(mtk_challenge_boxes.skill_input.title);
            jQuery('#skill_input_subtitle').html(mtk_challenge_boxes.skill_input.subtitle);
            render_skill_input();
            box3_check.checked = mtk_challenge_boxes.skill_input.hide;
            
            jQuery('#check_input_title').html(mtk_challenge_boxes.check_input.title);
            render_check_input();
            box4_check.checked = mtk_challenge_boxes.check_input.hide;
            
            jQuery('#video_title').html(mtk_challenge_boxes.video.title);
            jQuery('#video_embed_url').val( mtk_challenge_boxes.video.url);
            box5_check.checked = mtk_challenge_boxes.video.hide;
            
            render_checks();



    },
     error: function(){
     	jQuery('#mtkchallengebox1').html("Couldn't load data"); 

     } 
});


    //save content once update button is clicked

    jQuery("#publish").click(function(){

    //retrieve values from mkt-challenge-page.php and pass them into object
    mtk_challenge_boxes.box1.title = jQuery("#box1_title").html();
    mtk_challenge_boxes.box1.content = jQuery("#box1_content").val();
    mtk_challenge_boxes.box1.hide = box1_check.checked;
    mtk_challenge_boxes.box2.title = jQuery("#box2_title").html();
    mtk_challenge_boxes.box2.content = jQuery("#box2_content").val();
    mtk_challenge_boxes.box2.hide = box2_check.checked;



    for (var i = 0; i < mtk_challenge_boxes.skill_input.skills.length; i++){
    mtk_challenge_boxes.skill_input.skills[i] = jQuery("#skill_input_id_" + i).val();
    mtk_challenge_boxes.skill_input.time[i] = jQuery("#skill_time_id_" + i).val();
    }
    mtk_challenge_boxes.skill_input.hide = box3_check.checked;

    for (var i = 0; i < mtk_challenge_boxes.check_input.skill_checks.length; i++){
        mtk_challenge_boxes.check_input.skill_checks[i] = jQuery("#check_input_id_" + i).val();
    }
    mtk_challenge_boxes.check_input.hide = box4_check.checked;
    mtk_challenge_boxes.video.title = jQuery("#video_title").html();
    mtk_challenge_boxes.video.url = jQuery('#video_embed_url').val();
    mtk_challenge_boxes.video.hide = box5_check.checked;

    for (var i = 0; i < mtk_challenge_boxes.extra_boxes.title.length; i++) {
        mtk_challenge_boxes.extra_boxes.title[i] = jQuery("#extra_title_" + i).html();
        mtk_challenge_boxes.extra_boxes.content[i] = jQuery("#extra_content_" + i).val();
    }


    //starts ajax
    jQuery.ajax({
        url: "http://localhost/mrteacherkevin/wp-json/wp/v2/challenge_page/" + post_id,
        method: 'POST',
        dataType: 'json',
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
        },
        //turns entire object into json string
        data:
        {
            "meta_content_1" : JSON.stringify(mtk_challenge_boxes)
        }

    });


});



});