var budjetControler = (function() {

    var Expense = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    var Income = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    var data = {
        allItems:{
            exp: [],
            icn: []
        },

        totals:{
            exp:[],
            inc:[]
        }
    };


})();



var UIcontroler = (function(){

    var DOMsrtings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    }
    return{
        getInput: function() {
            return{
                type: document.querySelector(DOMsrtings.inputType).value,
                description: document.querySelector(DOMsrtings.inputDescription).value,
                value: document.querySelector(DOMsrtings.inputValue).value
            }
        },
        
        getDomstrings: function(){
            return DOMsrtings;
        }
    }
})();



var controler = (function(budjetCtrl,uiCtrl){

    var setupEventlisteners = function(){
        var DOM = uiCtrl.getDomstrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event) {
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function(){
        var input = uiCtrl.getInput();
        console.log(input);
        

        
    }

    return{
        init: function(){
            console.log("Application has Started");
            setupEventlisteners();
            
        }
    }

})(budjetControler, UIcontroler);

controler.init();