const student = {
    name: "swapnil",
    marks: 75,
    prop: this, // gloabal scope -> here this means window object
    getName: function() { // Normal fnx
        console.log(this); // calling object i.e student
        console.log(this.name); // swapnil
    },

    // bad way of using arrow fnx
    getMarks: () => { // Arrow fnx
        console.log(this); // parent's scope -> window
        console.log(this.marks); // undefined
    },

    // good way of using arrow fnx with setTimeout

    getInfo1: function () { // use this way to access correct information
        setTimeout(() => { // passing arrow fnx
            console.log(this); // student -> this of parent (here parent is function and it's this is student)
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () { // passing normal fnx
            console.log(this); // window -> this of calling object (here calling object is setTimeout fnx and it's this os wondow )
        }, 2000);
    }
};

student.getName();
student.getMarks();