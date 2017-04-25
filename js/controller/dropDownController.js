app.controller('taskController', ['$scope','taskService',
        function($scope, taskService) {
        $scope.today= new Date();
            $scope.customer ={
                Zone:'',
                District: '',
                Vdc: ''
            };
            $scope.zones="";
            $scope.districts="";
            $scope.vdcs="";


            $scope.zones=taskService.getZone();

            $scope.getZoneDistrict = function(id){
                if(id!==undefined) {
                    $scope.districts = taskService.getZoneDistrict(id);


                }else {
                    $scope.districts="";
                    $scope.vdcs="";
                }
            }

            $scope.getDistrictVdc = function(id){
                if(id!==undefined) {

                    $scope.vdcs = taskService.getDistrictVdc(id);
                }else {
                    // $scope.districts="";
                    $scope.vdcs="";
                }

                // console.log($scope.customer.District.id+" district  id")
            }

            $scope.save=function (customer) {
                $scope.zoneName=customer.Zone.zone;
                $scope.districtName=customer.District.district;
                $scope.vdcName=customer.Vdc.vdc;
                $scope.wardNo=customer.wardNo;
                $scope.tole=customer.tole;


            }
        }]);