/**
 * stock-tabs.js
 * 自動渲染個股選擇標籤列，根據當前頁面 URL 標記 active。
 * 在 value/ 資料夾下的每個個股頁面共用此腳本。
 */
(function () {
  var STOCKS = [
    ['2303', '聯電'],
    ['2308', '台達電'],
    ['2317', '鴻海'],
    ['2344', '華邦電'],
    ['2345', '智邦'],
    ['2357', '華碩'],
    ['2383', '台光電'],
    ['2408', '南亞科'],
    ['2887', '台新新光金'],
    ['3017', '奇鋐'],
    ['3030', '德律'],
    ['3037', '欣興'],
    ['3324', '雙鴻'],
    ['3443', '創意'],
    ['3532', '台勝科'],
    ['3533', '嘉澤'],
    ['3665', '貿聯-KY'],
    ['4958', '臻鼎-KY'],
    ['5425', '台半'],
    ['6239', '力成'],
    ['6488', '環球晶'],
    ['6770', '力積電'],
  ];

  // 從 URL 取得當前股票代號，例如 ".../value/2317.html" → "2317"
  var currentId = window.location.pathname.split('/').pop().replace('.html', '');

  function buildTabs(containerId, idPrefix) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var inner = document.createElement('div');
    inner.className = 'stock-tabs';
    inner.style.cssText = 'display: flex; flex-wrap: wrap; gap: 0.4rem;';

    STOCKS.forEach(function (s) {
      var id = s[0], name = s[1];
      var a = document.createElement('a');
      a.href = id + '.html';
      a.className = 'tag stock-tab' + (id === currentId ? ' active' : '');
      a.id = idPrefix + '-' + id;
      a.textContent = id + ' ' + name;
      inner.appendChild(a);
    });

    container.appendChild(inner);
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildTabs('stock-tabs-top', 'tab');
    buildTabs('stock-tabs-bottom', 'tab-bottom');
  });
}());
