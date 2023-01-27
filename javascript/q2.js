
const metaDataParser=function(){

    this._version;
    this._channel;
    this._keyfield;

    this.setChannel=function(chan){
        this._channel=chan;
    }

    this.getChannel=function(){

        return this._channel;
    }
    this.setVersion=function(ver){
        this._version=ver;
    }

    this.getVersion=function(){

        return this._version;
    }
    this.setKeyField=function(key){
        this._keyfield=key;
    }

    this.getKeyField=function(){

        return this._keyfield;
    }
    
}

const arr=[];

const m1= new metaDataParser();
m1.setVersion(1.11);
m1.setChannel('A');
m1.setKeyField(1);
arr.push(m1);

const m2= new metaDataParser();
m2.setVersion(1.23);
m2.setChannel('B');
m2.setKeyField(10);
arr.push(m2);
const m3= new metaDataParser();
m3.setVersion(1.34);
m3.setChannel('C');
m3.setKeyField(100);
arr.push(m3);

function getKeyFields(obj){

    const ans=[];
      
    obj.map((element)=>{
        let k=element.getKeyField();
        ans.push(k);
        
    });

   return ans;
}

const Ans=getKeyFields(arr);
console.log(Ans);

