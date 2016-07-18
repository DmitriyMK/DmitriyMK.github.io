'use strict'

$(function() {
    var html = $('#test--template').html();
    var questions = [{
        question: 'Question #1',
        answers: [
            'Answer 1',
            'Answer 2',
            'Answer 3'
        ],
        correct: [
            'true',
            'false',
            'true'
        ]
    }, 
    {
        question: 'Question #2',
        answers: [
            'Answer 1',
            'Answer 2',
            'Answer 3'
        ],
        correct: [
            'false',
            'false',
            'true'
        ]
    }, 
    {
        question: 'Question #2',
        answers: [
            'Answer 1',
            'Answer 2',
            'Answer 3'
        ],
        correct: [
            'true',
            'false',
            'true'
        ]
    }
    ];

    localStorage.setItem('data', JSON.stringify(questions));
    var test = JSON.parse(localStorage.getItem('data'));

    var content = tmpl(html, {
        data: questions
    });

    $('.template').append(content);

$(".questionsubmit").click(function(e){
      e.preventDefault();
      $('.question input:checked').each(function() {
        if($(this).hasClass('correct')) {
          $(this).parent('.checkbox').addClass('checked-right');
        }else{
          $(this).parent('.checkbox').addClass('checked-wrong');
        }
      });
    });

});
