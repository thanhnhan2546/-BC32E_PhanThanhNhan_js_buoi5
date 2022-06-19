/**
Bài 1: 

Đầu vào:
- Điểm chuẩn, Khu vực, Đối tượng và điểm 3 môn

Xử lý:
- Tạo biến và gán đầu vào cho từng biến
- Tạo biến tongDiem và kqThi
- Nếu Khu vực là X thì điểm của Khu vực = 0
  Nếu Khu vực là A thì điểm của Khu vực = 2
  Nếu Khu vực là B thì điểm của Khu vực = 1
  Nếu Khu vực là C thì điểm của Khu vực = 0.5
- Nếu Đối tượng là 0 thì điểm của Đối tượng = 0
  Nếu Đối tượng là 1 thì điểm của Đối tượng = 2.5
  Nếu Đối tượng là 2 thì điểm của Đối tượng = 1.5
  Nếu Đối tượng là 3 thì điểm của Đối tượng = 1
- Tổng điểm sẽ được tính theo công thức:
    tongDiem = điểm môn 1 + điểm môn 2 + điểm môn 3 + điểm Khu vực + điểm Đối tượng
- Nếu 1 trong 3 điểm của môn học là 0 thì sẽ rớt
- Nếu Tổng điểm < Điểm chuẩn thì sẽ rớt
- Nếu Tổng điểm > Điểm chuẩn thì sẽ đậu

Đầu ra:
- Thông báo kết quả đậu hay rớt và tổng điểm
 */
document.getElementById('kq_Bai1').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diem1 = Number(document.getElementById('diem1').value);
    var diem2 = Number(document.getElementById('diem2').value);
    var diem3 = Number(document.getElementById('diem3').value);

    var tongDiem = 0;
    var kqThi = '';

    switch(khuVuc){
        case "X":{
            khuVuc = 0;
            break;
        }
        case "A":{
            khuVuc = 2;
            break;
        }
        case "B":{
            khuVuc = 1;
            break;
        }
        case "C":{
            khuVuc = 0.5;
            break;
        }
    }

    switch(doiTuong){
        case 0:{
            doiTuong = 0;
            break;
        }
        case 1:{
            doiTuong = 2.5;
            break;
        }
        case 2:{
            doiTuong = 1.5;
            break;
        }
        case 3:{
            doiTuong = 1;
            break;
        }
    }

    tongDiem = tinhTongDiem(diem1, diem2, diem3, khuVuc, doiTuong);
    
    if(diem1 <= 0 || diem2 <= 0 || diem3 <= 0)
        kqThi = "Bạn đã rớt. Do có điểm bằng 0 hoặc nhỏ hơn";
    else if(tongDiem < diemChuan)
        kqThi = "Bạn đã rớt. Do không tổng điểm thấp hơn điểm chuẩn. Tổng điểm : " + tongDiem;
    else
        kqThi = "Bạn đã đậu. Tổng điểm : "+ tongDiem;
    
    document.getElementById('KQ1').innerHTML = kqThi;
}
function tinhTongDiem (d1, d2, d3, kv, dt){
    var td = d1 + d2 + d3 + kv + dt;
    return td;
}
/**
Bài 2: 

Đầu vào:
- Họ tên và Số điện

Xử lý:
- Tạo biến hoTen và soDien và gán Họ tên và Số điện vào biến
- Tạo biến soTien
- Nếu Số điện < 0 => Nhập sai số điện
- Số tiền điện sẽ được tính theo công thức:
    Nếu Số điện <= 50 : tienDien = soDien * 500;
    Nếu 50 < Số điện <= 100 : tienDien = tienDien = (50 * 500) + (soDien - 50) * 650
    Nếu 100 < Số điện <= 200 : tienDien = (50 * 500) + (50 * 650) + ((soDien - 100) * 850)
    Nếu 200 < Số điện <= 350 : tienDien =  (50 * 500) + (50 * 650) + (100 * 850) + ((soDien - 200) * 1100)
    Nếu Số điện > 350 :  tienDien =  (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soDien - 350) * 1300)

Đầu ra:
- Họ tên và Số tiền điện
 */
document.getElementById('kq_Bai2').onclick= function () {
    var hoTen = document.getElementById('hoTen').value;
    var soDien = Number(document.getElementById('soDien').value);
    var soTien = 0;
    var kq= '';

    soTien = tinhTienDien(soDien);

    if(soTien < 0)
        kq = "Nhập sai số điện";
    else{
        kq = "Họ và tên: "+ hoTen + " ; Tiền điện: " + soTien.toLocaleString('vi');
    }

    document.getElementById('KQ2').innerHTML = kq;
}

function tinhTienDien (soDien){
    var tienDien =0;
    if(soDien < 0){
        return -1;
    }
    else if(soDien <= 50 && soDien >= 0){
        tienDien = soDien * 500;
    }
    else if(soDien > 50 && soDien <= 100){
        tienDien = (50 * 500) + (soDien - 50) * 650;
    }
    else if(soDien > 100 && soDien <= 200){
        tienDien = (50 * 500) + (50 * 650) + ((soDien - 100) * 850);
    }
    else if(soDien > 200 && soDien <= 350 ){
        tienDien =  (50 * 500) + (50 * 650) + (100 * 850) + ((soDien - 200) * 1100);
    }
    else {
        tienDien =  (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soDien - 350) * 1300);
    }
    return tienDien;
}

/**
Bài 3:

Đầu vào:
- Họ tên, Thu nhập năm, Người phụ thuộc

Xử lý:
- Tạo biến và gán từng giá trị đầu vào vào từng biến
- tạo biến chiuThue và thue
- Thu nhập chịu thuế (chiuThue) sẽ được tính theo công thức:
    chiuThue = thuNhapNam - 4 triệu - nguoiPhuThuoc * 1.6 triệu
- Thuế thu nhập cá nhân (thue) sẽ được tính theo công thức:
    Nếu chiuThue <= 60 triệu : thue = chiuThue * 0.05
    Nếu 60 triệu < chiuThue <= 120 triệu : thue = chiuThue * 0.1
    Nếu 120 triệu < chiuThue <= 210 triệu : thue = chiuThue * 0.15
    Nếu 210 triệu < chiuThue <= 384 triệu : thue = chiuthue * 0.2
    Nếu 384 triệu < chiuThue <= 624 triệu : thue = chiuThue * 0.25
    Nếu 624 triệu < chiuThue <= 960 triệu : thue = chiuThue * 0.3
    Nếu chiuThue > 960 : thue = chiuThue * 0.35

Đầu ra:
- Họ tên và tiền thuế thu nhập cá nhân
 */
document.getElementById('kq_Bai3').onclick = function () {
    var hoTen = document.getElementById('hoTenCaNhan').value;
    var thuNhapNam = Number(document.getElementById('thuNhapNam').value);
    var nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);
    var chiuThue = 0;
    var thue = 0;
    var kq = "";
    
    chiuThue = tinhChiuThue(thuNhapNam, nguoiPhuThuoc);   
    thue = tinhThue(chiuThue);
    kq = "Họ tên: "+ hoTen + " ; Tiền thuế thu nhập cá nhân: "+ thue.toLocaleString('vi') + " VNĐ";

    document.getElementById('KQ3').innerHTML = kq;
}
function tinhChiuThue(tnn, npt){
    var chiu = tnn - (4e+6) - npt*(1.6e+6);   
    return chiu;
}
function tinhThue(chiuThue){
    var thue=0;
    if (chiuThue < 0)
        return -1;
    else if(chiuThue <= 60e+6 && chiuThue >= 0)
        thue = chiuThue * 0.05;
    else if(chiuThue > 60e+6 && chiuThue <= 120e+6)
        thue = chiuThue * 0.1;
    else if( chiuThue > 120e+6 && chiuThue <= 210e+6)
        thue = chiuThue * 0.15;
    else if(chiuThue > 210e+6 && chiuThue <= 384e+6)
        thue = chiuThue * 0.2;
    else if(chiuThue > 384e+6 && chiuThue <= 624e+6)
        thue = chiuThue * 0.25;
    else if(chiuThue > 624e+6 && chiuThue <= 960e+6)
        thue = chiuThue * 0.30;
    else    
        thue = chiuThue * 0.35;

    return thue;
}

/**
Bài 4:
 
Đầu vào:
- Loại Khách hàng, Mã Khách hàng, Số kênh, Số kết nối

Xử lý:
- Tạo biến và gán từng biến cho Loại Khách hàng, Mã Khách hàng, Số kênh và Số kết nối
- Tiền cáp sẽ được tính theo công thức:
    Nếu Loại Khách hàng là Người dân : Tiền Cáp = 4.5 + 20.5 + 7.5 * Số kênh
    Nếu Loại Khách hàng là Doanh nghiệp :
        + Nếu Số kết nối <= 10 : Tiền cáp = 15 + 75 + 50 * Số kênh
        + Nếu Số kết nối > 10 : Tiền cáp = 15 + (75 + (Số kết nối - 75) * 5) + 50 * Số kênh

Đầu ra:
- Mã khách hàng và Số tiền cáp
    
 */
document.getElementById('soKetNoi').style.display = 'none';

document.getElementById('loaiKH').onchange = function() {
    var loai = document.getElementById('loaiKH').value;
    if(loai == 'dn')
        document.getElementById('soKetNoi').style.display = 'block';
    else
        document.getElementById('soKetNoi').style.display = 'none';
}

document.getElementById('kq_Bai4').onclick = function () {
    var loaiKH = document.getElementById('loaiKH').value;
    var maKH = document.getElementById('maKH').value;
    var soKenh = Number(document.getElementById('soKenh').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value);
    var tienCap = 0;
    var kq= '';

    tienCap = tinhTienCap(loaiKH, soKenh, soKetNoi);
    if(tienCap == -1){
        alert("Vui lòng chọn loại khách hàng !!!");
    }else{
        kq = "Mã khách hàng: "+ maKH + " ; Tiền cáp: " + tienCap.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
    }

    document.getElementById('KQ4').innerHTML = kq;

}

function tinhTienCap(loaiKH, soKenh, soKetNoi) {
    var tien =0;
    switch(loaiKH){
        case "":{
            return -1;
            break;
        }
        case "nn": {
            tien = 4.5 + 20.5 + 7.5*soKenh;
            break;
        }
        case "dn": {
            if(soKetNoi <=10)
                tien = 15 + 75 + 50 * soKenh;
            else    
                tien = 15 + (75 + (soKetNoi - 10) * 5) + 50 * soKenh;
            break;
        }
    }
    return tien;
}