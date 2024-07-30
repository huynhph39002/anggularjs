console.log('Log để kiểm tra: Đã nhúng file pages/product/create.js thành công');

// Khai báo controller creatPhoneCtrl
app.controller('creatPhoneCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo creatPhoneCtrl thành công');


// khai bao bien can ghiet
$scope.phone={
    id:'',
    ten:'',
    hang:'',
    gia:''

}

//lien ket bien voi html
//bat su kien clivk button
$scope.onClickSubmit=function(){
    //log thu gtri ng dung nhap vao form
    console.log("gia tri form",$scope.phone)

    //tao file database
    //dung lenh json-server
    //call api de luuu du lieu vaof database

    $http({
        method:'POST',
        url:'http://localhost:3000/phone',
        data: $scope.phone
    }).then(function(response){
        alert("chuc mung ban tao moi tahnh cong")
    })
}


})
