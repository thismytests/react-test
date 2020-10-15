const checkParenthesesSameType = (str: string, bracket1: string, bracket2: string) => {
  var counter = 0;

  const arrayOfCharacters = str.split('');



  const isFirstIsBracketAndSecondClosedWhenMoreThenTwoParenthes = (arrayOfCharacters: string,
                                                                   openBracket: string,
                                                                   closeBracket: string) => {

    if (arrayOfCharacters.length > 2 && arrayOfCharacters[0] === openBracket && arrayOfCharacters[1] === closeBracket) {
      return false;
    }

    return true;
  };


  if (!isFirstIsBracketAndSecondClosedWhenMoreThenTwoParenthes(str, bracket1, bracket2)) {
    // return false;
  }


  str.split('').forEach((brk) => {
    if (brk === bracket1) {
      counter = counter + 1;
    }

    if (brk === bracket2) {
      counter = counter - 1;
    }
  });

  return counter === 0;
};

const getParenthesesSameType = (str: string,
                                openBracket: string,
                                closedBracket: string) => {
  const arr = str.split('');
  let parenthes = '';

  arr.forEach((item) => {
    if (item === openBracket || item === closedBracket) {
      parenthes = parenthes.concat(item);
    }
  });

  return parenthes;
};

const isFirstBracketIsOpenedAndLastClosed = (arrayOfCharacters: string,
                                             openBracket: string,
                                             closeBracket: string) => {
  if (arrayOfCharacters[0] !== openBracket || arrayOfCharacters[arrayOfCharacters.length - 1] !== closeBracket) {
    return false;
  }

  return true;
};

const checkParenthesesDifferentType = (str: string) => {
  const parentheses = {
    squareBrackets: {
      openBracket: '[',
      closedBracket: ']'
    },
    braces: {
      openBracket: '{',
      closedBracket: '}'
    },

    roundBrackets: {
      openBracket: '(',
      closedBracket: ')'
    }
  };


  for (var key in parentheses) {
    const openBracket = parentheses[key]['openBracket'];
    const closedBracket = parentheses[key]['closedBracket'];

    const sameTypeParenthes = getParenthesesSameType(
      str,
      openBracket,
      closedBracket
    );


    console.log('sameTypeParenthes ', sameTypeParenthes);
    const _checkParenthesesSameType = checkParenthesesSameType(
      sameTypeParenthes,
      openBracket,
      closedBracket
    );

    if (sameTypeParenthes.length && !_checkParenthesesSameType) {
      return false;
    }
  }

  return true;
};

describe(`test functionality`, () => {
  describe(`checkBracket`, () => {
    const rightStr1 = '[]';
    const rightStr2 = '[[]]';
    const falseStr1 = '[][]';
    const falseStr2 = '[[]';

    describe(`positive scenario`, () => {
      it(`[]`, () => {
        expect(true)
          .toBe(checkParenthesesSameType(`[]`, '[', ']'))
      });

      it(`[[]]`, () => {
        expect(true)
          .toBe(checkParenthesesSameType('[[]]', '[', ']'))
      });
    });
    describe(`negative scenario`, () => {
      it(`[][]`, () => {
        expect(false)
          .toBe(checkParenthesesSameType('[][]', '[', ']'))
      });

      it(`[[]`, () => {
        expect(false)
          .toBe(checkParenthesesSameType('[[]', '[', ']'))
      });

    });

  });

  describe(`getParenthesesSameType`, () => {
    it(`get bracket same type from the string`, () => {
      expect('[]').toBe(getParenthesesSameType('aaa[assws]',
        '[',
        ']'))

      expect('[]').toBe(getParenthesesSameType('[()()aaaa]',
        '[',
        ']'));

      expect('{}').toBe(getParenthesesSameType('{}',
        '{',
        '}'));
    });
  });


  describe(`isFirstBracketIsOpenedAndLastClosed`, () => {
    it(``, () => {
      expect(isFirstBracketIsOpenedAndLastClosed()).toBe();
    });
  });

  describe(`checkParenthesesDifferentType requirements`, () => {
    it(`{ ( [ ] ) }`, () => {
      expect(checkParenthesesDifferentType('{ ( [ ] ) }')).toBe(true);

    });
    it(`{ [ ] [ ] ( )  }`, () => {
      expect(checkParenthesesDifferentType('{ [ ] [ ] ( )  }')).toBe(true);

    });
    it(`'{ }} {{  }'`, () => {
      expect(checkParenthesesDifferentType('{ }} {{  }')).toBe(false);

    });
    it(`'{ ( [ ] ) } { }'`, () => {
      expect(checkParenthesesDifferentType('{ ( [ ] ) } { }')).toBe(false);

    });
    it('{ ( [ ] ) } ', () => {
      expect(checkParenthesesDifferentType('{ ( [ ] ) } ')).toBe(true);
      // expect(checkParenthesesDifferentType('{} ')).toBe(true);
    });
    it('{}', () => {
      expect(checkParenthesesDifferentType('{} ')).toBe(true);
    });

  });



});
