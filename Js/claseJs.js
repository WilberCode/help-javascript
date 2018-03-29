let almuerzos = [
  {principal: 'ceviche', postre: 'helado'},
  {principal: 'Papa a la huancaina', postre: 'torta de queso'},
  {principal: 'Lomo saltado', postre: 'galletas'},
  {principal: 'Broster', postre: 'quesillo'},
  {principal: 'ceviche', postre: 'queso'},
  {principal: 'Broster', postre: 'quesillo'},
  {principal: 'ceviche', postre: 'ensalada'},
  {principal: 'ceviche', postre: 'ensalada'}

]
console.log(almuerzos.reduce((contador, almuerzos) => { return (almuerzos.principal === 'ceviche') ? contador + 1 : contador }, 0))
