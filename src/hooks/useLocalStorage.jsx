import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageitem = localStorage.getItem(itemName)
    let parsedItem;
    if (!localStorageitem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
    } else {
        parsedItem = JSON.parse(localStorageitem)
    }
    const [item, setItem] = React.useState(parsedItem)
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    return [item, saveItem]
}

export {useLocalStorage}