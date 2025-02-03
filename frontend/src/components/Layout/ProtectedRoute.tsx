import { Navigate, useLocation } from "react-router-dom"
import { useAtomValue } from "jotai"
import { userAtom } from "@/stores/authStore"

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute

