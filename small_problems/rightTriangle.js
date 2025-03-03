function triangle(n) {
  for (let row = 1; row <= n; row += 1) {
    let line = '';
    for (let space = 1; space <= n - row; space += 1) {
      line += ' ';
    }
    for (let star = 1; star <= row; star += 1) {
      line += '*';
    }
    console.log(line);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
