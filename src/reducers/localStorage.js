export const loadState = () => {
  const initialState = {
    hasErrored: false,
    isLoading: false,
    weatherInfo: {},
    favorites: []
  }

  try {
    const serializedState = localStorage.getItem('state')
    if ( serializedState === null  ){
      return initialState;
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return initialState;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log('Something went wrong with saving in Local storage')
  }
}
