const services = [];
const xDataKeys = [];

const resultData = [];
const serviceKeyName = xDataKeys[0];
let currentService;
let currentServiceColor;

services.forEach((obj, i) => {
  let newObj = { ...obj };
  if (currentService !== obj[serviceKeyName]) {
    currentService = obj[serviceKeyName];
    currentServiceColor = "red";
  } else {
    newObj[serviceKeyName] = null;
  }
  newObj.color = currentServiceColor;
  resultData.push(newObj);
});
console.log("result data: ", resultData);
