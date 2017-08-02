angular.module('PhoneBook')
       .controller('HomepageController', function($scope, $window, $timeout, $routeParams, Contact, $location){
        
         
                $scope.sort =function(field){
               $scope.sort.field=field;
               $scope.sort.order= !$scope.sort.order;
           };
           $scope.sort.field='firstName';
           $scope.sort.order=false;


         
          

           $scope.home1=function(){
               $location.url('/');
                $window.location.reload();
           };

              $scope.reg=function(){
                  $location.url('/register');
                  $window.location.reload();

              };
          
             $scope.isNavCollapsed = true;
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = false;

        $scope.myHeader='We keep your contacts.';
       $timeout(function(){
           $scope.myHeader='Relax!';}, 3000
       );
        $timeout(function(){
           $scope.myHeader='Your privacy is our priority';}, 5000
       );
         $timeout(function(){
           $scope.myHeader='Klikpad will never reveal your contact to 3rd party';}, 9000
       );
         $timeout(function(){
           $scope.myHeader='Are you a new user? Sign up! Its free and easy';}, 12000
       );
        $timeout(function(){
           $scope.myHeader='Your contact is safe with us';}, 16000
       );


       })
     
       .controller('RegController', function($scope, $window, $routeParams, Contact, $location){
            
             
               
           

           $scope.home1=function(){
               $location.url('/');
                $window.location.reload();
           };
  
       
                 $scope.alerts=[{type:'', msg2:'By signing up, you agree to the terms and condition in using this app'}];
                  $scope.alerts=[{type:'success', msg1:'Welcome new user, Quickly sign up below by entering your basic account info'}];
              $scope.closeAlert=function(index){
                  $scope.alerts.splice(index, 1);
              };
         
            
       

             
$scope.animationsEnable = true;
$scope.open= function(name, username){
    var modalInstance=$uibModal.open({
        animation: $scope.animationsEnable,
        backdrop:'static',
        keyboard:false,
        templateUrl:'orderModal.html',
        controller:'ModalCtrl',
        resolve:{
            name1:function(){
                return name
            },
            name2:function(){
                return username
            }
        }
      
    
        
    })
      $location.url('/');
};

    
            
        
    
           })

            .controller('ModalCtrl' , function($scope, $uibModalInstance, name1, name2){
               $scope.name3=name1; 
               $scope.name4=name2;    
             $scope.ok =function(){
          $uibModalInstance.close();

};
$scope.cancel = function(){
       $uibModalInstance.dismiss('cancel') ;
        $location.url('/');
};
          


       })

        .controller('ContactController', function($scope,  $routeParams,  Contact, $location){
            $scope.contacts=Contact.query();
          
             $scope.sort =function(field){
               $scope.sort.field=field;
               $scope.sort.order= !$scope.sort.order;
           };
           $scope.sort.field='id';
           $scope.sort.order=false;

            
                 $scope.alerts=[{type:'', msg:''}];
                  $scope.alerts=[{type:'success', msg1:'Are you a new user?  Begin by adding yout first contact.  Simply click on the add contact below!!'}];
              $scope.closeAlert=function(index){
                  $scope.alerts.splice(index, 1);
              };

          
             $scope.fields = ['firstName', 'lastName'];
             $scope.delete=function(){
                 $scope.contact.$delete();
                 $location.url('/contact');
             };
             $scope.new=function(){
                 $location.url('/new');
             };
             $scope.show=function(id){
                 $location.url('/contact/' +id);
             };
            
              $scope.homePage=function(){
                  $location.url('/');
              };
              $scope.lim=9;
          
           
       })
         .controller('NewContact', function($scope, $route,  $window, $routeParams, Contact, $location){
         
           
             $scope.fields = ['firstName', 'lastName'];
             $scope.contact= new Contact({
                 firstName:'',
                 lastName:'',
                 PhoneNumber:'',
                 Email:'',
                 filename:'',
             });
           
                
             
                 $scope.alerts=[{type:'', msg:''}];
                  $scope.alerts=[{type:'info', msg1:'Refresh the page if new contact fails to save !!'}];
              $scope.closeAlert=function(index){
                  $scope.alerts.splice(index, 1);
              };

             $scope.save=function(){
                 $scope.contact.$save();
                  $scope.alerts.push({type:'success', msg:'Contact added successfully'});
                    $window.alert('Contact successfully added');
                     $location.url('/contact');
                     
              
             };
             $scope.contactPage=function(){
                 $location.url('/contact');
             };
         
         })
           .controller('SingleContact', function($scope, $window, Contact, $routeParams, $location){
                 $scope.contact=Contact.query();
                 
               $scope.contact=Contact.get({id:parseInt($routeParams.id, 10)
               });
                $scope.delete=function(){
                 $scope.contact.$delete();
                 $window.alert('Contact deleted');
                 $location.url('/contact');
             };
                $scope.contactPage=function(){
                 $location.url('/contact');
             };

               
          


           });