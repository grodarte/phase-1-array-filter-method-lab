// Code your solution here
function findMatching(array, string){
    const listOfDrivers = array.filter(user => user.toLowerCase() === string.toLowerCase())
    return listOfDrivers
}

function fuzzyMatch(array, letters){
    const checkLength = letters.length
    const listOfDrivers = array.filter(user => user.slice(0, checkLength) === letters)
    return listOfDrivers
}

function matchName(array, string){
    const listOfObjects = array.filter(user => user.name === string)
    return listOfObjects
}