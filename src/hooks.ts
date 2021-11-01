import {useWindowSize} from "react-use";
import {useLocation} from "react-router";

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
export const useIsMobile = ()=>{
    const {width} = useWindowSize()
    return {isMobile: width<767}
}
