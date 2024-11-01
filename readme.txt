=== Table Auto-Layout===
Contributors: Shannon Vance
Donate link: http://greenlightdevelopment.com/table-auto-layout.php#donate
Tags: table auto layout, relayout table, window resize, responsibe table, shortcode, greenlightdevelopment
Requires at least: 3.8
Tested up to: 3.8.1
Stable tag: 1.0.00
License: GPLv2

A super easy way to automatically re-layout a table when the user changes the window size.

== Description ==
Table Auto-Layout allows site owners to automatically cause a table (or a list of selected tables) to be regenerated to best fit its container when the window is resized. This plugin uses a jQuery plugin to add a window resize event handler which selects a list of tables, measures their parent containers and replaces the existing tbody with a new set of rows and columns where the number of cells per row is determined by the parent container width divided by the desired cell (column) width.

Note: Because new rows may be generated and old rows may be combined by this process, the attributes of <tr> tags are lost.
A done function can be specified that can be used to repopulate row attributes (or whatever) on completion.

The last row of a table may either be filled out with blank cells or left partially filled based on a flag. This flag also serves as the class given added blank cells.

= Donate =
[If you like this plugin please consider donating](http://greenlightdevelopment.com/table-auto-layout.php#donate)

= Features =
* Works on pages and posts
* NO settings or configurations to deal with
* All features implemented as shortcode attributes
* Helps with responsive design.

== Installation ==
1. Upload 'table_auto_layout.zip' to the '/wp-content/plugins/' directory.

2. Activate the plugin through the 'Plugins' menu in WordPress.

3. Add the shortcode to the pages/posts that you want to affect. Shortcodes should look something like this:

[table-auto-layout
	container_id="#table_container" 
	selector=".link_table" 	
	blank_cell_class="blank_dir" 
	cell_width="144" 
	done_fxn="test_fxn"]

4. Done!

== Options ==
Shortcode attributes:

'container_id'	If not specified the plugin uses the table's parent container as the layout width,

'selector'	Default: "#the_table"

'cell_width' Default: 100,

'done_fxn'	Default: NULL,

'blank_cell_class' Default: ''. If specified the software will fill out empty rows with cells of the spec'd class. Mark any empty cells of the input table with this class for proper operation. Cells that are added will also get the class name "added" as well as the spec'd class.

== Issues ==
If you have any issues please post something here:
[Greenlight Contact](http://greenlightdevelopment.com/contact.php)

== Note ==
Table Auto-Layout should work with older versions of WordPress as well but was not tested with anything older than 3.8.1

== Frequently Asked Questions ==
none

== Upgrade Notice ==
n/a

== Changelog ==
= 1.0.00 =
* Initial release

== Screenshots ==
none