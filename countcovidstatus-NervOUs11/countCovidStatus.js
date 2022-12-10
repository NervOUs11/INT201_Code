// const { template } = require('@babel/core')

//64130500045, นิธิศ วิศยทักษิณ
function countCovidStatus(covidStatusArray) {
    // แบบที่1
    let result = {}
    
    if (covidStatusArray === null || covidStatusArray === undefined){ return undefined }

    else if (covidStatusArray.length === 0){ return {} }

    else {
        let countNegativeAndLowRisk = 0
        let countPositive = 0
        let countNegativeAndHighRisk = 0

        for (let index = 0; index < covidStatusArray.length; index++) {
            if (covidStatusArray[index] == "negative and low risk"){
                countNegativeAndLowRisk += 1
            }
            else if(covidStatusArray[index] == "positive"){
                countPositive += 1
            }
            else if (covidStatusArray[index] == "negative and high risk"){
                countNegativeAndHighRisk += 1
            }

        }
        if (countNegativeAndLowRisk != 0) {
            result["negative and low risk"] = countNegativeAndLowRisk
        }
        if (countPositive != 0) {
            result["positive"] = countPositive
        }
        if (countNegativeAndHighRisk != 0) {
            result["negative and high risk"] = countNegativeAndHighRisk 
        }
        return result    
    }
    // แบบที่2
   let negLow = 0, negHigh = 0, pos =0    
   for(const status of covidStatusArray){
       switch(status){
            case 'negative and low risk': 
                negLow++
                break            
            case 'negative and high risk':
               negHigh++                
               break            
            case 'positive':
               pos++                
               break        
        }
   }
   const covidStatus={}
   if(pos>0){
      covidStatus.positive = pos   
   } 
   if(negHigh>0){
      covidStatus['negative and high risk'] = negHigh    
   }
   if(negLow>0){
      covidStatus['negative and low risk'] = negLow  
   }  
   return covidStatus
}
// module.exports = countCovidStatus

console.log(countCovidStatus(['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk' ]))
console.log(countCovidStatus(['positive', 'negative and low risk', 'positive' ]))
console.log(countCovidStatus(['negative and low risk', 'positive', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', ' normal' ]))
console.log(countCovidStatus(['covid']))
console.log(countCovidStatus([]))
console.log(countCovidStatus(null))
console.log(countCovidStatus(undefined))