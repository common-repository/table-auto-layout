// JavaScript Document
/*

This plugin re-lays out a table to best fit the table's container.
It retains the attributes of  td cells
** It doesn't handle th cells yet -- !! -- To Do !!
Because it can add rows the tr attributes are not preserved
To help with this and possibly other post layout tasks a done function is provided
It is recommended that the blank_cell_class be used. Otherwise the table can come out with unfilled rows 
or an extra row with a blank cell if there are any blank cells at the end of the table.

*/
(function($) {
    $.fn.auto_layout = function(options) {
		var $this = $(this);

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
			'cell_width' : 100,
			'container' : $this.parent(),
			'done_fxn' : function() { console.log("Done!"); },
            'blank_cell_class': ''
		}, options);
		
		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();
		
		function fill_row() { return settings.blank_cell_class>''; }
		
		function adjust_table() {
			var container_width = settings.container.width();
			// num cells per row
			var num_cells = parseInt(container_width / settings.cell_width,10); 
			//console.log("container_width: " + container_width);
			//console.log("num_cells: " + num_cells);
			if(fill_row()) $this.find("td."+settings.blank_cell_class).remove(); 
			var cells = $this.find("td");
			var tbody = $this.find("tbody");
			
			tbody.html("");	// remove tbody
			
/*
			cells.each(function(i) {
				if(i%num_cells==0) tbody.append("<tr>");
				tbody.append($(this));
				if(i%num_cells==num_cells-1) tbody.append("</tr>");
			});
*/
			
			for(var i=0;i<cells.length;i++) {
				if(i%num_cells==0) {
					var row_num = i/num_cells; 
					tbody.append("<tr id=\"row_"+row_num+"\" />");
					var this_row = tbody.find("#row_"+row_num);
				}
				this_row.append(cells[i]);
				//if(i%num_cells==num_cells-1) tbody.append("</tr>");
			}
			
			// now fill out remaining rows
			if(fill_row()) {
				var rows = $this.find("tr");
				var total_num_cells = rows.length * num_cells;
				var num_to_do = total_num_cells - cells.length;
				if(num_to_do>0) {
					for(var i=0;i<num_to_do;i++) {
						this_row.append("<td class=\""+settings.blank_cell_class+" added\">&nbsp;</td>");
					}
				}
			}
			settings.done_fxn();
		}			

		$( window ).resize(function() {
			waitForFinalEvent(function(){
				adjust_table();
			}, 500, "adjust_table");
		});
		adjust_table();			
    };
})(jQuery);
/*
var al_options = {'cell_width' : 144, 'blank_cell_class' : 'blank_cell' };
$(document).ready(function(){
	$(this).auto_layout(al_options);
});
*/
