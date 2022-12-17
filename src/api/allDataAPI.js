import axios from "axios";
import { baseUrls } from "./urls";

export const allData = async (params) => {
    return (
        await axios.get(`${baseUrls.dataUrl}`,
            { params }
        ))
}