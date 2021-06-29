function rotate(event) {
	var x = event.clientX;
	var w = window.innerWidth;
	var midpoint = w / 2;
	var pos = x - midpoint;
	var val = (pos / midpoint) * 20;
	var card = document.getElementById("business-card");
	card.style.transform = "perspective(550px) rotateY(" + val + "deg) rotateY(" + val + "deg)";
}
/* document.addEventListener("mousemove", function (event)
{
	rotate (event)
}, false);
*/
// Radio Buttons
$('input[type=radio]').change(function() {
	$("#business-card").removeClass();
	if ($(this).val() == "patrick") {
		$('#first-name').text('Patrick');
		$('#last-name').text('Bateman');
		$('#phone-number').text('212 555 6342');
		$('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
		$('#murders-and-executions').text('Mergers And Acquisitions');
		$("#business-card").addClass("patrick-card");
	} else if ($(this).val() == "patrick-alt") {
		$('#first-name').text('Patrick');
		$('#last-name').text('Bateman');
		$('#phone-number').text('212 555 6342');
		$('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
		$('#murders-and-executions').text('Murders And Executions');
		$("#business-card").addClass("patrick-card");
	} else if ($(this).val() == "david-van-patten") {
		$('#first-name').text('David');
		$('#last-name').text('Van Patten');
		$('#phone-number').text('212 555 6342');
		$('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
		$('#murders-and-executions').text('Mergers And Acquisitions');
		$("#business-card").addClass("van-patten-card");
	} else if ($(this).val() == "timothy-bryce") {
		$('#first-name').text('Timothy');
		$('#last-name').text('Bryce');
		$('#phone-number').text('212 555 6342');
		$('#bottom-info').html('358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534');
		$('#murders-and-executions').text('Mergers And Acquisitions');
		$("#business-card").addClass("bryce-card");
	} else if ($(this).val() == "paul-allen") {
		$('#first-name').text('Paul');
		$('#last-name').text('Allen');
		$('#phone-number').text('212.555.6342');
		$('#bottom-info').html('358 Exchange Place New York, N.Y. 10099<br/>FAX 212 555 6390 TELEX 10 4534');
		$('#murders-and-executions').text('Mergers And Acquisitions');
		$("#business-card").addClass("allen-card");
	}
});
$(":checkbox").on("change", function() {
    var that = this;
    $('#business-card').css("background-color", function() {
        return that.checked ? "#fdfdfd" : "";
    });
});
