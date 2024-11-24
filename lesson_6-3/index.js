const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    const index = array.indexOf(item);

    return index !== -1 ? array.splice(index, 1) : null;
}

removeElement(array, 4);

console.log(array);