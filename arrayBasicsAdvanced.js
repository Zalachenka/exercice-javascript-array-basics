const shoeList = ['Puma', 'Adidas', 'Nike', 'Louboutin', 'Converse'];
function checkIfBig(shoe) {
  if (shoe.length > 5) {
    return shoe;
  }
}
const newArray = shoeList.filter(checkIfBig);
console.log(newArray);

const secondArray = shoeList.find(checkIfBig);
console.log(secondArray);

/* peut aussi s'écrire comme ceci
const newArray = shoeList.find(function(shoe) {
  if (shoe.length > 5) {
    return shoe;
  }
})*/
