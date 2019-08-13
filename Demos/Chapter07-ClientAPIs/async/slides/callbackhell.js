asyncStep1(function (returnedValue1, err){
        if (err) {throw "An error occurred"}  
        
        asyncStep2(returnedValue1, function (returnedValue2, err){
            if (err) {throw "An error occurred "}  

            asyncStep3(returnedValue2, function (returnedValue3, err){
                if (err) {throw "An error occurred"}  
        
            });
        });
});


promiseStep1()
.then(promiseStep2(returnedValue1))
.then(promiseStep3(returnedValue2))
.catch(err) {
    //handles errors from any of the steps
}
.finally() {
    //will execute whether error or not
}

