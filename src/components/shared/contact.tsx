import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PiPhoneDisconnectFill } from "react-icons/pi";

const Contact = () => {
    return (
        <div className='w-full' id='contact'>
            <div className="max-w-wrapper max-w-5xl mx-auto py-10">
                <div className="w-full">
                    <h2 className="text-center text-2xl font-bold"><span className="text-blue-500">CONTACT </span>US</h2>
                </div>
                <div className="w-full flex max-sm:flex-col-reverse pt-10 gap-8">
                    <div className="w-full sm:w-2/5 max-sm:py-10">
                        <h3 className="text-md font-bold underline underline-offset-4 decoration-blue-500 ">
                            FILL THE CONTACT FORM
                        </h3>
                        <div className="w-full flex flex-col max-sm:items-center gap-4 pt-6">
                            <Input className='max-w-[320px]' placeholder='Enter Name' />
                            <Input className='max-w-[320px]' placeholder='Enter E-mail' />
                            <Input className='max-w-[320px]' placeholder='Enter Phone No.' />
                            <Textarea className='max-w-[320px] h-40' placeholder='Enter Message' />
                            <Button className='w-full max-w-[320px] bg-zinc-800 '>Submit</Button>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/5">
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quo dignissimos repellat ea voluptatum, amet, qui laboriosam provident, aspernatur quis dolor vero.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <Phone className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium">
                                        333 333 3333
                                    </p>
                                    <p className="text-sm font-medium">
                                        333 333 3333
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-[20px]">
                                    <Mail className='w-5 h-5 text-blue-500 ' />
                                </div>
                                <div className="w-[calc(100%-20px)]">
                                    <p className="text-sm font-medium">
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
                                        {121} 8888 9999
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
            </div>
        </div>
    )
}

export default Contact