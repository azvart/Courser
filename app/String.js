let str = "Каждый охотник желает знать, где сидит фазан."; 

 const firstIndexString=(string)=>{
      let result = [];
        string.split(' ').filter(n=> result.push(n.charAt(0)));
      return result;
};


console.log(firstIndexString(str));