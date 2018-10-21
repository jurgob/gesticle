class Engine {
  constructor(deps){
    this {data_layer} = deps
    this.data_layer = data_layer
  }

  handleEvent(event){
    const {data_layer} = this;
    const handler = {
      'user:create': handleEventUserCreate
      }
    return handler[event.type](event, {data_layer})

  }



}

function handleEventUserCreate(event, deps){
  const {data_layer} = deps
  //deps.data_layer
  return Promise.resolve({})
}




// {
//   type:"user:create",
//   body:{
//     name:"jimmy"
//   }
// }