# angular-auto-complete
Simple Angular Directive for "auto-complete" input

<h4>features</h4>

  <ul>
    <li>Search in list</li>
    <li>Add item if not exist in the list</li>
    <li>colorable</li>
  </ul>

<h4>Install</h4>

  <h6>Insert files</h6>

    <link href="auto-complete/auto-complete.css" rel="stylesheet" />
    <script src="auto-complete/auto-complete.js"></script>

  <h6>Inject AngularAutoComplete Module</h6>
  
          var app = angular.module("app", ["AngularAutoComplete"]);
    
  <h6>Controller</h6>  
  
          app.controller("ctrl", function ($scope) {
                $scope.tags = [
                    { name: "tag" },
                    { name: "tag 2" }
                ];
          });
    
  <h6>Html</h6>
  
          <auto-complete data-list="tags" 
                         data-color="white" 
                         data-bg-color="darkblue" 
                         data-key="name"></auto-complete>
                                               
