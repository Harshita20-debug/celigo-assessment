const input = [
    {
        "Channel":"A",
        "name": "shoe"
    },

    {
        "Channel":"B",
        "name": "apparel"
    },
    {
        "Channel":"A",
        "name": "electronics"
    },
    {
        "Channel":"C",
        "name": "electronics"
    }
]

let ans={};

function groupObjectsBy(input,str){
 input.map((data)=>{
    
    if(ans[data["channel"]]===undefined||ans[data["channel"]]===null)
    {ans[data["channel"]]=[];
        ans[data["channel"]].push(data);
    }else
    {
        ans[data["channel"]].push(data);
    }
 })
 return ans;
}

const a=groupObjectsBy(input,'channel');

console.log(a);
