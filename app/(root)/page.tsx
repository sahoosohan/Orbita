
import ProjectsForm from '@/modules/home/components/project-form'
// import ProjectList from '@/modules/home/components/project-list'
import Image from 'next/image'
import React from 'react'

const Page = () => {


  return (
    <div className='flex min-h-screen w-full items-start justify-center px-4 pb-8 pt-32 md:pt-28'>
    
      <div className='max-w-5xl w-full'>
        <section className='flex flex-col items-center space-y-6'>
          <div className='flex flex-col items-center'>
          <Image
            src={"/logo.svg"}
            width={100}
            height={100}
            alt='Logo'
            priority
            className='h-auto w-24 dark:invert md:w-28'
          />
          </div>
          <h1 className='text-center text-3xl font-bold md:text-5xl'>Build Something with 💓</h1>
        
          <p className='text-center text-lg text-muted-foreground md:text-xl'>
            Create apps and websites by chatting with AI
          </p>

          <div className='max-w-3xl w-full'>
            <ProjectsForm/>
          </div>
          {/* <ProjectList/> */}
        </section>
      </div>
    </div>
  )
}

export default Page
