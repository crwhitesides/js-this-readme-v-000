// console.log(this === window)

// function checkThis() {
//   'use strict'
//   console.log(this)
// }
//
// checkThis()

// function Chair(style, color) {
//   this.style = style
//   this.color = color
//   console.log(this)
// }
// var sofa = new Chair("Sofa", "green")

// var couch = {
//   color: "green",
//   f: function() {
//     return this
//   }
// }
//
// console.log(couch.f())

var obj = {
    someData: "a string"
};

function myFun() {
  console.log(this)
}

myFun() // `this` is equal to `Window`

obj.staticFunction = myFun
obj.staticFunction()
/*
`this` is equal to `Object`. `this` is just an instance of the base `Object`
type and `obj` is just the name of the variable holding that object instance.
The object itself is the owner of the function and has no idea what it is named.
*/

var obj = {
    myMethod : function () {
        console.log(this)
    }
};

var myFun = obj.myMethod
myFun()

/*
`this` is equal to `Window`. The JavaScript interpreter enters function code,
but because myFun/obj.myMethod is not called on an object, ThisBinding is set
to `Window`.
*/
