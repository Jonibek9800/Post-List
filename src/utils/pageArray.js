export const pageArray = (totakPage) => {
    const result = [];
    for (let i = 0; i < totakPage; i++) {
        result.push(i + 1);
    }
    return result;
};
