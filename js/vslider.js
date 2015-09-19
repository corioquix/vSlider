/*  (c)2015 Josue Marin Ch - josue.marin.ch@gmail.com  */

var vSlider = {
    obj: {
        img: [],
        width: 400,
        height: 320,
        time: 3E3,
        elem: void 0
    },
    options: function(a) {
        this.obj.elem = a.elem || !1;
        this.obj.time = a.time || 3E3;
        this.obj.width = a.width || 400;
        this.obj.height = a.height || 320;
        this.obj.img = a.imgArray || []
    },
    ini: function() {
        this.obj.elem.style.width = this.obj.width;
        this.obj.elem.style.height = this.obj.height;
        this.obj.elem.style["background-repeat"] = "no-repeat";
        this.obj.elem.style["background-color"] = "#000000";
        this.obj.elem.style["font-family"] = "Lucida Console";
        this.obj.elem.style.color = "#ffffff";
        this.obj.elem.style.padding = "0.5em";
        this.obj.elem.style["background-size"] = "100%";
        this.obj.elem.innerHTML = "..Wait a moment :)"
    },
    update: function() {
        var a = this.obj.img,
            d = this.obj.img.length,
            b = 0,
            c = this.obj.elem;
        setInterval(function() {
            b == d ? b = 0 : (c.innerHTML = "", c.style["background-image"] = 'url("' + a[b] + '")', b++)
        }, this.obj.time)
    },
    start: function() {
        this.obj.elem ? (this.obj.elem = document.querySelector(this.obj.elem), this.ini(), this.update()) : console.warn("Select a element")
    }
};
