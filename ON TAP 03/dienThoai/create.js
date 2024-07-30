console.log('file create thah cong');

app.controller('createCtrl',function($scope,$http){
console.log('khai bao createCtrl thanh cong');

$scope.DT={
    id:'',
    ten:'',
    hang:'',
    gia:''
}

$scope.formST=true;
$scope.formMess='';

$scope.createCL=function(){
    $scope.formST=true;
$scope.formMess='';
if($scope.DT.id===''){
    $scope.formST=false;
    $scope.formMess='vui long nhap id';
    return;
}

if($scope.DT.ten===''){
    $scope.formST=false;
    $scope.formMess='vui long nhap ten';
    return;
}
if(!$scope.DT.hang){
    $scope.formST=false;
    $scope.formMess='vui long chon hang';
    return;
}
if($scope.DT.gia===''){
    $scope.formST=false;
    $scope.formMess='vui long nhap gia';
    return;
}
    $http({
        method:'POST',
        url:'http://localhost:3000/DT',
        data:$scope.DT
    }).then(function(response){
        alert('tao moi thanh cong');
    })
}
})