import { createContext, useEffect, useState } from "react"
import { IAdmContext, IAdmContextProps, IJobItem } from "./@types"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const AdmContext = createContext<IAdmContext>(
    {} as IAdmContext
)

export const AdmProvider = ({ children }: IAdmContextProps) => {

    const [ jobId, setJobId ] = useState<number | null>(null)
    const [ jobsList, setJobsList ] = useState<IJobItem[]>([])
    const navigate = useNavigate()

    const getCompanyJobs = () => {
        useEffect(() => {
            const token = localStorage.getItem("@TOKEN")
            const companyId = localStorage.getItem("@USERID")
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const jobsList = async () => {
                try {
                    await api.get(`/users/${companyId}/jobs`, config)
                    .then(({ data }) => setJobsList([...data]))
                } catch (error) {
                    
                }
            }
            jobsList()
        }, [])
    }

    const deleteJob = async (id: number) => {
        const token = localStorage.getItem("@TOKEN")
        const companyId = localStorage.getItem("@USERID")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            await api.delete(`/jobs/${id}`, config)
            await api.get(`/users/${companyId}/jobs`, config)
            .then(({ data }) => setJobsList([...data]))
            toast.success("Vaga deletada")
        } catch (error) {
            
        }
    }
    
    return (
        <AdmContext.Provider value={{ setJobId, getCompanyJobs, jobsList, deleteJob, navigate, jobId }}>
            { children }
        </AdmContext.Provider>
    )
}