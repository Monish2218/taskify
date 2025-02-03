import { useNavigate, Link } from "react-router-dom"
import { Check } from "lucide-react"

import { RegisterForm } from "@/components/auth/RegisterForm"
import { Button } from "@/components/ui/button"

import Github from "@/assets/github.svg"
import Google from "@/assets/google.svg"

export default function RegisterPage() {
  const navigate = useNavigate()

  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      console.log("Register successful",name, email, password)
      navigate("/login")
    } catch (error) {
      console.error("Registration failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Product Info Section */}
      <div className="lg:flex-1 bg-primary text-primary-foreground p-8 lg:p-16 flex-col justify-center hidden lg:block">
        <h1 className="text-4xl font-bold mb-6">Join Taskify Today</h1>
        <p className="text-xl mb-8">Start organizing your tasks and boosting your productivity.</p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5" />
            <span>30-day free trial</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5" />
            <span>No credit card required</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5" />
            <span>Cancel anytime</span>
          </li>
        </ul>
      </div>

      {/* Register Form Section */}
      <div className="lg:flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:text-primary/90">
                Sign in
              </Link>
            </p>
          </div>
          <RegisterForm onSubmit={handleRegister} />
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

