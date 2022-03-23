var canvas = new fabric.Canvas("myCanvas");

blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage){
	fabric.Image.fromURL(getImage, function(Img) {
        imagem1 = Img;
        imagem1.scaleToWidth(blockImageWidth); 
        imagem1.scaleToHeight(blockImageHeight);
        imagem1.set({
            top : blockY,
            left : blockX
        });
        canvas.add(imagem1);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69'){
		newImage("rr1.png");
		console.log("R");
	}
	if(keyPressed == '86'){
		blockX = 200;
		newImage("gr.png");
		console.log("G");
	}
	if(keyPressed == '65'){
		blockX =350;
		newImage("yr.png");
		console.log("Y");
	}
	if(keyPressed == '82'){
		blockX = 600;
		newImage("pr.png");
		console.log("P");
	}
	if(keyPressed == '73'){
		blockX = 700;
		newImage("br.png");
		console.log("B");
	}
	
}

