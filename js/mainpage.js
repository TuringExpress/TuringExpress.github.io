function check() {
  var arr = ['我不是人类', '我是人类'];
  var isPeople = Boolean(floor(Math.random()));
  var ans = confirm(arr[Number(isPeople)]);
  if(isPeople) {
    if(ans) {
      return ;
    }
    else {
      window.open('turngexpress.github.io/404','_self');
    }
  }
  else {
    if(ans) {
      window.open('turngexpress.github.io/404','_self');
    }
    else {
      return ;
    }
  }
}
