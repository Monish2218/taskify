import { Navigate} from "react-router-dom"

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');

  if (!auth.token) {
    return <Navigate to="/login"/>
  }

  return (
    <>{children}</>
  )
}

export default ProtectedRoute

