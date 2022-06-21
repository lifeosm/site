import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

import buildingasecondbrain from '@/images/resources/buildingasecondbrain.png'
import bulletjournal from '@/images/resources/bulletjournal.png'
import dailystoic from '@/images/resources/dailystoic.png'

const resources = [
  {
    title: 'Building a Second Brain',
    description:
      'The proven method to organize your digital life and unlock your creative potential. Harness the full potential of what you know to lead a more fulfilling life.',
    image: function() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <a href={"https://www.buildingasecondbrain.com/"} target={"_blank"}
             className="text-xs underline hover:no-underline">
            <Image src={buildingasecondbrain} alt="Building a Second Brain site screenshot" /></a>
        </div>
      )
    },
  },
  {
    title: 'Daily Stoic',
    description:
      'Stoicism is a philosophy designed to make us more resilient, happier, more virtuous, and wiser–and, as a result, better people, better parents, and better professionals.',
    image: function() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <a href={"https://dailystoic.com/"} target={"_blank"}
             className="text-xs underline hover:no-underline">
            <Image src={dailystoic} alt="Daily Stoic site screenshot" />
          </a>
        </div>
      )
    },
  },
  {
    title: 'Bullet Journal',
    description:
      'Meet the analog method for the digital age that will help you track the past, order the present, and design your future.',
    image: function() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <a href={"https://bulletjournal.com/"} target={"_blank"}>
            <Image src={bulletjournal} alt="Bullet Journal site screenshot" />
          </a>
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Resources
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          These great kinds of stuff can improve your productivity
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Find out how to elevate your efficiency by uncovering tools
          and methods that organize your digital life and maximize your potential.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
