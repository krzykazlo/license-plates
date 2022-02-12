const licensePlates = ["DW123WF", "DTR12KQ", "WA6642E", "ERA75TM", "ERA81TL", "WI027HJ"];
let locationCodes = [];

const getLocationCode = (licensePlate) => {
    if (!isNaN(licensePlate.charAt(2))) {
        return licensePlate.slice(0, 2);
    } else if (!isNaN(licensePlate.charAt(3))) {
        return licensePlate.slice(0, 3);
    } else {
        console.log('invaild');
    }
};

for (let i = 0; i < licensePlates.length; i++) {
    locationCodes.push(getLocationCode(licensePlates[i]));
}

console.log(locationCodes);

