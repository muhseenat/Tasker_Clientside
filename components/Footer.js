import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="footer pt-5">
                <div className="container-fluid pt-5">
                    <div className="row pb-4">
                        <div className="col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3 className="py-5">ABOUT US</h3>

                                    <p>Our Team will help you to find suitable job<br />
                                        And find you suitable partner for your job.</p>
                                </div>
                                <div className="col-lg-3">
                                    <h3 className="py-5">CONTACT US</h3>
                                    <p>Address :Kochi,InfoPark Phase I.</p>
                                    <p className="link pt-3">Phone : +91 9846777542</p>
                                    <p className='link'> Email:tasker@gmail.com</p>
                                </div>
                                <div className="col-lg-3">
                                    <h3 className="py-5">IMPORTANT LINK</h3>
                                    <Link href='/profile'><p className="link"> My Account</p></Link>
                                    <Link href='/jobs'><p className="link"> View jobs</p></Link>
                                    <Link href='/'><p className="link"> Categories</p></Link>
                                    <Link href='/'><p className="link"> Top Job Providers</p></Link>

                                </div>
                            </div>
                            <hr />
                            <p className="py-4">Copyright @2022 All rights reserved <span style={{color:'purple'}}>Tasker</span></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer