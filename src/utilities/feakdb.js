//use local storage to manage cart to data 
const addToDb = id =>{
    let shoppingCart = {};
    //get the shopping cart
    const storedCart =  localStorage.getItem('shopping-cart');
    if(storedCart){
        console.log(typeof storedCart);
        shoppingCart = JSON.parse(storedCart); 
    }
    else{
        shoppingCart ={};
    }
    const quantity = shoppingCart[id];
    if(quantity){
        
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        //localStorage.setItem(id, newQuantity);

    }
    else{
        shopingCart[id]= 1;
        //console.log('new item');
        //localStorage.setItem(id, 1);
        
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shopingCart));   
}
export {addToDb}