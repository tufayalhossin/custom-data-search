$(document).ready(function(){
	$("div.box-head").on("click", function() {
		if($(".listBox").hasClass("open")) {
			$(".listBox").removeClass("open");
		} else {
			$(".listBox").addClass("open");
		}
	});

	$(".select-box .listBox .list ul").on("click", "li", function(e) {
		var dataValue = $(this).data("value"),
			dataText = $(this).html();

		// console.log(dataText, dataValue);

		$(".select-box .box-head strong#input").html(dataText);
		$(".select-box .box-head input[type='hidden']").val(dataValue);

		e.preventDefault();
	});

	$(".select-box .listBox .search-box").on("keyup", "input[type='text']", function(e) {
		var items 		= $("li"),
			dataText 	= '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
			reg 		= RegExp(dataText, 'i'),
			text 		= null;

		console.log(dataText);

		items.show().filter(function() {
			text = $(this).text().replace(/\s+/g, ' ');

			return !reg.test(text);
		}).hide();

		e.preventDefault();
	});
});