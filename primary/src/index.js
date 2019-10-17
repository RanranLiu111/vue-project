async function getComponent(){
  const {default:_} = await import(/*webpackChunkName:"lodash"*/ 'lodash');
    var element = document.createElement('div')
    element.innerHTML = _.join(['Dell','Lee'],'-')
    return element
}

document.addEventListener('click',()=>{
  getComponent().then(element=>{
    document.body.appendChild(element)
  })
})

