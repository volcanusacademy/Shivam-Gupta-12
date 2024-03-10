// Using var
// Function-scoped: Variables declared with var are function-scoped, meaning they are only accessible within the function where they are defined.
var x = 10;
function usingVar() {
       
    console.log(x); // Outputs 10
}
  usingVar();
  
  // Using let
//   Block-scoped: Variables declared with let are block-scoped, which means they are only accessible within the block where they are defined (typically enclosed in curly braces, like in loops and conditionals).
  function usingLet() {
   
      let y = 20;
   
    console.log(y); 

}
usingLet();

  
  // Using const
//   Use Cases: Use const for variables that should not be reassigned during their scope. This is often used for constants and values that should remain unchanged.
  function usingConst() {
    const z = 30;
    console.log(z);
  }
  usingConst();
  