<?php
/*
Plugin Name: Table Auto Layout
Plugin URI: http://greenlightdevelopment.com/projects/table-auto-layout-plugin/
Description: This plugin allows you to add a shortcode to a page that regenerates a table's row and column structure to best fit its container when the window is resized.
Author: Shannon Vance
Version: 1.0
Author URI: http://greenlightdevelopment.com

GNU General Public License, Free Software Foundation <http://creativecommons.org/licenses/GPL/2.0/>
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

add_shortcode('table-auto-layout', 'tal_do_layout');
function tal_do_layout($attr)
{
	extract(shortcode_atts(array(
		'selector'	=> "#auto_table",
		'cell_width'	=> '',
		'container_id'	=> '',
		'done_fxn'	=> '',
		'blank_cell_class' => ''
	), $attr));
	
	wp_enqueue_script( 'table_auto_layout' ,plugins_url( 'js/table_auto_layout.js', __FILE__ ),array( 'jquery' ),null, $in_footer = true);
	
	?>
<script>
function waitForFinalEvent(hello) { console.log("Testing wait for final!"); }
function test_fxn() { console.log("Testing table auto layout!"); }
var container = jQuery("#<?php echo $container_id ?>");
var al_options = {
	'cell_width' : '<?php echo $cell_width ?>', 
	<?php if($container_id) echo "'container' : container," ?>
	<?php if($done_fxn) echo "'done_fxn' : $done_fxn," ?>
	'blank_cell_class' : '<?php echo $blank_cell_class ?>'
};

jQuery(document).ready(function(){
	jQuery("<?php echo $selector ?>").auto_layout(al_options);
});

</script>
    <?php
}

?>