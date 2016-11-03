// Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

function randomizor(array) {
	var counter = 0,
	    length = array.length-1,
	    randomNum,
	    tmp;

	while(counter < length){
		randomNum = Math.floor(Math.random() * (length));
		tmp = array[counter]
		array[counter] = array[randomNum];
		array[randomNum] = tmp;
		counter++;
	}

	return array;
}

randomizor([10,11,12,200,400,2]);
