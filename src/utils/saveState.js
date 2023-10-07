// Сохранение состояния
export const saveState = (state, stateName) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(stateName, serializedState);
  } catch (e) {
    console.log(e);
  }
};

// Загрузка состояния
export const loadState = (stateName) => {
  try {
    const serializedState = sessionStorage.getItem(stateName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    // console.log(e);
    return undefined;
  }
};
