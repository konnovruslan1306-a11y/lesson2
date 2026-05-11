let play = alert("А ты силен в математике? Давай проверим.")
if(play == true){
let points_computer = 0;
let points_player = 0;    
for(z = 1; z >= 5; z++)    
let ai = [Math.floor(Math.random() * 10)] + 1
let ai2 = [Math.floor(Math.random() * 10)] + 1
alert(ai);
alert(ai2);
let plaer = confirm(alert("Какой остаток"))
let i = ai / ai2;
alert("Остаток" + i)
if(i == plaer){
    alert("Правильно" + i )
    points_player++
}else{
    alert("Неправильно правильный Останком будет" + i)
    points_computer++
}
}
if( points_player  < points_computer ){
        alert('Вы_' + points_player + "_<_" + points_computer + '_Компьютер');
        alert("проиграли");
    }
    else if(points_player  > points_computer){
        alert('Вы_' + points_player + "_>_" + points_computer + '_Компьютер');
        alert("поздравлаем вы победили!")
    }
    else if(points_player  == points_computer){
        alert('Вы_' + points_player + "_=_"  + points_computer + '_Компьютер');
        alert("ничья")
    }