// Thực hiện tính toán về giá tiền món ăn
// giá món, số lượng món ăn

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
