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

    /*a seconda del valore inserito genero un tot di caselle e le inserisco
      sotto forma di un div utilizzando un ciclo for*/
    if(choose == "easy"){
        numBoxes = 10 * 10;
        //creo un ciclo per aggiungere le caselle
        for(let i=1; i<=numBoxes; i++){
            document.getElementById("dm_grid").innerHTML += `<div class='dm_box'>${i}</div>`;
            grid.classList.add("dm_big_box_easy");  //aggiungo la dimensione alla griglia scelta
            grid.classList.remove("dm_big_box_medium"); //tolgo la dimensione della griglia precedente
            grid.classList.remove("dm_big_box_hard");
        }

        //al click aggiungo la classe per far diventare il bg della casella azzurro
        let color = document.getElementsByClassName("dm_box");

        for(let i=0; i<color.length; i++){
            color[i].addEventListener("click", function(){
            this.classList.add("dm_bg_color");
            });
        }

    }else if(choose == "medium"){
        numBoxes = 9 * 9;
        for(let i=1; i<=numBoxes; i++){
            document.getElementById("dm_grid").innerHTML += `<div class='dm_box'>${i}</div>`;
            grid.classList.add("dm_big_box_medium");
            grid.classList.remove("dm_big_box_easy");
            grid.classList.remove("dm_big_box_hard");
        }

        //al click aggiungo la classe per far diventare il bg della casella azzurro
        let color = document.getElementsByClassName("dm_box");
        for(let i=0; i<color.length; i++){
            color[i].addEventListener("click", function(){
            this.classList.add("dm_bg_color");
            });
        }

    }else{
        numBoxes = 7 * 7;
        for(let i=1; i<=numBoxes; i++){
            document.getElementById("dm_grid").innerHTML += `<div class='dm_box'>${i}</div>`;
            grid.classList.add("dm_big_box_hard");
            
        }

        //al click aggiungo la classe per far diventare il bg della casella azzurro
        let color = document.getElementsByClassName("dm_box");
        for(let i=0; i<color.length; i++){
            color[i].addEventListener("click", function(){
            this.classList.add("dm_bg_color");
            });
        }
    }
    console.log(numBoxes);
    
});


/*bottone per refreshare la pagina e creare una nuova griglia
const reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    window.location.reload();
});*/


