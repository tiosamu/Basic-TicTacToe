$(() => {
    let nextMove = 'X';
    $('.coluna').click(function(){
        $(this).text('');
    });
    $('.coluna').click(function(){
        if(!$(this).hasClass('marcado')){
            $(this).addClass('marcado');
            $(this).text(nextMove);
            nextMove = nextMove == 'X' ? 'O' : 'X';
            setTimeout(() => validateWinner(), 2000);
        }
    })

    function clearAll(){
        $('.coluna').removeClass('marcado');
        $('.coluna').text('');
    }
    
    $('.botaozinho').click(function(){
        clearAll();
    })


    function validateWinner(){
        let linha1coluna1 = $('#linha1coluna1').text().trim();
        let linha1coluna2 = $('#linha1coluna2').text().trim()
        let linha1coluna3 = $('#linha1coluna3').text().trim();
        let linha2coluna1 = $('#linha2coluna1').text().trim();
        let linha2coluna2 = $('#linha2coluna2').text().trim();
        let linha2coluna3 = $('#linha2coluna3').text().trim();
        let linha3coluna1 = $('#linha3coluna1').text().trim();
        let linha3coluna2 = $('#linha3coluna2').text().trim();
        let linha3coluna3 = $('#linha3coluna3').text().trim();

        if(linha1coluna1 == linha1coluna2 && linha1coluna2 == linha1coluna3 && linha1coluna1 != '' && linha1coluna1 != undefined){
            alert(`${linha1coluna1} Ganhouuuu!`);
            clearAll();
        }
        if(linha2coluna1 == linha2coluna2 && linha2coluna2 == linha2coluna3 && linha2coluna1 != '' && linha2coluna1 != undefined){
            alert(`${linha2coluna1} Ganhouuuu!`);
            clearAll();
        }
        if(linha3coluna1 == linha3coluna2 && linha3coluna2 == linha3coluna3 && linha3coluna1 != '' && linha3coluna1 != undefined){
            alert(`${linha3coluna1} Ganhouuuu!`);
            clearAll();
        }
        if(linha1coluna1 == linha2coluna1 && linha2coluna1 == linha3coluna1 && linha1coluna1 != '' && linha1coluna1 != undefined){
            alert(`${linha1coluna1} Ganhouuuu!`);
            clearAll();
        }
        if(linha1coluna2 == linha2coluna2 && linha2coluna2 == linha3coluna2 && linha1coluna2 != '' && linha1coluna2 != undefined){
            alert(`${linha1coluna2} Ganhouuuu!`);
            clearAll();
        }
        if(linha1coluna3 == linha2coluna3 && linha2coluna3 == linha3coluna3 && linha1coluna3 != '' && linha1coluna3 != undefined){
            alert(`${linha1coluna3} Ganhouuuu!`);
            clearAll();
        }
        if(linha1coluna1 == linha2coluna2 && linha2coluna2 == linha3coluna3 && linha1coluna1 != '' && linha1coluna1 != undefined){
            alert(`${linha1coluna1} Ganhouuuu!`);
            clearAll();
        }
        if(linha1coluna3 == linha2coluna2 && linha2coluna2 == linha3coluna1 && linha1coluna3 != '' && linha1coluna3 != undefined){
            alert(`${linha1coluna} Ganhouuuu!`);
            clearAll();
        }
        if($('.marcado').length == 9){
            alert('Deu velha!');
            clearAll();
        }
    }
})


