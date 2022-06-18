export const getTopCreators = (nfts) => {
  const creators = nfts.reduce((creatorObject, nft) => {
    (creatorObject[nft.seller] = creatorObject[nft.seller] || []).push(nft);

    return creatorObject;
  }, {});

  return Object.entries(creators).map((creator) => {
    const seller = creator[0];
    const sum = creator[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

    return ({ seller, sum });
  });
};

// get top seller by:
// return the sum of prices of the NFTS that are been sold from the seller
// the seller with high sum will be a top seller

// example
// [
//     {price: '2', seller: "A"},
//     {price: '3', seller: "B"},
//     {price: '3', seller: "A"},
//     {price: '1', seller: "C"},
// ]

// example output
// [
//     {sum: '5', seller: 'A'},
//     {sum: '3', seller: 'B'},
//     {sum: '1', seller: 'C'},

// ]
