console.log("nhung file detail thanh cong");

//khai baos controller 
//luu y: khai bao $routeParams  de co the lay gia tri id truyen vao url
app.controller('chitietCtrl',function($http,$scope,$routeParams){
    console.log("khai bao chitietCtrl thanh cong");
  
    $scope.phone={
        id:'',
        name:'',
        hang:'',
        gia:''
    }

    //call api 
    $http({
        method:'GET',
        url:'http://localhost:3000/phone/'+$routeParams.id
    }).then(function(response){
        $scope.phone=response.data
    })

})