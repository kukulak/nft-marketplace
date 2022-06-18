export const makeId = (length) => {
  const numberId = [];
  const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < length; i += 1) {
    const randomNumber = Math.random() * (char.length);
    numberId.push(char[Math.round(randomNumber)]);
  }
  numberId.length = length;
  return (numberId.join(''));
};

