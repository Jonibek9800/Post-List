export const pagination = (totalCount, limit) => {
    return Math.ceil(Number(totalCount / limit));
};
