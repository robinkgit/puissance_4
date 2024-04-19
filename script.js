export class plateau {
    constructor(){
        var prompt_col = prompt("Entrez le nombre de colonnes pour le plateau");
        var prompt_row = prompt("Entrez le nombre de ligne pour le plateau");
        var prompt_color_p1 = prompt("Choisissez la couleur du Joueur 1 (red, yellow, green, purple)");
        var prompt_color_p2 = prompt("Choisissez la couleur du Joueur 2 (red, yellow, green, purple)");

       // var prompt_color_p1 = "red";
       // var prompt_color_p2 = "yellow";
        this.plateau(prompt_col,prompt_row,prompt_color_p1,prompt_color_p2);
    }
    
    plateau = (col_plateau,row_plateau, prompt_color_p1,prompt_color_p2 ) => {
        var player_id = 1;
        var player_1_color = prompt_color_p1;
        var player_2_color = prompt_color_p2;
        var p1_check_win = 0;
        var p2_check_win = 0;
        var l = 0;
        var test2 = 0;
        var n = 0;
        var attr_x = "";
        var attr_y = "";
        var w = 0;
        var m =0;

        var compteur_p1 = 0;
        var compteur_p2 = 0;

        var placement_x;
        var placement_y;


        var div = document.createElement("div");
        document.body.append(div)
       // console.log(div);
        var table = document.createElement("table");
        table.setAttribute("id","plateau")
        div.append(table);
        table.style.backgroundColor = "#1f90ff";
        table.style.width = "3rem";
        var p = document.createElement("p");
        p.innerHTML = "Au tour du Joueur " + player_id;
        p.setAttribute("id","turn")
        div.append(p);
        var button = document.createElement("button");
       // div.append(button);
        button.innerHTML = "Reset le dernier coup";
        button.setAttribute("id","button")
        var button_restart = document.createElement("button");
        button_restart.setAttribute("id","button_restart");
        var div_button = document.createElement("div")
        div_button.append(button);
        div_button.append(button_restart);
        div_button.setAttribute("id", "div_button")
        div.append(div_button);
        button_restart.innerHTML = "Rejouer"
        var p_compteur_p1 = document.createElement("p");
        var p_compteur_p2 = document.createElement("p");

        var div_compteur = document.createElement("div");
        div_compteur.append(p_compteur_p1);
        div_compteur.append(p_compteur_p2)
        div_compteur.setAttribute("id", "div_compteur")
        div.append(div_compteur);
        //div.append(p_compteur_p2)
        p_compteur_p1.setAttribute("id","compteur_p1")

        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+compteur_p2;

        var button_reset_compteur = document.createElement("button");
        button_reset_compteur.innerHTML = "Reset compteur de point";
        button_reset_compteur.setAttribute("id","button_reset_compteur")

        div.append(button_reset_compteur);

        p.style.fontWeight = "bold";

        var f =0
        for(var j = 0; j < row_plateau; j++){
            var tr = document.createElement("tr");
            table.append(tr);
            tr.setAttribute("id", "row_" + j);
            for(var i = 0; i < col_plateau; i++){
                var col = document.createElement("td");
                col.setAttribute("scope", "col");    
                tr.append(col);
                col.style.padding = "2rem";
                col.style.backgroundColor="white";
                col.style.borderRadius = "50%"
                col.setAttribute("id",f);
                var rect = col.getBoundingClientRect()
                col.setAttribute("X",rect.x);
                col.setAttribute("Y",rect.y);
                f++


                col.addEventListener("click", function pions(e){
                    function turn_game(test){
                        var element_next = document.getElementById(test);
                        if(element_next.style.backgroundColor == "white"){
                             test =(Number(test) + Number(col_plateau));
                            if(document.getElementById(test) == null){
                                if(player_id == 1){
                                    const test_ani = [
                                        {transform: "translateY(-500px)"},
                                        {transform: "translateY(0);"}
                                    ]
                                    const test_time = {
                                        duration: 500,
                                    }
                                    element_next.style.backgroundColor = player_1_color;
                                    element_next.animate(test_ani,test_time);
                                    
                                    placement_x = element_next.getAttribute("x");
                                    placement_y = element_next.getAttribute("y");

                                    var z = Number(element_next.id);
                                    check_win_vertical1(test,z)
                                }else if(player_id == 2){
                                    const test_ani = [
                                        {transform: "translateY(-500px)"},
                                        {transform: "translateY(0);"}
                                    ]
                                    const test_time = {
                                        duration: 500,
                                    }

                                    element_next.style.backgroundColor= player_2_color;
                                    element_next.animate(test_ani,test_time);

                                    placement_x = element_next.getAttribute("x");
                                    placement_y = element_next.getAttribute("y");

                                    var z = Number(element_next.id)
                                    check_win_vertical1(test,z)
                                }
                                return false;
                            }
                            else if(document.getElementById(test).style.backgroundColor !== "white"){
                                if(player_id == 1){
                                    const test_ani = [
                                        {transform: "translateY(-500px)"},
                                        {transform: "translateY(0);"}
                                    ]
                                    const test_time = {
                                        duration: 500,
                                    }
                                   
                                    element_next.style.backgroundColor = player_1_color;
                                    element_next.animate(test_ani,test_time);

                                    placement_x = element_next.getAttribute("x");
                                    placement_y = element_next.getAttribute("y");

                                    var z = Number(element_next.id)
                                   // console.log("CHECK WIN 1");
                                    check_win_vertical1(test,z)
                                }else if(player_id == 2){
                                    const test_ani = [
                                        {transform: "translateY(-500px)"},
                                        {transform: "translateY(0);"}
                                    ]
                                    const test_time = {
                                        duration: 500,
                                    }
                                    element_next.style.backgroundColor= player_2_color;
                                    element_next.animate(test_ani,test_time);

                                    placement_x = element_next.getAttribute("x");
                                    placement_y = element_next.getAttribute("y");

                                    var z = Number(element_next.id)
                                    //console.log("CHECK WIN 2");
                                    check_win_vertical1(test,z)
                                }
                                return false;
                            }else{
                                 turn_game(test);
                            }
                        }
                    }
                    var id = e.target.id;
                    var test;
                    var element = document.getElementById(id).style.backgroundColor;
                    if(element == "white"){
                        test = Number(id) + Number(col_plateau);
                        if(document.getElementById(test) == null){
                            //alert("ok");
                            if(player_id == 1){
                                var element_ok = document.getElementById(id);

                                const test_ani = [
                                    {transform: "translateY(-500px)"},
                                    {transform: "translateY(0);"}
                                ]
                                const test_time = {
                                    duration: 500,
                                }
                                element_ok.style.backgroundColor = player_1_color;
                                element_ok.animate(test_ani,test_time);

                                placement_x = element_ok.getAttribute("x");
                                    placement_y = element_ok.getAttribute("y");
                                var z = Number(element_ok.id);
                                check_win_vertical1(id,z)
                                return false;
                            }else if(player_id == 2){
                                var element_ok = document.getElementById(id);
                                const test_ani = [
                                    {transform: "translateY(-500px)"},
                                    {transform: "translateY(0);"}
                                ]
                                const test_time = {
                                    duration: 500,
                                }
                                element_ok.style.backgroundColor = player_2_color;
                                element_ok.animate(test_ani,test_time);

                                placement_x = element_ok.getAttribute("x");
                                    placement_y = element_ok.getAttribute("y");
                                var z = Number(element_ok.id);
                                check_win_vertical1(id,z);

                            }
                            //return true;
                        }
                        else if(document.getElementById(test).style.backgroundColor == player_1_color || document.getElementById(test).style.backgroundColor == player_2_color ){
                            if(player_id == 1){
                                var element_ok = document.getElementById(id);
                                const test_ani = [
                                    {transform: "translateY(-500px)"},
                                    {transform: "translateY(0);"}
                                ]
                                const test_time = {
                                    duration: 500,
                                }
                                element_ok.style.backgroundColor = player_1_color;
                                element_ok.animate(test_ani,test_time);

                                placement_x = element_ok.getAttribute("x");
                                    placement_y = element_ok.getAttribute("y");
                                var z = Number(element_ok.id);

                                check_win_vertical1(id,z)
                            }else if(player_id == 2){
                                var element_ok = document.getElementById(id);
                                const test_ani = [
                                    {transform: "translateY(-500px)"},
                                    {transform: "translateY(0);"}
                                ]
                                const test_time = {
                                    duration: 500,
                                }
                                element_ok.style.backgroundColor = player_2_color;
                                element_ok.animate(test_ani,test_time);

                                placement_x = element_ok.getAttribute("x");
                                    placement_y = element_ok.getAttribute("y");
                                var z = Number(element_ok.id);

                                check_win_vertical1(id,z)
                            }
                            //return true;
                        }else{
                            turn_game(test);
                        }    
                    }else if (element == player_1_color || element == player_2_color){
                        alert("Pion déjà placé à cet endroit");
                        return false;
                    }
                    //alert(element);
                    

                    


                    
                    
                    function check_win_vertical1(element_check_win,z){
                        
                       // console.log(element_check_win);
                        //p1_check_win++;
                        //var id_check = Number(element_check_win) - Number(col_plateau);
                         //console.log(l);
                        if (l < 1){
                            test2 = Number(element_check_win) + Number(col_plateau);
                            //console.log(test2);
                            l++;
                        }else{
                            //console.log(test2);
                            test2 = Number(element_check_win) + Number(col_plateau);
                           // console.log(test2);
                        }
                            
                        
                        
                        //Vertical
                            if(player_id == 1){
                                var element_next = document.getElementById(test2);
                               // console.log(element_next);
                                // alert(element_next); 
                                if(element_next == null){
                                    //console.log(test2);
                                    p1_check_win = 0;
                                    check_win_vertical2(test2,z);
                                }
                                else if(element_next.style.backgroundColor == player_1_color){
                                    //console.log("P1 point");
                                    p1_check_win++
                                    if(p1_check_win == 4){
                                        alert("Player 1 win");
                                        compteur_p1++;
                                        p_compteur_p1.innerHTML = "";
                                        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
                                        // table.remove();
                                        return false;
                                    }else{
                                        check_win_vertical1(test2,z);
                                    }
                                }else if(element_next.style.backgroundColor == player_2_color){
                                   // console.log("P1 PERTE")
                                    p1_check_win = 0;
                                    check_win_vertical2(test2,z);
                                    return;
                                }else if(element_next.style.backgroundColor == "white"){
                                    p1_check_win = 0
                                    check_win_vertical2(test2,z);
                                    return; 
                                }
                                
                            }
                            else if(player_id == 2){
                                element_next = document.getElementById(test2);
                                if(element_next == null){
                                    p2_check_win = 0;
                                    check_win_vertical2(test2,z);
                                }else if(element_next.style.backgroundColor == player_2_color){
                                    p2_check_win++
                                    if(p2_check_win == 4){
                                        alert("Player 2 win");
                                        compteur_p2++;
                                        p_compteur_p2.innerHTML = "";
                                        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
                                        // table.remove();
                                        return false;
                                    }else{
                                        check_win_vertical1(test2,z);
                                    }
                                }else if(element_next.style.backgroundColor == player_1_color){
                                    p2_check_win = 0;
                                    check_win_vertical2(test2,z);
                                    return;
                                }else if(element_next.style.backgroundColor == "white"){
                                    p2_check_win = 0
                                    check_win_vertical2(test2,z);
                                    return; 
                                }
                                
                            }
                    }


                    
                    function check_win_vertical2(element_check_win,z){
                       //console.log(element_check_win)
                        //var id_check = element_check_win + Number(col_plateau);
                        //console.log(id_check);  
                        if (n < 1){
                            test2 = (Number(element_check_win) - Number(col_plateau))
                            n++
                            //console.log(test2);
                        }else{
                            test2 =(Number(test2) - Number(col_plateau));
                           // console.log(test2);
                        }

                        if(player_id == 1){
                            var element_next = document.getElementById(test2);
                            if(element_next == null){
                             // console.log("P1 PERTE");
                              p1_check_win = 0;
                              test2 = 0;
                              horizontal1(z);
                              return;
                            }else if(element_next.style.backgroundColor == player_2_color){
                              //  console.log("P1 perte");
                                p1_check_win = 0;
                                horizontal1(z);
                                //change_turn();
                                return;
                            }else if(element_next.style.backgroundColor == "white"){
                                p1_check_win = 0
                                horizontal1(z)
                                //change_turn();
                                return;
                            }
                            else if(element_next.style.backgroundColor == player_1_color){
                              //  console.log("P1 POINT");
                                p1_check_win++
                              //  console.log(p1_check_win);
                                if(p1_check_win == 4){
                                    alert("Player 1 win")
                                    compteur_p1++;
                                    p_compteur_p1.innerHTML = "";
                                        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
                                        // table.remove();
                                    return false;
                                }else{
                                    check_win_vertical2(test2,z);
                                }
                            }
                            
                        }
                        else if(player_id == 2){
                            element_next = document.getElementById(test2);
                            if(element_next == null){
                                p2_check_win = 0;
                                test2 =0;
                                horizontal1(z);
                                return;
                            }else if(element_next.style.backgroundColor == player_1_color){
                                p2_check_win = 0;
                                horizontal1(z);
                                //change_turn();
                                return;
                            }else if(element_next.style.backgroundColor == "white"){
                                p2_check_win = 0
                                horizontal1(z);
                                //change_turn();
                                return;
                            }else if(element_next.style.backgroundColor == player_2_color){
                                p2_check_win++
                                if(p2_check_win == 4){
                                    alert("Player 2 win")
                                    compteur_p2++;
                                    p_compteur_p2.innerHTML = "";
                                        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
                                        // table.remove();
                                    return;
                                }else{
                                    check_win_vertical2(test2,z);
                                }
                            }
                            
                        }
                        
                        }


                        function horizontal1(z){
                            if(player_id == 1){
                                console.log(z);
                                    if(document.getElementById(z) !== null){
                                        console.log(document.getElementById(z));
                                        if(document.getElementById(z).style.backgroundColor == player_1_color){
                                            p1_check_win++
                                            console.log("P1 POINT");
                                            console.log(p1_check_win);
                                            if(p1_check_win == 4){
                                                alert("Player 1 win");
                                                compteur_p1++;
                                                p_compteur_p1.innerHTML = "";
                                        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
                                        // table.remove();
                                                return false;
                                            }else{
                                                z++
                                                var element_next_check  = document.getElementById(z);
                                                z--
                                                var element_previous_check = document.getElementById(z);
                                                if(element_next_check == null ||element_previous_check == null){
                                                    z--;
                                                    p1_check_win = 0;
                                                    horizontal2(z)
                                                }
                                                if(Number(element_next_check.getAttribute("y")) !== Number(element_previous_check.getAttribute("y"))){
                                                        z--;
                                                        p1_check_win = 0;
                                                        horizontal2(z);
                                                }else{
                                                    //z++;
                                                    z++;    
                                                    horizontal1(z);
                                                }
                                            }
                                        }else if(document.getElementById(z).style.backgroundColor == player_2_color){
                                            p1_check_win = 0;
                                            //z=id;
                                            z--;
                                            horizontal2(z);
                                            return;
                                        }else if(document.getElementById(z).style.backgroundColor == "white"){
                                            //z=id;
                                            p1_check_win = 0;
                                            z--;
                                            horizontal2(z);
                                            return;
                                        }
                                    }else{
                                            z--;
                                            p1_check_win = 0;
                                            horizontal2(z);
                                            return;
                                    }
                            }
                            else if(player_id == 2){
                                    if(document.getElementById(z) !== null){
                                        if(document.getElementById(z).style.backgroundColor == player_2_color){
                                            p2_check_win++
                                            console.log("P2 POINT");
                                            if(p2_check_win == 4){
                                                alert("Player 2 win");
                                                compteur_p2++;
                                                p_compteur_p2.innerHTML = "";
                                        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
                                        // table.remove();
                                                return false;
                                            }else{
                                                z++
                                                var element_next_check  = document.getElementById(z);
                                                z--
                                                var element_previous_check = document.getElementById(z);
                                                if(element_next_check == null ||element_previous_check == null){
                                                    //z--;
                                                    p2_check_win = 0;
                                                    horizontal2(z)
                                                }
                                                if(Number(element_next_check.getAttribute("y")) !== Number(element_previous_check.getAttribute("y"))){
                                                        //z--;
                                                        p2_check_win = 0;
                                                        horizontal2(z);
                                                }else{
                                                  //  z++;
                                                    z++;    
                                                    horizontal1(z);
                                                }
                                            }
                                        }else if(document.getElementById(z).style.backgroundColor == player_1_color){
                                            p2_check_win = 0;
                                            z--;
                                            horizontal2(z);
                                            return;
                                        }else if(document.getElementById(z).style.backgroundColor == "white"){
                                            z--;
                                            p2_check_win = 0;
                                            horizontal2(z);
                                            return;
                                        }
                                    }else{
                                            z--;
                                            p2_check_win = 0
                                            horizontal2(z);
                                            return;
                                    }
                            }
                        }


                        function horizontal2(z){
                            console.log(z);
                            console.log(p1_check_win);
                            if(player_id == 1){
                                    if(document.getElementById(z) !== null){
                                        if(document.getElementById(z).style.backgroundColor == player_1_color){
                                            p1_check_win++
                                            console.log("P1 POINT");
                                            console.log(p1_check_win);

                                            if(p1_check_win == 4){
                                                alert("Player 1 win");
                                                compteur_p1++;
                                                p_compteur_p1.innerHTML = "";
                                        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
                                        // table.remove();
                                                return false;
                                            }else{
                                                z--;
                                                var element_next_check  = document.getElementById(z);
                                                z++
                                                var element_previous_check = document.getElementById(z);
                                                if(element_next_check == null ||element_previous_check == null){
                                                    z++;
                                                    p1_check_win = 0;
                                                    var element = document.getElementById(z)
                                                    diagonal1(element,attr_x,attr_y);
                                                    return;
                                                }
                                                if(Number(element_next_check.getAttribute("y")) !== Number(element_previous_check.getAttribute("y"))){
                                                        z++;
                                                        p1_check_win = 0;
                                                        var element = document.getElementById(z)
                                                        diagonal1(element,attr_x,attr_y);
                                                        return;
                                                }else{
                                                    //z--;
                                                    z--;    
                                                    horizontal2(z);
                                                }
                                            }
                                        }else if(document.getElementById(z).style.backgroundColor == player_2_color){
                                            p1_check_win = 0;
                                            console.log("P1 LOOSE");
                                            console.log(p1_check_win);

                                            z++;
                                            var element = document.getElementById(z)
                                            diagonal1(element, attr_x, attr_y);
                                            return;
                                        }else if(document.getElementById(z).style.backgroundColor == "white"){
                                            p1_check_win = 0
                                            console.log("P1 LOOSE");
                                            console.log(p1_check_win);

                                            z++;
                                            var element = document.getElementById(z)
                                            diagonal1(element,attr_x,attr_y);
                                            return;
                                        }
                                    }else{
                                        p1_check_win = 0

                                        z++;
                                        var element = document.getElementById(z)
                                        diagonal1(element,attr_x,attr_y);
                                        return;

                                    }
                            }
                            else if(player_id == 2){
                                    if(document.getElementById(z) !== null){
                                        if(document.getElementById(z).style.backgroundColor == player_2_color){
                                            p2_check_win++
                                            console.log("P2 POINT");
                                            console.log(p2_check_win);
                                            if(p2_check_win == 4){
                                                alert("Player 2 win");
                                                compteur_p2++
                                                p_compteur_p2.innerHTML = "";
                                        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
                                        // table.remove();
                                                return false;
                                            }else{
                                                z--;
                                                var element_next_check  = document.getElementById(z);
                                                z++
                                                var element_previous_check = document.getElementById(z);
                                                if(element_next_check == null ||element_previous_check == null){
                                                    z++;
                                                    p2_check_win = 0;
                                                    var element = document.getElementById(z)
                                                    diagonal1(element,attr_x,attr_y);
                                                    return;
                                                }
                                                if(Number(element_next_check.getAttribute("y")) !== Number(element_previous_check.getAttribute("y"))){
                                                        z++;
                                                        p2_check_win = 0;
                                                        var element = document.getElementById(z)
                                                        diagonal1(element,attr_x,attr_y);
                                                        return;
                                                }else{
                                                    //z--;
                                                    z--;    
                                                    horizontal2(z);
                                                }
                                            }
                                        }else if(document.getElementById(z).style.backgroundColor == player_1_color){
                                            p2_check_win = 0;
                                            console.log("P2 LOOSE");
                                            console.log(p2_check_win);


                                            z++
                                            var element = document.getElementById(z)
                                            diagonal1(element,attr_x,attr_y);
                                            return;
                                        }else if(document.getElementById(z).style.backgroundColor == "white"){
                                            p2_check_win = 0;
                                            console.log("P2 LOOSE");
                                            console.log(p2_check_win);

                                            z++
                                            var element = document.getElementById(z)
                                            diagonal1(element,attr_x,attr_y);
                                            return;
                                        }
                                    }else{
                                        p2_check_win = 0
                                        console.log("P2 LOOSE");
                                        console.log(p2_check_win);

                                        z++
                                        var element = document.getElementById(z)
                                        diagonal1(element,attr_x,attr_y);
                                        return;

                                    }
                            }
                        }



                        
                        function diagonal1(element,attr_x,attr_y){
                            if(player_id == 1){
                            if(element !== null){
                                    if(element.style.backgroundColor == player_1_color){
                                        p1_check_win++
                                        console.log(p1_check_win)
                                        if(p1_check_win == 4){
                                            alert("Player 1 win");
                                            compteur_p1++;
                                            p_compteur_p1.innerHTML = "";
                                        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
                                        // table.remove();
                                                return false;
                                        }else{
                                            attr_x = element.getAttribute("x"); 
                                            attr_y = element.getAttribute("y");
                                            //var additional_x = 66
                                            
                                           console.log(attr_x);
                                           console.log(attr_y);
                                           //  var element_previous_td = document.querySelector('td[x="' + attr_x + '"][y="' + attr_y + '"]');

                                            var x = Number(element.getAttribute("x")) + 66;
                                            var y = Number(element.getAttribute("y")) + 66;

                                             
                                            

                                            element = document.querySelector('td[x="' + x + '"][y="' + y + '"]');    
                                            console.log(element);
                                            diagonal1(element);
                                        }
                                    }else if (element.style.backgroundColor == player_2_color){
                                        p1_check_win = 0;
                                        x = (element.getAttribute("x")) - 66
                                        y = (element.getAttribute("y")) - 66
                                        
                                         element = document.querySelector('td[x="' + x + '"][y="' + y + '"]'); 
                                        diagonal2(element);
                                        return;
                                    }else if (element.style.backgroundColor == "white"){
                                        p1_check_win = 0;
                                        x = (element.getAttribute("x")) - 66
                                        y = (element.getAttribute("y")) - 66

                                        element = document.querySelector('td[x="' + x + '"][y="' + y + '"]'); 
                                        console.log(element);
                                        diagonal2(element);
                                        return;
                                    }
                                }else{
                                    p1_check_win = 0;
                                         
                                    console.log(attr_x);
                                    console.log(attr_y);


                                         element = document.querySelector('td[x="' + x + '"][y="' + y + '"]'); 
                                   
                                    console.log(element);
                                    diagonal2(element);
                                    return;
                                }
                            } else if(player_id == 2){
                                if(element !== null){
                                        if(element.style.backgroundColor == player_2_color){
                                            p2_check_win++
                                            console.log(p2_check_win)
                                            if(p2_check_win == 4){
                                                alert("Player 2 win");
                                                compteur_p2++
                                                p_compteur_p2.innerHTML = "";
                                        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
                                        // table.remove();
                                                    return false;
                                            }else{
                                                //var additional_x = 66
                                                var x = Number(element.getAttribute("x")) + 66;
                                                var y = Number(element.getAttribute("y")) + 66;

                                                var attr_x = element.getAttribute("x");
                                                var attr_y = element.getAttribute("y");
                                                


                                                element = document.querySelector('td[x="' + x + '"][y="' + y + '"]');
                                                diagonal1(element)
                                            }
                                        }else if (element.style.backgroundColor == player_1_color){
                                            p2_check_win = 0;
                                            console.log("test1");
                                            diagonal2(element);
                                            return;
                                        }else if (element.style.backgroundColor == "white"){
                                            console.log("test2");
                                            p2_check_win = 0;
                                            diagonal2(element);
                                            return;
                                        }
                                    }else{
                                        p2_check_win = 0;

                                        element = document.querySelector('td[x="' + attr_x + '"][y="' + attr_y + '"]');
                                        
                                        console.log("test3");   
                                        diagonal2(element);
                                        return;
                                    }
                                }
                            //change_turn();
                        }

                        function diagonal2(element){
                            //console.log(element)
                            if(player_id == 1){
                            if(element !== null){
                                //console.log(element);
                                    if(element.style.backgroundColor == player_1_color){
                                        p1_check_win++
                                        console.log(p1_check_win)
                                        if(p1_check_win == 4){
                                            alert("Player 1 win");
                                            compteur_p1++;
                                            p_compteur_p1.innerHTML = "";
                                        p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
                                        // table.remove();
                                                return false;
                                        }else{
                                            //var additional_x = 66
                                             x = Number(element.getAttribute("x")) - 66;
                                             y = Number(element.getAttribute("y")) + 66;

                                            element = document.querySelector('td[x="' + x + '"][y="' + y + '"]');
                                            console.log(element);
                                            diagonal2(element)
                                        }
                                    }else if (element.style.backgroundColor == player_2_color){
                                        p1_check_win = 0;
                                        egalite();
                                        return;
                                    }else if (element.style.backgroundColor == "white"){
                                        p1_check_win = 0;
                                        egalite();
                                        return;
                                    }
                                }else{
                                    p1_check_win = 0;
                                    egalite();
                                    return;
                                }
                            }else if (player_id == 2){
                                if(element !== null){
                                    if(element.style.backgroundColor == player_2_color){
                                        p2_check_win++
                                        console.log(p2_check_win)
                                        if(p2_check_win == 4){
                                            alert("Player 2 win");
                                            compteur_p2++;
                                            p_compteur_p2.innerHTML = "";
                                        p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
                                        // table.remove();
                                                return false;
                                        }else{
                                            //var additional_x = 66
                                            var x = Number(element.getAttribute("x")) - 66;
                                            var y = Number(element.getAttribute("y")) + 66;
    
                                            element = document.querySelector('td[x="' + x + '"][y="' + y + '"]');
                                            diagonal2(element)
                                        }
                                    }else if (element.style.backgroundColor == player_1_color){
                                        p2_check_win = 0;
                                        egalite();
                                        return;
                                    }else if (element.style.backgroundColor == "white"){
                                        p2_check_win = 0;
                                        egalite();
                                        return;
                                    }
                                }else{
                                    p1_check_win = 0;
                                    egalite();
                                    return;
                                }
                            }
                        }


                        function egalite(){
                            var element_check_egalite = document.getElementById(w);
                            console.log(element_check_egalite);
                            if(w < col_plateau){
                                if(element_check_egalite.style.backgroundColor == player_1_color || element_check_egalite.style.backgroundColor == player_2_color){
                                    w++;
                                    egalite();
                                }else if (element_check_egalite.style.backgroundColor == "white"){
                                    change_turn();
                                }
                            }else{
                                alert("Egalité")
                                return false;
                            }
                            
                        }

                        function change_turn(){
                            //alert("ok");
                            if(player_id == 1){
                                player_id = 2
                                p.innerHTML = "";
                                p.innerHTML = "Au tour du Joueur " + player_id;
                                p.style.fontWeight = "bold";
                                p.style.bottom = "38rem";
                                div.appendChild(p);
                            }else if(player_id == 2){
                                player_id = 1
                                p.innerHTML = "";
                                p.innerHTML = "Au tour du Joueur " + player_id;
                                p.style.fontWeight = "bold";
                                p.style.bottom = "38rem";
                                div.appendChild(p);
                            } 
                        }


                        
                })


                

            }
        }    

        button.addEventListener("click",() => {
            var changement = document.querySelector('td[x="' + placement_x + '"][y="' + placement_y + '"]');
            changement.style.backgroundColor = "white";
            
            if(player_id == 1){
                player_id = 2
                p.innerHTML = "";
                p.innerHTML = "Au tour du Joueur " + player_id;
                p.style.fontWeight = "bold";
                p.style.bottom = "38rem";
                div.appendChild(p);
            }else if(player_id == 2){
                player_id = 1
                p.innerHTML = "";
                p.innerHTML = "Au tour du Joueur " + player_id;
                p.style.fontWeight = "bold";
                p.style.bottom = "38rem";
                div.appendChild(p);
            } 
        })

        button_restart.addEventListener("click",() => {
            //div.appendChild(table);
            div.insertBefore(table,div_button)
           for(var h = 0; h < row_plateau; h++){
            for(var q = 0 ; q < col_plateau; q++){
               document.getElementById(m).style.backgroundColor = "white";
                m++;
            }
           }
           player_id = 1
           p.innerHTML = "";
           p.innerHTML = "Au tour du Joueur " + player_id;
           p.style.bottom = "38rem";
           div.appendChild(p);

            p1_check_win = 0;
            p2_check_win = 0;
            l = 0;
            test2 = 0;
            n = 0;
            attr_x = "";
            attr_y = "";
            w = 0;
            m =0;
        })


        button_reset_compteur.addEventListener("click",() => {
            compteur_p1 = 0;
            compteur_p2 = 0
            p_compteur_p1.innerHTML = "";
            p_compteur_p1.innerHTML = "Nombre de victoire Player 1 : "+ compteur_p1;
            p_compteur_p2.innerHTML = "";
            p_compteur_p2.innerHTML = "Nombre de victoire Player 2 : "+ compteur_p2;
        })
    }
        }