function to_arabic (req,res) {
    let str = req.body.roman;
	let strLength = str.length;
	let roman = ["I", "V", "X", "L", "C", "D", "M"]; // roman number
	let arabic = [1,5,10,50,100,500,1000]; // arabic number
	let romanCase = ["IV","IX","XL","XC","CD","CM"] // roman special case
	let arabicCase = [4,9,40,90,400,900] // arabic special case

	var romanResult = ""; // result will in here

	// if length 1
	if (strLength === 1) {
		if (roman.indexOf(str[0]) === -1){
			res.send({result : 'invalid input'});
		}else {
			res.send({result : arabic[roman.indexOf(str[0])]})
		}
	}

	// if length more than 1

	if (strLength > 1) {
		for(let i = 0 ; i < strLength ; i++) {
			if(romanCase.indexOf(str[i]+str[i+1]) !== -1){
				romanResult = +romanResult + arabicCase[romanCase.indexOf(str[i]+str[i+1])] // will get special case arabic
			}else if(romanCase.indexOf(str[i-1]+str[i]) === -1){
				romanResult = +romanResult + arabic[roman.indexOf(str[i])] // will get arabic number
			}
		}
		res.send({result : romanResult})
	}
}

module.exports = {
	to_arabic
}