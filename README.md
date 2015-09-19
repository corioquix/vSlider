# vanillaSlider - vSlider v.1.1
A simple slider in vanilla javascript

## How to use ?
Include the vslider file
```html
  <script src="js/vslider.js"></script>
```

Create div to slider
```html
  <div id="d_banner"></div>
```

Use the script
```javascript
  //url array of images
  var img = ['img/img01.png', 'img/img02.png', 'img/img03.png', ...];
  
  //configure vSlider
  vSlider.options({
		elem: '#d_banner',
		width: 600,
		height: 300,
		imgArray: img,
		time: 1500
	});
	
	//start vSlider
	vSlider.start();
```
