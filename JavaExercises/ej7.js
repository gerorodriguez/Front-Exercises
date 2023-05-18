function toArray(obj) {
    return Object.entries(obj).map(par => [par[0], par[1]]);
  }

  console.log(toArray({ a: 1, b: 2 }));