const useStorage = () => {
    const storageType = (type) => `${type ?? 'session'}Storage`;

    const isBrowser = (() => typeof window !== 'undefined')();

    const getItem = (key, type) => {
        return isBrowser ? window[storageType(type)][key] : '';
    };

    const setItem = (key, value, type) => {
        if (isBrowser) {
            window[storageType(type)].setItem(key, value);
            return true;
        }

        return false;
    };

    const removeItem = (key, type) => {
        if(isBrowser) {
            window[storageType(type)].removeItem(key);
            return true;
        }
        return false;
    };

    return {
        getItem,
        setItem,
        removeItem,
    };

};
export default useStorage;

