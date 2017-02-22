function Widget(width,height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
}

Widget.prototype.render = function($where){
    if (this.$elem) {
        this.$elem.css({
            width: this.width + "px",
            height: this.height + "px"
        }).appendTo($where);
    }
};

function Button(opts) {
    this.height = opts.height;
    this.label = opts.label;
    this.width = opts.width;
    this.$elem = $("<button>").text(this.label);
}
Button.prototype = Object.create(Widget.prototype);
Button.prototype.constructor = Button.prototype;

Button.prototype.render = function($where) {
    // call the parent render()
    Widget.prototype.render.call(this, $where);

    // add a click handler -> onClick
    this.$elem.on('click', event => {
        this.onClick(event);
    });
};

Button.prototype.onClick = function(evt) {
    console.log(`Button ${this.label} clicked!`);
};

$(document).ready(function(){
    var $body = $(document.body);
    var btn1 = new Button({
        label: "Button 1",
        height: 100,
        width: 200
    });
    var btn2 = new Button({
        label: "Button 2",
        height: 50,
        width: 150
    });

    btn1.render($body);
    btn2.render($body);
});