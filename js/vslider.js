/*  
    vanillaSlider - vSlider v.1.2.1
    (c)2015 Josue Marin Ch josue.marin.ch@gmail.com 
    https://github.com/corioquix/vSlider 
*/

var vSlider = {
    obj: {
        time: 3E3,
        elem: undefined
    },
    options: function(data) {
        this.obj.elem = data.byId || false;
        this.obj.time = data.time || 3E3
    },
    ini: function() {
        var count = this.obj.elem.childElementCount,
            querySel = this.obj.elem.getAttribute("id");
        for (var i = 1; i < count; i++) document.querySelector("#" + querySel + " div:nth-child(" + i + ")").style.display = "none"
    },
    update: function() {
        var obj_div_count = this.obj.elem.childElementCount,
            querySel = this.obj.elem.getAttribute("id"),
            count = 1,
            sec_count = count - 1,
            obj_elem = this.obj.elem,
            time = this.obj.time;
        setInterval(function() {
            sec_count = count - 1;
            if (count > obj_div_count) {
                count = 1;
                sec_count = count - 1
            } else {
                if (sec_count > 0) document.querySelector("#" + querySel + " div:nth-child(" + sec_count + ")").style.display = "none";
                else document.querySelector("#" + querySel + " div:nth-child(" + obj_div_count + ")").style.display = "none";
                document.querySelector("#" + querySel + " div:nth-child(" + count + ")").style.display = "block";
                count++
            }
        }, time)
    },
    start: function() {
        if (this.obj.elem) {
            this.obj.elem = document.getElementById(this.obj.elem);
            this.ini();
            this.update()
        } else console.warn("Select a element")
    }
};
