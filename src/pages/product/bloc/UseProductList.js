import { useState } from "react";

const UseProductList = () => {
    const [screenState, setScreenState] = useState({list: [], isLoading : false, error: ''});

    return {
        screenState, setScreenState
    }
}

export default UseProductList;