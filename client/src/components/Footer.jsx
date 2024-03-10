import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500 '>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-green-600 via-black to-blue-900 rounded-lg text-white'>Dewmin's</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3
                    sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.linkedin.com/in/imesha-dewmin-519285222/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    My LinkedIn Profile
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Dewmin's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow me' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github.com/imeshaDewmin'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    My Github Profile
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                >
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'

                                >
                                    Privacy
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                >
                                    Terms & conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>


                    </div>

                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Dewmo Creations" year={new Date().getFullYear()} />

                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='https://github.com/imeshaDewmin' icon={BsGithub} />
                        <Footer.Icon href='https://www.linkedin.com/in/imesha-dewmin-519285222/' icon={BsLinkedin} />
                        <Footer.Icon href='https://www.facebook.com/imesha.thilakaratne?mibextid=dGKdO6' icon={BsFacebook} />
                        <Footer.Icon href='https://www.instagram.com/imesha.dewmin/' icon={BsInstagram} />

                    </div>
                </div>


            </div>
        </Footer>
    );
}
