class DataLayer {

  constructor(deps={}){
    const {couchbase} = deps

    if(!couchbase){
      throw "dep missing"
    }
    this.couchbase = couchbase
  }

  createUser(){
    const {couchbase} = this;
    //couchbase.inser(){}
    return Promise.resolve({})
  }

}

module.exports = DataLayer