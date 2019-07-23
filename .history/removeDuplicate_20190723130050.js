removeDuplicates(myArr) {
    return myArr.filter((e, i) => {
        return myArr.findIndex((x) => {
            console.log(this.prop);
            return x[prop] === e[prop] && x.detpTime === e.detpTime;
        }) === i;
    });
}