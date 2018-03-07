var ApiKey = "4eff477c6d9d41318aa5b82e07d830c4";


function testFunction() {


    var searchTerm = $("#searchTerm").val();
    var numRec = $("#numberOf").val();
    var yearEnd = $("#yearEnd").val();
    var yearStart = $("#yearStarts").val();


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "4eff477c6d9d41318aa5b82e07d830c4",
        'q': searchTerm,
        'begin_date': yearStart,
        'end_date': yearEnd,
        'page': 1
    });

    $.ajax({        
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        console.log(url);
        console.log($("#searchTerm").val());
        console.log("search term: " + searchTerm);
        result.response.docs.forEach(function (e) {
            addArticles(e);
        })
    }).fail(function (err) {
        throw err;
    });
}

function addArticles(element) {    
    var newDiv = $('<div>');
    console.log(element);
    newDiv.text(element.uri);
    $(".toDrop").append(newDiv);
}

$('#test1').on('click', testFunction);
testFunction();

function startSearch(term, recordNum, startYear = '', endYear = '') {
    // Create new div that holds article info
    // append new div to #article-view
}