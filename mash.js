function mash(){
    let word = "house"
    return "You will live in a" + " " + getHome() + " " + "and you will have" + " " + getChildrenCount() + " " + "kids!"
}

result = mash();

console.log(result)

function getHome(){
    let residences = ["Mansion","Apartment","Shack","House"]
     residences.push(process.argv[2])
    let numbers = Math.random() * 3
    let numbers2 = Math.floor(numbers)
    return residences[numbers2];
}
getHome();

function getChildrenCount(){
    if(Math.random() >= 0.5){
        return Math.random() * 100
    } else {
        return process.argv[4]
    }
    
}


