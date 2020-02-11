var PROVIDER = (function() {
  var _allData = {};
  var _getData = function(callback) {
    $.getJSON("data/data.json", function(data) {
      console.log("success ", data);
    })
      .fail(function(error) {
        console.log(error.status, +" " + error.statusText);
      })

      .done(function(data) {
        console.log(("done ", data.MainNav));
        _allData = data;
        callback();
        //populateNav(data.MainNav);
      });
  };

  var _getMainNav = function() {
    return _allData.MainNav;
  };

  var _getPageConent = function(nameOfPage) {
    console.log("_getPageConent " + nameOfPage);
    var content = "";
    $.each(_allData.Pages, function(idx, page) {
      if (nameOfPage === page.pageName) {
        console.log("gPC Match");
        console.log("gPC match " + page.content);
        return page.content;
      }
    });
      return _currentPage;
    
  };

  var _getCurrentPageName = function() {
    return _currentPage;
  };


  return {
    getData: _getData,
    getMainNav: _getMainNav,
    getPageConent: _getPageConent,
    getCurrentPageName: _getCurrentPageName
  };
})();
