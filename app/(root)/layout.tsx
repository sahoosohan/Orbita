import { onBoardUser } from '@/modules/auth/actions'
import Navbar from '@/modules/home/components/navbar'
import React from 'react'

type LayoutProps = Readonly<{
  children: React.ReactNode
}>

const Layout = async({ children }: LayoutProps) => {
  await onBoardUser()
  return (
    <main className="relative flex min-h-screen overflow-x-hidden bg-background bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)]">
        <Navbar/>
        <div
        className="fixed inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-size-[16px_16px]"
      /> 
      <div className="flex min-h-screen w-full flex-1 flex-col">
            {children}
      </div>
    </main>
  )
}

export default Layout
