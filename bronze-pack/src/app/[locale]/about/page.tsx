import { Avatar } from '@nextui-org/react';
import {
    FaXmark,
    FaFacebook,
    FaRegEnvelope,
    FaLinkedin,
    FaXTwitter,
    FaInstagram,
    FaPhone, 
    FaHouse,
    FaLetterboxd,
    FaUser
  } from 'react-icons/fa6';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Avatar
              src="/placeholder-user.jpg"
              className="h-32 w-32 lg:h-40 lg:w-40"
            />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">John Doe</h1>
              <p className="max-w-lg text-gray-700 md:text-xl lg:text-base xl:text-xl">
                Experienced real estate agent with a passion for helping clients find their dream homes.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="text-gray-700">
                I have been a real estate agent for over 10 years, helping clients buy and sell properties in the local
                area. I pride myself on my attention to detail, strong negotiation skills, and commitment to providing
                exceptional customer service.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">My Specialties</h2>
              <ul className="grid gap-2 text-gray-700">
                <li>Residential properties</li>
                <li>Investment properties</li>
                <li>First-time home buyers</li>
                <li>Luxury homes</li>
              </ul>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">Awards & Accolades</h2>
              <ul className="grid gap-2 text-gray-700">
                <li>Top Producing Agent, 2021</li>
                <li>Certified Luxury Home Marketing Specialist</li>
                <li>Voted Best Real Estate Agent, 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Get in Touch
              </h2>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-2">
                  <FaPhone className="h-6 w-6 text-gray-700" />
                  <a href="#" className="text-gray-700 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegEnvelope className="h-6 w-6 text-gray-700" />
                  <a href="#" className="text-gray-700 hover:underline">
                    john@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaHouse className="h-6 w-6 text-gray-700" />
                  <p className="text-gray-700">123 Main St, Anytown USA</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">Social</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Connect with Me
              </h2>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-2">
                  <FaXTwitter className="h-6 w-6 text-gray-700" />
                  <a href="#" className="text-gray-700 hover:underline">
                    @johndoe
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="h-6 w-6 text-gray-700" />
                  <a href="#" className="text-gray-700 hover:underline">
                    linkedin.com/in/johndoe
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaInstagram className="h-6 w-6 text-gray-700" />
                  <a href="#" className="text-gray-700 hover:underline">
                    @johndoe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
