function populateContentforTags(){

alert("Please wait , as this operation may take some time . Press ok");
osapi.jive.corev3.contents.get({
type : 'file',
fields : '@all',
count : 50,
place : space_url
}).execute(function(response) {
//console.log("Files: "+JSON.stringify(response));

var files = response.list;
var postFiles;
var files_length=response.list.length;
$.each(files, function(index, group) {


var tags=postFiles.tags;

for(var ind=0;ind<tags.length;ind++)
{
	for(var indexTag=0;indexTag<tagPopulatList.length;indexTag++) {
		tagExist = true;
		if(tagPopulatList[indexTag] == tags[ind]) {
		tagExist  = true;
		}
		if(!tagExist) {
			tagPopulatList[completeTagIndex]= tags[ind];
		}
	}

}



		
});


//populateBlogContent(space_url,blog_url);
});

}

