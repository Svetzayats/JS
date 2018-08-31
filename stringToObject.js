let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing-new: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function camelize(str) {
    let  arr = str.split ('-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return (arr.join (''));
}

function styleToObject (str) {
    let pairs = str.trim().split(';').filter(Boolean);
    for (let i = 0; i <= pairs.length; i++) {
        let str1 = pairs[i];
        if (str1) {
            pairs[i] = str1.split(':');
        }
        else continue;

        for (let j = 0; j <pairs[i].length; j++) {
            let str2 = pairs[i][j];
            pairs[i][j] = camelize (str2.trim());
        }
    }
    return new Map (pairs);
}

let objectFromStyle = styleToObject(style);
console.log(objectFromStyle);



/*

function styleToObject(str) {
    // let pairs = str.split(';')
    //   .map(part => part.trim())
    //   .filter(Boolean)
    //   .reduce((styles, part) => {
    //     let parts = part.split(': ')
    //     styles[camelize(parts[0])] = parts[1];
    //     return styles;
    //   }, {})

    let pairs = str.split(';')
        .map(part => part.trim())
        .filter(Boolean)
        .map(part => part.split(': '))

    let styleObject = new Map(pairs)


    console.log(styleObject)
}
console.log(styleToObject(style));

*/