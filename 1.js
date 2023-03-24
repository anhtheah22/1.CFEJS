function adjacentElementsProduct(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1]; // Khởi tạo giá trị tích lớn nhất bằng tích của 2 số đầu tiên trong mảng
  for (let i = 1; i < inputArray.length - 1; i++) { // Lặp qua từng phần tử trong mảng, bắt đầu từ vị trí thứ 2 và kết thúc ở vị trí cuối cùng trừ 1
    let currentProduct = inputArray[i] * inputArray[i + 1]; // Tính tích của cặp số liền kề hiện tại
    if (currentProduct > maxProduct) { // Nếu tích hiện tại lớn hơn tích lớn nhất hiện tại
      maxProduct = currentProduct; // Cập nhật lại giá trị tích lớn nhất
    }
  }
  return maxProduct; // Trả về giá trị tích lớn nhất của cặp số liền kề trong mảng
}
