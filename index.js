// Code your solution in this file!
const drivers=['Yvonne','Faith','Bert','Sean']
function returnFirstTwoDrivers (drivers){
   
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers (drivers){
   return drivers.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(b) {
    return function (fare) {
      return fare*b;
    };
  }

 
function fareDoubler(fare){
return fare*2
}

function fareTripler(fare){
return fare*3
}

function selectDifferentDrivers(drivers,selectingDrivers){
return selectingDrivers(drivers)

}
 