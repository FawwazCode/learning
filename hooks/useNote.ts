import { supabase } from "@/utils/supabase"
import { useQuery } from "@tanstack/react-query"

export const  useGetNotes = () => {
    return useQuery({
        queryKey:['notes'],
        queryFn:async()=>{
            const {data,error} = await supabase.from("notes").select("*")
            if(error){
                console.log(error)
            }
            return data
        }
    })
}