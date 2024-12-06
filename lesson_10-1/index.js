function User() {
    this.name = 'Valeria';
    this.age = 21;
    this.city = 'Odesa';
    this.hobby = 'singing';
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        age: this.age,
        city: this.city,
        hobby: this.hobby
    }
}

const user = new User();

console.log(user.getInfo());




/* variant without using constructor. */

// const obj = {
//     name: 'Valeria',
//     age: 21,
//     city: 'Odesa',
//     hobby: 'singing'
// }

/* console.log(obj); 

OR 

Object.keys(User).forEach( key => {
    console.log(User[key])
}); */


