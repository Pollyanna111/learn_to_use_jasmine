describe("CompareNumber", function() {
    var test_compare;
    test_compare = new CompareNumber();
    it("test_these_cases_to_make_sure_this_function_is_right", function () {
        expect(test_compare.compare('1234', '5678')).toBe('0A0B');
        expect(test_compare.compare('1234', '1234')).toBe('4A0B');
        expect(test_compare.compare('1234', '4321')).toBe('0A4B');
        expect(test_compare.compare('1234', '1208')).toBe('2A0B');
        expect(test_compare.compare('1234', '0812')).toBe('0A2B');
        expect(test_compare.compare('1234', '1243')).toBe('2A2B');
    });
});

describe("Answer_Generator",function(){
    var each_bit_is_different = function(number){
        for(var i = 0; i< number.length; i++){



            for(var j = i+1; j<number.length; j++){
                if(number[i] === number[j]){
                    return false;
                }
            }
        }
        return true;
    };

    var answer_generator;
    beforeEach(function(){
        answer_generator = new Answer_generator();
    });
    it('the_generated_is_a_number',function(){
        expect(parseInt(answer_generator.generate_a_four_bit_random_number())).not.toEqual(NaN);
    });
    it('the_generated_number_has_four_bit',function(){
        expect(answer_generator.generate_a_four_bit_random_number().length === 4? true:false).toBe(true);
    });

    it('each_generated_bit_is_different',function(){
        expect(each_bit_is_different(answer_generator.generate_a_four_bit_random_number())).toBe(true);
    });
});


describe("Answer_Generator",function(){
    var test_compare;
    var answer_generator;
    beforeEach(function(){
        test_compare = new CompareNumber();
        answer_generator = new Answer_generator();
    });
    it('guess_unit_can_work',function(){
        spyOn(test_compare,'compare').and.returnValue('0A0B');
        spyOn(answer_generator,'generate_a_four_bit_random_number').and.returnValue('1234');
        var guess = new Guess(test_compare,answer_generator);
        var result_value = guess.your_result('5678');
        expect(result_value).toBe('0A0B');
        expect(test_compare.compare).toHaveBeenCalledWith('1234','5678');
    });

    it('the combination of the logic of this game',function(){
        var set_answer = [0.5,0.6,0.7,0.8];
        spyOn(Math,'random').and.callFake(function(){
            return set_answer.shift();
        });
        var guess = new Guess(test_compare,answer_generator);
        var result_value = guess.your_result('5678');
        expect(result_value).toBe('4A0B');
    });
});



describe('The whole game can work',function(){
    var game;
//    var my_console ={
//       log : function(){
//
//       }
//    };
    beforeEach(function(){
        game = new Whole_game();
    });



    it('print welcome when game start', function(){
        console.log(game.start());
        expect(game.start()).toBe('Welcome!/n/nPlease input your number(6):');
        console.log('bbb');
    });

//    it('print ', function () {
//
//    });



});




//    it('Ensure they have printed welcome',function(){
//        var game_view = new Game_view();
//        game_view.at_the_beginning_of_the_game();
//
//
//
//
//        expect(.log).toHaveBeenCalledWith('Welcome!');
//    });
//


