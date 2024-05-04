import {gitApi} from "../api";
import {QueryFunctionContext, useQuery} from "@tanstack/react-query";


const fetchUserInfo = async (ctx: QueryFunctionContext) => {
    const {data} = await gitApi.get('/user');
    return data;
}

export const useUserInfo = () => {
    return useQuery({
        queryKey: ['user-info'],
        queryFn: fetchUserInfo,
        retry: 1
    })
}