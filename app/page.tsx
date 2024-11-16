import Image from "next/image"
import {
  FaSquareGithub,
  FaSquareEnvelope,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareYoutube,
  FaMedium,
} from "react-icons/fa6"

export default function Home() {
  return (
    <main className='flex h-svh overflow-hidden overscroll-none hero items-center p-4'>
      <div className='container flex flex-row items-center justify-center space-x-4'>
        <div>
          <Image
            src='/adam-thumb.png'
            width={400}
            height={400}
            alt='Adam Richard Turner'
            className='rounded-full hidden lg:block'
          />
        </div>
        <div className='text-white space-y-4'>
          <div className='flex flex-row items-center justify-start space-x-3'>
            <h1 className='text-4xl font-inter md:text-6xl font-semibold leading-none'>
              Adam Richard Turner
            </h1>
          </div>
          <div className='space-y-4 font-inter'>
            <p className='text-base'>
              <span className='font-bold text-secondary'>
                Software Engineer
              </span>{" "}
              based in London, skilled at crafting Front End UI for web
              applications using TypeScript and a variety of other tools.
            </p>
            <h3 className='text-xs'>
              Reach out to me via any of the below [Not looking for work]
            </h3>
            <div>
              <ul className='flex flex-row space-x-2 text-4xl items-center'>
                <li>
                  <a
                    href='https://github.com/adamrichardturner/'
                    target='_blank'
                    aria-label='GitHub'
                  >
                    <FaSquareGithub className='hover:md:shadow-md rounded hover:md:shadow-secondary transition-shadow' />
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:hello@adamrichardturner.dev'
                    target='_blank'
                    aria-label='Email'
                  >
                    <FaSquareEnvelope className='hover:md:shadow-md rounded hover:md:shadow-secondary transition-shadow' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/devadam88'
                    target='_blank'
                    aria-label='X Twitter'
                  >
                    <FaSquareXTwitter className='hover:md:shadow-md rounded hover:md:shadow-secondary transition-shadow' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/adamrichardturner88/'
                    target='_blank'
                    aria-label='Linkedin'
                  >
                    <FaLinkedin className='hover:md:shadow-md rounded hover:md:shadow-secondary transition-shadow' />
                  </a>
                </li>
                <li className='bg-white w-[34.17px] h-[34.17px] rounded'>
                  <a
                    href='https://adamrichardturner.medium.com/'
                    target='_blank'
                    aria-label='Medium'
                  >
                    <FaMedium className='hover:md:shadow-md text-black p-1.5 w-[34.17px] h-[34.17px] rounded hover:md:shadow-secondary transition-shadow' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/@adamrichardturner'
                    target='_blank'
                    aria-label='YouTube'
                  >
                    <FaSquareYoutube className='hover:md:shadow-md rounded hover:md:shadow-secondary transition-shadow' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
