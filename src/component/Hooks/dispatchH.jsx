import { useContext } from "react";
import DispatchContext from "../context/DispatchContext";

function useDispatch(){
    return useContext(DispatchContext);

}
export default useDispatch