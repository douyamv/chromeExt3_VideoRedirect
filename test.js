
var objects = jQuery.merge(jQuery("object"),jQuery("embed"));
var target = null;
var max_area = 0;
objects.each(function(index) {
    var area = this.clientHeight * this.clientWidth;
    if (area > max_area) {
        target = this;
        max_area = area;
    }
});


