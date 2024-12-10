import React from "react"
import noCharacter from "./utilities/noCharacter"
import Character from "./components/Character"
import StatusBars from "./components/StatusBars"
import Options from "./components/Options"
import Button from "./components/Button"
import attackOptionsList from "./data/attackOptionsList"
import namesList from "./data/namesList"

export default function App() {
  
    

    
    
    const [characterData, setCharacterData] = React.useState({
        hat: true,
        shield: false,
        weapon: "sword",
        name: 'King',
        attackOptions: attackOptionsList.slice(0, 6),
        stats: {
            hp: 100,
            mp: 100,
            strength: 100
        }
    })
    
    
    

    
    
    
  

  let dataToUse, functionToUse
    
    try {
    	if (characterData) {
    		dataToUse = characterData
    	}
    } catch {
    	dataToUse = noCharacter.noData
    }
    
    try {
    	if (setCharacterData) {
    		functionToUse = setCharacterData
    	}
    } catch {
        functionToUse = noCharacter.noFunction
    }    

  return (
    <div className="wrapper">
    
      <StatusBars characterData={dataToUse}  />
      
      <Character characterData={dataToUse} />
      
      <Options characterData={dataToUse}  />
      
      <Button setCharacterData={functionToUse}/> 
    
    </div>
  )
}