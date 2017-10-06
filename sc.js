     var one = new Audio("Asset/1-mhorkill.mp3");
     var two = new Audio("Asset/2-panam.mp3");
     var t = new Audio("Asset/3-tumrouj.mp3");
    var b1 = true;
    var b2 = true;
    var b3 = true;

        
       
        function a1(){
       
            if (b1 == true) {
                one.currentTime = 0;
                one.play();
                b1 = false;
            }
            else {
                one.pause();
                b1 = true;
                
            }
       }

       function a2(){
        
             if (b2 == true) {
                 two.currentTime = 0;
                 two.play();
                 b2 = false;
             }
             else {
                 two.pause();
                 b2 = true;
                 
             }
        }

        function a3(){
            
                 if (b3 == true) {
                    b3 = false;
                    for (i = 0; i < 99; i++) { 
                        t.currentTime = 0;
                        t.play();
                    }
                    
                     
                     
                 }
                 else {
                     t.pause();
                     b3 = true;
                     
                 }
            }

      
       