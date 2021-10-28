const skills = [
  {text: 'Speaks English', has: true, _id: 243516},
  {text: 'Speaks Spanish', has: false, _id: 297485},
  {text: 'Drives car', has: true, _id: 289671},
  {text: 'Flies plane', has: false, _id: 254894},
  {text: 'Rides bike', has: true, _id: 217498},
  {text: 'Rides motorcycle', has: false, _id: 204596},
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

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.has = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export {
  find,
  findById,
  create,
  findByIdAndDelete
}