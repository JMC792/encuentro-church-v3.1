'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '/public/icons/logo.svg'
import Link from 'next/link'

const navigation = [
{ name: 'About', href: '/about' },
{ name: 'Contact', href: '/contact' },
{ name: 'Service', href: '/service' },
{ name: 'Blog', href: '/blog' },
]

export default function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                
                {/* Navbar */}
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image alt="" src={logo} className="h-8 w-auto" />
                        </a>
                    </div>

                    <div className="flex lg:hidden">
                        <div type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-200">
                            {item.name}
                        </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
                        Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                </nav>
                
                {/* Sidebar */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />

                    {/* Menu */}
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">

                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                                />
                            </a>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>

                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50"
                                        >
                                        {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    )
}
