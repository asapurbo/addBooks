const nextId = (state) => {
   console.log(state);
   return state.reduce((totle, currentValue) => Math.max(totle, currentValue.id), 0) + 1
}

export default nextId;