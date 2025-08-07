//? Immediately Invoked Function Expression - IIFE

(function database() { //! Yeh aik named IIFE hai.
    console.log(`DB connected`);
})();

//* GLobal scope k pollution se problem hoti hai kayi baar to us global scope k variables hain ya jo bhi declaration hain, to in ko htany k liye hum IIFE syntax use krty hain

((name) => { //! yeh aik simple IIFE hai
    console.log(`DB connected for ${name}`);
})("Ahmad")   