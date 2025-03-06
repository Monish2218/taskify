import { Navigate} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient();
  const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');

  if (!auth.token) {
    return <Navigate to="/login"/>
  }

  return (
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
  )
}

export default ProtectedRoute

