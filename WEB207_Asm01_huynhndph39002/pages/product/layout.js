console.log('Log để kiểm tra: Đã nhúng file pages/product/lauout.js thành công');

// // 5.1. Khai báo controller ProductCtrl
app.controller('layoutProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo layoutProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    $scope.layoutProduct = [];
    $scope.quantamProduct = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danhmuc'
      }).then(function (response) {
        console.log("  ", response.data);
        $scope.danhMuc = response.data;
      })

      $scope.onClickDanhMuc = function (id) {
        console.log('a' + id);
        $http({
          method: 'GET',
          url: 'http://localhost:3000/allsanpham',
          params: {
            idDanhMuc: id
          }
        }).then(function (response) {
          console.log("  ", response.data);
          $scope.danhSachSanPham = response.data;
        })
      }

    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanphamnoibat'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.layoutProduct = response.data
        console.log("Log thử giá trị biến layoutProduct", $scope.layoutProduct);
        
    })
    $http({
        method: 'GET',
        url: 'http://localhost:3000/quantam'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.quanqamProduct = response.data
        console.log("Log thử giá trị biến Product", $scope.quantamProduct);
        
    })
    

})