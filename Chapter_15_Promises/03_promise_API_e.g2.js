let apiCall = new Promise(function (resolve, reject){
    
    reject("500 Error");
});

// here above promise is returning a reject message

// below we are checking if promise returns reject or resolve, if it is resolve then we use .then function,
// if it is reject and we use .catch 

// .then get the value from resolve function in promise 
// .catch will get the value from reject function from Promise

apiCall.then( response=> console.log("Success or Resolve") ).catch( (error)=> console.log(error) );