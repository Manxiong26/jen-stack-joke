console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
}

function addJokes(){
    let newJokes ={
        whoseJoke: $(`#whoseJokeIn`).val(),
        jokeQuestion: $(`#questionIn`).val(),
        punchLine: $(`#punchlineIn`).val()
    }
    console.log('Adding Jokes', newJokes);
    
    $.ajax({
        method: "POST",
        url: '/jokes',
        data: newJokes
    })
}