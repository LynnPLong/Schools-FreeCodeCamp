
function titleCase(str) {
  var arr = str.split(" ");
  
   for ( var i = 0; i < arr.length; i++ )
    {
        var j = arr[i].charAt(0).toUpperCase();
        arr[i] = j + arr[i].substr(1).toLowerCase();
    }
  

return arr.join(" ");
}

titleCase("I'm a little tea pot");