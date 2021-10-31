"use strict";
var user = {
    name: 'Moster',
    age: 3,
    getMessage: function () {
        return 'Hello ' + this.name;
    },
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hello ' + this.name;
    },
};
console.log(user2.getMessage());
