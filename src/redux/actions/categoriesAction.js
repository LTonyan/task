import { useDispatch } from "react-redux";
import { categoriesAPI } from "../../api/categoriesAPI";

const useCategories = () => {
    const dispatch = useDispatch();
    const getCategories = async () => {
        try {
            const res = await categoriesAPI();
            if (res.data) {
                dispatch({
                    type: "GET_CATEGORIES",
                    payload: res.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    return {
        getCategories
    };

};



export default useCategories;