import { JobItemExtended } from "../types"

type TJobItemApiResponse = {
  public: boolean
  jobItem: JobItemExtended
}

export const useFetchJobItem = () => {
  const fetchJobItem = async (id: number | null): Promise<JobItemExtended> => {
    const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}/${id}`)
    if (!res.ok) {
      const errorData = await res.json()
      console.error(errorData.description)
      throw new Error(errorData.description)
    }
    const data: TJobItemApiResponse = await res.json()
    return data.jobItem
  }

  return { fetchJobItem }
}
