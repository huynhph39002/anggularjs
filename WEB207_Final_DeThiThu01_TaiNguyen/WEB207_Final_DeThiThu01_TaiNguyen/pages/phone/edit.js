console.log('Log để kiểm tra: Đã nhúng file pages/product/edit.js thành công');

// Khai báo controller editPhoneCtrl
app.controller('editPhoneCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editPhoneCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    $scope.phone = {
        id: '',
        ten: '',
        hang: '',
        gia: ''

    }


    $http({
        method:'GET',
        url:'http://localhost:3000/phone/'+$routeParams.id 
    }).then(function(response){
        $scope.phone=response.data;
    })

    $scope.onEdit=function(){
        //log thu gtri ng dung nhap vao form
        console.log("gia tri form",$scope.phone)
    
        //tao file database
        //dung lenh json-server
        //call api de luuu du lieu vaof database
    
        $http({
            method:'PUT',
            url:'http://localhost:3000/phone/'+ $routeParams.id,
            data: $scope.phone
        }).then(function(response){
            alert("chuc mung chinh sua thanh cong")
        })
    }
    


})
