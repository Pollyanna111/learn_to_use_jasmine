
function Guess(compare,generator){
    this.compare = compare.compare;
    this.generate_answer = generator.generate_a_four_bit_random_number();
}

Guess.prototype.your_result = function(input){
    return this.compare(this.generate_answer,input);
};