//numAとnumBに計算する数字を格納する。処理のために文字列として定義
var numA = '';
var numB = '';
//記号を入れる変数
var operand = '';



//数字のキーのイベントハンドラーを定義
//num: char
function addEventHandler(num) {
	if (numA == '0' || numB == '0') {

	 	$(document).on('click', 'input#' + num, function () {
    		if (operand == '') {
    			numA = num;
    			$('#A').text(numA);
    		} else {
    			numB = num;
    			$('#A').text(numB);
    		}
		});

	}
	$(document).on('click', 'input#' + num, function () {
    	if (operand == '') {
    		numA = numA + num;
    		$('#A').text(numA);
    	} else {
    		numB = numB + num;
    		$('#A').text(numB);
    	}
	});
}


//計算する関数
function Calc() {
	//一番後ろが小数点だった場合、　０をつけて計算できるようにする
	if (numB.charAt(numB.length - 1) == '.') {
		numB = numB + '0';
	}

	if (operand == '+') {

		var Tenpnum = Number(numA) + Number(numB);
		numA = String(Tenpnum);

	} else if (operand == '-') {

		var Tenpnum = Number(numA) - Number(numB);
		numA = String(Tenpnum);
		
	} else if (operand == '*') {

		var Tenpnum = Number(numA) * Number(numB);
		numA = String(Tenpnum);
		
	} else if (operand == '/') {

		var Tenpnum = Number(numA) / Number(numB);
		numA = String(Tenpnum);
		
	}

}


//数字のイベントハンドラの実装
addEventHandler('1');
addEventHandler('2');
addEventHandler('3');
addEventHandler('4');
addEventHandler('5');
addEventHandler('6');
addEventHandler('7');
addEventHandler('8');
addEventHandler('9');
addEventHandler('0');


//記号のイベントハンドラの実装
$(document).on('click', 'input#add', function () {
    //一番後ろが小数点だった場合、　０をつけて計算できるようにする
	if (numA.charAt(numA.length - 1) == '.') {
		numA = numA + '0';
	}
	operand = '+';
	$('#A').text('0');
	$('#Operand').text('記号: ' + operand);

});

$(document).on('click', 'input#sub', function () {

	if (numA.charAt(numA.length - 1) == '.') {
		numA = numA + '0';
	}
	operand = '-';
	$('#A').text('0');
	$('#Operand').text('記号: ' + operand);

});

$(document).on('click', 'input#mul', function () {

	if (numA.charAt(numA.length - 1) == '.') {
		numA = numA + '0';
	}
	operand = '*';
	$('#A').text('0');
	$('#Operand').text('記号: ' + operand);

});

$(document).on('click', 'input#div', function () {

	if (numA.charAt(numA.length - 1) == '.') {
		numA = numA + '0';
	}
	operand = '/';
	$('#A').text('0');
	$('#Operand').text('記号: ' + operand);

});


$(document).on('click', 'input#equal', function () {

	Calc();
	operand = '';
	numB = '';
	if (numA == '') {
	    $('#A').text('0');
	} else {
		$('#A').text(numA);
	}
	$('#Operand').text('記号: ' + operand);


});

$(document).on('click', 'input#C', function () {

	operand = '';
	numA = '';
	numB = '';
	$('#A').text('0');
	$('#Operand').text('記号: ' + operand);


});

$(document).on('click', 'input#dot', function () {

    if (operand == '') {

    	numA = numA + '.';

    } else {

    	numB = numB + '.';

    }

});

