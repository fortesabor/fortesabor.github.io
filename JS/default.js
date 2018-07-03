var post = {
		clickpost:function(url) {
				window.open(url);
		}
};

var postTag = document.getElementById("post.content");
postTag.onmousedown = function() {
		postTag.style.backgroundColor = "#ff0000";
};
