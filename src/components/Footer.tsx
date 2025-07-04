'use client';

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5734 13.1016C10.9266 10.8656 10.875 10.3313 10.875 10.2234C10.8751 10.1671 10.8782 10.1107 10.8844 10.0547C10.9275 9.78925 11.0632 9.54764 11.2674 9.37263C11.4716 9.19761 11.7311 9.10049 12 9.09844C12.2714 9.10039 12.5331 9.19999 12.7371 9.37903C12.9411 9.55807 13.0738 9.80457 13.1109 10.0734C13.1205 10.1229 13.1252 10.1731 13.125 10.2234C13.125 10.3453 13.0688 10.8375 12.5391 12.7313L12.5016 12.8484C12.3328 13.4484 12.15 14.0531 12 14.5453C11.8781 14.1375 11.7375 13.6594 11.5969 13.1672L11.5734 13.1016Z" fill="#198248"/>
                            <path d="M9.37969 7.125C9.34754 7.15254 9.32327 7.18813 9.30938 7.22812C9.28781 7.27519 9.27662 7.32635 9.27657 7.37812C9.27622 7.42844 9.28745 7.47816 9.30938 7.52344C9.32652 7.56814 9.35379 7.60825 9.38907 7.64062C9.42496 7.67504 9.4661 7.70352 9.51094 7.725C9.60261 7.76226 9.70521 7.76226 9.79688 7.725C9.84032 7.70351 9.87991 7.675 9.91407 7.64062C9.93377 7.62197 9.94968 7.59969 9.96094 7.575C10.1397 7.78003 10.2866 8.01073 10.3969 8.25937C10.0781 8.25 9.53438 8.20781 9.11719 7.93594C8.7 7.66406 8.4375 7.22813 8.2875 6.90469H8.30625C8.67566 6.90094 9.04162 6.97605 9.37969 7.125Z" fill="#FF0000"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.0656 21.3234L21.7313 21.3656L21.4266 20.775C21.4078 20.7422 19.7109 17.4094 19.2094 14.8922C19.635 15.061 20.0875 15.1515 20.5453 15.1594L21.1969 15.1781L20.8875 14.6063C20.8688 14.5641 18.6609 10.4484 18.4734 7.5C18.1828 3.96094 15.2766 1.07812 12 1.07812C8.72344 1.07812 5.81719 3.96094 5.51719 7.55625C5.33907 10.4484 3.13125 14.5641 3.1125 14.6063L2.80313 15.1781L3.45469 15.1594C3.91246 15.1515 4.36504 15.061 4.79063 14.8922C4.28907 17.4094 2.59219 20.7422 2.57344 20.775L2.26875 21.3703L2.93438 21.3234C4.63594 21.2016 6.10313 20.1375 6.83907 19.5C7.07813 20.8969 6.88125 22.3875 6.88125 22.4062L6.80157 23.0109L7.37813 22.8094C8.69063 22.35 9.54844 20.6016 10.0031 19.3594C10.0646 19.6532 10.1069 19.9507 10.1297 20.25C10.1953 21.3281 11.5922 22.5938 11.7516 22.7344L12 22.9547L12.2484 22.7344C12.4078 22.5938 13.8047 21.3281 13.8703 20.25C13.8931 19.9507 13.9354 19.6532 13.9969 19.3594C14.4516 20.6016 15.3094 22.35 16.6219 22.8094L17.1984 23.0109L17.1188 22.4062C17.1188 22.3875 16.9219 20.8969 17.1609 19.5C17.8969 20.1375 19.3641 21.2016 21.0656 21.3234ZM13.7813 10.8703C13.9861 10.656 14.202 10.4526 14.4281 10.2609L13.8703 10.3266C13.8537 10.5097 13.8239 10.6914 13.7813 10.8703ZM10.875 10.2234C10.875 10.3313 10.9266 10.8656 11.5734 13.1016L11.5969 13.1672C11.7375 13.6594 11.8781 14.1375 12 14.5453C12.15 14.0531 12.3328 13.4484 12.5016 12.8484L12.5391 12.7313C13.0688 10.8375 13.125 10.3453 13.125 10.2234C13.1252 10.1731 13.1205 10.1229 13.1109 10.0734C13.0738 9.80457 12.9411 9.55807 12.7371 9.37903C12.5331 9.19999 12.2714 9.10039 12 9.09844C11.7311 9.10049 11.4716 9.19761 11.2674 9.37263C11.0632 9.54764 10.9275 9.78925 10.8844 10.0547C10.8782 10.1107 10.8751 10.1671 10.875 10.2234ZM9.30938 7.22812C9.32327 7.18813 9.34754 7.15254 9.37969 7.125C9.04162 6.97605 8.67566 6.90094 8.30625 6.90469H8.2875C8.4375 7.22813 8.7 7.66406 9.11719 7.93594C9.53438 8.20781 10.0781 8.25 10.3969 8.25937C10.2866 8.01073 10.1397 7.78003 9.96094 7.575C9.94968 7.59969 9.93377 7.62197 9.91407 7.64062C9.87991 7.675 9.84032 7.70351 9.79688 7.725C9.70521 7.76226 9.60261 7.76226 9.51094 7.725C9.4661 7.70352 9.42496 7.67504 9.38907 7.64062C9.35379 7.60825 9.32652 7.56814 9.30938 7.52344C9.28745 7.47816 9.27622 7.42844 9.27657 7.37812C9.27662 7.32635 9.28781 7.27519 9.30938 7.22812ZM13.7016 8.25937C14.0719 8.25937 14.5688 8.20313 14.9859 7.93594C15.4031 7.66875 15.6656 7.22812 15.8109 6.9H15.7969C15.4286 6.89693 15.0639 6.97369 14.7281 7.125C14.7542 7.15748 14.7777 7.19196 14.7984 7.22812C14.8142 7.27672 14.8236 7.32713 14.8266 7.37812C14.8236 7.42758 14.8141 7.47644 14.7984 7.52344C14.7746 7.5654 14.7463 7.60469 14.7141 7.64062C14.6431 7.71156 14.5472 7.75194 14.4469 7.75312C14.3978 7.75294 14.3493 7.74289 14.3042 7.72356C14.2591 7.70424 14.2183 7.67603 14.1844 7.64062C14.1662 7.62073 14.1504 7.59869 14.1375 7.575C13.9603 7.7812 13.8135 8.01166 13.7016 8.25937ZM9.54375 10.2563C9.76407 10.4438 9.99375 10.6594 10.2234 10.8984C10.1812 10.7116 10.1514 10.5221 10.1344 10.3312L9.54375 10.2563Z" fill="white"/>
                            <path d="M14.9859 7.93594C14.5688 8.20313 14.0719 8.25937 13.7016 8.25937C13.8135 8.01166 13.9603 7.7812 14.1375 7.575C14.1504 7.59869 14.1662 7.62073 14.1844 7.64062C14.2183 7.67603 14.2591 7.70424 14.3042 7.72356C14.3493 7.74289 14.3978 7.75294 14.4469 7.75312C14.5472 7.75194 14.6431 7.71156 14.7141 7.64062C14.7463 7.60469 14.7746 7.5654 14.7984 7.52344C14.8141 7.47644 14.8236 7.42758 14.8266 7.37812C14.8236 7.32713 14.8142 7.27672 14.7984 7.22812C14.7777 7.19196 14.7542 7.15748 14.7281 7.125C15.0639 6.97369 15.4286 6.89693 15.7969 6.9H15.8109C15.6656 7.22812 15.4031 7.66875 14.9859 7.93594Z" fill="#FF0000"/>
                        </svg>
                        <span className="text-xl font-bold">FALCON</span>
                    </div>
                    <p className="flex items-start gap-2 text-sm mb-2">
                        <MapPin className="w-4 h-4 mt-0.5" /> 123 Main St, Dhaka, Bangladesh
                    </p>
                    <p className="flex items-center gap-2 text-sm mb-2">
                        <Phone className="w-4 h-4" /> +880 1234-567890
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4" /> support@example.com
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                        <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                        <li><Link href="/press" className="hover:text-white">Press</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Help</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
                        <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Need support?</h3>
                    <p className="mb-2 text-sm text-gray-300">Call us: <br /><strong className="text-white">+880 9876-543210</strong></p>
                    <div className="flex flex-col gap-3 mt-4">
                        <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                            <div className="w-40 h-12 bg-white rounded overflow-hidden">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png"
                                       alt="Google Play"
                                       width={1000}
                                       height={1000}
                                       className="w-full h-full object-contain" />
                            </div>
                        </Link>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <div className="w-40 h-12 bg-white rounded overflow-hidden">

                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                                    alt="App Store"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
                FALCON &copy; {new Date().getFullYear()}. All rights reserved.
            </div>
        </footer>
    );
}
