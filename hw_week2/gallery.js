/*Name this external file gallery.js*/

function upDate(previewPic){

  document.getElementById('image').innerHTML = previewPic.alt;
 document.getElementById('image').style.backgroundImage="url" + "("+ previewPic.src + ")";
 
    }

    function unDo(){
        
    document.getElementById('image').innerHTML='Hover over an image';
    document.getElementById('image').style.backgroundImage='none';
    
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
        
    }