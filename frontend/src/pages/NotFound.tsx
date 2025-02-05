import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <div className="flex space-x-4">
        <Link to="/">
          <Button>Go to Home</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="outline">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

