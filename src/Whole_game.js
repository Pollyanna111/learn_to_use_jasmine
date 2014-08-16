function Whole_game(myconsole){
   this.console = myconsole;
}


Whole_game.prototype.start = function(){
    this.console.log('Welcome!/n/nPlease input your number(6):');
};


Whole_game.prototype.check_the_number_is_duplicated = function(input){
    var unduplicated_number = _(input).uniq().length;
    if(unduplicated_number < 4){
        return true;
    }
    return false;
};

Whole_game.prototype.process_comparing = function(input,generator){
    var dupilication = this.check_the_number_is_duplicated(input);
    if(dupilication){
       this.duplicated_number();
       return;
    }
    else{
        var answer = Whole_game.get_the_answer(generator);
        var result = Whole_game.get_the_compare_result(answer,input);
        if(result === '4A0B'){
            this.console.log('Congratulations!');
            return;
        }
        this.console.log(result+'/n/n'+'Please input your number(x):');
    }
};

Whole_game.get_the_compare_result = function(answer,input){
    var compare = new CompareNumber();
    return compare.compare(answer,input);
};


Whole_game.get_the_answer = function (generator) {
    return generator.generate_a_four_bit_random_number();
};

Whole_game.prototype.duplicated_number = function(){
    this.console.log('Cannot input your number(X)');
};

Whole_game.prototype.game_over = function(){
    this.console.log('Game Over!');
};