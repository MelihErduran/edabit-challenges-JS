/*This challenge will help you interpret mathematical relationships both algebraically and geometrically.
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.*/
function matchHouses(step) {
    let returnValue = 0
    if (step === 0) return 0;
    returnValue = (step * 5) + 1
    return(returnValue)
}