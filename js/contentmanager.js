alert("hry  lll");
var errorReferenceCatArray = new Array();
var errorDeReferenceCatArray = new Array();
var referenceCatArrayIndex =0;
var deReferenceCatArrayIndex =0;
var dotIndex = 0;

//for categories
var contentCheckedIndex =0;
var contentUnCheckedIndex =0;
var catSelection = false;
var catIndex = 0;
var catRedirectUrl='';
//end
//for tags
var tagSelection = false;
var tagIndex = 0;
var tagRedirectUrl='';
//end

var addId=new Array();
var arrayIndex=0;
var browserName='';
var loggedUser='';
var loggedUserName='';

var space_url='';
var to_url='';
var redirection_url='';
var source_html_url='';

var files_row='';
var docs_row='';
var disc_row='';
var idea_row='';
var blog_row='';
var poll_row='';

var src_space_name='';
var dest_space_name='';

var to_place_blog_url='';
var Grp_file_json='';
var Grp_doc_json='';
var Grp_idea_json='';
var Grp_disc_json='';
var Grp_blog_json='';
var Grp_poll_json='';
var finalJSON = '';
var sel_action_val='';
var msg2='Please select a place.';

var selected_cat='';
var selected_tag='';


function showLoading() 
{
$("#maskLoad").mask("Please Wait...");
}

function hideLoading() 
{

$("#maskLoad").unmask();
}   

function handleResponse(data) 
{
alert("Error in Application..!!");
console.log(data);    		
}

function onPageLoad() 
{
// Detect the browser for adding different code when using IE.
navigator.sayswho= (function(){    
var N= navigator.appName, ua= navigator.userAgent, tem;
var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
M= M? [M[1]]: [N];

browserName=M;
})();

// Set the margins and position for given elements while loading the page in IE.
if(browserName=="MSIE")
{
$('#deleteFrom').css("margin-left", "200px");
$('#del_place').css("margin-left", "245px");
$('#deleteTo').css("margin-left", "262px");
$('#del_select_items_button').css("margin-left", "240px");
$('#dwn_place').css("margin-left", "250px");
$('#dwnTo').css("margin-left", "255px");
$('#dwn_select_items_button').css("margin-left", "245px");
}

// Identifying the logged-in user.
osapi.people.get({
userId : '@me'
}).execute(function(response) {
loggedUser =response.id; 
loggedUserName=response.name.formatted;
});

}

function selected_action()
{
// Check which action is selected by user copy/move/delete/upload/download &
// hide show elements accordingly.
var sel_action = document.getElementById("src_place");
sel_action_val = sel_action.options[sel_action.selectedIndex].value;

var dialog_obj3 = $("#uploadIE");
dialog_obj3.dialog("close");

if(sel_action_val=="copy"){

src_space_name='';
dest_space_name='';
$("#cat_place").hide();
$("#selCat").hide();
$("#cat_sel").hide();
$("#catFrom").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#cmdu").text("Copy");
$("#to_space").hide();
$("#tab_items").show();
$("#dwnFrom").hide();
$("#dwn_from_space").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwnTo").hide();
$("#dwn_select_items_button").hide();
$("#to_group").hide();
$("#to_project").hide();
$("#from_space").hide();
$("#from_group").hide();
$("#from_project").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
$("#deleteFrom").hide();
$("#upFrom").hide();
$('#all_selected_items').css("margin-top", "0px");
$('#selected_items').css("margin-top", "0px");
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").hide();
$("#upTo").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("del_place").style.display="inline";
document.getElementById("up_place").style.display="inline";
$("#del_place").hide();
$("#up_place").hide();
$("#change_selection_div").hide();
$("#stylized").show();
$("#showDiv").show();
$("#to_place").show();
document.getElementById("to_place").disabled = true;
$("#copyTo").show();
$('#from_label').text("Copy From:");
$('#to_label').text("Copy To:");
$('#from_label').show();
$('#to_label').show();
$('#select_items_button').hide();

$("#copyTo").text("Copy this:").append('<br/>');
$('#start_copying_button').val('Start Copying');
$('#start_copying_button').unbind('click').click(function(){startCopying();});		
}
else if(sel_action_val=="move"){
document.getElementById("to_place").disabled = true;
src_space_name='';
dest_space_name='';
$("#cmdu").text("Move");
$("#cat_place").hide();
$("#selCat").hide();
$("#cat_sel").hide();
$("#catFrom").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#dwn_from_space").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwn_select_items_button").hide();
$("#dwnTo").hide();
$('#all_selected_items').css("margin-top", "0px");
$('#selected_items').css("margin-top", "0px");
$("#to_space").hide();
$("#tab_items").show();
$("#to_group").hide();
$("#dwnFrom").hide();
$("#to_project").hide();
$("#from_space").hide();
$("#from_group").hide();
$("#from_project").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#deleteFrom").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
$("#upFrom").hide();
document.getElementById("deleteTo").style.display="inline";
document.getElementById("upTo").style.display="inline";
$("#deleteTo").hide();
$("#upTo").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("del_place").style.display="inline";
document.getElementById("up_place").style.display="inline";
$("#del_place").hide();
$("#up_place").hide();
$("#change_selection_div").hide();
$("#stylized").show();
$("#showDiv").show();
$("#to_place").show();
$("#copyTo").show();
$('#from_label').text("Move From:");
$('#to_label').text("Move To:");
$('#from_label').show();
$('#to_label').show();
$('#select_items_button').hide();
$("#copyTo").text("Move this:").append('<br/>');
$('#start_copying_button').val('Start Moving');
$('#start_copying_button').unbind('click').click(function(){startMoving();});
}
else if(sel_action_val=="delete"){
src_space_name='';
dest_space_name='';
$("#cat_place").hide();
$("#catFrom").hide();
$("#cat_sel").hide();
$("#selCat").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#dwn_from_space").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwnTo").hide();
$("#cmdu").text("Delete");
$("#dwn_select_items_button").hide();
$("#dwnFrom").hide();
$("#tab_items").show();
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#change_selection_div").hide();
$("#showDiv").hide();
document.getElementById("del_place").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("up_place").style.display="inline";
$("#del_place").css("margin-top", "110px");
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#copyTo").hide();
$("#up_place").hide();
$("#delShow").show();
$("#upShow").hide();
$("#upTo").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
document.getElementById("deleteFrom").style.display="inline";
document.getElementById("upFrom").style.display="inline";
$('#upFrom').hide();
$('#from_label').hide();
$('#to_label').hide();
$('#to_place').hide();
$("#to_space").hide();
$("#to_group").hide();
$("#to_project").hide();
$('#select_items_button').hide();	
$('#start_copying_button').val('Start Deleting');
$('#start_copying_button').unbind('click').click(function(){startDeleting();});
}
else if(sel_action_val=="uploadd"){
if(browserName=="MSIE")
{

src_space_name='';
dest_space_name='';
$("#cmdu").text("Upload");
$("#cat_place").hide();
$("#selCat").hide();
$("#cat_sel").hide();
$("#catFrom").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#dwn_from_space").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwnTo").hide();
$("#dwn_select_items_button").hide();
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#deleteFrom").hide();
$("#dwnFrom").hide();
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").hide();
document.getElementById("up_place").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_place").hide();
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#copyTo").hide();
$("#delShow").hide();
$("#upShow").hide();
$("#up_place").hide();
$('#up_place').css("margin-top", "90px");
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
document.getElementById("upFrom").style.display="inline";
$('#from_label').hide();
$('#to_label').hide();
$('#to_place').hide();
$("#to_space").hide();
$("#to_group").hide();
$("#to_project").hide();	
$('#select_items_button').hide();

$("#uploadIE").show();
$("#uploadIE").dialog();

$("#src_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#src_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#src_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

}
else
{
src_space_name='';
dest_space_name='';
$("#dwn_from_space").hide();
$("#cat_place").hide();
$("#cat_sel").hide();
$("#selCat").hide();
$("#catFrom").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwnTo").hide();
$("#cmdu").text("Upload");
$('#all_selected_items').css("margin-top", "80px");
$("#dwnFrom").hide();
$('#selected_items').css("margin-top", "80px");
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#deleteFrom").hide();
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").hide();
document.getElementById("up_place").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_place").hide();
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#copyTo").hide();
$("#delShow").hide();
$("#upShow").show();
$("#dwn_select_items_button").hide();
$("#up_place").show();
$('#up_place').css("margin-top", "90px");
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
document.getElementById("upFrom").style.display="inline";
$('#from_label').hide();
$('#to_label').hide();
$('#to_place').hide();
$("#to_space").hide();
$("#to_group").hide();
$("#to_project").hide();	
$('#select_items_button').hide();
}
}
else if(sel_action_val=="download"){
src_space_name='';
dest_space_name='';
$("#cmdu").text("Download");
$("#tab_items").hide();
$("#selCat").hide();
$("#cat_sel").hide();
$("#cat_place").hide();
$("#catFrom").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#del_place").hide();
$("#dwn_place").show();
//document.getElementById("del_place").style.display="inline";
//document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("up_place").style.display="inline";
$("#del_place").css("margin-top", "110px");
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#copyTo").hide();
$("#up_place").hide();
$("#dwn_select_items_button").hide();
$("#deleteTo").hide();
$("#delShow").hide();
$("#dwnShow").show();
$("#upShow").hide();
$("#upTo").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
document.getElementById("deleteFrom").style.display="inline";
document.getElementById("upFrom").style.display="inline";

$('#dwnFrom').show();
$('#upFrom').hide();
$('#from_label').hide();
$('#to_label').hide();
$('#to_place').hide();
$("#to_space").hide();
$("#to_group").hide();
$("#to_project").hide();
$('#select_items_button').hide();	
$('#start_copying_button').val('Start Downloading');
$('#start_copying_button').unbind('click').click(function(){startDownloading();});
}
else if(sel_action_val=="categs"){
src_space_name='';
dest_space_name='';
$("#catShow").show();
$("#tagShow").hide();
$("#deleteTo").hide();
$("#cat_select_items_button").hide();
document.getElementById("cat_place").style.display="inline";
$("#cat_place").show();
$("#tag_place").hide();
$("#catFrom").show();
$("#del_place").css("margin-top", "110px");
$('#cat_place').css("margin-top", "135px");
$('#cat_place').css("margin-left", "-70px");
$("#dwnFrom").hide();
$("#del_place").hide();
$("#dwn_from_space").hide();
$("#tag_from_space").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#selTag").hide();
$("#tag_sel").hide();
$("#add_tag_button").hide();
$("#dwnTo").hide();
$("#cmdu").text("Delete");
$("#dwn_select_items_button").hide();
$("#dwnFrom").hide();
$("#tab_items").show();
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#change_selection_div").hide();
$("#showDiv").hide();
//document.getElementById("del_place").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("up_place").style.display="inline";
$("#del_place").css("margin-top", "110px");
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#copyTo").hide();
$("#up_place").hide();
$("#delShow").hide();
$("#tagShow").hide();
$("#upShow").hide();
$("#upTo").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
document.getElementById("deleteFrom").style.display="inline";
document.getElementById("upFrom").style.display="inline";

$('#upFrom').hide();
$('#from_label').hide();
$('#to_label').hide();
$('#to_place').hide();
$("#to_space").hide();
$("#to_group").hide();
$("#to_project").hide();
$('#select_items_button').hide();	
$('#start_copying_button').val('Start Deleting');
$('#start_copying_button').unbind('click').click(function(){startDeleting();});
}

else if(sel_action_val=="tags"){
src_space_name='';
dest_space_name='';
$("#tagShow").show();
$("#catShow").hide();
$("#deleteTo").hide();
$("#tag_select_items_button").hide();
document.getElementById("tag_place").style.display="inline";
$("#tag_place").show();
$("#cat_place").hide();

$("#tagFrom").show();
$("#del_place").css("margin-top", "110px");
$('#tag_place').css("margin-top", "110px");
$("#dwnFrom").hide();
$("#del_place").hide();
$("#dwn_from_space").hide();
$("#cat_from_space").hide();
$("#tag_from_group").hide();
$("#selCat").hide();
$("#cat_sel").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwnTo").hide();
$("#cmdu").text("Delete");
$("#dwn_select_items_button").hide();
$("#dwnFrom").hide();
$("#tab_items").show();
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#change_selection_div").hide();
$("#showDiv").hide();
//document.getElementById("del_place").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("up_place").style.display="inline";
$("#del_place").css("margin-top", "110px");
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#dwn_select_items_button").hide();
$("#copyTo").hide();
$("#up_place").hide();
$("#delShow").hide();
$("#catShow").hide();
$("#tagShow").show();
$("#upShow").hide();
$("#upTo").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
document.getElementById("deleteFrom").style.display="inline";
document.getElementById("upFrom").style.display="inline";
$('#upFrom').hide();
$('#from_label').hide();
$('#to_label').hide();
$('#to_place').hide();
$("#to_space").hide();
$("#to_group").hide();
$("#to_project").hide();
$('#select_items_button').hide();	
$('#start_copying_button').val('Start Deleting');
$('#start_copying_button').unbind('click').click(function(){startDeleting();});
}

else if(sel_action_val=="select_action"){
src_space_name='';
dest_space_name='';

document.getElementById("del_place").style.display="inline";
$("#change_selection_div").hide();
$("#cat_place").hide();
$("#catFrom").hide();
$("#selCat").hide();
$("#cat_sel").hide();
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
$("#catTo").hide();
$("#cat_select_items_button").hide();
$("#dwn_from_space").hide();
$("#dwn_select_items_button").hide();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
$("#dwn_place").hide();
$("#dwnTo").hide();
$("#dwnFrom").hide();
$("#deleteFrom").hide();
$("#upFrom").hide();
document.getElementById("deleteTo").style.display="inline";
document.getElementById("upTo").style.display="inline";
$("#deleteTo").hide();
$("#upTo").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_select_items_button").hide();
$("#up_select_items_button").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
$("#showDiv").hide();
$("#copyTo").hide();
$("#delShow").hide();
$("#del_place").hide();
$("#catShow").hide();
$("#tagShow").hide();
$("#upShow").hide();
$("#up_place").hide();
$('#select_items_button').hide();
}
}

function fromPlace()
{
// Identifies which space/group/project the user  has chosen the content to copy/move and calls the relevant method.
var from_place = document.getElementById("from_place");
var from_sel_place = from_place.options[from_place.selectedIndex].value;

if(from_sel_place=="select_space"){
src_space_name='';
dest_space_name='';
document.getElementById("to_space").innerHTML=msg2;
document.getElementById("to_group").innerHTML=msg2;
document.getElementById("to_project").innerHTML=msg2;
$("#change_selection_div").hide();
$("#change_contents").hide();
$("#start_copying_button").hide();
fromSpaceRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_group"){
src_space_name='';
dest_space_name='';
document.getElementById("to_space").innerHTML=msg2;
document.getElementById("to_group").innerHTML=msg2;
document.getElementById("to_project").innerHTML=msg2;
$("#change_selection_div").hide();
$("#change_contents").hide();
$("#start_copying_button").hide();
fromGroupRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_project"){
src_space_name='';
dest_space_name='';
document.getElementById("to_space").innerHTML=msg2;
document.getElementById("to_group").innerHTML=msg2;
document.getElementById("to_project").innerHTML=msg2;
$("#change_selection_div").hide();
$("#change_contents").hide();
$("#start_copying_button").hide();
fromProjectRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(from_sel_place=="select_one"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}

function delFromPlace()
{
// Identifies which space/group/project the user  has chosen the content to delete from and calls the relevant method.
var from_place = document.getElementById("del_place");
var from_sel_place = from_place.options[from_place.selectedIndex].value;

if(from_sel_place=="select_space"){
fromSpaceRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_group"){
fromGroupRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_project"){
fromProjectRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_one"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}

function dwnFromPlace()
{
// Identifies which space/group/project user has chosen to download content from and calls the appropriate method.
var from_place = document.getElementById("dwn_place");
var from_sel_place = from_place.options[from_place.selectedIndex].value;

if(from_sel_place=="select_space"){
fromSpaceRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_group"){
fromGroupRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_project"){
fromProjectRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(from_sel_place=="select_one"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}

function upFromPlace()
{
// Identifies which space/group/project user has chosen to upload file to and calls the appropriate method.
var up_place = document.getElementById("up_place");
var up_sel_place = up_place.options[up_place.selectedIndex].value;

if(up_sel_place=="select_space"){
toSpaceRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(up_sel_place=="select_group"){
toGroupRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(up_sel_place=="select_project"){
toProjectRequest();
document.getElementById("copyTo").style.visibility="hidden";

}
else if(up_sel_place=="select_one"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}

function catFromPlace()
{
// Identifies which space/group/project user has chosen to edit categories into and calls the appropriate method.
var cat_place = document.getElementById("cat_place");
var cat_sel_place = cat_place.options[cat_place.selectedIndex].value;

if(cat_sel_place=="select_space"){
fromSpaceRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(cat_sel_place=="select_group"){
fromGroupRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(cat_sel_place=="select_project"){
fromProjectRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(cat_sel_place=="select_one"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}

function tagFromPlace()
{
// Identifies which space/group/project user has chosen to edit categories into and calls the appropriate method.
var cat_place = document.getElementById("tag_place");
var cat_sel_place = cat_place.options[cat_place.selectedIndex].value;

if(cat_sel_place=="select_space"){
fromSpaceRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(cat_sel_place=="select_group"){
fromGroupRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(cat_sel_place=="select_project"){
fromProjectRequest();
document.getElementById("copyTo").style.visibility="hidden";
}
else if(cat_sel_place=="select_one"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}
function toPlace()
{
// Identifies which space/group/project the user  has chosen to copy/move the selected content and calls the relevant method.
var to_place = document.getElementById("to_place");
var to_sel_place = to_place.options[to_place.selectedIndex].value;

if(to_sel_place=="to_space"){
toSpaceRequest();
}
else if(to_sel_place=="to_group"){
toGroupRequest();
}
else if(to_sel_place=="to_project"){
toProjectRequest();
}
else if(to_sel_place=="select_to"){
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
}
}

//Code for category test

function categoryTest() {
osapi.jive.corev3.groups.get({
uri: space_url
}).execute(onPlaceFetchBlog);
}

function onPlaceFetchBlog(response){
//console.log(JSON.stringify(response));
//alert(response.resources.categories.ref);
response.getCategories().execute(catFetch);

}

function catFetch(response) {
// capture the categories in the space/group/project and then populate the same in a dropdown.
var groups_list=[];

//console.log(JSON.stringify(response));
var list_len=response.list.length;
for(i=0;i<list_len;i++)
{
//console.log(response.list[i].name);
groups_list.push(response.list[i].name);
document.getElementById('cat_sel').options[i] =new Option(response.list[i].name,response.list[i].name);
}

var myOptions = {
    val1 : 'Select Category'
};
var mySelect = $('#cat_sel');
$.each(myOptions, function(val, text) {
    mySelect.prepend(
        $('<option></option>').val(val).html(text)
    );
});

$('select option[value="val1"]').attr("selected",true);
}

function categSel()
{
var contentCheckedIndex =0;
var contentUnCheckedIndex =0;
var mainCheckedItems = new Array();
var mainUncheckItems = new Array();
catSelection = true;
arrayIndex=0;
//put the selected category to further use
selected_cat=document.getElementById('cat_sel').value;

if (selected_cat=="val1")
{
$("#cat_select_items_button").hide();
$("#catTo").hide();
}
else
{
$("#cat_select_items_button").show();
$('#catTo').css("margin-top", "225px");
//$('#cat_sel').css("margin-left", "75px");
$("#catTo").show();
getDocs(space_url);
getFiles(space_url);
getDiscussions(space_url);
getIdeas(space_url);
getPolls(space_url);
getBlogs(blog_url);
}

}

function tagSel()
{
var contentCheckedIndex =0;
var contentUnCheckedIndex =0;
var mainCheckedItems = new Array();
var mainUncheckItems = new Array();
catSelection = true;

arrayIndex=0;
//put the selected category to further use
selected_tag=$('#tag_sel').val();
if (selected_tag=="val1")
{
$("#tag_select_items_button").hide();
$("#tagTo").hide();
}
else
{
$("#tag_select_items_button").show();
$('#tagTo').css("margin-top", "225px");
$("#tagTo").show();
$("#add_tag_button").hide();
$("#tag_sel").hide();
document.getElementById("add_tag").innerHTML=$('#tag_sel').val();
$("#add_tag").show();
getDocs(space_url);
getFiles(space_url);
getDiscussions(space_url);
getIdeas(space_url);
getPolls(space_url);
getBlogs(blog_url);
}

}

function fromSpaceRequest() {
// Handles user request to select the SPACE and then handle the response to fetch details about the selected SPACE.
alert("comming here");
var from_place_name='';
src_space_name='';
dest_space_name='';
selected_cat = '';
arrayIndex=0;
addId=new Array();
document.getElementById("to_place").disabled = false;
document.getElementById("from_project").innerHTML=msg2;
document.getElementById("from_group").innerHTML=msg2;
document.getElementById("from_space").innerHTML=msg2;
var params = {
type : "space",
success : ( function(data){
//consolelog("DATA: "+JSON.stringify(data));

// Assigns values to the variables from the received response.
from_place_name=data.name;
src_space_name=from_place_name;
space_url=data.resources.self.ref;
blog_url=data.resources.blog.ref;
source_html_url=data.resources.html.ref;

$("#del_place").hide();
document.getElementById("from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+from_place_name;

// Check if the source place is empty and reset the values accordingly.
if(from_place_name!='')
{
if(dest_space_name==from_place_name)
{
if(sel_action_val=="move"){
// Showing an error message if the source and target is same for move.
$("#dialogMove").show();
$("#dialogMove").dialog();
}
else{
// Showing an error message if the source and target is same for copy.
$("#dialog").show();
$("#dialog").dialog();
}
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("from_space").innerHTML=msg2;
document.getElementById("copyTo").style.visibility="hidden";
}
else
{	
var dialog_obj = $("#dialog");
dialog_obj.dialog("close");
var dialog_obj2 = $("#dialogMove");
dialog_obj2.dialog("close");
document.getElementById("to_place").disabled = false;
document.getElementById("from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+from_place_name;	
}
}

//changing the default dropdown selection to 'Change Place'	   
$("#from_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#from_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#from_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown selection to 'Change Place'
$("#del_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#del_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#del_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown selection to 'Change Place'
$("#dwn_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#dwn_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#dwn_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown selection to 'Change Place'
$("#cat_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#cat_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#cat_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

// calling methods to fetch content.
getDocs(space_url);
getFiles(space_url);
getDiscussions(space_url);
getIdeas(space_url);
getPolls(space_url);
getBlogs(blog_url);

// actions when the user choses to delete content.
if(sel_action_val=="delete")
{
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#deleteTo").text("Delete this:").append('<br/>');
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").show();
$("#upTo").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_select_items_button").css("margin-left", "-80px");
$("#del_select_items_button").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#delShow").show();
$("#upShow").hide();
$("#catShow").hide();
$("#tagShow").hide();
$("#up_place").hide();
document.getElementById("del_place").style.display="inline";
$("#del_place").show();
document.getElementById("del_from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+from_place_name;
$("#del_place").css("margin-left", "-80px");
$("#del_place").css("margin-top", "140px");
$("#del_from_space").show();
$("#del_from_group").hide();
$("#del_from_project").hide();
}
else if(sel_action_val=="download")
{
// actions when the user choses to download files.
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#dwnTo").text("Download this:").append('<br/>');
document.getElementById("dwnTo").style.display="inline";
$("#dwnTo").show();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").show();
$("#catShow").hide();
$("#tagShow").hide();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
$("#dwn_place").show();
document.getElementById("dwn_from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+from_place_name;
$("#dwn_place").css("margin-top", "135px");
$("#dwn_from_space").show();
$("#dwn_from_group").hide();
$("#dwn_from_project").hide();
}
else if(sel_action_val=="categs")
{
// actions when the user choses to download files.
$('#cat_place').css("margin-top", "130px");
$('#cat_place').css("margin-left", "-75px");
$('#cat_sel').css("margin-left", "-75px");
$("#cat_sel option").each(function() {
	$(this).remove();
   });
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#catTo").text("Manage content for this category:").append('<br/>');
document.getElementById("catTo").style.display="inline";
$("#catTo").hide();
$("#dwnTo").hide();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("cat_select_items_button").style.display="inline";
document.getElementById("cat_sel").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").hide();
$("#cat_select_items_button").hide();
$("#cat_sel").show();
$("#selCat").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").hide();
$("#catShow").show();
$("#tagShow").hide();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
document.getElementById("cat_place").style.display="inline";
$("#dwn_place").hide();
$("#cat_place").show();
document.getElementById("cat_from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+from_place_name;
$("#cat_place").css("margin-top", "150px");
$("#cat_from_space").show();
$("#cat_from_group").hide();
$("#cat_from_project").hide();
categoryTest();
}

else if(sel_action_val=="tags")
{
// actions when the user choses to download files.
$('#tag_place').css("margin-top", "120px");
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#tagTo").text("Assign tag to this content:").append('<br/>');
document.getElementById("tagTo").style.display="inline";

$("#tagTo").hide();
$("#dwnTo").hide();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("tag_select_items_button").style.display="inline";
document.getElementById("tag_sel").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").hide();
$("#tag_select_items_button").hide();
$("#tag_sel").show();
$("#add_tag_button").show();
$("#selTag").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").hide();
$("#catShow").hide();
$("#tagShow").show();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
document.getElementById("tag_place").style.display="inline";
$("#dwn_place").hide();
$("#tag_place").show();
document.getElementById("tag_from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+from_place_name;
$("#tag_place").css("margin-top", "140px");
$("#tag_from_space").show();
$("#tag_from_group").hide();
$("#tag_from_project").hide();
console.log('space_url = '+space_url);
//categoryTest();
}

else if(sel_action_val=="select_action")
{
// actions if user changes action to default value.
document.getElementById("del_place").style.display="inline";
$("#change_selection_div").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
$("#deleteFrom").hide();
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").hide();

$("#showDiv").hide();
$("#copyTo").hide();
$("#delShow").hide();
$("#upShow").hide();
$("#catShow").hide();
$("#tagShow").hide();
$("#del_place").hide();
}

$("#from_space").show();
$("#from_group").hide();
$("#from_project").hide();
} ),
error : handleResponse  };

if(from_place_name=='')
{
// actions if the selected place name is empty.
document.getElementById("to_place").disabled = true;
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("from_space").innerHTML=msg2;
}

// calling the OSAPI with the params. final call.
osapi.jive.corev3.places.requestPicker(params);	
}

function fromGroupRequest() {
// Handles user request to select the GROUP and then handle the response to fetch details about the selected GROUP.
alert("commingsdsdfsdfsfd");
var from_place_name='';
src_space_name='';
dest_space_name='';
selected_cat = '';
arrayIndex=0;
addId=new Array();
document.getElementById("to_place").disabled = false;
document.getElementById("from_project").innerHTML=msg2;
document.getElementById("from_group").innerHTML=msg2;
document.getElementById("from_space").innerHTML=msg2;
var params = {
type : "group",
success : ( function(data){
//console.log("DATA: "+JSON.stringify(data));

// assigning values to the variables from the received response.
from_place_name=data.name;
src_space_name=from_place_name;
space_url=data.resources.self.ref;
blog_url=data.resources.blog.ref;
source_html_url=data.resources.html.ref;

$("#del_place").hide();
document.getElementById("from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+from_place_name;

if(from_place_name!='')
{
// checking if the selected source and target are same.
if(dest_space_name==from_place_name)
{
if(sel_action_val=="move"){
// an error message of the source and target are same for move.
$("#dialogMove").show();
$("#dialogMove").dialog();
}
else{
// an error message of the source and target are same for copy.
$("#dialog").show();
$("#dialog").dialog();
}
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("from_group").innerHTML=msg2;
}
else
{	
var dialog_obj = $("#dialog");
dialog_obj.dialog("close");	
var dialog_obj2 = $("#dialogMove");
dialog_obj2.dialog("close");
document.getElementById("to_place").disabled = false;
$("#del_place").hide();
document.getElementById("from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+from_place_name;	
}
}

//changing the default dropdown value to 'Change Place'
$("#from_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#from_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#from_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown value to 'Change Place'
$("#del_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#del_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#del_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown value to 'Change Place'
$("#dwn_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#dwn_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#dwn_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown value to 'Change Place'
$("#cat_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#cat_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#cat_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});
$("#tag_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#tag_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#tag_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

// calling methods to fetch content from the selected group.
getDocs(space_url);
alert("space_url"+space_url);
getFiles(space_url);
getDiscussions(space_url);
getIdeas(space_url);
getPolls(space_url);
getBlogs(blog_url);

if(sel_action_val=="delete")
{
// actions when user choses to delete content.
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#deleteTo").text("Delete this:").append('<br/>');
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").show();
$("#upTo").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_select_items_button").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#delShow").show();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("del_place").style.display="inline";
$("#del_place").show();
document.getElementById("del_from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+from_place_name;
$("#del_place").css("margin-top", "140px");
$("#del_from_group").show();
$("#del_from_space").hide();
$("#del_from_project").hide();
}
else if(sel_action_val=="download")
{
// actions when user choses to download content.
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#dwnTo").text("Download this:").append('<br/>');
document.getElementById("dwnTo").style.display="inline";
$("#dwnTo").show();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").show();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
$("#dwn_place").show();
document.getElementById("dwn_from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+from_place_name;
$("#dwn_place").css("margin-top", "135px");
$("#dwn_from_group").show();
$("#dwn_from_space").hide();
$("#dwn_from_project").hide();
}
else if(sel_action_val=="categs")
{
// actions when the user choses to download files.
$('#cat_place').css("margin-top", "120px");
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$('#cat_place').css("margin-left", "-80px");
$('#cat_sel').css("margin-left", "-80px");
$("#catTo").text("Manage content for this category:").append('<br/>');
document.getElementById("catTo").style.display="inline";
$("#catTo").hide();
$("#dwnTo").hide();
$("#upTo").hide();
$("#cat_sel option").each(function() {
	$(this).remove();
   });
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("cat_select_items_button").style.display="inline";
document.getElementById("cat_sel").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").hide();
$("#cat_select_items_button").hide();
$("#cat_sel").show();
$("#selCat").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").hide();
$("#catShow").show();
$("#tagShow").hide();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
document.getElementById("cat_place").style.display="inline";
$("#dwn_place").hide();
$("#cat_place").show();
document.getElementById("cat_from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+from_place_name;
$("#cat_place").css("margin-top", "150px");
$("#cat_from_space").hide();
$('#cat_from_group').css("margin-top", "145px");
$("#cat_from_group").show();

$('#cat_place').css("margin-top", "155px");
$("#cat_from_project").hide();
categoryTest();
}

else if(sel_action_val=="tags")
{
// actions when the user choses to download files.
$('#tag_place').css("margin-top", "120px");
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#tagTo").text("Assign tag to this content:").append('<br/>');
document.getElementById("catTo").style.display="inline";
$("#tagTo").hide();
$("#dwnTo").hide();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("tag_select_items_button").style.display="inline";
document.getElementById("tag_sel").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").hide();
$("#tag_select_items_button").hide();
$("#tag_sel").show();
$("#add_tag_button").show();
$("#selTag").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").hide();
$("#catShow").hide();
$("#tagShow").show();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
document.getElementById("tag_place").style.display="inline";
$("#dwn_place").hide();
$("#tag_place").show();
document.getElementById("tag_from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+from_place_name;
$("#tag_place").css("margin-top", "140px");
$("#tag_from_space").hide();
$("#tag_from_group").show();
$("#tag_from_project").hide();
categoryTest();
}

else if(sel_action_val=="select_action")
{
//action when user changes the action to default value.
document.getElementById("del_place").style.display="inline";
$("#change_selection_div").hide();
$("#showDiv").hide();
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").hide();
$("#copyTo").hide();
$("#delShow").hide();
$("#upShow").hide();
$("#deleteFrom").hide();
$("#del_place").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
}


$("#from_space").hide();
$("#from_group").show();
$("#from_project").hide();
} ),
error : handleResponse  };

if(from_place_name=='')
{
// actions if the source place is empty
document.getElementById("to_place").disabled = true;
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("from_group").innerHTML=msg2;
}

// final call by OSAPI using the params.
osapi.jive.corev3.places.requestPicker(params);	
}

function fromProjectRequest() {
// Handles user request to select the PROJECT and then handle the response to fetch details about the selected PROJECT.

var from_place_name='';
src_space_name='';
dest_space_name='';
selected_cat = '';
arrayIndex=0;
addId=new Array();
document.getElementById("to_place").disabled = false;
document.getElementById("from_project").innerHTML=msg2;
document.getElementById("from_group").innerHTML=msg2;
document.getElementById("from_space").innerHTML=msg2;
var params = {
type : "project",
success : ( function(data){
//console.log("DATA: "+JSON.stringify(data));

// assigning values to the variables from the received response.
from_place_name=data.name;
src_space_name=from_place_name;
space_url=data.resources.self.ref;
blog_url=data.resources.blog.ref;
source_html_url=data.resources.html.ref;

$("#del_place").hide();
document.getElementById("from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+from_place_name;

if(from_place_name!='')
{
//checking if the selected source and destination are same.
if(dest_space_name==from_place_name)
{
if(sel_action_val=="move"){
// error message of the selected source and destination are same for move.
$("#dialogMove").show();
$("#dialogMove").dialog();
}
else{
// error message of the selected source and destination are same for copy.
$("#dialog").show();
$("#dialog").dialog();
}
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("from_project").innerHTML=msg2;
}
else
{		
var dialog_obj = $("#dialog");
dialog_obj.dialog("close");
var dialog_obj2 = $("#dialogMove");
dialog_obj2.dialog("close");
document.getElementById("to_place").disabled = false;
document.getElementById("from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+from_place_name;	
}
}

//changing the default dropdown value to 'Change Place'
$("#from_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#from_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#from_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown value to 'Change Place'
$("#del_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#del_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#del_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown value to 'Change Place'
$("#dwn_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#dwn_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#dwn_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

//changing the default dropdown value to 'Change Place'
$("#cat_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#cat_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#cat_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

// calling the methods to fetch content from selected project.
getDocs(space_url);
getFiles(space_url);
getDiscussions(space_url);
getIdeas(space_url);
getPolls(space_url);
getBlogs(blog_url);

if(sel_action_val=="delete")
{
// actions when the user choses to delete.
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#deleteTo").text("Delete this:").append('<br/>');
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").show();
$("#upTo").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#del_select_items_button").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#delShow").show();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("del_place").style.display="inline";
$("#del_place").show();
document.getElementById("del_from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+from_place_name;
$("#del_place").css("margin-top", "140px");
$("#del_from_project").show();
$("#del_from_group").hide();
$("#del_from_space").hide();
}
else if(sel_action_val=="download")
{
// actions when the user choses to download.
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#dwnTo").text("Download this:").append('<br/>');
document.getElementById("dwnTo").style.display="inline";
$("#dwnTo").show();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").show();
$("#delShow").hide();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
$("#dwn_place").show();
$("#del_place").hide();
document.getElementById("dwn_from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+from_place_name;
$("#dwn_place").css("margin-top", "135px");
$("#dwn_from_group").hide();
$("#dwn_from_space").hide();
$("#dwn_from_project").show();
}
else if(sel_action_val=="categs")
{

// actions when the user choses to download files.
$('#cat_place').css("margin-top", "120px");
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$('#cat_place').css("margin-left", "-80px");
$('#cat_sel').css("margin-left", "-80px");
$("#catTo").text("Manage content for this category:").append('<br/>');
document.getElementById("catTo").style.display="inline";
$("#catTo").hide();
$("#dwnTo").hide();
$("#upTo").hide();
$("#cat_sel option").each(function() {
	$(this).remove();
   });
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("cat_select_items_button").style.display="inline";
document.getElementById("cat_sel").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").hide();
$("#cat_select_items_button").hide();
$("#cat_sel").show();
$("#selCat").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").hide();
$("#catShow").show();
$("#tagShow").hide();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
document.getElementById("cat_place").style.display="inline";
$("#dwn_place").hide();
$("#cat_place").show();
document.getElementById("cat_from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+from_place_name;
$("#cat_from_project").css("width", "390px");
$("#cat_from_project").css("margin-top", "145px");
$("#cat_from_project").css("margin-left", "115px");
$("#cat_place").css("margin-top", "155px");
$("#cat_from_space").hide();
$("#cat_from_group").hide();
$("#cat_from_project").show();
categoryTest();
}

else if(sel_action_val=="tags")
{

// actions when the user choses to download files.
$('#tag_place').css("margin-top", "120px");
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#tagTo").text("Assign tag to this content:").append('<br/>');
document.getElementById("tagTo").style.display="inline";
$("#catTo").hide();
$("#tagTo").hide();
$("#dwnTo").hide();
$("#upTo").hide();
document.getElementById("dwn_select_items_button").style.display="inline";
document.getElementById("tag_select_items_button").style.display="inline";
document.getElementById("tag_sel").style.display="inline";
document.getElementById("up_select_items_button").style.display="inline";
$("#dwn_select_items_button").hide();
$("#tag_select_items_button").hide();
$("#cat_sel").hide();
$("#tag_sel").show();
$("#add_tag_button").show();
$("#selCat").hide();
$("#selTag").show();
$("#up_select_items_button").hide();
$("#change_selection_div").hide();
$("#dwnShow").hide();
$("#catShow").hide();
$("#tagShow").show();
$("#upShow").hide();
$("#up_place").hide();
document.getElementById("dwn_place").style.display="inline";
document.getElementById("tag_place").style.display="inline";
$("#dwn_place").hide();
$("#tag_place").show();
document.getElementById("tag_from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+from_place_name;
$("#tag_place").css("margin-top", "140px");
$("#tag_from_space").hide();
$("#tag_from_group").hide();
$("#tag_from_project").show();
categoryTest();
}

else if(sel_action_val=="select_action")
{
// actions when the user changes the action to default value.
document.getElementById("del_place").style.display="inline";
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#copyTo").hide();
$("#delShow").hide();
$("#upShow").hide();
document.getElementById("deleteTo").style.display="inline";
$("#deleteTo").hide();
$("#del_place").hide();
$("#deleteFrom").hide();
$("#del_from_space").hide();
$("#del_from_group").hide();
$("#del_from_project").hide();
}

$("#from_space").hide();
$("#from_group").hide();
$("#from_project").show();
} ),
error : handleResponse  };

if(from_place_name=='')
{
// actions if the soruce place name is empty.
document.getElementById("to_place").disabled = true;
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("from_project").innerHTML=msg2;
}

// final OSAPI call with params.
osapi.jive.corev3.places.requestPicker(params);	
}

function toSpaceRequest() {
var to_place_name='';
document.getElementById("to_project").innerHTML=msg2;
document.getElementById("to_group").innerHTML=msg2;
document.getElementById("to_space").innerHTML=msg2;
var params = {
type : "space",
success : ( function(data){
//console.log("DATA: "+JSON.stringify(data));
to_place_name=data.name;	
to_place_blog_url=data.resources.blog.ref;

//showing execute button		

if(to_place_name!='')
{
if(src_space_name==to_place_name)
{
//alert("The source place and destination place should be different..!!");
if(sel_action_val=="move"){
$("#dialogMove").show();
$("#dialogMove").dialog();
}
else{
$("#dialog").show();
$("#dialog").dialog();
}
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("to_space").innerHTML=msg2;
}
else
{	
if(sel_action_val=='copy')		
$("#copyTo").text("Copy this:").append('<br/>');
else
$("#copyTo").text("Move this:").append('<br/>');

var dialog_obj = $("#dialog");
dialog_obj.dialog("close");
var dialog_obj2 = $("#dialogMove");
dialog_obj2.dialog("close");
document.getElementById("start_copying_button").style.visibility="visible";
$('#select_items_button').show();
document.getElementById("start_uploading").style.visibility="hidden";
$("#button_div").show();	
$("#change_selection_div").hide();
document.getElementById("copyTo").style.visibility="visible";
document.getElementById("to_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+to_place_name;	
}
}
to_url=data.resources.self.ref;
redirection_url=data.resources.html.ref;
dest_space_name=to_place_name;

//changing the selection to 'Change Place'	   
$("#to_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#to_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#to_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});	

$("#up_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#up_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#up_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

if(sel_action_val=="uploadd")
{
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#upTo").text("Upload this:").append('<br/>');
document.getElementById("upTo").style.display="inline";
$("#upTo").show();
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
$("#up_select_items_button").show();
$('#up_select_items_button').css("margin-top", "180px");
$('#up_select_items_button').css("margin-left", "-80px");
$("#del_select_items_button").hide();
$("#button_div").hide();	
$("#change_selection_div").hide();
$("#upShow").show();
document.getElementById("up_place").style.display="inline";
$("#up_place").show();
document.getElementById("up_from_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+to_place_name;
$('#up_place').css("margin-top", "128px");
$("#up_from_project").hide();
$("#up_from_group").hide();
$("#up_from_space").show();
$('#select_items_button').hide();
}
else if(sel_action_val=="select_action")
{
document.getElementById("up_place").style.display="inline";
//$("#stylized").hide();		
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#copyTo").hide();
$("#upShow").hide();
document.getElementById("upTo").style.display="inline";
$("#upTo").hide();
$("#up_place").hide();
$("#upFrom").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
$('#select_items_button').hide();
}

$("#to_space").show();
$("#to_group").hide();
$("#to_project").hide();
} ),
error : handleResponse  };
//hiding execute button
if(to_place_name=='')
{
//document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("to_space").innerHTML=msg2;
//document.getElementById("to_space").innerHTML='<span id="myId" style="text-decoration:underline;">Space</span>'+': '+dest_space_name;
$("#to_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#to_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#to_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});	
}

osapi.jive.corev3.places.requestPicker(params);
}

function toGroupRequest() {
var to_place_name='';
document.getElementById("to_project").innerHTML=msg2;
document.getElementById("to_group").innerHTML=msg2;
document.getElementById("to_space").innerHTML=msg2;
var params = {
type : "group",
success : ( function(data){
//console.log("DATA: "+JSON.stringify(data));
to_place_name=data.name;	
to_place_blog_url=data.resources.blog.ref;	
//showing execute button		
if(to_place_name!='')
{
if(src_space_name==to_place_name)
{
//alert("The source place and destination place should be different..!!");
if(sel_action_val=="move"){
$("#dialogMove").show();
$("#dialogMove").dialog();
}
else{
$("#dialog").show();
$("#dialog").dialog();
}
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("to_group").innerHTML=msg2;
}
else
{		
if(sel_action_val=='copy')		
$("#copyTo").text("Copy this:").append('<br/>');
else
$("#copyTo").text("Move this:").append('<br/>');  

var dialog_obj = $("#dialog");
dialog_obj.dialog("close");    
var dialog_obj2 = $("#dialogMove");
dialog_obj2.dialog("close"); 
document.getElementById("to_place").disabled = false; 	
document.getElementById("start_copying_button").style.visibility="visible";
document.getElementById("start_uploading").style.visibility="hidden";
$("#button_div").show();	
$("#change_selection_div").hide();
$('#select_items_button').show();
document.getElementById("copyTo").style.visibility="visible";
document.getElementById("to_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+to_place_name;	
}
}

to_url=data.resources.self.ref;
redirection_url=data.resources.html.ref;
dest_space_name=to_place_name;


//changing the selection to 'Change Place'	   
$("#to_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#to_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#to_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});	

$("#up_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#up_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#up_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

if(sel_action_val=="uploadd")
{
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#upTo").text("Upload this:").append('<br/>');
document.getElementById("upTo").style.display="inline";
$("#upTo").show();
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
$("#up_select_items_button").show();
$('#up_select_items_button').css("margin-top", "180px");
$('#up_select_items_button').css("margin-left", "-80px");
$("#del_select_items_button").hide();
$("#change_selection_div").hide();
$("#button_div").hide();
$("#upShow").show();
document.getElementById("up_place").style.display="inline";
$("#up_place").show();
document.getElementById("up_from_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+to_place_name;
$('#up_place').css("margin-top", "128px");
$("#up_from_project").hide();
$("#up_from_group").show();
$("#up_from_space").hide();
$('#select_items_button').hide();
}
else if(sel_action_val=="select_action")
{
document.getElementById("up_place").style.display="inline";
//$("#stylized").hide();		
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#copyTo").hide();
$("#upShow").hide();
document.getElementById("upTo").style.display="inline";
$("#upTo").hide();
$("#up_place").hide();
$("#upFrom").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
$('#select_items_button').hide();
}

$("#to_space").hide();
$("#to_group").show();
$("#to_project").hide();
} ),
error : handleResponse  };

if(to_place_name=='')
{
//document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
//document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("to_group").innerHTML=msg2;
//document.getElementById("to_group").innerHTML='<span id="myId" style="text-decoration:underline;">Group</span>'+': '+dest_space_name;	
$("#to_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#to_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#to_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});	
}

osapi.jive.corev3.places.requestPicker(params);
}

function toProjectRequest() {
var to_place_name='';
document.getElementById("to_project").innerHTML=msg2;
document.getElementById("to_group").innerHTML=msg2;
document.getElementById("to_space").innerHTML=msg2;
var params = {
type : "project",
success : ( function(data){
//console.log("DATA: "+JSON.stringify(data));
to_place_name=data.name;
to_place_blog_url=data.resources.blog.ref;	
//showing execute button		
if(to_place_name!='')
{
if(src_space_name==to_place_name)
{
//alert("The source place and destination place should be different..!!");
if(sel_action_val=="move"){
$("#dialogMove").show();
$("#dialogMove").dialog();
}
else{
$("#dialog").show();
$("#dialog").dialog();
}
document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
document.getElementById("to_project").innerHTML=msg2;
}
else
{
if(sel_action_val=='copy')		
$("#copyTo").text("Copy this:").append('<br/>');
else
$("#copyTo").text("Move this:").append('<br/>');

var dialog_obj = $("#dialog");
dialog_obj.dialog("close");
var dialog_obj2 = $("#dialogMove");
dialog_obj2.dialog("close");
//document.getElementById("to_place").disabled = false;
document.getElementById("start_copying_button").style.visibility="visible";
document.getElementById("start_uploading").style.visibility="hidden";
$("#button_div").show();
$("#change_selection_div").hide();
$('#select_items_button').show();
document.getElementById("copyTo").style.visibility="visible";		
document.getElementById("to_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+to_place_name;

}
}

to_url=data.resources.self.ref;
redirection_url=data.resources.html.ref;
dest_space_name=to_place_name;

//changing the selection to 'Change Place'	   
$("#to_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#to_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#to_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});		

$("#up_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#up_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#up_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});

if(sel_action_val=="uploadd")
{
$('#all_selected_items').css("margin-top", "80px");
$('#selected_items').css("margin-top", "80px");
$("#upTo").text("Upload this:").append('<br/>');
document.getElementById("upTo").style.display="inline";
$("#upTo").show();
document.getElementById("up_select_items_button").style.display="inline";
document.getElementById("del_select_items_button").style.display="inline";
$("#up_select_items_button").show();
$('#up_select_items_button').css("margin-top", "180px");
$('#up_select_items_button').css("margin-left", "-80px");
$("#del_select_items_button").hide();
$("#change_selection_div").hide();
$("#button_div").hide();
$("#upShow").show();
document.getElementById("up_place").style.display="inline";
$("#up_place").show();
document.getElementById("up_from_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+to_place_name;
$('#up_place').css("margin-top", "128px");
$("#up_from_project").show();
$("#up_from_group").hide();
$("#up_from_space").hide();
$('#select_items_button').hide();
}
else if(sel_action_val=="select_action")
{
document.getElementById("up_place").style.display="inline";
//$("#stylized").hide();		
$("#change_selection_div").hide();
$("#showDiv").hide();
$("#copyTo").hide();
$("#upShow").hide();
document.getElementById("upTo").style.display="inline";
$("#upTo").hide();
$("#up_place").hide();
$("#upFrom").hide();
$("#up_from_space").hide();
$("#up_from_group").hide();
$("#up_from_project").hide();
$('#select_items_button').hide();
}

$("#to_space").hide();
$("#to_group").hide();
$("#to_project").show();
} ),
error : handleResponse  };

if(to_place_name=='')
{
//document.getElementById("start_copying_button").style.visibility="hidden";	
$("#button_div").hide();	
document.getElementById("copyTo").style.visibility="hidden";
//document.getElementById("copyTo").style.visibility="visible";
document.getElementById("to_project").innerHTML=msg2;
//document.getElementById("to_project").innerHTML='<span id="myId" style="text-decoration:underline;">Project</span>'+': '+dest_space_name;
$("#to_place option").each(function() {
if($(this).text() == 'Select Place') {
$(this).attr('selected', 'selected'); 
$('#to_place :selected').text('Change Place');	
}
else if($(this).text() == 'Change Place')
{  
$('#to_place option:[text="' + $(this).text() + '"]').attr('selected', true);  
}
});	
}

osapi.jive.corev3.places.requestPicker(params);
}

//*****************Code for Managing catagories*******************

var mainCheckedItems = new Array();
var mainUncheckItems = new Array();

/*mainUncheckItems[0] = "https://accenture.jiveon.com/api/core/v3/contents/43423";
mainUncheckItems[1] = "https://accenture.jiveon.com/api/core/v3/contents/43425";
mainUncheckItems[2] = "https://accenture.jiveon.com/api/core/v3/contents/43426";
mainUncheckItems[3] = "https://accenture.jiveon.com/api/core/v3/contents/43427";
mainCheckedItems[0] = "https://accenture.jiveon.com/api/core/v3/contents/43421";
mainCheckedItems[1] = "https://accenture.jiveon.com/api/core/v3/contents/43420";
mainCheckedItems[2] = "https://accenture.jiveon.com/api/core/v3/contents/43424";*/

var  checkedItemsArray = new Array();
var uncheckItemArray = new Array();

var checkItemArrayUpdated = new Array();
var uncheckedItemArrayUpdated = new Array();

 

function filterCheckedUncheckCatgUrl(){
	
     
	  alert("hi filter");
	  var checkedIndex = 0;
	  var uncheckedIndex = 0;
        var val = [];
        $(':checkbox').each(function(i){
			
		 val[i] = $(this).val();
		 alert(val[i]);
		 if(val[i] != 'on'){
		 if($(this).is(':checked')){
		 alert("true");
			checkedItemsArray[checkedIndex] = $(this).val();
			checkedIndex++;
		 }
		 else {
				 alert("false");
			uncheckItemArray[uncheckedIndex] = $(this).val();
			uncheckedIndex++;
		}
		}
		
	
	    });
			/*Print the checked and the unchecked*/
			alert("checkedItemsArray .length = "+checkedItemsArray.length);
		for(var index=0; index < checkedItemsArray.length;index++) {
			alert("checked items : "+checkedItemsArray[index]);
		}
		alert("uncheckItemArray .length = "+uncheckItemArray.length);
		for(var index=0;index < uncheckItemArray.length;index++) {
			alert("unchecked items : "+uncheckItemArray[index]);
		}
		
		/*Filter the the list */
		var checkedIndex = 0;
		var uncheckedIndex = 0;
		for(var outerIndex=0;outerIndex < checkedItemsArray.length;outerIndex++) {
			for(var innerIndex=0;innerIndex< mainCheckedItems.length;innerIndex++) {
				//alert("checkedItemsArray[outerIndex] = mainCheckedItems[innerIndex] :" +checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]);
				//alert("checkedItemsArray[outerIndex] = mainCheckedItems[innerIndex] :" +checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]);
				if(checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]) {
					break;
				}
				else {
					if(innerIndex == (mainCheckedItems.length - 1)) {
					checkItemArrayUpdated[checkedIndex] = checkedItemsArray[outerIndex];
					checkedIndex++;
					}
					
				}
			}
		}
		
		for(var index=0; index < checkItemArrayUpdated.length;index++) {
			alert("new checked items : "+checkItemArrayUpdated[index]);
			console.log("new checked items : "+checkItemArrayUpdated[index]);
		}
		
		for(var outerIndex=0;outerIndex < uncheckItemArray.length;outerIndex++) {
			for(var innerIndex=0;innerIndex< mainUncheckItems.length;innerIndex++) {
				//alert("checkedItemsArray[outerIndex] = mainCheckedItems[innerIndex] :" +checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]);
				if(uncheckItemArray[outerIndex] == mainUncheckItems[innerIndex]) {
					break;
				}
				else {
					if(innerIndex == (mainUncheckItems.length - 1)) {
					uncheckedItemArrayUpdated[uncheckedIndex] = uncheckItemArray[outerIndex];
					uncheckedIndex++;
					}
					
				}
			}
		}
		
		for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
			alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
				console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
		}
		
		

		
		}
		
	function filterCheckedUncheckCatgUrl1(){
	
	var contentTypeCheckBoxIdArray = new Array();
	checkedItemsArray = new Array();
	  uncheckItemArray = new Array();
	  errorReferenceCatArray = new Array();
 errorDeReferenceCatArray = new Array();
 referenceCatArrayIndex =0;
 deReferenceCatArrayIndex =0;

	              contentTypeCheckBoxIdArray[0] = '#filesTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[1] = '#docsTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[2] = '#ideaTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[3] = '#pollTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[4] = '#blogTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[5] = '#discTable input[type=checkbox]';


                  var checkedIndex = 0;
                  var uncheckedIndex = 0;
        var val = [];
                                for(index =0;index <  contentTypeCheckBoxIdArray.length;index++) {
        //$('#filesTable input[type=checkbox]').each(function(i){
                                $(contentTypeCheckBoxIdArray[index]).each(function(i){
                                                
                                val[i] = $(this).val();
                                // alert(val[i]);
                                if(val[i] != 'on'){
                                if($(this).is(':checked')){
                                //alert("true");
                                                checkedItemsArray[checkedIndex] = $(this).val();
                                                checkedIndex++;
                                }
                                else {
                                                                // alert("false");
                                                uncheckItemArray[uncheckedIndex] = $(this).val();
                                                uncheckedIndex++;
                                }
                                }
                                
                
                    });
                                
                                }
                                alert("checkedItemsArray.length = "+checkedItemsArray.length);
                                console.log("checkedItemsArray.length = "+checkedItemsArray.length);
                                alert("uncheckItemArray.length = "+uncheckItemArray.length);
                                console.log("uncheckItemArray.length = "+uncheckItemArray.length);
		catIndex=0;
		dotIndex=0;
		updateCategoriesForNewContents1();		


		
		}

	  
function updateCategoriesForNewContents() {
	/*alert("Into the updateCategories for new contents");
	console.log("Into the updateCategories for new contents");
	for(var index=0; index < checkItemArrayUpdated.length;index++) {
			alert("new checked items : "+checkItemArrayUpdated[index]);
			console.log("new checked items : "+checkItemArrayUpdated[index]);
		}
	for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
			alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
				console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
		}

		alert("checkItemArrayUpdated.length = "+checkItemArrayUpdated.length+" catIndex ="+catIndex);
	console.log("checkItemArrayUpdated.length = "+checkItemArrayUpdated.length+" catIndex="+catIndex);*/
		
if(catIndex < checkItemArrayUpdated.length) {

	var contentURL = checkItemArrayUpdated[catIndex];
	var toUpdateCategories;
	var toCategoriesArray;
	var updatedCategoryList = new Array();
	
	//alert("contentURL got is ="+contentURL);
	console.log("contentURL got is ="+contentURL);
	osapi.jive.corev3.contents.get({
	fields: '@all',	
	uri: contentURL
	}).execute(function(contentCatResponseObj){
				//alert(JSON.stringify(contentCatResponseObj));
				console.log(JSON.stringify(contentCatResponseObj));
				
					//alert(contentCatResponseObj.categories);
					//alert("selected_cat = "+selected_cat);
				toUpdateCategories = contentCatResponseObj.categories;
				//toUpdateCategories = toUpdateCategories+','+selected_cat;
				//toUpdateCategories = ["cat1","cat2","cat3"];
				//toCategoriesArray = toUpdateCategories.split(",");
				var tempIndex =0;
				for(var index=0;index < toUpdateCategories.length;index++,tempIndex++) {
						alert("---cc-"+toUpdateCategories[index]);
						console.log("---cc-"+toUpdateCategories[index]);
						updatedCategoryList[tempIndex]=toUpdateCategories[index];
				}
					updatedCategoryList[tempIndex]=selected_cat;
				//toUpdateCategories = selected_cat;
				//alert("toUpdateCategories = "+toUpdateCategories);
				console.log("toUpdateCategories = "+toUpdateCategories);
				//contentCatResponseObj.categories = toUpdateCategories;
				contentCatResponseObj.categories = updatedCategoryList;
				contentCatResponseObj.update().execute(function(catUpdateResponse){
				//alert(JSON.stringify(catUpdateResponse));
				console.log(JSON.stringify(catUpdateResponse));
				});
				catIndex++;
				updateCategoriesForNewContents();
				
			});

}
else {
catIndex = 0;
removeCategoriesForContents();
}

}

function updateCategoriesForNewContents1() {
	//alert("Into the updateCategories for new contents");
	console.log("Into the updateCategories for new contents");
	for(var index=0; index < checkedItemsArray.length;index++) {
			//alert("new checked items : "+checkedItemsArray[index]);
			//console.log("new checked items : "+checkedItemsArray[index]);
		}
	for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
			//alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
			//	console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
		}

		//alert("checkItemArrayUpdated.length = "+uncheckItemArray.length+" catIndex ="+catIndex);
	//console.log("checkItemArrayUpdated.length = "+uncheckItemArray.length+" catIndex="+catIndex);
		
if(catIndex < checkedItemsArray.length) {

	var contentURL = checkedItemsArray[catIndex];
	var toUpdateCategories;
	var toCategoriesArray;
	var updatedCategoryList = new Array();
	var isCategoryExisting =false;
	
	//alert("contentURL got is ="+contentURL);
	console.log("contentURL got is ="+contentURL);
	osapi.jive.corev3.contents.get({
	fields: '@all',	
	uri: contentURL
	}).execute(function(contentCatResponseObj){
				//alert(JSON.stringify(contentCatResponseObj));
				//console.log(JSON.stringify(contentCatResponseObj));
				
					//console.log(contentCatResponseObj.categories);
					//alert("selected_cat = "+selected_cat);
				toUpdateCategories = contentCatResponseObj.categories;
				var str='Applying category '+selected_cat+' to '+contentCatResponseObj.type+'';
				for(index =0;index < dotIndex;index++) 
					str = str +'.';
					dotIndex++;
				if(dotIndex == 4) dotIndex = 0;
				document.getElementById("frame1").contentDocument.body.innerHTML = "Updating Categories in Progress.<br>Please leave this window open until the moving process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";

				
				var tempIndex =0;
				for(var index=0;index < toUpdateCategories.length;index++,tempIndex++) {
						//alert("---cc-"+toUpdateCategories[index]);
						//console.log("---cc-"+toUpdateCategories[index]);
						updatedCategoryList[tempIndex]=toUpdateCategories[index];
						if(toUpdateCategories[index] == selected_cat) {
						isCategoryExisting = true;
						}
						
						
				}
			//	alert("isCategoryExisting = "+isCategoryExisting);
					if(!isCategoryExisting){
						updatedCategoryList[tempIndex]=selected_cat;
						isCategoryExisting = false;
					}
					
				for(var index=0;index < updatedCategoryList.length;index++,tempIndex++) {
					//console.log("VVVV-- "+updatedCategoryList[index]);
				}
				
				//console.log("toUpdateCategories = "+toUpdateCategories);
				
				contentCatResponseObj.categories = updatedCategoryList;
				contentCatResponseObj.update().execute(function(catUpdateResponse){
				
				//console.log("updated --"+JSON.stringify(catUpdateResponse));
				if (catUpdateResponse.error){
				console.log("updated --"+JSON.stringify(catUpdateResponse));
				console.log("errorReferenceCatArray.length --"+errorReferenceCatArray.length);
        errorReferenceCatArray[referenceCatArrayIndex] = contentCatResponseObj.resources.html.ref;
        referenceCatArrayIndex++;
        
        }

				
				});
				catIndex++;
				updateCategoriesForNewContents1();
				
			});

}
else {
catIndex = 0;
dotIndex=0;
removeCategoriesForContents();
}

}

function removeCategoriesForContents() {
	
		
if(catIndex < uncheckItemArray.length) {

	var contentURL = uncheckItemArray[catIndex];
	var toUpdateCategories;
	var toCategoriesArray;
	var updatedCategoryList = new Array();
	
	//alert("contentURL got is ="+contentURL);
	console.log("contentURL got is ="+contentURL);
	osapi.jive.corev3.contents.get({
	fields: '@all',	
	uri: contentURL
	}).execute(function(contentCatResponseObj){
				//alert(JSON.stringify(contentCatResponseObj));
				console.log(JSON.stringify(contentCatResponseObj));
				
					//alert(contentCatResponseObj.categories);
					//alert("selected_cat = "+selected_cat);
				toUpdateCategories = contentCatResponseObj.categories;
				var str='Removing category '+selected_cat+' to '+contentCatResponseObj.type+'';
				for(index =0;index < dotIndex;index++) 
					str = str +'.';
					dotIndex++;
				if(dotIndex == 4) dotIndex = 0;
				document.getElementById("frame1").contentDocument.body.innerHTML = "Updating Categories in Progress.<br>Please leave this window open until the moving process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
				//toUpdateCategories = toUpdateCategories+','+selected_cat;
				//toUpdateCategories = ["cat1","cat2","cat3"];
				//toCategoriesArray = toUpdateCategories.split(",");
				var tempIndex =0;
				for(var index=0;index < toUpdateCategories.length;index++) {
						if(selected_cat != toUpdateCategories[index]){
						//	alert("---cc-"+toUpdateCategories[index]);
							console.log("---cc-"+toUpdateCategories[index]);
							updatedCategoryList[tempIndex]=toUpdateCategories[index];
							tempIndex++;
						}
				}
				
				//toUpdateCategories = selected_cat;
				//alert("toUpdateCategories = "+toUpdateCategories);
				console.log("toUpdateCategories = "+toUpdateCategories);
				//contentCatResponseObj.categories = toUpdateCategories;
				contentCatResponseObj.categories = updatedCategoryList;
				contentCatResponseObj.update().execute(function(catUpdateResponse){
				//alert(JSON.stringify(catUpdateResponse));
				//console.log("UPDated -- "+JSON.stringify(catUpdateResponse));
				if (catUpdateResponse.error){
				console.log("updated --"+JSON.stringify(catUpdateResponse));
				console.log("errorReferenceCatArray.length --"+errorReferenceCatArray.length);
				
				errorDeReferenceCatArray[deReferenceCatArrayIndex] = contentCatResponseObj.resources.html.ref;
				deReferenceCatArrayIndex++;
        
        }
				
				});
				catIndex++;
				removeCategoriesForContents();
				
			});

}
else {
            for(var index = 0;index < errorReferenceCatArray.length;index++) {
              console.log("Could Not Reference "+errorReferenceCatArray[index]);
            } 

            for(var index = 0;index < errorDeReferenceCatArray.length;index++) {
              console.log("Could Not De-Reference "+errorDeReferenceCatArray[index]);
            }  
			if(errorReferenceCatArray.length > 0 || errorDeReferenceCatArray.length>0) {
				alert('Message:\n\nYou have insufficient rights to update all the content selected.\n\nYou need to have group administration or space moderation rights to update content with restricted authorship (e.g. discussions started by other users).\n\nPlease contact your group or space admin to get the necessary rights.');
				$('#cmdu').hide();
				$('#src_place').show();
				$('#cat_place').show();
				$('#selCat').show();
				$('#cat_sel').show();
				$('#catTo').show();
				$('#catTo').text('Manage content for this category:');
				$('#cat_select_items_button').show();
				$('#cat_place').css("margin-left", "250px");
				$('#cat_sel').css("margin-left", "250px");
				$('#selected_items').hide();
				$('#catTo').css("margin-top", "230px");
			}
			else {

		console.log("Category "+selected_cat+" succesfully updated");
		//alert("Category "+selected_cat+" succesfully updated");
		var tempRedirectionUrl = source_html_url+'/content?filterID=contentstatus[published]~category['+selected_cat+']';
		
		console.log("temRedirectionUrl = "+tempRedirectionUrl);
		/*$("#stylized").fadeOut(5000,function(){
		window.location = window.location = tempRedirectionUrl;
			});*/
			
		/*document.getElementById("frame1").contentDocument.body.innerHTML = "Updating is in Progress.<br>Please leave this window open until the updating process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+"'Moving completed. Please click   <a href='+tempRedirectionUrl+'>here </a>  for the new location of your content.'.fontcolor("#3778C7")+"</span>";*/
	/*	var str='Updating categories has completed. Please click   <a href='+tempRedirectionUrl+'>here </a>  to review the result.';
		document.getElementById("frame1").contentDocument.body.innerHTML = "Updating Categories in Progress.<br>Please leave this window open until the moving process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";*/
		$('#cmdu').hide();
		$('#src_place').show();
		$('#cat_place').show();
		$('#selCat').show();
		$('#cat_sel').show();
		$('#catTo').show();
		$('#catTo').text('Manage content for this category:');
		$('#cat_select_items_button').show();
		$('#cat_place').css("margin-left", "250px");
		$('#cat_sel').css("margin-left", "250px");
		$('#selected_items').css("margin-top", "135px");
		$('#catTo').css("margin-top", "230px");
		var str='Updating categories has completed. Please click   <a href='+tempRedirectionUrl+'>here </a>  to review the result.';
		document.getElementById("frame1").contentDocument.body.innerHTML = "Note:<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
		
		}
		
		
}



}
	
	

//**********************End of the code*******************



//*****************Code for Managing Tags*******************

var mainCheckedItems = new Array();
var mainUncheckItems = new Array();

/*mainUncheckItems[0] = "https://accenture.jiveon.com/api/core/v3/contents/43423";
mainUncheckItems[1] = "https://accenture.jiveon.com/api/core/v3/contents/43425";
mainUncheckItems[2] = "https://accenture.jiveon.com/api/core/v3/contents/43426";
mainUncheckItems[3] = "https://accenture.jiveon.com/api/core/v3/contents/43427";
mainCheckedItems[0] = "https://accenture.jiveon.com/api/core/v3/contents/43421";
mainCheckedItems[1] = "https://accenture.jiveon.com/api/core/v3/contents/43420";
mainCheckedItems[2] = "https://accenture.jiveon.com/api/core/v3/contents/43424";*/

var  checkedItemsArray = new Array();
var uncheckItemArray = new Array();

var checkItemArrayUpdated = new Array();
var uncheckedItemArrayUpdated = new Array();

 

function filterCheckedUncheckTagUrl(){
	
     
	  
	  alert("hi filter");
	  var checkedIndex = 0;
	  var uncheckedIndex = 0;
        var val = [];
        $(':checkbox').each(function(i){
			
		 val[i] = $(this).val();
		 alert(val[i]);
		 if(val[i] != 'on'){
		 if($(this).is(':checked')){
		 alert("true");
			checkedItemsArray[checkedIndex] = $(this).val();
			checkedIndex++;
		 }
		 else {
				 alert("false");
			uncheckItemArray[uncheckedIndex] = $(this).val();
			uncheckedIndex++;
		}
		}
		
	
	    });
			/*Print the checked and the unchecked*/
			alert("checkedItemsArray .length = "+checkedItemsArray.length);
		for(var index=0; index < checkedItemsArray.length;index++) {
			alert("checked items : "+checkedItemsArray[index]);
		}
		alert("uncheckItemArray .length = "+uncheckItemArray.length);
		for(var index=0;index < uncheckItemArray.length;index++) {
			alert("unchecked items : "+uncheckItemArray[index]);
		}
		
		/*Filter the the list */
		var checkedIndex = 0;
		var uncheckedIndex = 0;
		for(var outerIndex=0;outerIndex < checkedItemsArray.length;outerIndex++) {
			for(var innerIndex=0;innerIndex< mainCheckedItems.length;innerIndex++) {
				//alert("checkedItemsArray[outerIndex] = mainCheckedItems[innerIndex] :" +checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]);
				//alert("checkedItemsArray[outerIndex] = mainCheckedItems[innerIndex] :" +checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]);
				if(checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]) {
					break;
				}
				else {
					if(innerIndex == (mainCheckedItems.length - 1)) {
					checkItemArrayUpdated[checkedIndex] = checkedItemsArray[outerIndex];
					checkedIndex++;
					}
					
				}
			}
		}
		
		for(var index=0; index < checkItemArrayUpdated.length;index++) {
			alert("new checked items : "+checkItemArrayUpdated[index]);
			console.log("new checked items : "+checkItemArrayUpdated[index]);
		}
		
		for(var outerIndex=0;outerIndex < uncheckItemArray.length;outerIndex++) {
			for(var innerIndex=0;innerIndex< mainUncheckItems.length;innerIndex++) {
				//alert("checkedItemsArray[outerIndex] = mainCheckedItems[innerIndex] :" +checkedItemsArray[outerIndex] == mainCheckedItems[innerIndex]);
				if(uncheckItemArray[outerIndex] == mainUncheckItems[innerIndex]) {
					break;
				}
				else {
					if(innerIndex == (mainUncheckItems.length - 1)) {
					uncheckedItemArrayUpdated[uncheckedIndex] = uncheckItemArray[outerIndex];
					uncheckedIndex++;
					}
					
				}
			}
		}
		
		for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
			alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
				console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
		}
		
		

		
		}
		
	function filterCheckedUncheckTagUrl1(){


	
	var contentTypeCheckBoxIdArray = new Array();

              contentTypeCheckBoxIdArray[0] = '#filesTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[1] = '#docsTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[2] = '#ideaTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[3] = '#pollTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[4] = '#blogTable input[type=checkbox]';
                  contentTypeCheckBoxIdArray[5] = '#discTable input[type=checkbox]';


                  var checkedIndex = 0;
                  var uncheckedIndex = 0;
        var val = [];
                                for(index =0;index <  contentTypeCheckBoxIdArray.length;index++) {
        //$('#filesTable input[type=checkbox]').each(function(i){
                                $(contentTypeCheckBoxIdArray[index]).each(function(i){
                                                
                                val[i] = $(this).val();
                                // alert(val[i]);
                                if(val[i] != 'on'){
                                if($(this).is(':checked')){
                                //alert("true");
                                                checkedItemsArray[checkedIndex] = $(this).val();
                                                checkedIndex++;
                                }
                                else {
                                                                // alert("false");
                                                uncheckItemArray[uncheckedIndex] = $(this).val();
                                                uncheckedIndex++;
                                }
                                }
                                
                
                    });
                                
                                }
									
	for(var index=0; index < checkedItemsArray.length;index++) {
      //alert("new checked items : "+checkedItemsArray[index]);
      console.log("new checked items : "+checkedItemsArray[index]);
    }
  for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
      //alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
      console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
    }

                                //alert("checkedItemsArray.length = "+checkedItemsArray.length);
                                //console.log("checkedItemsArray.length = "+checkedItemsArray.length);
                                //alert("uncheckItemArray.length = "+uncheckItemArray.length);
                                //console.log("uncheckItemArray.length = "+uncheckItemArray.length);
				catIndex = 0;
		        updateTagsForNewContents1();
		
		}

	  
function updateTagsForNewContents() {
	/*alert("Into the updateCategories for new contents");
	console.log("Into the updateCategories for new contents");
	for(var index=0; index < checkItemArrayUpdated.length;index++) {
			alert("new checked items : "+checkItemArrayUpdated[index]);
			console.log("new checked items : "+checkItemArrayUpdated[index]);
		}
	for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
			alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
				console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
		}

		alert("checkItemArrayUpdated.length = "+checkItemArrayUpdated.length+" catIndex ="+catIndex);
	console.log("checkItemArrayUpdated.length = "+checkItemArrayUpdated.length+" catIndex="+catIndex);*/
		
if(catIndex < checkItemArrayUpdated.length) {

	var contentURL = checkItemArrayUpdated[catIndex];
	var toUpdateTags;
	var toTagsArray;
	var updatedTagList = new Array();
	
	//alert("contentURL got is ="+contentURL);
	console.log("contentURL got is ="+contentURL);
	osapi.jive.corev3.contents.get({
	fields: '@all',	
	uri: contentURL
	}).execute(function(contentCatResponseObj){
				//alert(JSON.stringify(contentCatResponseObj));
				console.log(JSON.stringify(contentCatResponseObj));
				
					//alert(contentCatResponseObj.tags);
					//alert("selected_cat = "+selected_cat);
				toUpdateTags = contentCatResponseObj.tags;
				//toUpdateTags = toUpdateTags+','+selected_cat;
				//toUpdateTags = ["cat1","cat2","cat3"];
				//toTagsArray = toUpdateTags.split(",");
				var tempIndex =0;
				for(var index=0;index < toUpdateTags.length;index++,tempIndex++) {
						alert("---cc-"+toUpdateTags[index]);
						console.log("---cc-"+toUpdateTags[index]);
						updatedTagList[tempIndex]=toUpdateTags[index];
				}
					updatedTagList[tempIndex]=selected_cat;
				//toUpdateTags = selected_cat;
				//alert("toUpdateTags = "+toUpdateTags);
				console.log("toUpdateTags = "+toUpdateTags);
				//contentCatResponseObj.tags = toUpdateTags;
				contentCatResponseObj.tags = updatedTagList;
				contentCatResponseObj.update().execute(function(catUpdateResponse){
				//alert(JSON.stringify(catUpdateResponse));
				console.log(JSON.stringify(catUpdateResponse));
				});
				catIndex++;
				updateTagsForNewContents();
				
			});

}
else {
catIndex = 0;
removeTagsForContents();
}

}

function updateTagsForNewContents1() {
	//alert("Into the updateCategories for new contents");
	console.log("Into the updateCategories for new contents");
	for(var index=0; index < checkedItemsArray.length;index++) {
			//alert("new checked items : "+checkedItemsArray[index]);
			//console.log("new checked items : "+checkedItemsArray[index]);
		}
	for(var index=0;index < uncheckedItemArrayUpdated.length;index++) {
			//alert("new unchecked items : "+uncheckedItemArrayUpdated[index]);
			//	console.log("new unchecked items : "+uncheckedItemArrayUpdated[index]);
		}

		//alert("checkItemArrayUpdated.length = "+uncheckItemArray.length+" catIndex ="+catIndex);
	//console.log("checkItemArrayUpdated.length = "+uncheckItemArray.length+" catIndex="+catIndex);
		
if(catIndex < checkedItemsArray.length) {

	var contentURL = checkedItemsArray[catIndex];
	var toUpdateTags;
	var toTagsArray;
	var updatedTagList = new Array();
	var isTagExisting =false;
	
	//alert("contentURL got is ="+contentURL);
	console.log("contentURL got is ="+contentURL);
	alert("contentURL="+contentURL);
	
	if(contentURL != 'undefined')
	{
	osapi.jive.corev3.contents.get({
	fields: '@all',	
	uri: contentURL
	}).execute(function(contentCatResponseObj){
				//alert(JSON.stringify(contentCatResponseObj));
				//console.log(JSON.stringify(contentCatResponseObj));
				
					//console.log(contentCatResponseObj.tags);
					//alert("selected_cat = "+selected_cat);
				toUpdateTags = contentCatResponseObj.tags;
				
				var tempIndex =0;
				for(var index=0;index < toUpdateTags.length;index++,tempIndex++) {
						//alert("---cc-"+toUpdateTags[index]);
						//console.log("---cc-"+toUpdateTags[index]);
						updatedTagList[tempIndex]=toUpdateTags[index];
						if(toUpdateTags[index] == selected_tag) {
						isTagExisting = true;
						}
						
						
				}
			//	alert("isTagExisting = "+isTagExisting);
					if(!isTagExisting){
						updatedTagList[tempIndex]=selected_tag;
						isTagExisting = false;
					}
					
				for(var index=0;index < updatedTagList.length;index++,tempIndex++) {
					//console.log("VVVV-- "+updatedTagList[index]);
				}
				
				//console.log("toUpdateTags = "+toUpdateTags);
				
				contentCatResponseObj.tags = updatedTagList;
				                
				contentCatResponseObj.update().execute(function(catUpdateResponse){
				
				//console.log("updated --"+JSON.stringify(catUpdateResponse));
				
				if (catUpdateResponse.error){
        errorReferenceCatArray[referenceCatArrayIndex] = contentCatResponseObj.resources.html.ref;
        referenceCatArrayIndex++;
        
        }

				
				});
				catIndex++;
				updateTagsForNewContents1();
				
			});
			}

}
else {
catIndex = 0;
removeTagsForContents();
}

}

function removeTagsForContents() {
	
		
if(catIndex < uncheckItemArray.length) {

	var contentURL = uncheckItemArray[catIndex];
	var toUpdateTags;
	var toTagsArray;
	var updatedCategoryList = new Array();
	
	//alert("contentURL got is ="+contentURL);
	console.log("contentURL got is ="+contentURL);
	osapi.jive.corev3.contents.get({
	fields: '@all',	
	uri: contentURL
	}).execute(function(contentCatResponseObj){
				//alert(JSON.stringify(contentCatResponseObj));
				console.log(JSON.stringify(contentCatResponseObj));
				
					//alert(contentCatResponseObj.categories);
					//alert("selected_cat = "+selected_cat);
				toUpdateTags = contentCatResponseObj.tags;
				//toUpdateTags = toUpdateTags+','+selected_cat;
				//toUpdateTags = ["cat1","cat2","cat3"];
				//toTagsArray = toUpdateTags.split(",");
				var tempIndex =0;
				for(var index=0;index < toUpdateTags.length;index++) {
						if(selected_cat != toUpdateTags[index]){
						//	alert("---cc-"+toUpdateTags[index]);
							console.log("---cc-"+toUpdateTags[index]);
							updatedCategoryList[tempIndex]=toUpdateTags[index];
							tempIndex++;
						}
				}
				
				//toUpdateTags = selected_cat;
				//alert("toUpdateTags = "+toUpdateTags);
				console.log("toUpdateTags = "+toUpdateTags);
				//contentCatResponseObj.categories = toUpdateTags;
				contentCatResponseObj.tags = updatedCategoryList;
				contentCatResponseObj.update().execute(function(catUpdateResponse){
				//alert(JSON.stringify(catUpdateResponse));
				console.log("UPDated -- "+JSON.stringify(catUpdateResponse));
				});
				catIndex++;
				removeTagsForContents();
				
			});

}
else {
            for(var index = 0;index < errorReferenceCatArray.length;index++) {
              console.log("Could Not Reference "+errorReferenceCatArray[index]);
            } 

            for(var index = 0;index < errorDeReferenceCatArray.length;index++) {
              console.log("Could Not De-Reference "+errorDeReferenceCatArray[index]);
            }  
	console.log("Category "+selected_cat+" succesfully updated");
		//alert("Category "+selected_cat+" succesfully updated");
		var tempRedirectionUrl = source_html_url+'/content?filterID=contentstatus[published]~tag['+selected_cat+']';
		
		console.log("temRedirectionUrl = "+tempRedirectionUrl);
		/*$("#stylized").fadeOut(5000,function(){
		window.location = window.location = tempRedirectionUrl;
			});*/
			
		/*document.getElementById("frame1").contentDocument.body.innerHTML = "Updating is in Progress.<br>Please leave this window open until the updating process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+"'Moving completed. Please click   <a href='+tempRedirectionUrl+'>here </a>  for the new location of your content.'.fontcolor("#3778C7")+"</span>";*/
		//var str='Updating categories is completed. Please click   <a href='+tempRedirectionUrl+'>here </a>  for the new location of your content.';
		var str='Updating categories is completed. Please click   <a href="" onclick="javascript:window.open(\''+tempRedirectionUrl+'\,\'_blank\')">here </a>  for the new location of your content.';

		console.log(str);
		document.getElementById("frame1").contentDocument.body.innerHTML = "Updating Categories in Progress.<br>Please leave this window open until the moving process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
		
		
}



}
	
	

//**********************End of the code for tags*******************
function getFiles(space_url)
{
// fetches the files from the selected space/group/project using the SPACE_URL.

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
console.log(document.getElementById("file_cb"+index).value);
var temp_id="file_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
}
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
console.log(document.getElementById("file_cb"+index).value);
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

});
};

function getBlogs(blog_url)
{
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
console.log(document.getElementById("blog_cb"+index).value);
var temp_id="blog_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;

}
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
console.log(document.getElementById("blog_cb"+index).value);
var temp_id="blog_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
}
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

});
};

function getDocs(space_url)
{

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
console.log(document.getElementById("doc_cb"+index).value);
var temp_id="doc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;

}
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
console.log(document.getElementById("doc_cb"+index).value);
var temp_id="doc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
}
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
});
};

function getDiscussions(space_url){

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
console.log(document.getElementById("disc_cb"+index).value);
var temp_id="disc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;

}
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
console.log(document.getElementById("disc_cb"+index).value);
var temp_id="disc_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
}
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
});

};

function getIdeas(space_url){

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
console.log(document.getElementById("idea_cb"+index).value);
var temp_id="idea_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;

}
}

}
else if (sel_action_val=='tags')
{
var tags=postIdea.tags;
console.log("tags: "+tags);
idea_row = idea_row + '<tr>'+
'<td style="border:1px ;border: 1px solid #000000;text-align:right;padding:2px;">'+'<input type="checkbox" id="idea_cb'+index+'" name="idea_cb" class="idea_cb" onclick="javascript:checkUncheck(this.name);" value="'+postIdea.fileUrl+'">'+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postIdea.title+'</td>'+
'<td style="border:1px ;border: 1px solid #000000;padding: 2px;">'+postIdea.tags+'</td>'+
'</tr>';

for(var ind=0;ind<tags.length;ind++)
{
if (tags[ind]==selected_tag)
{
console.log("tags= "+tags);
console.log("selected_tag= "+selected_tag);
console.log(document.getElementById("idea_cb"+index).value);
var temp_id="idea_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
}
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
});
};

function getPolls(space_url)
{
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
console.log(document.getElementById("poll_cb"+index).value);
var temp_id="poll_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;

}
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
console.log(document.getElementById("poll_cb"+index).value);
var temp_id="poll_cb"+index;
console.log("temp_id= "+temp_id);
addId[arrayIndex]=temp_id;
console.log("Array val: "+addId[arrayIndex]);
arrayIndex++;
}
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

});
};

function checkedAll(selCheckId){

// check/uncheck all the checkboxes if the one in header is checked/unchecked.

var tab='';
if(selCheckId=='sel_all_files')
{
tab = document.getElementById ("filesTable");
}
else if(selCheckId=='sel_all_docs')
{
tab = document.getElementById ("docsTable");
}
else if(selCheckId=='sel_all_disc')
{
tab = document.getElementById ("discTable");
}
else if(selCheckId=='sel_all_ideas')
{
tab = document.getElementById ("ideaTable");
}else if(selCheckId=='sel_all_polls')
{
tab = document.getElementById ("pollTable");
}else if(selCheckId=='sel_all_blogs')
{
tab = document.getElementById ("blogTable");
}
var elems = tab.getElementsByTagName ("input");
var len = elems.length;
var sel_all=document.getElementById(selCheckId);

if(sel_all.checked==true)
{
for ( var i = 0; i < len; i++ )
{
if ( elems[i].type == "checkbox" )
{
elems[i].checked = true;
}
}
}
else if(sel_all.checked==false)
{
for ( var i = 0; i < len; i++ )
{
if ( elems[i].type == "checkbox" )
{
elems[i].checked = false;
}
}
}

};

function checkUncheck(name)
{
// check/uncheck the checkbox in header if all the others below are checked/unchecked.

var id='';
var mcb_id='';
var check='';
if(name=="file_cb")
{
id='sel_all_files';
mcb_id='#'+id;
name='.'+name;
var rowCount = $('#filesTable tr').length;
if(rowCount==2)
$(mcb_id).attr('checked', 'checked');
else
$(mcb_id).removeAttr("checked");
}
else if(name=="doc_cb")
{
id='sel_all_docs';
mcb_id='#'+id;
name='.'+name;
var rowCount = $('#docsTable tr').length;
if(rowCount==2)
$(mcb_id).attr('checked', 'checked');
else
$(mcb_id).removeAttr("checked");
}
else if(name=="disc_cb")
{
id='sel_all_disc';
mcb_id='#'+id;
name='.'+name;
var rowCount = $('#discTable tr').length;
if(rowCount==2)
$(mcb_id).attr('checked', 'checked');
else
$(mcb_id).removeAttr("checked");
}
else if(name=="idea_cb")
{
id='sel_all_ideas';
mcb_id='#'+id;
name='.'+name;
var rowCount = $('#ideaTable tr').length;
if(rowCount==2)
$(mcb_id).attr('checked', 'checked');
else
$(mcb_id).removeAttr("checked");
}
else if(name=="poll_cb")
{
id='sel_all_polls';
mcb_id='#'+id;
name='.'+name;
var rowCount = $('#pollTable tr').length;
if(rowCount==2)
$(mcb_id).attr('checked', 'checked');
else
$(mcb_id).removeAttr("checked");
}
else if(name=="blog_cb")
{
id='sel_all_blogs';
mcb_id='#'+id;
name='.'+name;
var rowCount = $('#blogTable tr').length;
if(rowCount==2)
$(mcb_id).attr('checked', 'checked');
else
$(mcb_id).removeAttr("checked");
}

check=name+':checked';

$(mcb_id).click(function () {
$(name).attr('checked', this.checked);
});

$(name).click(function(){
if($(name).length == $(check).length) {
$(mcb_id).attr("checked", "checked");
} else {
$(mcb_id).removeAttr("checked");
}
});

};

function highlightTab()
{
// highlight the tab on which the user clicks by adding a blue border and underline.
$("#docs_tab").addClass("borderadd");
$("#disc_tab").addClass("borderadd");
$("#idea_tab").addClass("borderadd");
$("#blog_tab").addClass("borderadd");
$("#poll_tab").addClass("borderadd");
$("li.active").removeClass("active");
$("#files_tab").removeClass("borderadd");
$("#files_tab").addClass("active");
$('li').click(function() {
$("li.active").addClass("borderadd");
$("li.active").removeClass("active");
$(this).addClass('active');
$(this).removeClass('borderadd');
});

}

function showTab(){

// actions when user choses to select content he wants to copy/move/delete/download.

//checking of checkboxes
console.log("array Len: "+addId.length);
 for (var i=0; i<addId.length; i++) 
 {
 console.log("value: "+addId[i]);
 document.getElementById(addId[i]).checked = true;
 }
//end checking of checkboxes

$("#stylized").hide();
$("#selection_menu").show();

$("#files_div").show();
$("#docs_div").hide();
$("#disc_div").hide();
$("#idea_div").hide();
$("#poll_div").hide();
$("#blog_div").hide();

$("#files_tab").click(function () {
$("#files_div").show();
$("#docs_div").hide();
$("#disc_div").hide();
$("#idea_div").hide();
$("#poll_div").hide();
$("#blog_div").hide();
});	

$("#docs_tab").click(function () {
$("#files_div").hide();
$("#docs_div").show();
$("#disc_div").hide();
$("#idea_div").hide();
$("#poll_div").hide();
$("#blog_div").hide();
});	

$("#disc_tab").click(function () {
$("#files_div").hide();
$("#docs_div").hide();
$("#disc_div").show();
$("#idea_div").hide();
$("#poll_div").hide();
$("#blog_div").hide();
});	

$("#idea_tab").click(function () {
$("#files_div").hide();
$("#docs_div").hide();
$("#disc_div").hide();
$("#idea_div").show();
$("#poll_div").hide();
$("#blog_div").hide();
});

$("#poll_tab").click(function () {
$("#files_div").hide();
$("#docs_div").hide();
$("#disc_div").hide();
$("#idea_div").hide();
$("#poll_div").show();
$("#blog_div").hide();
});

$("#blog_tab").click(function () {
$("#files_div").hide();
$("#docs_div").hide();
$("#disc_div").hide();
$("#idea_div").hide();
$("#poll_div").hide();
$("#blog_div").show();
});
};

var all_selected=''; 

function goBack(){
// handles the code for creating the final selection tables and the list of values to be passed to the server/javascript
if(sel_action_val=="categs")
{
	
		startUpdatingCategories();
}
else if(sel_action_val=="tags")
{
	
		startUpdatingTags();
}
else {
	alert("sdgdfg");
all_selected='';
Grp_file_json='';
Grp_doc_json='';
Grp_idea_json='';
Grp_disc_json='';
Grp_blog_json='';
Grp_poll_json='';

$("#button_div").hide();
document.getElementById("copyTo").style.visibility="visible";
document.getElementById("start_copying_button").disabled = false;
if(sel_action_val=="move"){
$('#selected_items').css("margin-top", "-10px");
}
else if(sel_action_val=="delete"){
$('#selected_items').css("margin-top", "70px");
}

$("#docs_div").hide();
$("#files_div").hide();
$("#disc_div").hide();
$("#idea_div").hide();
$("#poll_div").hide();
$("#blog_div").hide();
document.getElementById("del_select_items_button").style.display="inline";
document.getElementById("dwn_select_items_button").style.display="inline";
$("#del_select_items_button").hide();
$("#dwn_select_items_button").hide();
document.getElementById("up_select_items_button").style.display="inline";
$("#up_select_items_button").hide();

if(sel_action_val=="delete")
{
document.getElementById("start_copying_button").style.visibility="visible";
document.getElementById("start_uploading").style.visibility="hidden";
}else if(sel_action_val=="download")
{
document.getElementById("start_copying_button").style.visibility="visible";
document.getElementById("start_uploading").style.visibility="hidden";
}

$("#selection_menu").hide();
$("#stylized").show();
$("#change_selection_div").show();
$("#change_contents").show();
$("#start_copying_button").show();
document.getElementById("start_uploading").style.visibility="hidden";

// creating the header for the final selection table.
all_selected='<TABLE id="all_selected_items" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 600px;">'
+'<col width="400px" /><col width="120px" /><col width="10px" />'
+'<tr>'+
'<td style="border:1px ;border: 1px solid #000000;width: 43px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>Title</strong></td>'+
'<td style="border:1px ;border: 1px solid #000000;width: 43px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>Author</strong></td>'+
'<td style="border:1px ;border: 1px solid #000000;width: 43px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>Type</strong></td>'+
'</tr>';

$('#filesTable input[type=checkbox]:checked').each(function() { 
// getting self url's of files from the files table and adding them to files JSON.
if($(this).val()!='on'){
Grp_file_json = Grp_file_json+$(this).val()+';';
var row = $(this).parent().parent();
var rowcells = row.find('td');

if(rowcells[1].textContent!='Title'){
all_selected=all_selected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[1].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[2].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">File</td>'+
'</tr>';
}   
}
});

$('#docsTable input[type=checkbox]:checked').each(function() { 
// getting self url's of files from the files table and adding them to files JSON.
if($(this).val()!='on'){
Grp_doc_json = Grp_doc_json+$(this).val()+';';
var row = $(this).parent().parent();
var rowcells = row.find('td');

if(rowcells[1].textContent!='Title'){
all_selected=all_selected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[1].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[2].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">Documents</td>'+
'</tr>';
}
}
});

$('#discTable input[type=checkbox]:checked').each(function() { 
// getting self url's of files from the files table and adding them to files JSON.
if($(this).val()!='on'){
Grp_disc_json = Grp_disc_json+$(this).val()+';';
var row = $(this).parent().parent();
var rowcells = row.find('td');

if(rowcells[1].textContent!='Title'){
all_selected=all_selected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[1].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[2].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">Discussions</td>'+
'</tr>';
}
}
});

$('#ideaTable input[type=checkbox]:checked').each(function() { 
// getting self url's of files from the files table and adding them to files JSON.
if($(this).val()!='on'){
Grp_idea_json = Grp_idea_json+$(this).val()+';';
var row = $(this).parent().parent();
var rowcells = row.find('td');

if(rowcells[1].textContent!='Title'){
all_selected=all_selected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[1].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[2].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">Ideas</td>'+
'</tr>';
}
}
});

$('#pollTable input[type=checkbox]:checked').each(function() { 
// getting self url's of files from the files table and adding them to files JSON.
if($(this).val()!='on'){
Grp_poll_json = Grp_poll_json+$(this).val()+';';
var row = $(this).parent().parent();
var rowcells = row.find('td');

if(rowcells[1].textContent!='Title'){
all_selected=all_selected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[1].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[2].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">Polls</td>'+
'</tr>';
}
}
});

$('#blogTable input[type=checkbox]:checked').each(function() { 
// getting self url's of files from the files table and adding them to files JSON.
if($(this).val()!='on'){
Grp_blog_json = Grp_blog_json+$(this).val()+';';
var row = $(this).parent().parent();
var rowcells = row.find('td');

if(rowcells[1].textContent!='Title'){
all_selected=all_selected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[1].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+rowcells[2].textContent+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">Blogs</td>'+
'</tr>';
}
}
});


all_selected=all_selected+'</table>';

// writing all selected files to the final selection table on the app home page.
document.getElementById("selected_items").innerHTML=all_selected;  

var count = $('#all_selected_items tr').length;
if (count==1)
{
// actions when no content has been selected by the user.
all_selected='<table name="all_selected_items" id="all_selected_items" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 600px;">'
+'<col width="400px" /><col width="120px" /><col width="10px" />'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No content selected.</strong></td></tr></table>';
document.getElementById("start_copying_button").disabled = true;
document.getElementById("selected_items").innerHTML=all_selected;
}
}
};

function startUpdatingCategories() {
	//alert("catagory selectionn....");
	//alert("browserName = "+browserName);


$("#selection_menu").hide();
$("#stylized").show();
$("#change_selection_div").show();
$("#change_contents").hide();
$("#start_copying_button").hide();

$("#cmdu").show();
$("#cmdu").text("Manage Categories");
$("#src_place").hide();
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
$("#cat_place").hide();
$("#cat_sel").hide();
$("#selCat").hide();
$('#catTo').css("margin-top", "170px");
$("#catTo").show();
$("#catTo").text("Manage content for this category:");
$("#cat_select_items_button").hide();



$("#selected_items").show();

if(browserName=="MSIE")
{
var ieSpan='<span id="ieSpan" style="font-family:Tahoma;font-size:12px;font-color:#3778C7;"></span>';
document.getElementById("selected_items").innerHTML=ieSpan; 
}
else
{
var iframe = '<iframe id="frame1"  style="width:650px;height:90px;margin-top:0px;font-family:Tahoma"></iframe>';
document.getElementById("selected_items").innerHTML=iframe;  
$("#catTo").text("Updating Categories");
}

if(browserName=="MSIE")
{
var finalurl=redirection_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents are being update with category. The update contents will appear here in a short while: <a href='+'URL'+'>'+''+' - Contents</a>';
}
else
{
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = "Updating categories is in Progress.<br>Please leave this window open until the updating process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+'Updating content'.fontcolor("#3778C7")+"</span>";
}
	for(var index=0; index < mainCheckedItems.length;index++) {
		//	alert("checked items : "+mainCheckedItems[index]);
			//console.log("checked items : "+mainCheckedItems[index]);
		}
		
		for(var index=0;index < mainUncheckItems.length;index++) {
		//alert("unchecked items : "+mainUncheckItems[index]);
			//console.log("unchecked items : "+mainUncheckItems[index]);
		}
		
		//alert("mainCheckedItems.length = "+mainCheckedItems.length);
		//console.log("mainCheckedItems.length = "+mainCheckedItems.length);
		//alert("mainUncheckItems.length = "+mainUncheckItems.length);
		//console.log("mainUncheckItems.length = "+mainUncheckItems.length);
		//***********************************
		filterCheckedUncheckCatgUrl1();
		
	
		catIndex = 0;
		//updateCategoriesForNewContents1();
		//removeCategoriesForContents();
}



function startUpdatingTags() {
	//alert("tag selectionn....");
	//alert("browserName = "+browserName);


$("#selection_menu").hide();
$("#stylized").show();
$("#change_selection_div").show();
$("#change_contents").hide();
$("#start_copying_button").hide();

$("#cmdu").show();
$("#cmdu").text("Manage Tags");
$("#src_place").hide();
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
$("#tag_place").hide();
$("#tag_sel").hide();
$("#selTag").hide();
$("#tagTo").show();
$("#tag_select_items_button").hide();



$("#selected_items").show();

if(browserName=="MSIE")
{
var ieSpan='<span id="ieSpan" style="font-family:Tahoma;font-size:12px;font-color:#3778C7;"></span>';
document.getElementById("selected_items").innerHTML=ieSpan; 
}
else
{
var iframe = '<iframe id="frame1"  style="width:650px;height:90px;margin-top:0px;font-family:Tahoma"></iframe>';
document.getElementById("selected_items").innerHTML=iframe;  
$("#tagTo").text("Updating this:");
}

if(browserName=="MSIE")
{
var finalurl=redirection_url+'/content';
document.getElementById("ieSpan").innerHTML = 'The selected contents are being update with tag. The update contents will appear here in a short while: <a href='+'URL'+'>'+''+' - Contents</a>';
}
else
{
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = "Updating tags is in Progress.<br>Please leave this window open until the updating process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+'Updating content'.fontcolor("#3778C7")+"</span>";
}
	for(var index=0; index < mainCheckedItems.length;index++) {
		//	alert("checked items : "+mainCheckedItems[index]);
			//console.log("checked items : "+mainCheckedItems[index]);
		}
		
		for(var index=0;index < mainUncheckItems.length;index++) {
		//alert("unchecked items : "+mainUncheckItems[index]);
			//console.log("unchecked items : "+mainUncheckItems[index]);
		}
		
		//alert("mainCheckedItems.length = "+mainCheckedItems.length);
		//console.log("mainCheckedItems.length = "+mainCheckedItems.length);
		//alert("mainUncheckItems.length = "+mainUncheckItems.length);
		//console.log("mainUncheckItems.length = "+mainUncheckItems.length);
		//***********************************
		filterCheckedUncheckTagUrl1();
		
	
		catIndex = 0;
		//updateTagsForNewContents1();
		//removeTagsForContents();
}
function startCopying(){
// handles actions after clicking the start copy button.

$("#cmdu").show();
$("#src_place").hide();
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
$("#from_place").hide();
$("#to_place").hide();

if(browserName=="MSIE")
{
// actions when the app is used in IE.
var finalurl=redirection_url+'/content';

// we add static message to IE and do not use the iframe based tracker because of compatibility issues.
var ieSpan='<span id="ieSpan" style="font-family:Tahoma;font-size:12px;font-color:#3778C7;">The selected contents are being copied. This may take a while depending on the number of contents and files that have been selected. The process will be completed in the background so you can close this window. The copies of the selected contents will be available after completion here: <a href='+finalurl+'>'+dest_space_name+' - Contents</a></span>';
document.getElementById("selected_items").innerHTML=ieSpan; 

dest_space_name=dest_space_name.toLowerCase();
dest_space_name=dest_space_name.replace(/[^a-z0-9-\s]/gi, '').replace(/[_\s]/g, '-');

// OSAPI call to send the details to the server for copying.
osapi.http.get({
'href' : 'http://ec2-54-246-36-246.eu-west-1.compute.amazonaws.com:8080/AIDealRoom-CopyAppv1/AIServlet?srcgroup_place_url='+space_url+'&target_groupurl='+to_url+'&src_group_file='+Grp_file_json+'&src_group_document='+Grp_doc_json+'&src_idea='+Grp_idea_json+'&src_discussion='+Grp_disc_json+'&src_blog='+Grp_blog_json+'&src_poll='+Grp_poll_json+'&logged-user='+loggedUser+'&logged-userName='+loggedUserName+'&group-name='+dest_space_name,
'format' : 'json',
'authz' : 'signed'
}).execute(blankMethod);
}
else
{
// actions when the app is used in any other browser.
var iframe = '<iframe id="frame1" src = "javascript:"&nbsp;" style="width:650px;height:90px;margin-top:0px;font-family:Tahoma"></iframe>';
document.getElementById("selected_items").innerHTML=iframe;  
$("#copyTo").text("Copying this:");

dest_space_name=dest_space_name.toLowerCase();
dest_space_name=dest_space_name.replace(/[^a-z0-9-\s]/gi, '').replace(/[_\s]/g, '-');

var initialMsg='Please wait, initialising copying..';
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = "Copying in Progress.<br>Please leave this window open until the copying process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+initialMsg.fontcolor("#3778C7")+"</span>";

// OSAPI call to send the details to the server for copying.
osapi.http.get({
'href' : 'http://ec2-54-246-36-246.eu-west-1.compute.amazonaws.com:8080/AIDealRoom-CopyAppv1/AIServlet?srcgroup_place_url='+space_url+'&target_groupurl='+to_url+'&src_group_file='+Grp_file_json+'&src_group_document='+Grp_doc_json+'&src_idea='+Grp_idea_json+'&src_discussion='+Grp_disc_json+'&src_blog='+Grp_blog_json+'&src_poll='+Grp_poll_json+'&logged-user='+loggedUser+'&logged-userName='+loggedUserName+'&group-name='+dest_space_name,
'format' : 'json',
'authz' : 'signed'
}).execute(refreshiframe);
}
};

var flag=false;

function blankMethod(response)
{
// to handle the response when the app is being used in IE.
// the method is blank because we are adding the call just to complete the syntax.
}

function refreshiframe() 
{ 
// to hit the logger servlet and get the response of which action is being done right now.
flag=true;
osapi.http.get({
'href' : 'http://ec2-54-246-36-246.eu-west-1.compute.amazonaws.com:8080/AIDealRoom-CopyAppv1/LoggerServlet?logged-user='+loggedUser+'&logged-userName='+loggedUserName,
'format' : 'text',
'authz' : 'signed'
}).execute(refreshFrameResponse);
};


function refreshFrameResponse(response) 
{
// refreshs iframe with the fresh messages being received from the server.
if(!flag)
{
refreshiframe();
}
setTimeout("refreshiframe()",1000); 	
var str=response.content;
var res='{ error: "Connect to /54.246.36.246:8080 timed out" }';
var errorCode=str.indexOf(res);
if(errorCode!=0)
{
// checks if the server is running
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = "Copying in Progress.<br>Please leave this window open until the copying process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";

var compare='You will be redirected to the "copy to" group.';

var pos=str.indexOf(compare);
if (pos!=-1)
{
// redirects to target place when the final message is received.
document.getElementById("frame1").contentDocument.body.innerHTML = "Copying in Progress.<br>Please leave this window open until the copying process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
$("#stylized").fadeOut(5000,function(){
window.location = redirection_url+'/content';
});
}
}
else
{
var serverMsg = "Server is stopped/down, check with the administrator.";
document.getElementById("frame1").contentDocument.body.innerHTML = "<br><br><span id='mySpan' style='font-weight:bold;'>"+serverMsg.fontcolor("#3778C7")+"</span>";
}	
}

var uploadSelected='';

function uploadFiles()
{
// handles the response for uploading files.
uploadSelected='';

uploadSelected='<input  style="visibility:hidden" type="text" name="loggedUser" value="'+loggedUser+'">'+
'<input  style="visibility:hidden" type="text" name="loggedUserName" value="'+loggedUserName+'">'+
'<input  style="visibility:hidden" type="text" name="to_url" value="'+to_url+'">'+

'<TABLE id="upload_selected_items" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 600px;">'
+'<col width="400px" /><col width="120px" /><col width="10px" />'
+'<tr>'+
'<td style="border:1px ;border: 1px solid #000000;width: 43px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>Name</strong></td>'+
'<td style="border:1px ;border: 1px solid #000000;width: 43px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>Size</strong></td>'+
'<td style="border:1px ;border: 1px solid #000000;width: 43px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: left;" valign="middle"><strong>Description [optional]</strong></td>'+
'</tr>';

// getting the details about the files selected by the user for upload.
var files = $('#up_select_items_button').prop("files");
var names = $.map(files, function(val) { return val.name; });
for(var i=0;i<names.length;i++)
{
var fileObject = document.getElementById('up_select_items_button').files[i];
var fileName=fileObject.name;
var fileSize=fileObject.size;
var sizeInMB = (fileSize / (1024*1024)).toFixed(2);
sizeInMB= sizeInMB +'MB';
var fileDesc='Please enter your description here.';

// listing the files selected for upload.
uploadSelected=uploadSelected+'<tr>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;"><input id="fileName'+i+'" size="45" type="text" name="fileName" value="'+fileName+'" onchange="javascript:getName(this,'+i+')"></td>'+
'<td style="color:black; border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;">'+sizeInMB+'</td>'+
'<td style="border:1px solid black;border: 1px solid #000000;text-align: left;padding: 2px;"><input id="fileDesc'+i+'" size="35" type="text" name="fileDesc" value="'+fileDesc+'" onchange="javascript:getDesc(this,'+i+')" onblur="javascript:clickrecall(this);" onclick="javascript:clickclear(this);" onfocus="javascript:clickclear(this);"  autocomplete="off" style="color:black;"></td>'+
'</tr>';
}

uploadSelected=uploadSelected+'</table>';

$("#change_selection_div").show();
//$("#up_select_items_button").hide();
$("#change_contents").hide();
$("#start_copying_button").hide();
document.getElementById("start_uploading").style.visibility="visible";	
document.getElementById("start_uploading").disabled = false;

document.getElementById("selected_items").innerHTML=uploadSelected;  
document.getElementById("form2").innerHTML=uploadSelected;  
var count = $('#upload_selected_items tr').length;
// count is taken as 2 because we are adding three dynamic textboxes in this table
// check if the selection is empty.
if (count==2)
{
uploadSelected='<table name="upload_selected_items" id="upload_selected_items" border="0" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#575757&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="{&quot;color&quot;:&quot;#FFFFFF&quot;,&quot;backgroundColor&quot;:&quot;#6690BC&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;padding&quot;:&quot;2&quot;,&quot;fontFamily&quot;:&quot;arial,helvetica,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #000000; width: 600px;">'
+'<col width="400px" /><col width="120px" /><col width="10px" />'+
'<tr><td colspan="4" style="border:1px ;border: 1px solid #000000;width: 60px;padding: 2px;color: #ffffff;background-color: #6690bc;text-align: center;" valign="middle"><strong>No content selected.</strong></td></tr></table>';
document.getElementById("start_copying_button").disabled = true;
document.getElementById("start_uploading").disabled = true;
document.getElementById("selected_items").innerHTML=uploadSelected;
}
$('#up_select_items_button').css("margin-top", "333px");
$('#up_select_items_button').css("margin-left", "-320px");
}

function clickclear(thisfield) {
// adding description and handling the description textfield.
if (thisfield.value == 'Please enter your description here.') {
thisfield.value = "";
thisfield.color="black";
}

}

function clickrecall(thisfield) {
// when the description is cleared add the defualt message.
if (thisfield.value == "") {
thisfield.value = 'Please enter your description here.';
}

}

function getName(data,counter){
// adding the new name in name textbox.
var id = 'fileName'+counter;
document.getElementById(id).value=data.value;
}
function getDesc(data,counter){
// adding the new description.
var id = 'fileDesc'+counter;

if(data.value!='Please enter your description here.')
document.getElementById(id).value=data.value;
else
document.getElementById(id).value='';
}

function startUploading(){

// handles the actions for upload functionality.
$("#cmdu").show();
$("#src_place").hide();
var files = $('#up_select_items_button').prop("files");
var names = $.map(files, function(val) { return val.name; });
for(var i=0;i<names.length;i++)
{
var val=document.getElementById('fileDesc'+i).value;
if(val=='Please enter your description here.')
document.getElementById('fileDesc'+i).value='';
}

$("#up_place").hide();
$("#up_select_items_button").hide();
$("#start_uploading").hide();
$("#upTo").text("Uploading this:");

var iframe = '<iframe id="frame1" src = "javascript:"&nbsp;" style="width:650px;height:90px;margin-top:0px;font-family:Tahoma"></iframe>';
document.getElementById("selected_items").innerHTML=iframe;  

var initialMsg1='Your files are now being uploaded. Please <u>do not close</u> this window.!<br/><br/>';
var initialMsg2='You will be redirected to the uploaded files once the upload is complete.<br/>';

document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = "<span id='mySpan' style='font-family:Tahoma;font-size:12px;font-weight:bold;'>"+initialMsg1.fontcolor("#3778C7")+"</span><span id='mySpan' style='font-weight:bold;'>"+initialMsg2.fontcolor("Grey")+"</span>";

document.getElementById('redirectVal').value=redirection_url;

document.getElementById("form2").submit();

}

var flag=false;

function uprefreshiframe() 
{ 

// for getting servlet response for upload functionality.
flag=true;

osapi.http.get({
'href' : 'http://ec2-54-246-36-246.eu-west-1.compute.amazonaws.com:8080/AIDealRoom-CopyAppv1/LoggerServlet?logged-user='+loggedUser+'&logged-userName='+loggedUserName,
'format' : 'text',
'authz' : 'signed'
}).execute(uprefreshFrameResponse);
};


function uprefreshFrameResponse(response) 
{
// refresh iframe for upload functionality.
if(!flag)
{
uprefreshiframe();
}
setTimeout("uprefreshiframe()",1000); 	
var str=response.content;
var res='{ error: "Connect to /54.246.36.246:8080 timed out" }';
var errorCode=str.indexOf(res);
if(errorCode!=0)
{
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = "Upload in Progress.<br>Please leave this window open until the upload process has completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";

var compare='You will be redirected to the "upload to" place.';

var pos=str.indexOf(compare);
if (pos!=-1)
{
document.getElementById("frame1").contentDocument.body.innerHTML = "Upload in Progress.<br>Please leave this window open until the upload process has completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
$("#stylized").fadeOut(5000,function(){
window.location = redirection_url;   
});
}
//}	
}
else
{
var serverMsg = "Server is stopped/down, check with the administrator.";
document.getElementById("frame1").contentDocument.body.innerHTML = "<br><br><span id='mySpan' style='font-weight:bold;'>"+serverMsg.fontcolor("#3778C7")+"</span>";
}	
}

function startMoving(){
// handles actions for move.
$("#cmdu").show();
$("#src_place").hide();
$("#from_place").hide();
$("#to_place").hide();
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
$("#copyTo").text("Moving this:");

// send data to JS file movendelete for move.
movendelete('move',space_url,to_url,Grp_file_json,Grp_doc_json,Grp_disc_json,Grp_idea_json,Grp_poll_json,Grp_blog_json,dest_space_name,redirection_url,source_html_url,src_space_name,to_place_blog_url,browserName);
};

function startDeleting(){
$("#cmdu").show();
$("#src_place").hide();
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
$("#del_place").hide();
$("#deleteTo").text("Deleting this:");

// send data to JS file movendelete for move.
movendelete('delete',space_url,to_url,Grp_file_json,Grp_doc_json,Grp_disc_json,Grp_idea_json,Grp_poll_json,Grp_blog_json,'test_name','test_url',source_html_url,src_space_name,to_place_blog_url,browserName);
};

function startDownloading()
{
// handles actions for download.
$("#cmdu").show();
$("#src_place").hide();
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
$("#dwn_place").hide();
$("#dwnTo").text("Downloading this:");

document.getElementById("dwnloadDataSend").value=Grp_file_json;

// submits the form to server for processing download.
document.getElementById("form3").submit();
var strDwnload="Closing this browser window will abort the operation.";

var ieSpan='<span id="ieSpan" style="font-family:Tahoma;font-size:12px;font-color:#3778C7;"><br/>Download is being prepared. DO NOT CLOSE THIS WINDOW.<br/>A zip file containing all selected contents is being assembled by the server.<br/>After that process is complete a download dialog will pop up giving you the option to save the zip file on your local hard drive.<br/><br/></span>'+
'<span id="ieSpan2" style="font-weight:bold;">'+strDwnload.fontcolor("#3778C7")+'</span>';

document.getElementById("selected_items").innerHTML=ieSpan;
}

$(document).ready(function() {

$("#hint").hide();
var tooltipValue = '';
var id='';

$("label").mouseenter(function(e){

id = this.id;
tooltipValue=document.getElementById(id).innerHTML;

$('div.tooltip').remove();

var compare='</span>';
var pos=tooltipValue.indexOf(compare);
if (pos!=-1)
{
$('<div class="tooltip">'+tooltipValue+'</div>').appendTo('body');
$('span#hint,label#'+id).bind({
mousemove : changeTooltipPosition,
mouseenter : showTooltip,
mouseleave: hideTooltip
});
}

});

var changeTooltipPosition = function(event) {
var tooltipX = event.pageX;
var tooltipY = event.pageY;
$('div.tooltip').css({top: tooltipY, left: tooltipX});
};

var showTooltip = function(event) {
changeTooltipPosition(event);
};

var hideTooltip = function() {
$('div.tooltip').remove();
};
});

function repopulateContents() {
selected_cat = '';
arrayIndex=0;
addId=new Array();
getDocs(space_url);
getFiles(space_url);
getDiscussions(space_url);
getIdeas(space_url);
getPolls(space_url);
getBlogs(blog_url);
}