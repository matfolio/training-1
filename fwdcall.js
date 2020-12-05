const calc = {
  desc: "calculation task...",
  result: 0,
  get subscribe(){
     return this.result
  },
  sum(){
    // still uses the value of this. thanks to the dependency injection pattern...
    // This context is injected into the decorator service.
    console.log(this.desc)
    this.result = 0
    for(const val of arguments){
      this.result += val;
    }
  }
}
const di = {
  context: "",
  set setContext(context){
    this.context = context
  },
  getContext(){
    return this.context;
  }
}

// Memoizing service
let decoratorService = function(cb, argHandler,context){
  // caching usage
  let map = new Map();
  return function(){
    let key = argHandler(...arguments);
    if(!map.has(key)){
      let result = cb.call(context,...arguments)
      map.set(key, result)
      console.log("setting key: map size... ",map.size)
      return result
    }
    if(map.has(key)) {
      console.log("key exist! map size... ",map.size)
      return map.get(key)
    }
  }
}
function argHandler(){
  const key = [].join.call(arguments,',')
  console.log("Key... ", key)
  return key;
}

// Test function.
di.setContext = calc
const context = di.getContext()
let sum = decoratorService(calc.sum,argHandler,context)
sum(2,6)
console.log(calc.subscribe)
sum(3,5)
console.log(calc.subscribe)
sum(2,6)
console.log(calc.subscribe)
sum(5,3)
console.log(calc.subscribe)
