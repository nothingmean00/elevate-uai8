"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  
  // Close mobile menu when route changes or when pressing Escape
  useEffect(() => {
    const handleRouteChange = () => setOpen(false)
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    
    window.addEventListener('keydown', handleEscape)
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])
  
  // Check if current path matches a nav link
  const isActive = (path: string) => {
    // Exact match for home page
    if (path === '/' && pathname === '/') return true
    
    // Partial match for other pages (e.g. /features/something)
    if (path !== '/' && pathname.startsWith(path)) return true
    
    return false
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden p-2"
          aria-label="Open main menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] max-w-[400px] sm:w-[400px] p-0">
        <nav className="flex flex-col py-8 px-6 h-full">
          <h2 className="text-lg font-semibold mb-6 pb-2 border-b">Menu</h2>
          
          <div className="flex flex-col gap-1">
            <MobileNavLink 
              href="/" 
              label="Home" 
              isActive={isActive('/')} 
              onClick={() => setOpen(false)} 
            />
            
            <div className="pt-2 pb-1">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2 pl-3">Features</h3>
              <div className="ml-2 border-l-2 border-muted pl-2 space-y-1">
                <MobileNavLink 
                  href="/features" 
                  label="All Features" 
                  isActive={isActive('/features')} 
                  onClick={() => setOpen(false)} 
                />
              </div>
            </div>
            
            <MobileNavLink 
              href="/success-stories" 
              label="Success Stories" 
              isActive={isActive('/success-stories')} 
              onClick={() => setOpen(false)} 
            />
            <MobileNavLink 
              href="/pricing" 
              label="Pricing" 
              isActive={isActive('/pricing')} 
              onClick={() => setOpen(false)} 
            />
            <MobileNavLink 
              href="/contact" 
              label="Contact" 
              isActive={isActive('/contact')} 
              onClick={() => setOpen(false)} 
            />
          </div>
          
          <div className="mt-auto pt-4 flex flex-col gap-2 border-t">
            <Button asChild className="w-full" variant="outline">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

function MobileNavLink({ 
  href, 
  label, 
  isActive, 
  onClick 
}: { 
  href: string; 
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center px-3 py-2 rounded-md text-sm
        ${isActive 
          ? 'bg-primary/10 text-primary font-medium' 
          : 'text-foreground hover:bg-accent hover:text-accent-foreground'}
        transition-colors
      `}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>
      )}
    </Link>
  )
}

