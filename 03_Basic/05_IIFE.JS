// Imediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();

( function aurCode(){
    //named iife
    console.log(`DB CONNECTION TWO`);
}) ();

( (name) => {
    console.log(`db connection two ${name}`);
    
})(`Sonu`)