const skills = [
  {text: 'Speaks English', has: true, _id: 243516},
  {text: 'Drives car', has: true, _id: 289671},
  {text: 'Flies plane', has: false, _id: 254894},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)) {
      throw new TypeError("Please pass in an object")
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) => {
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export {
  find
}