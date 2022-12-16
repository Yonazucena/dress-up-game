$(document).ready(function(){

    function ImageSwitcher(choices, i) {
        
        i = 0;

        this.Next = function() {
            hide_current_image();
        }

        this.Prev = function() {
            hide_current_image_prev();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }

        var hide_current_image_prev = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i -= 1;
                if(i == -1) {
                    i = choices.length-1;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }
      
        var pants = $(".pant");
        var shirts = $(".shirt");
        var shoe = $(".shoe");
        var hair = $(".hair");
        var acc = $(".acc");

    
        var shirt_picker = new ImageSwitcher(shirts);
        document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
        document.getElementById("shirt_button_prev").onclick = function() { shirt_picker.Prev(); };

        var pants_picker = new ImageSwitcher(pants);
        document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
        document.getElementById("pant_button_prev").onclick = function() {pants_picker.Prev(); };

        var shoe_picker = new ImageSwitcher(shoe);
        document.getElementById("shoe_button").onclick = function() { shoe_picker.Next(); };
        document.getElementById("shoe_button_prev").onclick = function() { shoe_picker.Prev(); };

        var hair_picker = new ImageSwitcher(hair);
        document.getElementById("hair_button").onclick = function() {hair_picker.Next(); };
        document.getElementById("hair_button_prev").onclick = function() {hair_picker.Prev(); };
    
        var acc_picker = new ImageSwitcher(acc);
        document.getElementById("acc_button").onclick = function() {acc_picker.Next(); };
        document.getElementById("acc_button_prev").onclick = function() {acc_picker.Prev(); };

    });
    
      $("#shirt_button").click(function(){
      $("#shirt-menu").css("visibility", "visible"); });