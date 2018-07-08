var post = {
		clickpost:function(url) {
				window.open(url);
		}
};

var header = {
		isShowed:function(bool) {
				var src = document.createAttribute("src");
				if (bool == true) {
						headericon.src = "/icons/svg/carat-u-white.svg";
				} if (bool == false) {
						headericon.src = "/icons/svg/carat-d-white.svg";
				}
		},
		hide: function() {
				header.isShowed(false);
		},
		show: function() {
				header.isShowed(true);
		},
};

var headericon = document.getElementById("header.opt");
var postTag = document.getElementById("post.content");
var info = document.getElementsByTagName("info");

header.isShowed(true);

headericon.onclick = function() {
		if(header.isShowed(true)) {
				header.hide();
		} if(isShowed(false)) {
				header.show();
		}
};

info.onclick = function() {
	info.style.visibility = "hidden";
};

postTag.onmousedown = function() {
		postTag.style.backgroundColor = "#ff0000";
};
