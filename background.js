document.getElementsByClassName('color1_conversion')[0] &&
document.getElementsByClassName('color1_conversion')[0].addEventListener('click', () => {
  let hexcode = '#';
  const color = document.getElementsByClassName('color1_input')[0].value.split(', ');
  for (x = 0; x < 3; x++) {
    let n = Number(color[x]);
    if (n == '') n = '0';
    if (parseInt(n) != n) return alert('请输入正确的数字！');
    if (n > 255) return alert('数字在0-255之间！');
    let c = '0123456789ABCDEF', b = '', a = n % 16;
    b = c.substr(a, 1);
    a = (n - a) / 16;
    hexcode += c.substr(a, 1) + b;
  }
  document.getElementById('color1').bgColor = res1.innerHTML = hexcode;
})

document.getElementsByClassName('color2_conversion')[0] &&
document.getElementsByClassName('color2_conversion')[0].addEventListener('click', () => {
  let a = document.getElementsByClassName('color2_input')[0].value;
  if (a.substr(0, 1) == '#') a = a.substring(1);
  const len = a.length;
  if (len != 6 && len != 3) return alert('十六进制颜色码为六位或三位！');
  if (/[^0-9a-f]/i.test(a)) return alert('请输入正确的十六进制颜色码！');
  document.getElementById('color2').bgColor = '#' + a;
  a = a.toLowerCase();
  b = new Array();
  for (x = 0; x < 3; x++) {
    b[0] = len == 6 ? a.substr(x * 2, 2) : a.substr(x * 1, 1) + a.substr(x * 1, 1);
    b[3] = '0123456789abcdef';
    b[1] = b[0].substr(0, 1);
    b[2] = b[0].substr(1, 1);
    b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2]);
  }
  res2.innerHTML = b[20] + ', ' + b[21] + ', ' + b[22];
})