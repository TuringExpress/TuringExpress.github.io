function check() {
  var arr = ['我不是人类', '我是人类'];
  var isPeople = Boolean(Math.round(Math.random()));
  var ans = confirm(arr[Number(isPeople)]);
  if(isPeople) {
    if(ans) {
      return ;
    }
    else {
      window.open('/404','_self');
    }
  }
  else {
    if(ans) {
      window.open('/404','_self');
    }
    else {
      return ;
    }
  }
}
