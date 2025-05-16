function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}



console.log(sumRange(7))

/**
 sumRange(4) → 4 + sumRange(3)
              → 4 + (3 + sumRange(2))
                    → 4 + (3 + (2 + sumRange(1)))
                          → 4 + (3 + (2 + 1))
                          = 4 + (3 + 3)
                          = 4 + 6
                          = 10
 */


                          /**
 sumRange(7) → 7 + sumRange(6)
              → 7 +(6 + sumRange(5))
               → 7 +(6 + (5 + sumRange(4)))
                 → 7 +(6 + (5 + (4 + sumRange(3))))
                    → 7 +(6 + (5 + (4 + (3 + sumRange(2)))))
                     → 7 +(6 + (5 + (4 + (3 + (2 + 1)))))
                      → 7 +(6 + (5 + (4 + (3 + 3))))
                       → 7 +(6 + (5 + (4 + 6)))
                        → 7 +(6 + (5 + 10))
                         7 +(6 + 15)
                          7 +21
                           =28
                         
                      
                      
 */




