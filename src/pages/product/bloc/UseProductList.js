import { useState } from "react";

const UseProductList = () => {
    const [list, setList] = useState([]);

    return {
        list, setList
    }
}

export default UseProductList;