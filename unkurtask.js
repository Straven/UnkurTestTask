var array1 = [1,4,5,5,8,11];
var array2 = [1,3,7,11];

var k = array1.length + array2.length;
var result = new Array(k);

var arrayBig = true;

for (var i = 0; i < array1.length; i++)
	document.write(array1[i]+" ");
document.write("</br>");
for (var i = 0; i < array2.length; i++)
	document.write(array2[i]+" ");
document.write("</br>");

if (array1.length > array2.length) {
	arrayBig = true;
	for (var i = 0; i < array1.length; i++) {
		result[i] = array1[i];
	}
}
else {
	arrayBig = false;
	for (var i = 0; i < array2.length; i++) {
		result[i] = array2[i];
	}
}

if (arrayBig) {
	insert_in_array(array2, result);
	print_result(result);
}
else{
	insert_in_array(array1, result);
	print_result(result);
}

function print_result (result) {
	for (var i = 0; i < result.length; i++) {
		document.write(result[i]+" ")
	}
	document.write("</br>");
}

function insert_in_array(array, result) {
	var tmp, tmp1;
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < result.length; j++) {
			if (array[i] <= result[j]) {
				tmp = result[j];
				result[j] = array[i];
				for (var k = j+1; k < result.length; k++) {
					tmp1 = result[k];
					result[k] = tmp;
					tmp = tmp1;
				}
				break;
			}
		}
	}
	return result;
}