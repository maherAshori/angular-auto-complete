/*
    Title: AngularAutoComplete
    Date: 2017-05-29
    Author: Maher Ashori
    URL: https://github.com/maherAshori/angular-auto-complete
    stackoverflow: https://stackoverflow.com/users/1575598/maher
    Gmail: maher.ashori@gmail.com
  
    Module Name: AngularAutoComplete 
*/

var autoCompleteApp = angular.module("AngularAutoComplete", []);
autoCompleteApp.directive("autoComplete",
    function () {
        return {
            restrict: "E",
            templateUrl: "auto-complete/auto-complete.html",
            scope: {
                list: "=",
                key: "@",
                bgColor: "@",
                color: "@"
            },
            link: function (scope, elem, attrs) {
                var _0x911e = ["\x63\x6C\x69\x63\x6B", "\x73\x65\x6C\x65\x63\x74", "\x69\x6E\x70\x75\x74", "\x66\x69\x6E\x64", "\x6F\x6E", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x2D", "\x75\x75\x69\x64"]; var self = scope; elem[_0x911e[4]](_0x911e[0], function () { elem[_0x911e[3]](_0x911e[2])[_0x911e[1]]() }); function guid() { function _0x15f8x3() { return Math[_0x911e[7]]((1 + Math[_0x911e[6]]()) * 0x10000).toString(16)[_0x911e[5]](1) } return _0x15f8x3() + _0x15f8x3() + _0x911e[8] + _0x15f8x3() + _0x911e[8] + _0x15f8x3() + _0x911e[8] + _0x15f8x3() + _0x911e[8] + _0x15f8x3() + _0x15f8x3() + _0x15f8x3() }
                self[_0x911e[9]] = guid();
                self.selectedFromList = [];
                self.add = function (event, value, key) {
                    self.alerts = {};

                    var isExist = false;
                    var object = {};
                    if (event.charCode === 13) {
                        angular.forEach(self.list, function (item) {
                            if (item[key] === value) {
                                isExist = true;
                                object = item;
                            }
                        });

                        if (!isExist) {
                            object[key] = value;
                            self.list.push(object);
                        }

                        var isExistInSelectedList = false;
                        angular.forEach(self.selectedFromList, function (item) {
                            if (item[key] === value) {
                                self.alerts["exist"] = true;
                                isExistInSelectedList = true;
                            } else {
                                self.alerts["exist"] = false;
                            }
                        });

                        if (!isExistInSelectedList) {
                            if (object[key] === null || object[key] === "" || object[key] === " " || angular.isUndefined(object[key])) {
                                self.alerts["empty"] = true;
                            } else {
                                self.selectedFromList.push(object);
                                self.value = null;
                                self.alerts["empty"] = false;
                            }
                        }
                    }
                }
                self.remove = function (index) {
                    self.selectedFromList.splice(index, 1);
                }
            }
        }
    });