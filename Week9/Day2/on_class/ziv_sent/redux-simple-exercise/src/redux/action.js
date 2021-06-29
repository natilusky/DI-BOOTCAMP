export const changePropertyOne = (value) => {
  return {
    type: 'PROP_ONE',
    payload: value
  }
}

export const changePropertyTwo = () => {
  return {
    type: 'PROP_TWO'
  }
}

export const changeUserName = (value) => {
  return {
    type: 'CHANGE_USER',
    payload: value
  }
}
