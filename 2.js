function alternatingSums(a) {
    let team1Weight = 0; // Khởi tạo tổng cân nặng của đội 1 bằng 0
    let team2Weight = 0; // Khởi tạo tổng cân nặng của đội 2 bằng 0
  
    for (let i = 0; i < a.length; i++) { // Lặp qua từng người trong mảng
      if (i % 2 === 0) { // Nếu là người chẵn thì vào đội 1
        team1Weight += a[i];
      } else { // Nếu là người lẻ thì vào đội 2
        team2Weight += a[i];
      }
    }
  
    return [team1Weight, team2Weight]; // Trả về mảng tổng cân nặng của 2 đội
  }
  