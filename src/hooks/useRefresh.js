import { useContext } from 'react'
import { RefreshContext } from '../contexts/refreshContext'

export const useRefresh = () => {
    const { fast, slow } = useContext(RefreshContext)
    return { fastRefresh: fast, slowRefresh: slow }
}