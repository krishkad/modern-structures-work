import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PiPhoneDisconnectFill } from "react-icons/pi";

const Contact = () => {
    return (
        <div className='w-full' id='contact'>
            <div className="max-w-wrapper max-w-5xl mx-auto py-24">
                <div className="w-full">
                    <h2 className="text-center text-2xl font-bold"><span className="text-blue-500">CONTACT </span>US</h2>
                </div>
                <div className="w-full flex max-sm:flex-col-reverse pt-10 gap-8">
                    <div className="w-full sm:w-1/2 max-sm:py-10">
                        <h3 className="text-md font-bold underline underline-offset-4 decoration-blue-500 ">
                            FILL THE CONTACT FORM
                        </h3>
                        <div className="w-full flex flex-col max-sm:items-center gap-4 pt-6">
                            <Input className='max-w-[420px]' placeholder='Enter Name' />
                            <Input className='max-w-[420px]' placeholder='Enter E-mail' />
                            <Input className='max-w-[420px]' placeholder='Enter Phone No.' />
                            <Textarea className='max-w-[420px] h-40' placeholder='Enter Message' />
                            <Button className='w-full max-w-[420px] bg-zinc-700 hover:bg-zinc-800'>Submit</Button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <h3 className="text-md font-bold underline underline-offset-4 decoration-blue-500 ">
                            HEADQUARTERS
                        </h3>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <MapPin className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium">
                                        1F-22, Jenna Plaza, Nkrumah Road, Kamapla, Uganda
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <Phone className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium">
                                        +256 752 778653
                                    </p>
                                    <p className="text-sm font-medium">
                                        +256 744 778651
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <Mail className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium text-wrap">
                                        Info@modernstructures.com
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <PiPhoneDisconnectFill className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium">
                                        +256 744 778651
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <Clock className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium">
                                        Mon - Sat: 9:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5 sm:mt-10">
                    <h3 className="text-md font-bold underline underline-offset-4 decoration-blue-500 ">
                        MAP
                    </h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1186.1626005452765!2d32.58274515185326!3d0.31107896095357485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd154ff07265%3A0x9533f44a2325e0b!2sJennah%20Plaza!5e0!3m2!1sen!2sin!4v1720521365758!5m2!1sen!2sin" className='w-full pt-6 min-h-[400px]' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact