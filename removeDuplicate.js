removeDuplicates(myArr) {
    return myArr.filter((e, i) => {
        return myArr.findIndex((x) => {
            return x.prop1 === e.prop1 && x.prop2 === e.prop2;
        }) === i;
    });
}