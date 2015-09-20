# vanillaSlider - vSlider v.1.2.1
A simple slider in vanilla javascript

### How to use ?
Include the vslider file
```html
  <script src="js/vslider.js"></script>
```

Create div to slider
```html
  <div id="d_banner">
  	<div>
  		<img src="img/img01.png" width="500" height="340" alt="vslider" />
  	</div>
  	<div>
  		<img src="img/img02.png" width="500" height="340" alt="vslider" />
  	</div>
  	<div>
  		<img src="img/img03.png" width="500" height="340" alt="vslider" />
  	</div>
  </div>
```

Add few styles
```css
#d_banner{
    padding:4px;
    margin:0 auto;
    text-align:center;
}
#d_banner div img{
    border-radius:4px;
}
```

Use the script
```javascript
  vSlider.options({
    //select id of div
	byId: 'd_banner',
    	time: 3500
	});
	
	//start vSlider & enjoy :)
	vSlider.start();
```
[See example](http://jsfiddle.net/ymodk022/)
