function Whole_game(myconsole){
   this.console = myconsole;
}


Whole_game.prototype.start = function(){
    this.console.log('Welcome!/n/nPlease input your number(6):');
//    return 'Welcome!/n/nPlease input your number(6):';

};



Whole_game.print = function(message){
    console.log(message);
};

//Whole_game.web_start = function () {
//    new game_start = new Whole_game();
//    game_start.start();//取到要打印的值
//这个时候我们要写测试的话，就写测试start函数返回值的测试


//由这个函数来控制显示
//};