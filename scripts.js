// JavaScript Document
// Just an Example
//    initial();
            function initial() 
            {
                var video = document.getElementById("video");
                video.pause();
                video.removeAttribute("controls");
            }
            
            function play() 
            {
                var video = document.getElementById("video");
                video.play();
            }
            
            window.addEventListener("scroll", 
            function() 
            {
                var scrolls = window.scrollY;
                console.log(scrolls);
                
                if (scrolls>200)
                {
                play();
                }
                else 
                {
                initial();
                }
            })