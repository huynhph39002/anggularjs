app.controller('taikhoanusersCtrl', function ($scope, $http ,$location) {
    console.log('Log để kiểm tra: Khai báo taikhoanController thành công');

    // 1. Khai báo biến cần thiết
    $scope.taikhoan = [];


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/users'
    }).then(function (response) {
        $scope.taikhoan = response.data;
        console.log('Log thử giá trị biến $scope.listProduct', $scope.taikhoan);

    })


    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!$scope.taikhoan) {
        // Nếu chưa, chuyển hướng về trang đăng nhập
        $location.path('/dangky-login');
    }

    // Hàm logout
    $scope.logout = function() {
        // Xóa thông tin người dùng hiện tại
        $scope.currentUser = null;
        // Chuyển hướng về trang đăng nhập
        $location.path('/dangky-login');
    };

})