var name_of_the_students_array=[];
function submit() {
    var display_students_array=[];
    for(var j=1;j<=4;j++) {
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_students_array.push(name_of_the_student);
    }
    console.log(name_of_the_students_array);
    length_of_name_of_the_students_array=name_of_the_students_array.length;
    for(var k=0;k<length_of_name_of_the_students_array;k++) {
        display_students_array.push("<h4>Name : "+name_of_the_students_array[k]+"</h4>");
        console.log(display_students_array);
    }
    console.log(display_students_array);
    document.getElementById("display_name_with_commas").innerHTML=display_students_array;

    var remove_commas=display_students_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
    
    var length_of_name_of_the_students_array=name_of_the_students_array.length;
    var display_name_of_the_students=[];
    for(var i=0;i<length_of_name_of_the_students_array;i++) {
        display_name_of_the_students.push("<h4>Name : "+name_of_the_students_array[i]+"</h4>");
        console.log(display_name_of_the_students);
    }
    console.log(display_name_of_the_students);
    var remove_commas=display_name_of_the_students.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function update() {
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_of_the_students_array+"</h1>";
}