function length(rl, now, mid) {
  return mid != 0 ? Math.abs(rl - now) : Math.abs(rl - now) + 1;
}

function solution(numbers, hand) {
  let l = ["*", "7", "4", "1"];
  let rl = ["0", "8", "5", "2"];
  let r = ["#", "9", "6", "3"];
  let sol = "";
  let left_now = 0;
  let right_now = 0;
  let mid_L = 0;
  let mid_R = 0;

  for (let i of numbers) {
    if (l.includes(String(i))) {
      //왼쪽에 속할때
      sol += "L";
      left_now = l.indexOf(String(i));
      mid_L = 0;
    } else if (r.includes(String(i))) {
      //오른쪽에 속할때
      sol += "R";
      right_now = r.indexOf(String(i));
      mid_R = 0;
    } else if (rl.includes(String(i))) {
      //가운데에 속할때
      if (
        //왼손에서와 오른속에서의 거리가 같을 때
        length(rl.indexOf(String(i)), left_now, mid_L) ===
        length(rl.indexOf(String(i)), right_now, mid_R)
      ) {
        if (hand == "right") {
          //오른손잡이면 R
          sol += "R";
          right_now = rl.indexOf(String(i));
          mid_R = "R";
        } else if (hand == "left") {
          //왼손잡이면 L
          sol += "L";
          left_now = rl.indexOf(String(i));
          mid_L = "L";
        }
      } else {
        //거리가 다를 때
        if (
          length(rl.indexOf(String(i)), left_now, mid_L) -
            length(rl.indexOf(String(i)), right_now, mid_R) >
          0
        ) {
          // 오른손이 짧을때

          right_now = rl.indexOf(String(i));
          sol += "R";
          mid_R = "R";
          //안들어옴
        } else {
          //왼손이 짧을때

          left_now = rl.indexOf(String(i));
          sol += "L";
          mid_L = "L";
        }
      }
    }
  }
  return sol;
}
