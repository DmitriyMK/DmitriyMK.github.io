
// callback function
function GoogleCallback (func, data) {
    window[func](data);
}


$.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=your-key&q=PHP&callback=GoogleCallback&context=?",
function(data){
    var ul = document.createElement("ul");
    $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
            ul.appendChild(li);
    });
    $('body').html(ul);
});

