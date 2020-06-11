// Code not done...mostly pseudocode

srcObj = [...];
let response = {male : [], female: []};
srcObj.forEach(data => {
	let personAgeData = {
		0To30: data.dob.age <=30,
		30-50: data.dob.age >30 && data.dob.age <=50,
		50AndAbove: data.dob.age >50
	};

	if (data.gender === 'male') {
		let doesNatExist = response.male.find({nat: data.nat});
		if (doesNatExist) {
			// increment count according age grp
			response.male.map(indivData => {
				if (indivData.nat === data.nat) {
					if (personAgeData.0To30) {
						//increment
					}
					else if(personAgeData.30-50) {
						//increment
					}
					else {
						//increment
					}
				}
				return indivData;
			})

		}
		else {
		response.male.add({
			nat: data.nat,
			...personAgeData
		})
		}
	}
	else {
		let doesNatExist = data.gender.find({nat: data.nat});
		if (doesNatExist) {
			// increment count according age grp
			response.male.map(indivData => {
				if (indivData.nat === data.nat) {
					if (personAgeData.0To30) {
						//incemenr
					}s
					else if(personAgeData.30-50) {
						//incfemenr
					}
					else {
						// increment
					}
				}
				return indivData;
			})
		}
		else {
		response.female.add({
			nat: data.nat,
			...personAgeData
		})
		}
	}
});