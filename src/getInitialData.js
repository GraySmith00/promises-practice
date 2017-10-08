const getStaffData = url => {
  return fetch(url)
  .then(res => res.json())
}

const getInitialData = url => {
  return fetch(url)
  .then(res => res.json())
  .then(data => data.bio)
  .then(initArray => {

    const promiseArray = initArray.map(person => {
      return getStaffData(person.info)
    })

    return Promise.all(promiseArray)
    .then(data => {
      return data.map((member, i) => {
        return Object.assign({}, member, { name: initArray[i].name })
      })
    })
  })
}

export default getInitialData
