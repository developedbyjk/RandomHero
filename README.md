- use try catch when we wan to add some data based on some condition 

```
    try {
    	if (characterData) {
    		dataToUse = characterData
    	}
    } catch {
    	dataToUse = noCharacter.noData
    }
```

- send a setter function to componenets 
```

 <Button setCharacterData={functionToUse}/> 
```