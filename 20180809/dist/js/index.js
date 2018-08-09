'use strict';

var coinbox = function coinbox() {
  function ccoin() {
    var coinbox = document.getElementsByClassName('coinbox');
    var res = document.getElementsByClassName('res')[0];
    var coinCont = document.getElementsByClassName('coinCont')[0];
    var userCoin = 5;

    coinCont.addEventListener('click', function (e) {
      var tar = e.target;
      if (tar.classList.contains('coinbox')) {
        res.innerHTML = tar.getAttribute('data-name') + +tar.getAttribute('data-coin') * userCoin;
      }
    });
    return;
  }
  return {
    coinbox: ccoin()
  };
};
coinbox().ccoin;