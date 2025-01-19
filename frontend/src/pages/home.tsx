import { Link } from 'react-router-dom'
import {Button} from '../components/ui/button'
import { ArrowRight, CheckCircle, BarChart2, Users } from 'lucide-react';

export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Streamline Your</span>
              <span className="block text-primary">Project Management</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Simplify project tracking, enhance team collaboration, and boost productivity with our intuitive project management solution.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/signup">
                  <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/login">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Everything you need to manage projects effectively
            </h2>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Task Management</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Create, assign, and track tasks with ease. Keep your projects organized and on schedule.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Team Collaboration</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Work together seamlessly with your team. Share updates and track progress in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                      <BarChart2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Progress Tracking</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Monitor project progress with intuitive dashboards and detailed analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
