const Person = require("../models/user");
const { model } = require("../models/user");

const generateReport = async () => {
    try{
        const Users = await Person.find()
        let response = {male: [], female: []};

        Users.forEach(user => {
            let doesNationalityExist = response[user.gender].find((el) => el.nat === user.nat);
            if (!doesNationalityExist) {
                response[user.gender].push({
                    nat: user.nat,
                    Range0To30: user.dob.age < 30 ? 1 : 0,
                    Range30To50: (user.dob.age >= 30 && user.dob.age < 50) ? 1 : 0,
                    Range50AndAbove: user.dob.age >= 50 ? 1 : 0
                });
            } else {
                response[user.gender].map(nationalityData => {
                    if (nationalityData.nat === user.nat) {
                        user.dob.age < 30 ? (nationalityData.Range0To30++) :
                            ((user.dob.age >= 30 && user.dob.age < 50) ? nationalityData.Range30To50++ :
                                nationalityData.Range50AndAbove++);
                    }

                    return nationalityData;
                });
            }
        });
        
       return response
        
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports = generateReport;