console.log('Log de kiem tra: da nhung file pages/product/edit.js thanh cong');
// khai bao controller editProductCtrl
// Luu y: khai bao "$routeParams" de co the lay gia tri id truyen vaoo url
app.controller('editProductCtrl',function($scope,$http,$routeParams){
    console.log('Log de kiem tra: khai bao editProductCtrl thanh cong');
    console.log('Log de in thu gia tri params tu Url', $routeParams);
});