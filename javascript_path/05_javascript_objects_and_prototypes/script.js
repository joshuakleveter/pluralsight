var cat = {};

Object.defineProperties(cat, {
    name: {
        value: {},
        writable: true,
        enumerable: true,
        configurable: true
    },
    fullName: {
        get: function () {
            return `${this.name.first} ${this.name.last}`;
        },
        set: function (value) {
            var splitValue = value.split(' ');
            this.name.first = splitValue[0];
            this.name.last = splitValue[1];
        },
        enumerable: true,
        configurable: true
    }
});

cat.fullName = "Joe LaBrox";
console.log(cat.name.first);
console.log(cat.name.last);
console.log(cat.fullName);