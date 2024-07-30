console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// 5.1. Khai báo controller listPhoneCtrl
app.controller('listPhoneCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo listPhoneCtrl thành công');

//khai bao bien can thiet
$scope.danhSachDienThoai=[];

//call api lay danh sach ban ghi
$http({
    method:'GET',
    url:'http://localhost:3000/phone'
}).then(function(response){
    $scope.danhSachDienThoai=response.data;
})

$scope.onClickXoa = function (id) {
    let confirmValue = confirm("ban co chac chan muon xoa khong")
    if (confirmValue) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/phone/' +id
        }).then(function (response) {
            alert("xoa thanh cong");

            // window.location.href='#!list-phone'
        })
    }
}
})
