function populateContent(){
// fetches the files from the selected space/group/project using the SPACE_URL.
addId=new Array();
arrayIndex=0;
 contentCheckedIndex =0;
 contentUnCheckedIndex =0;
 mainCheckedItems = new Array();
 mainUncheckItems = new Array();
 //alert("mainCheckedItems.length = "+mainCheckedItems.length);
 //alert("mainUncheckItems.length = "+mainUncheckItems.length);
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

if (files_length==0)
{
// action when the selected space/group/project has no files.

files_row='<table id="filesTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+				
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No files in this place.</strong></td></tr>';
}
else
{
// action when the selected space/group/project has files.
if (sel_action_val=='categs')
{
var header='Category';
}
else if (sel_action_val=='tags')
{
var header='Tags';
}
else
{
var header='Author';
}

// creates table header row.
files_row='<table id="filesTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+

'<tr>'+
'<td style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: right;" valign="middle"><strong>'+'All<input type="checkbox" id="sel_all_files"  onclick="javascript:checkedAll(this.id);">'+'</strong></td>'+
'<td style="border:1px ;border: 1px solid #000000;width: 450px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; Title</strong></td>'+
'<td style="border:1px solid ;border: 1px solid #000000;width: 160px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; '+header+'</strong></td>'+
'</tr>';


$.each(files, function(index, group) {
postFiles = {
title : "",
author : "",
updated : "",
fileUrl : "",
category: "",
tags: ""
}

// assigning values from the received response to the variables.
postFiles.title = group.subject;
postFiles.author = group.author.name.formatted;
postFiles.updated = group.updated;
postFiles.fileUrl = group.resources.self.ref;
postFiles.category = group.categories;
postFiles.tags = group.tags;

// adding each file in a row as per the received response.
if (sel_action_val=='categs')
{
var categg1=postFiles.category;

files_row = files_row + '<tr>'+
'<td style="border:1px ;border: 1px solid #000000;text-align:right;padding:2px;">'+'<input type="checkbox" id="file_cb'+index+'" name="file_cb" class="file_cb" onclick="javascript:checkUncheck(this.name);" value="'+postFiles.fileUrl+'">'+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postFiles.title+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postFiles.category+'</td>'+
'</tr>';
var checkFlagItem = false;
for(var ind=0;ind<categg1.length;ind++)
{
if (categg1[ind]==selected_cat)
{
console.log("categg1= "+categg1);
console.log("selected_cat= "+selected_cat);
//console.log(document.getElementById("file_cb"+index).value);
var temp_id="file_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postFiles.fileUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postFiles.fileUrl;
	contentUnCheckedIndex++;
}
}
else if (sel_action_val=='tags')
{
var tags=postFiles.tags;
console.log("tags: "+tags);
files_row = files_row + '<tr>'+
'<td style="border:1px ;border: 1px solid #000000;text-align:right;padding:2px;">'+'<input type="checkbox" id="file_cb'+index+'" name="file_cb" class="file_cb" onclick="javascript:checkUncheck(this.name);" value="'+postFiles.fileUrl+'">'+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postFiles.title+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postFiles.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
//console.log(document.getElementById("file_cb"+index).value);
var temp_id="file_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;

}


}

}
else
{
files_row = files_row + '<tr>'+
'<td style="border:1px ;border: 1px solid #000000;text-align:right;padding:2px;">'+'<input type="checkbox" name="file_cb" class="file_cb" onclick="javascript:checkUncheck(this.name);" value="'+postFiles.fileUrl+'">'+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postFiles.title+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postFiles.author+'</td>'+
'</tr>';
}
		
});
}
files_row=files_row+'</table>';	

// writing the files table to the files tab.
document.getElementById("files_div").innerHTML=files_row;	
populateBlogContent(space_url,blog_url);
});

}

function populateBlogContent(space_url,blog_url) {

// getting the blogs from the selected space/group/project using the BLOG_URL.

osapi.jive.corev3.contents.get({
type : 'post',
fields : '@all',
count : 50,
place : blog_url
}).execute(function(response) {
//console.log("Blogs: "+JSON.stringify(response));

var blogs = response.list;
var postBlogs;
var blogs_length=response.list.length;
if(blogs_length==0)
{
// action when the selected space/group/project has no blogs.
blog_row='<table id="blogTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No blog posts in this place.</strong></td></tr>';
}
else
{	
// action when the selected space/group/project has blogs.
if (sel_action_val=='categs')
{
var header='Category';
}
else if (sel_action_val=='tags')
{
var header='Tags';
}
else
{
var header='Author';
}
// adding the header for blogs table.
blog_row='<table id="blogTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: right;" valign="middle"><strong>'+'All<input type="checkbox" id="sel_all_blogs"  onclick="javascript:checkedAll(this.id);">'+'</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 450px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; Title</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 160px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; '+header+'</strong></th>'+
'</tr>';

$.each(blogs, function(index, group) {
postBlogs = {
title : "",
author : "",
updated : "",
fileUrl : "",
category:"",
tags:""
}

// assigning values from received response to the variables.
postBlogs.title = group.subject;
postBlogs.author = group.author.name.formatted;
postBlogs.updated = group.updated;
postBlogs.fileUrl = group.resources.self.ref;
postBlogs.category = group.categories;
postBlogs.tags = group.tags;


// adding each blog in a row as per the received response.
if (sel_action_val=='categs')
{
blog_row = blog_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="blog_cb'+index+'" name="blog_cb" class="blog_cb" onclick="javascript:checkUncheck(this.name);" value="'+postBlogs.fileUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postBlogs.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postBlogs.category+'</td>'+
'</tr>';	

var categg2=postBlogs.category;
var checkFlagItem = false;

for(var ind=0;ind<categg2.length;ind++)
{
if (categg2[ind]==selected_cat)
{
console.log("categg2= "+categg2);
console.log("selected_cat= "+selected_cat);
//console.log(document.getElementById("blog_cb"+index).value);
var temp_id="blog_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postBlogs.fileUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postBlogs.fileUrl;
	contentUnCheckedIndex++;
}
}

else if (sel_action_val=='tags')
{
var tags=postBlogs.tags;
console.log("tags: "+tags);
blog_row = blog_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="blog_cb'+index+'" name="blog_cb" class="blog_cb" onclick="javascript:checkUncheck(this.name);" value="'+postBlogs.fileUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postBlogs.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postBlogs.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
//console.log(document.getElementById("blog_cb"+index).value);
var temp_id="blog_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postBlogs.fileUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postBlogs.fileUrl;
	contentUnCheckedIndex++;
}
}
else
{
blog_row = blog_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" name="blog_cb" class="blog_cb" onclick="javascript:checkUncheck(this.name);" value="'+postBlogs.fileUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postBlogs.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postBlogs.author+'</td>'+
'</tr>';	
}
});
}
blog_row=blog_row+'</table>';	

// writing the blog table in the blog tab.
document.getElementById("blog_div").innerHTML=blog_row;	
populateDocContent(space_url);
});
}
function populateDocContent(space_url) {
osapi.jive.corev3.documents.get ({
fields : '@all',
count : 50,
place : space_url
}).execute(function(response) {
//console.log("Documents: "+JSON.stringify(response));

var documents = response.list;
var postDoc;
var docs_length=response.list.length;
if (docs_length==0)
{
docs_row='<table id="docsTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No documents in this place.</strong></td></tr>';
}
else
{	
if (sel_action_val=='categs')
{
var header='Category';
}
else if (sel_action_val=='tags')
{
var header='Tags';
}
else
{
var header='Author';
}

docs_row='<table id="docsTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+

'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: right;" valign="middle"><strong>'+'All<input type="checkbox" id="sel_all_docs" onclick="javascript:checkedAll(this.id);">'+'</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 450px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; Title</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 160px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; '+header+'</strong></th>'+
'</tr>';

$.each(documents, function(index, group) {
postDoc = {
title : "",
author : "",
updated : "",
docUrl : "",
category: "",
tags: ""
}

postDoc.title = group.subject;
postDoc.author = group.author.name.formatted;
postDoc.updated = group.updated;
postDoc.docUrl = group.resources.self.ref;
postDoc.category = group.categories;
postDoc.tags = group.tags;

if (sel_action_val=='categs')
{
docs_row = docs_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="doc_cb'+index+'" name="doc_cb" class="doc_cb" onclick="javascript:checkUncheck(this.name);" value="'+postDoc.docUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDoc.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDoc.category+'</td>'+
'</tr>';

var categg3=postDoc.category;
var checkFlagItem = false;

for(var ind=0;ind<categg3.length;ind++)
{
if (categg3[ind]==selected_cat)
{
console.log("categg3= "+categg3);
console.log("selected_cat= "+selected_cat);
//console.log(document.getElementById("doc_cb"+index).value);
var temp_id="doc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postDoc.docUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postDoc.docUrl;
	contentUnCheckedIndex++;
}

}
else if (sel_action_val=='tags')
{
var tags=postDoc.tags;
console.log("tags: "+tags);
docs_row = docs_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="doc_cb'+index+'" name="doc_cb" class="doc_cb" onclick="javascript:checkUncheck(this.name);" value="'+postDoc.docUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDoc.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDoc.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
//console.log(document.getElementById("doc_cb"+index).value);
var temp_id="doc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postDoc.docUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postDoc.docUrl;
	contentUnCheckedIndex++;
}
}
else
{
docs_row = docs_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" name="doc_cb" class="doc_cb" onclick="javascript:checkUncheck(this.name);" value="'+postDoc.docUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDoc.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDoc.author+'</td>'+
'</tr>';
}



});	
}	
docs_row=docs_row+'</table>';
document.getElementById("docs_div").innerHTML=docs_row;
populateDiscussions(space_url);
});
}

function populateDiscussions(space_url){
osapi.jive.corev3.discussions.get ({
fields : '@all',
count : 50,
place : space_url
}).execute(function(response) {
//console.log("Discussions: "+JSON.stringify(response));

var disc = response.list;
var postDisc;
var disc_length=response.list.length;
if(disc_length==0)
{
disc_row='<table id="discTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No discussions in this place.</strong></td></tr>';
}
else
{
if (sel_action_val=='categs')
{
var header='Category';
}
else if (sel_action_val=='tags')
{
var header='Tags';
}
else
{
var header='Author';
}

disc_row='<table id="discTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+

'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: right;" valign="middle"><strong>'+'All<input type="checkbox" id="sel_all_disc"  onclick="javascript:checkedAll(this.id);">'+'</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 450px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; Title</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 160px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; '+header+'</strong></th>'+
'</tr>';

$.each(disc, function(index, group) {
postDisc = {
title : "",
author : "",
updated : "",
discUrl : "",
category : "",
tags: ""
}

postDisc.title = group.subject;
postDisc.author = group.author.name.formatted;
postDisc.updated = group.updated;
postDisc.discUrl = group.resources.self.ref;
postDisc.category = group.categories;
postDisc.tags = group.tags;

if (sel_action_val=='categs')
{
disc_row = disc_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="disc_cb'+index+'" name="disc_cb" class="disc_cb" onclick="javascript:checkUncheck(this.name);" value="'+postDisc.discUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDisc.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDisc.category+'</td>'+
'</tr>';

var categg4=postDisc.category;
var checkFlagItem = false;
for(var ind=0;ind<categg4.length;ind++)
{
if (categg4[ind]==selected_cat)
{
console.log("categg4= "+categg4);
console.log("selected_cat= "+selected_cat);
//console.log(document.getElementById("disc_cb"+index).value);
var temp_id="disc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postDisc.discUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postDisc.discUrl;
	contentUnCheckedIndex++;
}
}
else if (sel_action_val=='tags')
{
var tags=postDisc.tags;
console.log("tags: "+tags);
disc_row = disc_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="disc_cb'+index+'" name="disc_cb" class="disc_cb" onclick="javascript:checkUncheck(this.name);" value="'+postDisc.discUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDisc.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDisc.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
//console.log(document.getElementById("disc_cb"+index).value);
var temp_id="disc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postDisc.discUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postDisc.discUrl;
	contentUnCheckedIndex++;
}
}
else
{
disc_row = disc_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" name="disc_cb" class="disc_cb" onclick="javascript:checkUncheck(this.name);" value="'+postDisc.discUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDisc.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postDisc.author+'</td>'+
'</tr>';
}

	
});
}
disc_row=disc_row+'</table>';	
document.getElementById("disc_div").innerHTML=disc_row;	
populateIdeas(space_url);
});
}

function populateIdeas(space_url){
osapi.jive.corev3.ideas.get ({
fields : '@all',
count : 50,
place : space_url
}).execute(function(response) {
//console.log("Ideas: "+JSON.stringify(response));

var idea = response.list;
var postIdea;
var idea_length=response.list.length;
if(idea_length==0)
{
idea_row='<table id="ideaTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr>'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No ideas in this place.</strong></td></tr>';
}
else
{
if (sel_action_val=='categs')
{
var header='Category';
}
else if (sel_action_val=='tags')
{
var header='Tags';
}
else
{
var header='Author';
}

idea_row='<table id="ideaTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: right;" valign="middle"><strong>'+'All<input type="checkbox" id="sel_all_ideas"  onclick="javascript:checkedAll(this.id);">'+'</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 450px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; Title</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 160px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; '+header+'</strong></th>'+
'</tr>';

$.each(idea, function(index, group) {
postIdea = {
title : "",
author : "",
updated : "",
ideaUrl : "",
category: "",
tags: ""
}

postIdea.title = group.subject;
postIdea.author = group.author.name.formatted;
postIdea.updated = group.updated;
postIdea.ideaUrl = group.resources.self.ref;
postIdea.category = group.categories;
postIdea.tags = group.tags;


if (sel_action_val=='categs')
{
idea_row = idea_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="idea_cb'+index+'" name="idea_cb" class="idea_cb" onclick="javascript:checkUncheck(this.name);" value="'+postIdea.ideaUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postIdea.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postIdea.category+'</td>'+
'</tr>';

var categg5=postIdea.category;
var checkFlagItem = false;
for(var ind=0;ind<categg5.length;ind++)
{
if (categg5[ind]==selected_cat)
{
console.log("categg5= "+categg5);
console.log("selected_cat= "+selected_cat);
//console.log(document.getElementById("idea_cb"+index).value);
var temp_id="idea_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postIdea.ideaUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postIdea.ideaUrl;
	contentUnCheckedIndex++;
}

}
else if (sel_action_val=='tags')
{
var tags=postIdea.tags;
console.log("tags: "+tags);
idea_row = idea_row + '<tr>'+
'<td style="border:1px ;border: 1px solid #000000;text-align:right;padding:2px;">'+'<input type="checkbox" id="idea_cb'+index+'" name="idea_cb" class="idea_cb" onclick="javascript:checkUncheck(this.name);" value="'+postIdea.ideaUrl+'">'+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postIdea.title+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postIdea.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
//console.log(document.getElementById("idea_cb"+index).value);
var temp_id="idea_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postIdea.ideaUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postIdea.ideaUrl;
	contentUnCheckedIndex++;
}
}
else
{
idea_row = idea_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" name="idea_cb" class="idea_cb" onclick="javascript:checkUncheck(this.name);" value="'+postIdea.ideaUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postIdea.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postIdea.author+'</td>'+
'</tr>';
}

	
});
}
idea_row=idea_row+'</table>';	
document.getElementById("idea_div").innerHTML=idea_row;	
populatePolls(space_url);
});
}

function populatePolls(space_url){
osapi.jive.corev3.polls.get({
fields : '@all',
count : 50,
place : space_url
}).execute(function(response) {
//console.log("Polls: "+JSON.stringify(response));

var polls = response.list;
var postPolls;
var poll_length=response.list.length;
if(poll_length==0)
{
poll_row='<table id="pollTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No polls in this place.</strong></td></tr>';
}
else
{	
if (sel_action_val=='categs')
{
var header='Category';
}
else if (sel_action_val=='tags')
{
var header='Tags';
}
else
{
var header='Author';
}

poll_row='<table id="pollTable" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 450px;">'+

'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: right;" valign="middle"><strong>'+'All<input type="checkbox" id="sel_all_polls"  onclick="javascript:checkedAll(this.id);">'+'</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 450px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; Title</strong></th>'+
'<td style="border:1px solid black;border: 1px solid #000000;width: 160px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>&nbsp; '+header+'</strong></th>'+
'</tr>';

$.each(polls, function(index, group) {
postPolls = {
title : "",
author : "",
updated : "",
fileUrl : "",
category: "",
tags:""
}

postPolls.title = group.subject;
postPolls.author = group.author.name.formatted;
postPolls.updated = group.updated;
postPolls.fileUrl = group.resources.self.ref;
postPolls.category = group.categories;
postPolls.tags = group.tags;

if (sel_action_val=='categs')
{
poll_row = poll_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="poll_cb'+index+'" name="poll_cb" class="poll_cb" onclick="javascript:checkUncheck(this.name);" value="'+postPolls.fileUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postPolls.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postPolls.category+'</td>'+
'</tr>';

var categg6=postPolls.category;
var checkFlagItem = false;
for(var ind=0;ind<categg6.length;ind++)
{
if (categg6[ind]==selected_cat)
{
console.log("categg6= "+categg6);
console.log("selected_cat= "+selected_cat);
//console.log(document.getElementById("poll_cb"+index).value);
var temp_id="poll_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postPolls.fileUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postPolls.fileUrl;
	contentUnCheckedIndex++;
}

}
else if (sel_action_val=='tags')
{
var tags=postPolls.tags;
console.log("tags: "+tags);
poll_row = poll_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" id="poll_cb'+index+'" name="poll_cb" class="poll_cb" onclick="javascript:checkUncheck(this.name);" value="'+postPolls.fileUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postPolls.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postPolls.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
//console.log(document.getElementById("poll_cb"+index).value);
var temp_id="poll_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
mainCheckedItems[contentCheckedIndex]=postPolls.fileUrl;
contentCheckedIndex++;
checkFlagItem = true;
}
}
if(checkFlagItem == false && !(selected_cat == '')) {
	mainUncheckItems[contentUnCheckedIndex] = postPolls.fileUrl;
	contentUnCheckedIndex++;
}
}
else
{
poll_row = poll_row + '<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: right;padding: 2px;">'+'<input type="checkbox" name="poll_cb" class="poll_cb" onclick="javascript:checkUncheck(this.name);" value="'+postPolls.fileUrl+'">'+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postPolls.title+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;padding: 2px;">'+postPolls.author+'</td>'+
'</tr>';
}

});
}
poll_row=poll_row+'</table>';	
document.getElementById("poll_div").innerHTML=poll_row;	
javascript:showTab();javascript:highlightTab();
});
}