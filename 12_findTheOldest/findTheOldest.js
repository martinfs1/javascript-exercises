const findTheOldest = function (people) {
  let yearNow = new Date().getFullYear();
  let personAlive;
  
  let arrayOfYearsOld = people.map((person) => {
    return (!Object.hasOwn(person, "yearOfDeath"))
      ? yearNow - person.yearOfBirth
      : person.yearOfDeath - person.yearOfBirth;
  });
  
  let yearsOld = Math.max(...arrayOfYearsOld);

  for (let i = 0; i < people.length; i++) {
    const element = people[i];
    if (!Object.hasOwn(element, "yearOfDeath")) {
      personAlive = yearNow - element.yearOfBirth
      if (personAlive === yearsOld) {
        return element;
      }
    }else if (element.yearOfDeath - element.yearOfBirth === yearsOld) {
      return element;    
    }       
  }
};

// Do not edit below this line
module.exports = findTheOldest;