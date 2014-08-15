
function CompareNumber() {

}

CompareNumber.prototype.compare = function (answer, input) {
    var same_number_in_same_position = 0;
    var same_number_in_different_position = 0;
    _(answer.length).times(function(i){
        same_number_in_same_position += answer[i] === input[i] ? 1 : 0;
    });
    same_number_in_different_position = _.intersection(answer,input).length - same_number_in_same_position;
    return same_number_in_same_position+'A'+same_number_in_different_position+'B';
};



