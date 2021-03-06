/*
* Textarea Character Counter
* v1.0
* covard
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 
*/
(function($) {
	$.fn.CharacterCounter = function(options) {
		return this.each(function() {
			var $input = $(this);
			if ($input[0].type.toLowerCase() != 'textarea') return;
			
			$input.parent().append("<span class='characterCounter'>" + $input.val().length + "</span>");
			$input.keyup(GetCount);
			
			function GetCount() {
				var string = $input.val().replace(new RegExp("\\n", "g"), "");
				$input.next().html(string.length);
				$input.TextareaExpander();
			}
		});
	};
})(jQuery);