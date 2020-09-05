const counterReducer = (state = '', {type, payload}) => {
  switch (type) {
    case 'GENERATE':
      return payload
    default:
      return state
  }
}

export default counterReducer
