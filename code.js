html`<canvas id="c">`

if(state.imageData){
  const c = document.getElementById('c')
  c.width = state.width  
  c.height = state.height
  const ctx = c.getContext('2d')
  ctx.putImageData(state.imageData, 0, 0)
}
