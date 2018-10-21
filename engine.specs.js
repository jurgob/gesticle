describe('Engine', () => {
    const engine;

    describe("add two users and get them", () => {
      const addUser1Event = {
        type:"user:create",
        body: {
          name:"user1"
        }
      }
      const addUser2Event = {
        type:"user:create",
        body: {
          name:"user2"
        }
      }
      const getUsersEvent = {
        type:"user:list",
        body: {}
      }

      const expected = [
        {
          name:"user1"
        },
        {
          name:"user2"
        }
      ]


      const actual =  Promise.resolve()
        .then(engine.handleEvent(addUser1Event))
        .then(engine.handleEvent(addUser2Event))
        .then(engine.handleEvent(getUsersEvent))

      return expect(actual).resolves.toEqual(expected)


    })


})