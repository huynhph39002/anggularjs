console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailPhoneCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('detailPhoneCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailPhoneCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    $scope.phone = {
        id: '',
        ten: '',
        hang: '',
        gia: ''

    }
   




    //call api 
    $http({
        method: 'GET',
        url: 'http://localhost:3000/phone/' + $routeParams.id
    }).then(function (response) {
        $scope.phone = response.data;
    })

    $scope.onClickXoa = function () {
        let confirmValue = confirm("ban co chac chan muon xoa khong")
        if (confirmValue) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/phone/' + $routeParams.id
            }).then(function () {
                alert("xoa thanh cong");

                window.location.href='#!list-phone'
            })
        }
    }
})
