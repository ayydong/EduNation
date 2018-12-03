let pages = ["assets/img/Letter_G.png","assets/img/Letter_O.png", "assets/img/Letter_R.png"];
var lastPage = pages[0]
$(document).ready(function() {
	$(".sample-page-button").click(function(){
		var page_idx = Math.floor(Math.random()*pages.length)
		var page = pages[page_idx]
		if (page == lastPage) {
			page =  page_idx != pages.length-1 ? pages[page_idx+1] : pages[page_idx-1]
		}
		lastPage = page

		$("#page").fadeOut(200);
		document.getElementById('page').src = page
		$("#page").fadeIn(200)
	});
});