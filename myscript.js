/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una
griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli
compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


let grid = document.getElementById("dm_grid");  //inserisco il div della griglia in una variabile
const start = document.getElementById("dm_start");



//al click sul bottone "Inizia" creo una funzione che faccia apparire la griglia
start.addEventListener("click", function(){
    //prendo il valore inserito dall'utente
    const choose = document.getElementById("mySelect").value;
    grid.innerHTML = ""; //elimino la griglia per poterne creare una nuova senza aggiungerla alla precedente
    let numBoxes = 0;
    const bombPositions = [];
    let loseText = document.getElementById("dm_lose_txt");
    loseText.classList.add("dm_off");
    let winText = document.getElementById("dm_win_txt");
    winText.classList.add("dm_off");
    
        
    /*a seconda del valore inserito genero un tot di caselle e le inserisco
      sotto forma di un div utilizzando un ciclo for*/
    if(choose == "easy"){
        numBoxes = 10 * 10;
            
        boxes(numBoxes, "dm_big_box_easy");
      
    }else if(choose == "medium"){
        numBoxes = 9 * 9;
        
        boxes(numBoxes, "dm_big_box_medium");

    }else{
        numBoxes = 7 * 7;
        
        boxes(numBoxes, "dm_big_box_hard");
    }
    //console.log(numBoxes);
    
    //creo un ciclo while per generare 16 bombe di posizione random da inserire nella griglia
    while(bombPositions.length < 16){
        let newbomb = parseInt(Math.floor(Math.random() * numBoxes) + 1);
        //console.log("nuova bomba" + newbomb)
        if(bombPositions.includes(newbomb) == false){
            bombPositions.push(newbomb);
            //console.log("bomba inserita " + newbomb);           
        }            
    }

    function boxes(numBoxes, classSize){
        grid.classList.remove("dm_big_box_easy");  //tolgo la dimensione alla griglia scelta
        grid.classList.remove("dm_big_box_medium"); //tolgo la dimensione della griglia precedente
        grid.classList.remove("dm_big_box_hard");
        grid.classList.add(classSize);  //aggiungo la dimensione alla griglia a seconda della difficolà scelta
        
        //creo un ciclo per aggiungere le caselle
        for(let i=1; i<=numBoxes; i++){
            document.getElementById("dm_grid").innerHTML += `<div class='dm_box dm_${i}'>${i}</div>`;            
        }
              
        /*al click controllo se il numero della casella è all'interno del mio array delle bombe
        e se lo è la casella diventa di colore rosso, altrimento di colore azzurro*/
        let color = document.getElementsByClassName("dm_box");
        let lose = false;        
        let countClicks = 0;  //dichiaro la variabile che andrà a contare il numero di click
        for(let i=0; i<color.length; i++){
            color[i].addEventListener("click", function(){
                countClicks += 1;  //contatore di click
                if(!lose){
                    let mySelect = parseInt(this.innerHTML);  //recupero il valore dal div e lo trasformo in numero
                    if(bombPositions.includes(mySelect)){  //se l'array include il numero cliccato

                        //ciclo for per far comparire tutte le bombe contemporaneamente
                        for(let j=0; j<bombPositions.length; j++){

                            let bomb = document.getElementsByClassName("dm_"+bombPositions[j])[0];                            
                            bomb.classList.add("dm_bomb");                                                        
                        }                        
                        lose = true;
                        //attivo il testo che comunica all'utente di aver perso
                        let loseText = document.getElementById("dm_lose_txt");
                        loseText.classList.remove("dm_off");
                        loseText.append("Hai effettuato " + countClicks + " click."); //inserisco il testo per comunicare il numero di click                       
                    }else if(countClicks == numBoxes-16){
                        let winText = document.getElementById("dm_win_txt");
                        winText.classList.remove("dm_off");
                        winText.append("Hai effettuato " + countClicks + " click."); //inserisco il testo per comunicare il numero di click
                        
                    }else{
                        this.classList.add("dm_bg_color");
                    }                   
                }
            });
        }  
    }
        
    
    
});


/*bottone per refreshare la pagina e creare una nuova griglia
const reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    window.location.reload();
});*/


