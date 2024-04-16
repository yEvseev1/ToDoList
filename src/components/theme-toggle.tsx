'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

import {Button} from '@/ui/button'
import {useEffect} from "react";

export function ThemeToggle() {
  const {setTheme, theme} = useTheme()
  useEffect(() => {
    console.log(theme)
  }, [theme]);
  return (
    <>
      <Select onValueChange={(value) => setTheme(value)}>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="Theme"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      
    </>
  )
}
