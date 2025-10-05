const getStoreBook = () => {
  const storeBookSTR = localStorage.getItem("readList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const addToStored = (id) => {
  const storedBookData = getStoreBook();

  if (storedBookData.includes(id)) {
    alert("add");
  } else {
    storedBookData.push(id);
    // console.log(storedBookData)
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList",data);
  }
};

export { addToStored, getStoreBook };
