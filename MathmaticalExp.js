function calc(expr) {

    var expressionToParse = expr.replace(/\s+/g, '').split('');
    debugger;
    var check = false;
    var sum;
    function firstNegative() {
      if(peek() == '-' && check == false) {
        cehck = true;
        get();
        debugger;
        return number() * -1;
      }
    }

    function peek() {
        return expressionToParse[0] || '';
    }

    function get() {
        return expressionToParse.shift();
    }

    function number() {
      var str = '';
      while(peek().match(/\d/) || peek() == '.') {
        str += get();
      }
      console.log(str);
      return Number(str);
        
    }

    function factor() {
        while (peek().match(/\d/) || peek() == '(' || peek() == ')' || peek() == '-') {
            if (peek().match(/\d/)) return number();

            else if (peek() == '(' || peek() == ')') {
                var result;
                if (get() == '(') {
                  debugger;
                    result = expression();
                    get();
                    debugger;
                    return result;
                } 

            } else {
                
                get();
                if(peek().match(/\d/)) {
                    console.log('negative number');
                    debugger;
                    return -number();
                }
                console.log('negative expression')
                debugger;
                return -expression();
            }
        }
    }


    function term() {
        var result = factor();
        while (peek() == '*' || peek() == '/') {
            if (get() == '*') {
                result *= factor();
            } else {
                result /= factor();
            }
        }
        return result;
    }

    /* Grammar Rules
            expression = term {(+|-) term}
        */
    function expression() {
        var result = term();
        while (peek() == '+' || peek() == '-') {
            if (get() == '+') {
                result += term();
            } else {
                console.log(peek());
                debugger;
                result -= term();
            }
        }
        return result;
    }
    sum = expression();
    if(expressionToParse[0] !== undefined) {
      console.log(expressionToParse)
      debugger;
      sum+= expression();

    }
    return sum;
}


calc('2 / (2 + 3) * 4.33 - -6');
