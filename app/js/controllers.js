/* App Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function FetchCntl($xhr) {
  var self = this;

  this.fetch = function() {
    self.code = null;
    self.response = null;

    $xhr(self.method, self.url, function(code, response) {
      self.code = code;
      self.response = response;
    }, function(code, response) {
      self.code = code;
      self.response = response || "Request failed";
    });
  };

  this.updateModel = function(method, url) {
    self.method = method;
    self.url = url;
  };
}
FetchCntl.$inject = ['$xhr'];

function FirstMoveCntl($xhr) {
  var self = this;
  $xhr('GET', 'api/getcards.php', function(code, response) {
      self.code = code;
      self.cards = response;
    }, function(code, response) {
      self.code = code;
      self.cards = response || "Request failed";
    });

    //TODO - find out how to do counter in angular
    //hint - $watch
  var totalTime = 30;
  this.time = function() {
      return totalTime;
  }
}
FirstMoveCntl.$inject = ['$xhr'];
