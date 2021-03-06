
const JobProviders = () => {
  return (
    <>

      <section className="slider py-5">
        <h1 className="providers">TOP JOB PROVIDERS</h1>

        <div className="container text-center py-5">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div id="carouselExampleControls" className="carousel slide" data-bg-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid avatar mb-4" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="First slide" />
                    <h4>John Doe</h4>
                    <p></p>
                    <p className="perac py-3">"Provided 25 jobs and 25 happy customers "</p>

                  </div>
                  <div className="carousel-item">

                    <img className="img-fluid avatar mb-4" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="Second slide" />
                    <h4>John Doe</h4>
                    <p></p>
                    <p className="perac py-3">"Provided 25 jobs and 25 happy customers "</p>
                    {/* <button className="btn5 mt-3">
        CONTACT </button> */}
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid avatar mb-4" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="Third slide" />
                    <h4>John Doe</h4>
                    <p></p>
                    <p className="perac py-3">"Provided 25 jobs and 25 happy customers "</p>
                    {/* <button className="btn5 mt-3"> 
     </button> */}
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JobProviders