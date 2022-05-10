const data = {
    first: 1000,
    second: 2000
}

const getValueOf = (property, cb) => {
    setTimeout(() => {
        if(data.hasOwnProperty(property)) {
            return cb(null, data[property])
        }else{
            return cb(new ReferenceError("No such property in DATA!"), null)
        }
    }, Math.random() * 3000)
}


getValueOf("first",(err, data)=>{
    if( typeof data == 'number' ){

        console.log( "Succes! Data: ", data )
        getValueOf("second",(err, data)=>{
            if( typeof data == 'number' ){
                console.log( "Succes! Data: ", data )
            }else{
                console.log( "Data NOT available: ", data )
            }
        })
    }else{
        console.log( "Data NOT available: ", data )
    }
})