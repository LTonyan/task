import { useDispatch } from "react-redux";
import { allData } from "../../api/allDataAPI";

const useCats = (params) => {
    const dispatch = useDispatch();
    const getCats = async () => {
        try {
            const res = await allData(params);
            if (res.data) {
                dispatch({
                    type: "GET_CATS",
                    payload: res.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    return {
        getCats
    };

};



export default useCats;