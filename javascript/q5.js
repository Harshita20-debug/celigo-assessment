const SortArray=function(){
    this.originalArray=[];
    this.pushInArray=function(val)
    {
    this.originalArray.push(val);
    };
    
    this.sortArray=function(arr){
        const sortedArray = arr.sort((a,b)=>{
            return a-b;
          })
          return sortedArray;
    }
    
    this.getSortedArray=function(){
       return this.sortArray(this.originalArray);
    }
    
    
    }
    
    
    const SortObjectArray=function(){
     SortArray.call(this);
    
    this.originalObjArray=[];
    
    this.pushInObjArray=function(obj){
    this.originalObjArray.push(obj);
    };
    
    this.sortObjArray=function(objArr){
    const sortedObjArray=objArr.sort((a,b)=>{
        if(a.serial>b.serial)
        {return 1;}
        else
        {return -1;}
    })
    return sortedObjArray;
    };
    
    this.getSortedObjArray=function(){
    return this.sortObjArray(this.originalObjArray);
    }
    
    }
    //For Inheritance
    SortObjectArray.prototype=Object.create(SortArray.prototype);
    
    
    const arr1=new SortObjectArray();
    
    arr1.pushInObjArray({
        serial:10,
        name:"Harshita"
    });
    arr1.pushInObjArray({
        serial:6,
        name:"Krishi"
    });
    arr1.pushInObjArray({
        serial:2,
        name:"Anshi"
    });
    arr1.pushInObjArray({
        serial:8,
        name:"Dev"
    });
    arr1.pushInObjArray({
        serial:1,
        name:"Himaya"
    });
    
    
    const ans=arr1.getSortedObjArray(arr1.originalObjArray);
    ans.map((el)=>{
        console.log(el.serial);
    });
    
    
    arr1.pushInArray(2);
    arr1.pushInArray(1);
    arr1.pushInArray(7);
    arr1.pushInArray(40);
    const outArray=arr1.getSortedArray(arr1.originalArray);
    console.log(outArray);
    