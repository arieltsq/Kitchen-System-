//Declare Inputs
//Table for
//starters
//mains
//desserts
//drinks
//bill
//pay by
//cash or card
//tip
//tip perecentage 

    var name;
    var starters = ["Salad", "Soup", "Bread"];
    var mains =["Fish & Chip", "Sirloin Steak", "Grilled Lamb"];
    var drinks =["Coffee","Tea","Me"];
    

    name=prompt("What is your name");

    console.log(name);


    var tableNo = parseInt(prompt("Table for?"));

    console.log(tableNo);
    
    var answer = prompt(" Do you want to see the menu? [Yes/No] ");
   
 
    
    if(answer == "Yes" || "yes"){
        
        promptAnswer();
         answer = prompt("Are you ready to order?");
        
        if (answer == "yes" || "Yes"){
             for(var i=0; i < tableNo; i++ )
        { 
            var foodOrder;
          foodOrder = functFoodOrder();
           console.log("You've ordered the following \n"+foodOrder);
          payBill();
           
        }
        }
        else if (answer == "No" || "no"){
            var answer = prompt(" Do you want to see the menu again? [Yes/No] ");
     
            promptAnswer();
        
     }
     else{
         
         console.log("Error 404");
     }
    
    }
    else{
     alert("Thank you for coming");
    }
    
    
    /* Functions  */
    
    function promptAnswer(){
        
         alert("Starters : "+starters + "\nMain : " + mains + "\nDrinks : " + drinks); 
      
    }
    
    function functFoodOrder(){
        
        var foodOrder = new Array();
        
       
         foodOrder[0] = prompt("Please enter your starter \n" + starters);
             foodOrder[1] = prompt("Please enter your main \n" + mains);
             foodOrder[2] = prompt("Please enter your drinks \n" + drinks);
           
         alert(foodOrder);
       
          
    calcFoodOrder(foodOrder);
    
        return foodOrder;
    }
    
    function calcFoodOrder(foodOrder){
        var price;
        
      
    if(foodOrder[0]!=null && foodOrder[1]!=null && foodOrder[2]!=null)
    {
        price = 8+15+3;
    }
    
    else{
        
        foodOrder();
    }
    alert("Price: $" + price); 
    
    return price; 
  
      }
      
  
    
   function payBill(price){
       
      var answer = prompt("Are you ready to pay? (Yes/No)");
      
      
      
      switch(answer){
          case "Yes":
              var paymentMode = prompt("Would you like to pay by Cash/Nets?");
              break;
              case "yes":
              var paymentMode = prompt("Would you like to pay by Cash/Nets?");
              break;
            case "No":
                prompt("We dont really care, but please do pay");
                break;
                  case " no":
                prompt("We dont really care, but please do pay");
                break;
                default:
                prompt("ROBBERYYYYYYYY");
                break;
      }
      
      if(paymentMode.toLowerCase() == "cash"){
        alert("Please pay at the counter");          
      } else if (paymentMode.toLowerCase() == "nets") {
       var customerNets= prompt("Please enter your 6-digit pin");  
       var reConfirm = prompt("Please check if the following number are correct: \n" + customerNets + "\n Yes / No");
       if (reConfirm.toLowerCase() == "yes")
       {
           alert("We thank you for patronizing with us. See you!");
       }
       else{
           customerNets= prompt("Please enter your 6-digit pin"); 
           reConfirm = prompt("Please check if the following number are correct: \n" + customerNets + "\n Yes / No");
           if (reConfirm.toLowerCase() == "yes")
       {
           alert("We thank you for patronizing with us. See you!");
       }
       }
      }
       
   }
    
        
    
   