import { createClient } from "next-sanity";
import { apiVersion,dataset,projectId,useCdn } from "../../sanity/env";


export const cliet= createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACCESS_TOKEN,
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-05-27"
})