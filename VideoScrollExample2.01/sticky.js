var $container = $(".container");
var $bgImage = $(".test");

$container.scroll(function(event) {
	var position = $container.scrollTop();
	setBgImage(position);
});

// preload the given total amount of iamges
function preload(totalImages) {
	for (var i = 0; i < totalImages; i++) {
        $('<img/>')[0].src = getImgUrl(i);
    }
}

preload(36);

function setBgImage(position){
	var imageNum;
	var lineCount = 0;

    imageNum = parseInt(position  / 100);

	console.log("IMG: " + imageNum + ", Position: " + position);

	// /imgObj.src = getImgUrl(imageNum);
	$bgImage.css("background-image", "url('" + getImgUrl(imageNum) + "')");
}


function getImgUrl(num){
    return "http://placehold.it/200x200/&text=" + num;
}
