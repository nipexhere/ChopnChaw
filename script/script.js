
// moving image
var pos = 0;
			window.setInterval(function(){
				pos++;
				document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
			}, 18
		);

    