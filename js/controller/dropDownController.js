app.controller('dropDownController', ['$scope','dropDownService',
        function($scope, dropDownService) {
        $scope.today= new Date();
            $scope.customer ={
                Zone:'',
                District: '',
                Vdc: ''
            };
            $scope.zones="";
            $scope.districts="";
            $scope.vdcs="";


            $scope.zones=dropDownService.getZone();

            $scope.getZoneDistrict = function(id){
                if(id!==undefined) {
                    $scope.districts = dropDownService.getZoneDistrict(id);


                }else {
                    $scope.districts="";
                    $scope.vdcs="";
                }
            }

            $scope.getDistrictVdc = function(id){
                if(id!==undefined) {

                    $scope.vdcs = dropDownService.getDistrictVdc(id);
                }else {
                    $scope.vdcs="";
                }
           }

            $scope.save=function (customer) {
                $scope.zoneName=customer.Zone.zone;
                $scope.districtName=customer.District.district;
                $scope.vdcName=customer.Vdc.vdc;
                $scope.wardNo=customer.wardNo;
                $scope.tole=customer.tole;


            }
        }]);