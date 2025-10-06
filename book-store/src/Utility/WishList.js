const getWishlistStoreBook = () => {
  const storeBookSTR = localStorage.getItem("readList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const addToWishListStored = (id) => {
  const storedBookData = getWishlistStoreBook();

  if (storedBookData.includes(id)) {
    alert("added");
  } else {
    storedBookData.push(id);
    // console.log(storedBookData)
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToWishListStored, getWishlistStoreBook };
