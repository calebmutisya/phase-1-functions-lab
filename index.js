// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber){
    const headQuarterStreetNumber = 42;
    const distance = Math.abs(streetNumber-headQuarterStreetNumber);
    return distance;  
}
function distanceFromHqInFeet(streetNumber){
    const headQuarterStreetNumber = 42;
    const distance = Math.abs(streetNumber-headQuarterStreetNumber);
    const foot=264;
    const distanceInFeet=distance*foot;
    return distanceInFeet;
}
function distanceTravelledInFeet(startStreet,endStreet){
    const distance = Math.abs(startStreet-endStreet);
    const foot=264;
    const distanceInFeet=distance*foot;
    return distanceInFeet;
}
function calculatesFarePrice(start,destination){
    const feetTravelled=distanceTravelledInFeet(start, destination)
    // Math.abs(destination-start);
    if (feetTravelled<= 400){
        return 0;
    }
    else if(feetTravelled>400 && feetTravelled<=2000)
    {
        const extraFeet = feetTravelled -400;
        const fare = extraFeet * 0.02;
        return fare;
    }
    else if(feetTravelled>2000 && feetTravelled <= 2500){
        return 25;
    }else if(feetTravelled>2500){
        return 'cannot travel that far';
    }
}
