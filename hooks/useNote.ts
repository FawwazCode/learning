import { supabase } from "@/utils/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";

export const useGetNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: async() => {
      const {data, error} = await supabase.from("notes").select("*")
        if (error) {
          console.log(error)
        }
        return data
    }
  })
}

export const usePostNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async({content}:{content:string}) => {
            const {error} = await supabase.from("notes").insert({
                content:content
            })
            if (error) {
                console.log(error)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
        }
    })
}

export const useDeleteNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({id}:{id:number}) => {
            const {error} = await supabase
                .from('notes')
                .delete()
                .eq('id', id)
                 if (error) {
                    console.log(error)
                }     
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
        }
    })
}
export const useEditNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async({id,content}:{id:number, content:string}) => {
            const date = new Date();
            const updateAat = date.toISOString();
            const {error} = await supabase.from("notes").update({
                content:content,
                update_at:updateAat
            }).eq("id",id)
            if (error) {
                console.log(error)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
            router.replace("/")
        }
    })
}