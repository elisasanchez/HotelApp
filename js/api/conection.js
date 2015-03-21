//network information
var conection = {
    isConected: function(){
        if(navigator.connection.type != conection.NONE)
            return true;
        else
            return false;
    }
};