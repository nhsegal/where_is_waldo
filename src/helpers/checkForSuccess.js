const checkForWaldo = (x, y, data) => {
  console.log('you selected waldo');
  const waldoInfo = data.filter((e)=> e.Name === 'waldo')[0]
  if (x < waldoInfo.x + 10 && x > waldoInfo.x - 10 && y < waldoInfo.y + 30 && y > waldoInfo.y - 15) {
    console.log("waldo!")
    return true
  }
  return false
}

const checkForOdlaw = (x, y, data) => {
  console.log('you selected odlaw');
  const odlawInfo = data.filter((e)=> e.Name === 'odlaw')[0]
  if (x < odlawInfo.x + 10 && x > odlawInfo.x - 10 && y < odlawInfo.y + 35 && y > odlawInfo.y - 10 ) {
    console.log("odlaw!")
    return true
  }
  return false
}

const checkForWizard = (x, y, data) => {
  console.log('you selected wizard');
  const wizardInfo = data.filter((e)=> e.Name === 'wizard')[0]
  if (x < wizardInfo.x + 10 && x > wizardInfo.x - 10 && y < wizardInfo.y + 35 && y > wizardInfo.y - 10) {
    console.log("wizard!")
    return true
  }
  return false
}

const checkForWin = (gameState) => {
  if (gameState.waldoFound === true && gameState.odlawFound === true && gameState.wizardFound === true){
    return true
  }

  return false

}


export { checkForWaldo, checkForOdlaw, checkForWizard, checkForWin}