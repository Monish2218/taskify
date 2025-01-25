import { Link } from "react-router-dom"
import facebookLogo from "../../assets/facebook.svg"
import xLogo from "../../assets/x.svg"
import instagramLogo from "../../assets/instagram.svg"
import linkedinLogo from "../../assets/linkedin.svg"

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <img alt="facebook" src={facebookLogo} className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <img alt="X" src={xLogo} className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <img alt="instagram" src={instagramLogo} className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <img alt="linkedin" src={linkedinLogo} className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; 2025 Taskify, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
