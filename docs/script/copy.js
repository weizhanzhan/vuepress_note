function deepClone(source){
  if(typeof source === 'object'){
    let target = (source instanceof Array?[]:{});
    for(let key in source){
      if(typeof source[key] === 'object'){
        target[key] = deepClone(source[key])
      }else{
        target[key] = source[key]
      }
    }
    return target
  }
  return source
}
const a = [{name:'www'}]
const b = deepClone(a)
b[0].name = 'zzz'
console.log('b:',b,'a:',a)//b:[ { name: 'zzz' } ] a: [ { name: 'www' } ]