module.exports = (items, sackWeight) => {
  let value = 0; 
  for (var i = 0; i < items.length; i++) {
    items[i].ratio = (items[i].value)/(items[i].weight)
  }
  items.sort((a,b) => b.ratio-a.ratio)
  for (var i = 0; i < items.length; i++){
    if(sackWeight - items[i].weight > 0){
      value += items[i].value;
      sackWeight -= items[i].weight;
      console.log(items[i])
    }
  }
  return value;
}
