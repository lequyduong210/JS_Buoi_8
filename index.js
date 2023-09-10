
var numberArr = [-30,-9,2,5,7,8,-20,40];
function nhap(){
    var number = document.querySelector('#giatri').value*1;
    // thêm giá trị user nhập
    numberArr.push(number);
}
function tinhTong(){
    // tổng số dương
    var tongSoDuong = 0;
    for(var i = 0; i < numberArr.length; i++){
        if(numberArr[i] >= 0 ){
            tongSoDuong += numberArr[i];
        }
    }
    console.log(tongSoDuong);

    document.querySelector('#result1').innerHTML = `<p> Tổng số dương là: ${tongSoDuong}</p>`
}
function demSo(){
    // đếm số dương
    var demSoDuong = 0;
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] >= 0){
            demSoDuong += 1;
        }
    }
    document.querySelector('#result2').innerHTML = `<p> Số dương: ${demSoDuong}</p>`
}
function sonhonhat(){
    // tìm số nhỏ nhất
    var soNhoNhat = numberArr[0];
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] < soNhoNhat){
            soNhoNhat = numberArr[i];
        }
    }
    document.querySelector('#result3').innerHTML = `<p> Số nhỏ nhất là: ${soNhoNhat}</p>`
}
function soDuongNhoNhat(){
    // tìm số dương nhỏ nhất
    var soDuongNhoNhat = Infinity; 
    // infinity: 
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] >= 0 && numberArr[i] < soDuongNhoNhat){
            soDuongNhoNhat = numberArr[i];
        }
    }
    document.querySelector('#result4').innerHTML = `<p> Số dương nhỏ nhất là: ${soDuongNhoNhat}</p>`
}
function soChanCuoiCung(){
    // tìm số chẵn cuối cùng 
    for(i = 0; i < numberArr.length; i++){
        var soChanCuoiCung = numberArr[i] ;
        for(i = 0; i < numberArr.length; i++){
            if(numberArr[i] % 2 == 0){
                soChanCuoiCung = numberArr[i];
            }else{
                soChanCuoiCung = -1;
            }
        }
    }
    document.querySelector('#result5').innerHTML = `<p> Số chẵn cuối cùng là: ${soChanCuoiCung}</p>`
}
function doiCho(){
    // đổi chỗ chuỗi
    viTri1 = document.querySelector('#vitri1').value*1;
    viTri2 = document.querySelector('#vitri2').value*1;
    var temp = numberArr[viTri1];
    numberArr[viTri1] = numberArr[viTri2];
    numberArr[viTri2] = temp;
    document.querySelector('#result6').innerHTML = `<p> Chuỗi mới sau khi đổi vị trí là: ${numberArr}</p>`
}
function tangDan(){
    // Sắp xếp tăng dần
    for(i = 0; i < numberArr.length; i++){
        for(j = 0; j < numberArr.length - 1; j++){
            if(numberArr[j] > numberArr[j+1]){
                var temp = numberArr[j];
                numberArr[j] = numberArr[j+1];
                numberArr[j+1] = temp;
            }
        }
    }
    document.querySelector('#result7').innerHTML = `<p> Chuỗi sau khi sắp xếp tăng dần là: ${numberArr}</p>`
}
/*
function soNguyenTo(){
    // tìm số nguyên tố đầu tiên
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] <= 1){
            return false;
        }else if(numberArr[i] <= 3){
            return true;
        }else if(numberArr[i] % 2 == 0 || numberArr[i] % 3 == 0){
            return false;
        }
        for(var j = 0; j < Math.sqrt(numberArr[i]); j++){
            if(numberArr[i] % j == 0){
                return false;
            }else{
                var soNguyenTo = numberArr[i];
            }
        }
    }
    document.querySelector('#result8').innerHTML = `<p> Số nguyên tố đầu tiên là: ${soNguyenTo}</p>`
}*/
function kiemTra(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 == 0 || num % 3 == 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i == 0 || num % (i + 2) == 0) {
        return false;
      }
      i += 6;
    }
    return true;
}
function timSoNguyenTo(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (kiemTra(arr[i])) {
        return arr[i];
      }
    }
    return null; // Không tìm thấy số nguyên tố
}
function soNguyenTo(){
    var soNguyenTo = timSoNguyenTo(arr)
    if(soNguyenTo != null){
        var content = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenTo}`;
    }else{
        soNguyenTo = -1;
        var content = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenTo}`;
    }
    document.querySelector('#result8').innerHTML = content;
}
  
function nhapMang(){
    soThuc = document.querySelector('#mangsothuc').value*1;
    numberArr.push(soThuc);
    document.querySelector("#arr").innerHTML = `<p> Mảng hiện tại là ${numberArr} </p>`;
}
function demSoNguyen(){
    var soNguyen = 0;
    // đếm số nguyên
    for(i = 0; i < numberArr.length; i++){
        if(Number.isInteger(numberArr[i]) == true){
            soNguyen += 1;
        }
    }
    document.querySelector('#result9').innerHTML = `<p> Chuỗi trên có ${soNguyen} số nguyên</p>`
}
function soSanh(){
    var soAm = 0;
    var soDuong = 0;
    // so sánh số lượng số âm và dương
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] >= 0){
            soDuong += 1;
        }else{
            soAm +=1
        }
    }
    if(soDuong > soAm){
        var content = `<p> Số dương > Số âm </p>`
    }else if(soDuong < soAm){
        content = `<p> Số dương < Số âm </p>`
    }else{
        content = `<p> Số dương = Số âm </p>`
    }
    document.querySelector('#result10').innerHTML = content
}