class HttpAPi {
  constructor(deps){
    const {express, engine, graphql_manager, data_layer} = deps
    this.engine = engine;
    this.app = new Express()
  }

  createRouter(){
    const {app, engine, graphql_manager} = this;

    app.use((req, req)=> {
      return engine.getGraphqlStructures()
        .then((structures) => graphql_manager.updateStructues(structures))
    })

    app.use('/graphql', () => {
      return graphql_manager.getGraphqlHTTP()
    })

    app.post('/users', (req, res) => {
      const createUserEvent = {
        type:"user:new",
        body: {
          name: req.body.name
        }
      }
      engine.handleEvent(createUserEvent)
        .then((eventResponse) => {
          const {response} = eventResponse
          res.send({
            name: response.name
          })
        })
    })

  }

  listen(port){
    return this.express.listen()
  }

}