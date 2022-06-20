import Image from 'next/image'
import React from 'react'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import { GitHubIcon, LinkedInIcon, IconX } from '@/components/SocialIcons'
import founderImage from '@/images/avatars/founder.jpg'

export function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={founderImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="founder-title">
              Founder
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Kamil –</span>
              </span> Hey there 👋 I’m founder of{' '}
              <a className={"underline hover:no-underline"}
                 href={"https://www.octolab.org/"}
                 target={"_blank"}>OctoLab</a>.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              As a founder, my dream has always been to balance cherishing moments
              with my family and achieve substantial success professionally.
              This vision led me to conceive{' '}
              <strong className={"text-blue-600"}>LifeOS</strong>,
              a system designed to navigate the complexities of modern life.
              By creating two flagship products,
              <a href={"https://new.sparkle.wiki"} target={"_blank"}>
                <span className={"px-1"} role={"img"}>✨</span>&nbsp;
                <span className={"underline hover:no-underline"}>Sparkle</span>
              </a> and{' '}
              <a href={"https://new.tact.run/"} target={"_blank"}>
                <span className={"px-1"} role={"img"}>🤺</span>&nbsp;
                <span className={"underline hover:no-underline"}>Tact</span>
              </a>, I’ve aimed to encapsulate the essence of efficiency and
              knowledge management. These tools are my commitment to elevating
              my life and empowering others to do the same, fostering a community
              where work and personal life can flourish.
            </p>
            <p className="mt-5 text-sm inline-flex items-center">
              Follow me on
              <a href={"https://jointo.space/kamilsk/github"} className={"ml-4 mr-2 text-gray-800"}>
                <GitHubIcon className="h-7 w-7 fill-current" />
              </a>
              <a href={"https://jointo.space/kamilsk/linkedin"} className={"mx-2 text-blue-600"}>
                <LinkedInIcon className="h-8 w-8 fill-current" />
              </a>
              <a href="https://jointo.space/kamilsk/twitter" className={"mx-2 text-gray-950"}>
                <IconX className="h-7 w-7 fill-current" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
