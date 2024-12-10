![image](https://github.com/user-attachments/assets/026210f5-6901-426e-bd77-4972bb9d9c63)





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
