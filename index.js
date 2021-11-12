// BAI 1 
// Thiết lập lớp PhanSo để biểu diễn khái niệm phân số với hai thành phần dữ liệu tử số, 
// mẫu số và các hàm thành phần cộng, trừ, nhân, chia hai phân số, các hàm thành phần xuất, nhập, 
// định giá trị cho phân số. Viết chương trình cho phép nhập vào hai phân số,
// in ra kết quả các phép toán cộng, trừ, nhân, chia hai phân số kể trên.

class PhanSo {
    tuSo = 0;
    mauSo = 0;
    constructor(tuSo,mauSo) {
        this.tuSo = tuSo
        this.mauSo = mauSo
    }
    
    add(PhanSo2) {
        return new PhanSo(this.tuSo*PhanSo2.mauSo + PhanSo2.tuSo*this.mauSo,this.mauSo*PhanSo2.mauSo)
    }

    mul(PhanSo3) {
        return new PhanSo(this.tuSo*PhanSo3.tuSo,this.mauSo*PhanSo3.mauSo)
    }

    sub(PhanSo4) {
        return new PhanSo(this.tuSo*PhanSo4.mauSo - PhanSo4.tuSo*this.mauSo, this.mauSo*PhanSo4.mauSo)
    }

    div(PhanSo5) {
        return new PhanSo(this.tuSo*PhanSo5.mauSo, this.mauSo*PhanSo5.tuSo)
    }

    show() {
        console.log(`day la ket qua: ${this.tuSo}/${this.mauSo}`);
    }
}

let PhanSo1 = new PhanSo(1,5);
let PhanSo2 = new PhanSo(2,7);
let PhanSo3 = new PhanSo(6,10);
let PhanSo4 = new PhanSo(5,9);
let PhanSo5 = new PhanSo(9,4);

let addResult = PhanSo1.add(PhanSo2);
let mulResult = PhanSo1.mul(PhanSo3);
let subResult = PhanSo1.sub(PhanSo4);
let divResult = PhanSo1.div(PhanSo5);

addResult.show();
mulResult.show();
subResult.show();
divResult.show();

// Bài 2:

// Xây dựng lớp Candidate (Thí sinh) gồm các thuộc tính: mã, tên, ngày tháng năm sinh, điểm thi Toán, Văn, Anh và các phương thức cần thiết.

// Xây dựng lớp TestCandidate để kiểm tra lớp trên:

// – Nhập vào n thí sinh (n do người dùng nhập)

// – In ra thông tin về các thí sinh có tổng điểm lớn hơn 15

class Candidate {
    ma = 0175
    ngaysinh = 1
    thangsinh = 1
    namsinh = 2001
    diemToan = 0
    diemVan = 0
    diemAnh = 0
    constructor(ma,ngaysinh,thangsinh,namsinh,diemToan,diemVan,diemAnh) {
        this.ma = ma
        this.ngaysinh = ngaysinh
        this.thangsinh = thangsinh
        this.namsinh = namsinh
        this.diemToan = diemToan
        this.diemVan = diemVan
        this.diemAnh = diemAnh
    }

}

let hs1 = new Candidate(0175,01,01,2008,6,7,8);
let hs2 = new Candidate(1100,02,01,2001,7,5,8);
let hs3 = new Candidate(1135,03,04,2003,4,5,3);
function checkMark() {
    if(hs1.diemToan + hs1.diemVan + hs1.diemAnh > 15) {
        console.log(hs1);
    }
    if(hs2.diemToan + hs2.diemVan + hs2.diemAnh > 15) {
        console.log(hs2);
    }
    if(hs3.diemToan + hs3.diemVan + hs3.diemAnh > 15) {
        console.log(hs3);
    }
}

checkMark();

// Ngân hàng ABC muốn lưu trữ thông tin của mỗi tài khoản như sau:

// Mỗi tài khoản chứa các thông tin:

// Số tài khoản 
// Tên tài khoản 
// Số tiền trong tài khoản 
// Thiết kế lớp Account để lưu trữ các thông tin, lớp bao gồm các phương thức sau:

// Constructor
// Các phương thức get, set cho từng thuộc tính
// Phương thức toString để trả về chuỗi chứa toàn bộ thông tin tài khoản, yêu cầu định dạng tiền tệ.
// Thêm các thông tin sau vào lớp Account:

// Hằng số lãi suất có giá trị khởi tạo 0.035
// Constructor có 2 đối số: số tài khoản, tên tài khoản. Constructor này sẽ khởi tạo số tiền mặc định là 50
// Phương thức nạp tiền vào tài khoản: Lấy số tiền hiện tại trong tài khoản + số tiền nạp vào
// Phương thức rút tiền: Lấy số tiền hiện tại trong tài khoản – (số tiền muốn rút+phí rúttiền)
// Phương thức đáo hạn: Mỗi lần đến kỳ đáo hạn thì số tiền trong tài khoản = số tiền trong tài khoản + số tiền trong tài khoản * LAISUAT
// Phương thức chuyển khoản từ tài khoản này sang tài khoản khác
// Chú ý: Mỗi thao tác phải kiểm tra số tiền nạp, rút, chuyển có hợp lệ hay không? 
// (VD: tiền nhập vào <0, tiền rút nhiều hơn tiền trong tài khoản thì thông báo không hợp lệ và yêu cầu nhập lại)

class Account {
    Accountnumber = 0
    Accountname = "A"
    Accountcash = 0

    constructor(Accountnumber,Accountname,Accountcash) { 
        this.Accountnumber = Accountnumber
        this.Accountname = Accountname
        this.Accountcash = Accountcash
    }
}
let Acc1 = new Account(1,"A",1000000)
// document.getElementById("info").innerHTML = Acc1.toString()
console.log(Acc1);
document.getElementById("info").innerHTML = Acc1