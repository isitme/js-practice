var budjetControler = (function() {

})();



var UIcontroler = (function(){

})();



var controler = (function(budjetCtrl,uiCtrl){

    var ctrlAddItem = function(){
        console.log("hello");
        
    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
        
    });

})(budjetControler, UIcontroler);