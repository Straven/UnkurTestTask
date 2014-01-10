var array1 = [1,4,5,5,8,11];
var array2 = [1,3,7,11];

var k = array1.length + array2.length;
var result = new Array(k);

for (var i = 0; i < array1.length; i++)
	document.write(array1[i]+" ");
document.write("</br>");
for (var i = 0; i < array2.length; i++)
	document.write(array2[i]+" ");
document.write("</br>");

var i = 0;
var j = 0;
var k = 0;

while ((i < array1.length) && (j < array2.length)) {
	if (array1[i] < array2[j]) {
		result[k] = array1[i];
		i = i + 1;
	}
	else {
		result[k] = array2[j];
		j = j + 1;
	}
	k = k + 1;
}

while (i < array1.length) {
	result[k] = array1[i];
	i = i + 1;
	k = k + 1;
}

while (j < array2.length) {
	result[k] = array2[j];
	j = j + 1;
	k = k + 1;
}

document.write("</br>");

for (var i = 0; i < result.length; i++) {
	document.write(result[i]+" ");
}
document.write("</br>");