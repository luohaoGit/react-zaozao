export function setCarNumber(carNumber) {
  return {
    type: 'SET_CAR_NO',
    carNumber
  };
}

export function setArea(area) {
  return {
    type: 'SET_AREA',
    area
  };
}

export function setLetter(letter) {
  return {
    type: 'SET_LETTER',
    letter
  };
}

export function setTel(tel) {
  return {
    type: 'SET_TEL',
    tel
  };
}

export function setSec(sec) {
  return {
    type: 'SET_SEC',
    sec
  };
}

export function setCountDown(second) {
  return {
    type: 'SET_COUNT_DOWN',
    second
  };
}

export function submitCarNumber() {
  return {
    type: 'SUBMIT_CAR_NO'
  };
}