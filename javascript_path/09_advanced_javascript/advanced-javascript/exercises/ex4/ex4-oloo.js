var Widget = {
    init: function(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    render: function($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
};

var Button = Object.create(Widget);
Button.initButton = function(opts) {
    this.height = opts.height || 50;
    this.width = opts.width || 50;
    this.label = opts.label || 'Button';
    this.$elem = $('<button>').text(this.label);
};
Button.renderButton = function($where) {
    this.render($where);
    this.$elem.on('click', event => {
        this.onClick(event);
    });
};
Button.onClick = function(event) {
    console.log(`Button ${this.label} clicked!`);
};

$(document).ready(function() {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    var btn2 = Object.create(Button);
    btn1.initButton({
        label: 'Button 1',
        height: 100,
        width: 200
    });
    btn2.initButton({
        label: 'Button 2',
        height: 50,
        width: 150
    });
    btn1.renderButton($body);
    btn2.renderButton($body);
});