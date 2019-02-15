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
for (var i = 0; i < jsonObject.video.length && i < jsonObject.video[0].author.data.length; i++){
    for (key in jsonObject.video[i]){                      
            if (jsonObject.video[i].hasOwnProperty(key)) {
                output += [key] +  ": " + jsonObject.video[i][key] + "\n"
        }
    }
    for (key in jsonObject.video[0].author.data[i]){                      
            if (jsonObject.video[0].author.data[i].hasOwnProperty(key)) {
                output2 += [key] +  ": " + jsonObject.video[0].author.data[i][key] + "\n"
        }
    }
}
        
 
console.log(output + output2);   


