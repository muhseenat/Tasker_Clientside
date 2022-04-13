import Link from 'next/link'

const PostJob = () => {
    return (
        <>
            <section className="apply py-5">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-7">
                            <p className="red pt-5">WHAT WE ARE DOING</p>
                            <h1>24k Talented people are getting Jobs</h1>
                            <p className="py-4"></p>
                            <p>Post your works here and find suitable partner.</p>
                            <Link href='postjob'><button className="btn4 mt-3 ">POST A JOB</button></Link>
                        </div>
                        <div className="col-lg-5 mt-3">
                            <img src="https://media.istockphoto.com/photos/close-up-of-unrecognizable-person-opening-office-door-picture-id1206393963?b=1&k=20&m=1206393963&s=170667a&w=0&h=jhwV9p1Al0aYw3WEqU0tirBabR-lZoHXT5PF52Y9AWc=" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>
                {
                    `p{
                      font-weight:700;
                  }`
                }
            </style>
        </>
    )
}

export default PostJob