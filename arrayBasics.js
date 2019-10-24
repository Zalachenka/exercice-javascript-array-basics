const shoeList = ['Puma', 'Adidas', 'Nike', 'Louboutin', 'Converse'];
const secondShoeList = shoeList.unshift('Chanel');
console.log(shoeList);
console.log(shoeList.length);

const thirdShoeList = shoeList.shift();
console.log(shoeList);
console.log(shoeList.length);

const fourthShoeList = shoeList.push('Jimmy Choo');
console.log(shoeList);
console.log(shoeList.length);

const fifthShoeList = shoeList.pop();
console.log(shoeList);
console.log(shoeList.length);

const sixthShoeList = shoeList.slice(0, 4);
console.log(sixthShoeList);
console.log(sixthShoeList.length);

const disney = ['Donald', 'Daisy', 'Riri', 'Fifi', 'Loulou'];
const newArray = sixthShoeList.concat(disney);
console.log(newArray);
console.log(newArray.length);
