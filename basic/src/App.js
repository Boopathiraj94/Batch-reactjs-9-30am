import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section>
      {/* start menu bar */}
      <div className='container-fluid border border-4'>
        <div className='row'>
          <div className='col-sm-1 border border-2 border-primary'>
            <img src='https://img.freepik.com/premium-vector/d-letter-monogram-logo-design-vector_330659-1917.jpg' style={{ width: "80px", height: "80px" }} alt='' />
          </div>

          <div className='col-sm-11 d-flex justify-content-end  align-items-center border border-2 border-primary'>
            <a href='' className='me-4'>Home</a>
            <a href='' className='me-4'>About</a>
            <a href='' className='me-4'>Contact</a>
            <a href='' className='me-4'>Service</a>
          </div>
        </div>
      </div>
      {/* end */}

      {/* start banner */}

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-river-magic-nature-ultra-hd-wallpaper-4k-sr10012417-1705234940826-cover.webp" className="d-block w-100" alt="beautiful-fantasy-river-magic-nature-ultra-hd-wallpaper" style={{ height: "80vh" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Denish the king</h5>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2018/04/30/13/47/wallpaper-3362711_1280.jpg" style={{ height: "80vh", width: "100vw" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Surendhar the king</h5>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" style={{ height: "80vh", width: "100vw" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kabilesh the king</h5>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt='' style={{ height: "80vh", width: "100vw" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Jenita the Queen</h5>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* end */}


      {/* start card */}

      <div className='container-fluid my-5'>

        <div className='row'>

          <div className='col-sm-3'>

            <div className='card'>
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className='card-footer'>
                <button className='btn btn-success'>View</button>
              </div>
            </div>



          </div>
          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success'>View</button>
              </div>
            </div>


          </div>
          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success'>View</button>
              </div>
            </div>


          </div>
          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success float-end'>View</button>
              </div>
            </div>


          </div>

          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success float-end'>View</button>
              </div>
            </div>


          </div>
          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success float-end'>View</button>
              </div>
            </div>


          </div>
          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success float-end'>View</button>
              </div>
            </div>


          </div>
          <div className='col-sm-3'>


            <div className='card'>
              <img className='card-img-top' src='https://rukminim2.flixcart.com/image/300/300/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg' alt='' />

              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className='card-footer '>
                <button className='btn btn-success float-end' data-bs-toggle="modal" data-bs-target="#exampleModal" >View</button>
              </div>
            </div>


          </div>

        </div>


      </div>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default App;
