function Answer_generator() {

}

Answer_generator.prototype.generate_a_four_bit_random_number = function() {
    var the_random_number = new Array(4);
    _(the_random_number.length).times(function(i){
        the_random_number[i] = Answer_generator.create_one_bit_of_this_random_number(the_random_number);
    });
    return (the_random_number).join('');
};

Answer_generator.create_one_bit_of_this_random_number = function(the_random_number){
    var this_bit = parseInt(Math.random() * 10);
    return _(the_random_number).contains(this_bit) ? Answer_generator.create_one_bit_of_this_random_number(the_random_number) : this_bit;
};