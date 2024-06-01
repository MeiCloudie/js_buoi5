// Thực hiện tính toán về giá tiền món ăn
// giá món, số lượng món ăn

let monMiXao = tinhGiaMonAn(120, 10) // ==> Hosting vẫn chạy được trước khi khai báo
console.log(monMiXao)
function tinhGiaMonAn(giaMon, soLuongMonAn = 10) {
  // Những xử lý khi hàm thực thi
  //   let giaMon = 35000
  //   let soLuongMonAn = 10
  console.log(giaMon)
  console.log(soLuongMonAn)

  let tongTien = giaMon * soLuongMonAn
  console.log(tongTien)

  return tongTien
}

// Cách thực thi hàm
// tinhGiaMonAn(50000, 15)
// tinhGiaMonAn(15000, 20)

// Default Parameter (ES6)
// Bò kho ===> 45000
let giaMonBoKho = tinhGiaMonAn(45000)
console.log(giaMonBoKho)

// Sủi cảo ====> 50000, 15

// Tính toán số tiền làm trong tuần
// Số giờ làm
// Tiền lương nhân viên
// Hệ số lương ==> nhân viên (1) ==> trưởng phòng (1.5) ==> giám đốc (2)
// Function Literal ==> Không có cơ chế hosting ==> đúng thứ tự, sử dụng sau khi khai báo
let tinhTienLuongTrongTuan = function (soGioLam, soTienLuong, heSoLuong = 1) {
  return soGioLam * soTienLuong * heSoLuong
}

let nhanVienSang = tinhTienLuongTrongTuan(40, 150000)
console.log(nhanVienSang)

// Arrow Function ==> Không có cơ chế hosting
// Tạo một thẻ div có nội dung hello buổi sáng t7 trên giao diện
let renderNoiDung = () => {
  return (document.querySelector("body").innerHTML =
    "<div class='bg-danger text-white p-2'>Hello Buổi Sáng Thứ 7</div>")
}
renderNoiDung()

// tính điểm trung bình cho môn toán và lý
let diemToan = 9
let diemLy = 10
// let tinhDiemHaiMon = (toan, ly) => {
//   return (toan + ly) / 2;
// };
let tinhDiemHaiMon = (toan, ly) => (toan + ly) / 2
let diemCuaLam = tinhDiemHaiMon(diemToan, diemLy)
console.log(diemCuaLam)
