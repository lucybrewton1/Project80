var name_of_guests_array=[];
function submit() {
    var name_of_guest=document.getElementById("input_name").value;
    name_of_guests_array.push(name_of_guest);
    document.getElementById("list_of_names_horizontal").style.display="inline-block";
    document.getElementById("list_of_names_horizontal").innerHTML=name_of_guests_array;
}
function show() {
    var display_list_of_names=[];
    var length_of_name_of_guests_array=name_of_guests_array.length;
    console.log(length_of_name_of_guests_array);
    for (var i=0;i<length_of_name_of_guests_array;i++) {
        display_list_of_names.push("<p>"+name_of_guests_array[i]+"</p>");
        console.log(display_list_of_names);
    }
    console.log(display_list_of_names);
    var remove_commas=display_list_of_names.join(" ");
    document.getElementById("list_of_names_vertical").style.display="inline-block";
    document.getElementById("button_sort").style.display="inline-block";
    document.getElementById("list_of_names_vertical").innerHTML=remove_commas;
}
function sort_list() {
    var display_list_of_names=[];
    name_of_guests_array.sort();
    var length_of_name_of_guests_array=name_of_guests_array.length;
    console.log(length_of_name_of_guests_array);
    for (var j=0;j<length_of_name_of_guests_array;j++) {
        display_list_of_names.push("<p>"+name_of_guests_array[j]+"</p>");
        console.log(display_list_of_names);
    }
    console.log(display_list_of_names);
    var remove_commas=display_list_of_names.join(" ");
    document.getElementById("list_of_names_sorted").style.display="inline-block";
    document.getElementById("list_of_names_sorted").innerHTML=remove_commas;
}
function search() {
    var s=document.getElementById("find_name_input").value;
    var found=0;
    for (var k=0;k<name_of_guests_array.length;k++) {
        if (s==name_of_guests_array[k]){
            found=found+1;
        }
    }
    document.getElementById("name_found_label").style.display="inline-block";
    document.getElementById("find_name_input").style.display="none";
    document.getElementById("search_button").style.display="none";
    document.getElementById("name_found_label").innerHTML="name found "+found+" time/s";
    console.log("name found"+found+"time/s");
}