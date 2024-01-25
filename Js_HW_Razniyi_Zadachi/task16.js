let obj = 
{
    name: "Alex",
    age: 20,
    method: function() 
    {
        console.log("My name " + this.name + " im " + this.age + " y.o.");
    }    
};

obj.method();