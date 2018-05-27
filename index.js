function caption()
{
   
            var $button = $('#card1').clone();
            var img=prompt("enter your image");
            var caption=prompt("enter caption");
            var name=prompt("enter name");
            var tim=prompt("enter date of post");
           var pers_image=prompt("add person_image");
          
           $("#ig",$button).attr("src",img);
           $("#div4",$button).text(caption);
           $("#div3",$button).text(tim);
           $("#div2",$button).text(name);
           $("#div1",$button).css("background-image","url("+pers_image+")");

           $("#c1").append($button);
    }
