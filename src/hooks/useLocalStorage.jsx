import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue)

    const [loading, setLoading] = React.useState(true)

    const [error, setError] = React.useState(false)
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageitem = localStorage.getItem(itemName)

                let parsedItem;

                if (!localStorageitem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageitem)
                    setItem(parsedItem)
                }

                setLoading(false)

            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 2000);
        }, [])
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    // console.log(item);
    return { item, saveItem, loading, error }
}

export { useLocalStorage }