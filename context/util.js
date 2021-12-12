const parseErrorName = error => {
  const errorStatus = `${error.response.status} ${error.response.statusText}`
  const errorCode = error.response.data.error_code || error.response.data.code
  if (!errorCode) return errorStatus
  return `${errorStatus} ${errorCode}`
}

const parseErrorMessage = error => error.response.data.error_description || error.response.data.message || error.message

/* eslint-disable no-param-reassign */
const customizeError = error => {
  if (error instanceof Error && error.response) {
    error.name = parseErrorName(error)
    error.message = parseErrorMessage(error)
  }
}/* eslint-enable no-param-reassign */

const handlePromise = (actions, dispatch, action, status) => res => {
  dispatch(actions[`${action}${status}`](res))
  if (status === 'Fail') {
    customizeError(res)
    throw res
  }
  return res
}

const handleDispatch = (endpoints, actions, dispatch, action, ...args) => endpoints[action](...args)
  .then(handlePromise(actions, dispatch, action, 'Success'))
  .catch(handlePromise(actions, dispatch, action, 'Fail'))

export const dispatchersFromActions = (endpoints, actions, dispatch, actionNames) => {
  const dispatchersMap = {}
  actionNames.forEach(name => {
    dispatchersMap[name] = (...args) => handleDispatch(endpoints, actions, dispatch, name, ...args)
  })
  return dispatchersMap
}
