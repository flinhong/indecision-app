const square = (x) => {
  return x * x;
}

// console.log(square(8));

const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// arguments object is no longer bound with arrow functions
// this keyword - no longer bound
const add = (a, b) => {
  return a + b;
}

// console.log(add(7, 9));

const user = {
  name: 'Frank',
  cities: ['SH', 'TJ', 'SC'],
  printPlaces() {
    // console.log(this.name);
    // console.log(this.cities);
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // })

    return this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
    // return cityMsg;
  }
}

console.log(user.printPlaces());