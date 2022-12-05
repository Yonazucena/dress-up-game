$(document).ready(function(){

    function ImageSwitcher(choices, i) {
        i = 0;
        
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function() {
            if(choices){
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }

    function ImageSwitcher_prev(choices, i) {
        i = 0;
        
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i -= 1;
            }
        }
        var show_next_image = function() {
            if(choices){
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
        
        var shirt_picker = new ImageSwitcher_prev(shirts);
        document.getElementById("shirt_button_prev").onclick = function() { shirt_picker.Next(); };

        var pants_picker = new ImageSwitcher(pants);
        document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
        
        var pants_picker = new ImageSwitcher_prev(pants);
        document.getElementById("pant_button_prev").onclick = function() {pants_picker.Next(); };

        var shoe_picker = new ImageSwitcher(shoe);
        document.getElementById("shoe_button").onclick = function() { shoe_picker.Next(); };
        
        var shoe_picker = new ImageSwitcher_prev(shoe);
        document.getElementById("shoe_button_prev").onclick = function() { shoe_picker.Next(); };

        var hair_picker = new ImageSwitcher(hair);
        document.getElementById("hair_button").onclick = function() {hair_picker.Next(); };
        
        var hair_picker = new ImageSwitcher_prev(hair);
        document.getElementById("hair_button_prev").onclick = function() {hair_picker.Next(); };
    
        var acc_picker = new ImageSwitcher(acc);
        document.getElementById("acc_button").onclick = function() {acc_picker.Next(); };
        
        var acc_picker = new ImageSwitcher_prev(acc);
        document.getElementById("acc_button_prev").onclick = function() {acc_picker.Next(); };

    });
    
      $("#shirt_button").click(function(){
      $("#shirt-menu").css("visibility", "visible"); });