removeDuplicates(myArr) {
    return myArr.filter((e, i) => {
        return myArr.findIndex((x) => {
            return x[prop] === e. && x.detpTime === e.detpTime;
        }) === i;
    });
}