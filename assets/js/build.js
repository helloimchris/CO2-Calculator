$(document).ready(function() {
    
    // Vars - per m3
    var $treeSavingsOne = 14;
    var $treeSavingsTwo = 8;
    var $carSavingsOne = 6;
    var $carSavingsTwo = 3;
    var $bulbSavingsOne = 95;
    var $bulbSavingsTwo = 68;
    var $currentSelection = '';
    var $currentUsage = '';
    var $totalUsage = '';
    var $totalTrees = '';
    var $totalCars = '';
    var $totalBulbs = '';
    
    // Input
    $cementInput = $('.cement-input');
    
    // Buttons
    var $cementButtonOne = $('.cement-button_one');
    var $cementButtonTwo = $('.cement-button_two');
    var $cementButtonThree = $('.cement-button_three');
    var $cementButtonFour = $('.cement-button_four');
    
    // Steps
    var $stepOne   = $('.cement-step_one');
    var $stepTwo   = $('.cement-step_two');
    var $stepThree = $('.cement-step_three');
    
    // Button One Click
    $cementButtonOne.click(function(e) {
        e.preventDefault();
       
        // Set Step
        $stepOne.addClass('previous-step');     
        setTimeout(function() {
            $stepOne.removeClass('previous-step');
            $stepOne.removeClass('active-step');
            $stepTwo.addClass('active-step');
        }, 1200);
        
        // Set Vars
        $currentSelection = 281;
    });
    
    // Button Two Click
    $cementButtonTwo.click(function(e) {
        e.preventDefault();
        
        // Set Step
        $stepOne.addClass('previous-step');       
        setTimeout(function() {
            $stepOne.removeClass('previous-step');
            $stepOne.removeClass('active-step');
            $stepTwo.addClass('active-step');
        }, 1200);
        
        // Set Vars
        $currentSelection = 133;
    });
    
    // Button Three Click
    $cementButtonThree.click(function(e) {
        e.preventDefault();
        
        // Input Value
        $cementValue = $cementInput.val();
        $cementInput.removeClass('cement-error');
        
        if($cementValue != '') {
            
            // Set Step
            $stepTwo.addClass('previous-step');        
            setTimeout(function() {
                $stepTwo.removeClass('previous-step');
                $stepTwo.removeClass('active-step');
                $stepThree.addClass('active-step');
            }, 1200);

            // Set Vars & Calculate
            $totalUsage = $cementValue * $currentSelection;
            $totalTrees = $cementValue * $treeSavingsOne;
            $totalCars = $cementValue * $carSavingsOne;
            $totalBulbs = $cementValue * $bulbSavingsOne;

            $('.cement-increase span').html((Math.round($totalUsage / 100) / 10).toFixed(1));
            $('.cement-trees_result').html($totalTrees);
            $('.cement-cars_result').html($totalCars);
            $('.cement-bulb_result').html($totalBulbs);
            
        } else {
            
            $cementInput.addClass('cement-error');
            
        }
        
    });
    
    // Button Four Click
    $cementButtonFour.click(function(e) {
        e.preventDefault();
        
        // Set Step
        $stepThree.addClass('previous-step');       
        setTimeout(function() {
            $stepThree.removeClass('previous-step');
            $stepThree.removeClass('active-step');
            $stepOne.addClass('active-step');
        }, 1200);
        
        // Clear Vars
        $('.cement-input').val() = '';
        $currentSelection = '';
        $totalTrees = '';
        $totalCars = '';
        $totalBulbs = '';
        
    });
    
    
});