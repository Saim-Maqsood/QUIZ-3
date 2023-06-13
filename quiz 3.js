let initialArray = [{ id: 1, name: 'Mehrmah' }, { id: 2, name: 'Noman' }, { id: 3, name: 'Ifrah' }];
let elementToRemove = 1; // Assuming you want to remove the element at index 1
// To-Delete
initialArray.splice(elementToRemove,1);

// To-Update
updatedName = 'Saim';
for (let K in initialArray) {
    if (initialArray[K].id === elementToRemove) {
        initialArray[K].name = updatedName;
        break;
    }
}

console.log(initialArray);