// Insert angka ke textview
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi Hitung
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}
// Fungsi Kali
function multiply(num){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = document.form.textarea.value * num;
}
// Fungsi Kurang
function subtract(num){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = document.form.textarea.value - num;
}
// Fungsi Bagi
function divide(num){
    if (num != 0) {
        var hasil = document.form.textarea.value;
        document.form.textarea.value = document.form.textarea.value / num;
    }
    else{
        alert("Tidak dapat dibagi dengan nol");
    }
}
// Clean
function clean(){
	document.form.textarea.value = "";
}
// Delete
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}