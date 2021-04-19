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
    .then(function (response){
        console.log('Added jokes', response);
        getJokes();
    })
    .catch( function (error){
        console.log('Error from server', error);
        alert('Sorry, could not add your jokes. Try again later.')
        
    })
    $(`#questionIn`).val('');
    $(`#punchlineIn`).val('');
}

function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes'
    })
    .then( function( response){
        console.log('Response from server', response);
        render(response)
    })
    .catch( function (error){
        console.log('Error from server', error);
        alert('Sorry, could not get Jokes. Try again later.')
    })
    console.log('After making server request...');
    
}

function render(jokesList){
    $(`#outputDiv`).empty();

    for(let item of jokesList){
        console.log(`${item.whoseJoke}${item.jokeQuestion}${item.punchLine}`);
        $(`#outputDiv`).append(`
            <div>
                <p>${item.whoseJoke}
                <p>${item.jokeQuestion}
                <p>${item.punchLine}
            </div>
        `)
        
    }
}