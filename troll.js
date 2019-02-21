;(function(){
    // lets start trolling

    /**
     * random int in interval
     * https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
     * @param {Number} a
     * @param {Number} b
     * @return {Number}
     */
    const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

    /**
     * colors
     * @type {Array}
     */
    const colors = [
        'blue',
        'red',
        'green',
        'black'
    ];

    /**
     * operators
     * @type {Array}
     */
    const op = [
        '-',
        '+'
    ];

    /**
     * all elements
     * @type {Array}
     */
    const elements = [].slice.call(document.querySelectorAll('*'));

    /**
     * sets a background color
     * @param {Node}
     */
    const setBackground = (el) => {
        el.style.backgroundColor = colors[randomInt(0, 3)];
    };

    /**
     * sets a color
     * @param {Node}
     */
    const setColor = (el) => {
        el.style.color = colors[randomInt(0, colors.length - 1)];
    };

    /**
     * sets a background color
     * @param {Node}
     */
    const setOpacity = (el) => {
        el.style.opacity = randomInt(0, 1).toString();
    };

    /**
     * sets a font size
     * @param {Node}
     */
     const setFontSize = (el) => {
         el.style.fontSize = randomInt(1, 50).toString() + 'px';
     };

     /**
      * sets transform translate
      * @param {Node}
      */
      const setTransform = (el) => {
          el.style.transform = `translate(${op[randomInt(0, op.length -1)].toString()}%)`;
      };

    /**
     * functions we call
     * @type {Array}
     */
    const funcs = [
        setBackground,
        setColor,
        setOpacity,
        setFontSize
    ];

    /**
     * run
     */
    const run = (fn, wait) => {
        setTimeout(function(){
            const el = elements[randomInt(0, elements.length - 1)];
            fn(el);
            console.log(el);
            run(funcs[randomInt(0, funcs.length - 1)], randomInt(10, 30));
        }, wait * 1000);
    };

    // init :)
    run(funcs[randomInt(0, funcs.length - 1)], 1);
}());
