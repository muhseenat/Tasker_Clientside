import { Carousel } from 'react-bootstrap';



const WorkFlow = () => {
  return (
    <>
      <section className="flow py-5 mt-5">
        <div className="container text-white text-center py-5 mt-auto" >
          <p >APPLY PROCESS</p>
          <h1>How it works</h1>
          <Carousel style={{ marginTop: "5rem" }} >
            <Carousel.Item interval={1000}>
              <img
                className="d-fluid "
                src="https://media.istockphoto.com/photos/searching-browsing-internet-data-information-networking-man-clicking-picture-id1141748040?b=1&k=20&m=1141748040&s=170667a&w=0&h=hNNDWsA9aCFi1nLpGo3GaTOVG8Qe6cbolletzb3h93I="
                alt="First slide"
              />
              <Carousel.Caption>
                <h2 className='text-black'>1. Search a job</h2>
                <p className='text-black'>Search a job according to your Skill.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-fluid "
                src="https://media.istockphoto.com/photos/business-man-review-his-resume-application-on-desk-laptop-computer-picture-id1149054436?b=1&k=20&m=1149054436&s=170667a&w=0&h=gR6DQMvAEFYc1hZikJ9sT1xQPG5Czr51uB7jQYdPOAg="
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className='text-black'>2. Apply the job</h3>
                <p className='text-black'>Apply it if that is suitable for you.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-fluid "
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2V0JTIwam9ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className='text-black'>3.Get Your job</h3>
                <p className='text-black'>Get your job and change your life style.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </section>

    </>
  )
}

export default WorkFlow