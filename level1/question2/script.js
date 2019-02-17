//Console.log out elements in JSON file

// JSON
var jsonObject = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

//LOG ELEMENTS
var output = "";
var output2 = "";
var i = 0;

for (i; i < jsonObject.video.length && i < jsonObject.video[0].author.data.length; i++) {
    
    for (key in jsonObject.video[i]){                      
            jsonObject.video[i].hasOwnProperty(key);
            output += [key] +  ": " + jsonObject.video[i][key] + "\n";                              // Get key and value of video object
    }
    
    for (key in jsonObject.video[0].author.data[i]){                      
            jsonObject.video[0].author.data[i].hasOwnProperty(key);
            output2 += [key] +  ": " + jsonObject.video[0].author.data[i][key] + "\n";              // Get key and value of author data object. 
    }
}

        
 
console.log(output + output2);                                                                      // Log to console


