console.log('Log để kiểm tra: Đã nhúng file pages/product/quanao.js thành công');

// // 5.1. Khai báo controller quanaoProductCtrl
app.controller('quanaoProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo quanaoProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    $scope.quanaoProduct = [];
    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/quanao'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.quanaoProduct = response.data
        console.log("Log thử giá trị biến quanaoProduct", $scope.quanaoProduct);
        
    })
    

})