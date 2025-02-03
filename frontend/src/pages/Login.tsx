import { useNavigate, Link } from "react-router-dom"
import { Check } from "lucide-react"
import { useAtom } from "jotai"

import { LoginForm } from "@/components/auth/LoginForm"
import { Button } from "@/components/ui/button"
import Github from "@/assets/github.svg"
import Google from "@/assets/google.svg"
import { loginAtom } from "@/stores/authStore"

export default function LoginPage() {
  const navigate = useNavigate();
  const [, login] = useAtom(loginAtom);

  const handleLogin = async (email: string, password: string) => {
    try {
      await login({email, password});
      navigate("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Product Info Section */}
      <div className="lg:flex-1 bg-primary text-primary-foreground p-8 lg:p-16 flex-col justify-center hidden lg:block">
        <h1 className="text-4xl font-bold mb-6">Welcome to Taskify</h1>
        <p className="text-xl mb-8">Organize your work and life, finally.</p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5" />
            <span>Manage tasks effortlessly</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5" />
            <span>Collaborate with your team</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5" />
            <span>Track your productivity</span>
          </li>
        </ul>
      </div>

      {/* Login Form Section */}
      <div className="lg:flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <Link to="/register" className="font-medium text-primary hover:text-primary/90">
                create a new account
              </Link>
            </p>
          </div>
          <LoginForm onSubmit={handleLogin} />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline">
                <img alt="github" src={Github} className="mr-2 h-4 w-4" /> Github
              </Button>
              <Button variant="outline">
                <img alt="google" src={Google}className="mr-2 h-4 w-4" /> Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

