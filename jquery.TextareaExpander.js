/*
* Textarea Expander
* v1.0
* covard
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 
*/
(function($) {
	$.fn.TextareaExpander = function(options) {
		var defaults = {
			lines: 6,
			chars: 400,
			maxHeight: '300px',
			minHeight: '100px'
		};
		
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			var $input = $(this);
			if ($input[0].type.toLowerCase() != "textarea") return;
			
			$input.focus(Expand).blur(Shrink);
			
			function Expand() {
				var lLength = $input.val().split("\n").length;
				var cLength = $input.val().length;
				
				if (lLength >= options.lines || cLength >= options.chars) {
					$input.css('height', options.maxHeight);
				}
			}
			
			function Shrink() {
				$input.css('height', options.minHeight);
			}
		});
	};
})(jQuery);