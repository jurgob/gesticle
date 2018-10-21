const DataLayer = require('./data_layer')
// const couchbase = require('couchbase').Mock


describe('Couchbse', () => {

  it('Initialize with expected deps', () => {
    const dl = new DataLayer({couchbase})
    expect(typeof dl).toBe("object")
  })

  it('Initialize with no deps throws error', () => {
    const actual = () => {
      const dl = new DataLayer({})
    }
    expect(actual).toThrow("dep missing")
  })

  it('getUsers return 2 users', ()=> {
    const couchbase = {
      _get: jest.fn(() => Promise.resolve([{_rev: "1111", user:"user1"}, {_rev: "1111", user:"user2"}]))
    }
    const dl = new DataLayer({couchbase})

    return expect(dl.getUsers()).resolves.toEqual([{user:"user1"}, {user:"user2"}])

  })


  describe('Given a dl', ()=> {
    let dl;
    let couchbase;

    beforeEach(() => {
      couchbase = {
        _insert: jest.fn(() => Promise.resolve({}))
      }
      dl = new DataLayer({couchbase})
    });

    it('Insert a user', () => {
      const userData = {}
      const actual = dl.createUser(userData)
      const expected = {}
      // expect(couchbase._insert).callOnces
      return expect(actual).resolves.toEqual(expected)

    })

  })


})
