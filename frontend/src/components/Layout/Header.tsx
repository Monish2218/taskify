"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useAtom, useAtomValue } from "jotai"
import { Layers, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logoutAtom, userAtom } from "@/stores/authStore"

export const Header = () => {
  const user = useAtomValue(userAtom);
  const [, logout] = useAtom(logoutAtom);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <Layers className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Taskify</span>
            </Link>
          </div>
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
          {user && (
            <Link
              to="/dashboard"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
          )}
            <Link
              to="/features"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/business"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              For Business
            </Link>
          </nav>
          <div className="flex items-center md:ml-6">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt={user.name} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="ml-3">
                    Start for free
                  </Button>
                </Link>
              </div>
            )}
            <Button variant="ghost" className="ml-3 md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {user && (
          <Link
            to="/dashboard"
            className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
        )}
          <Link
            to="/features"
            className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/business"
            className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            For Business
          </Link>
        </div>
      </div>
    </header>
  )
}

