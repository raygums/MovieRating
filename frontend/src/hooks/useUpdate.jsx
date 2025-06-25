import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

function useUpdate() {

  const queryClient = useQueryClient()
	// we use mutatAsync to can use await in the updateProfile function so we can set both coveImg and profileImg to null
	const { mutateAsync:updateProfile, isPending:updateProfilePending} = useMutation({
		mutationFn: async(formData)=>{
			try {
				const res = await fetch("/api/users/update",{
					method: "POST",
					headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
				})
				const data = await res.json()
				
				if(!res.ok) throw new Error(data.error || "Something went wrong!")
				
				return data
			} catch (error) {
				throw new Error(error.message)
			}
		},
		onSuccess: ()=>{
				toast.success("Your profile is updated")
				Promise.all([
					queryClient.invalidateQueries({queryKey:["authUser"]}),
					queryClient.invalidateQueries({queryKey:["userProfile"]}),
				])
		},
		onError: (error)=>{
			toast.error(error.message)
		}
	})
  return {updateProfile,updateProfilePending}
}

export default useUpdate
