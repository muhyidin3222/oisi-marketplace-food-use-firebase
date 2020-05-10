import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import Roles from '../components/roles'
import Step from '../components/step'

// import dynamic from 'next/dynamic';

// const DynamicComponentWithCustomLoading = dynamic(() => import('./about'), {
//   loading: () => <div id="preloader-active">
//     <div className="preloader d-flex align-items-center justify-content-center">
//       <div className="preloader-inner position-relative">
//         <div className="preloader-circle"></div>
//         <div className="preloader-img pere-text">
//           <img src="/assets/img/logo/logo.png" alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
// });

export default function index() {
  return (
    <Layout>
      <main>
        {/* <DynamicComponentWithCustomLoading /> */}
        <div className="slider-area ">
          <div className="slider-active">
            <div className="single-slider slider-height" data-background="assets/img/hero/h1_hero.jpg">
              <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                    <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                      <img src="/assets/img/hero/hero_man.jpg" alt="" style={{ maxWidth: 600, maxHeight: 600 }} />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                    <div className="hero__caption">
                      <span data-animation="fadeInRight" data-delay=".4s">Tinggal Goreng ....</span>
                      <h1 data-animation="fadeInRight" data-delay=".6s">oisi Food</h1>
                      <p data-animation="fadeInRight" data-delay=".8s">Lauk Jepang, instan, lezatnya tak terkalahkan</p>
                      <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                        <Link href="/catagori">
                          <a className="btn hero-btn">Beli Sekarang</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-area" style={{ marginBottom: 140 }}>
          <div className="slider-active">
            <div className="container">
              <h1 className="text-manfaat">Apa itu Oisi?</h1>
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="manfaat hero__caption">
                    <li>Oisi food adalah makanan instan yang dibuat dari daging-2 yang halal, diolah sedemikian rupa menjadi makaanan instan yang siap untuk digoreng kapanpun, ada banyak variasi dari oisi
                    <Link href="/catagori">
                        <a style={{ marginLeft: 10, color: '#50ed45' }}>Lihat Detail</a>
                      </Link> </li>
                    <li>koki udah berpengalaman 10 tahun lebih, jadi jangang ragukan rasanya</li>
                    <li>Dijamin halal</li>
                    <li>Menerima Orderan diarea jakarta, karena makanan tidak tahan diluar suhu dingin</li>
                    <li>Makanan wajib difreezer untuk menjaga makanan tetap fresh</li>
                    <li>Pengiriman lewat go send atau Grab, supaya makanan tidak terlalu lama diluar suhu dingin</li>

                    <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                      <Link href="/catagori">
                        <a className="btn hero-btn">Beli Sekarang</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <div className="slider-active">
            <div className="single-slider slider-height">
              <div className="container">
                <h1 className="text-manfaat">Apa Kelebihan dari Oisi food ?</h1>
                <div className="row d-flex align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                    <div className="manfaat hero__caption">
                      <li>Rasanya sangat lezat, Tidak bisa Dibandingkan dengan yang lain</li>
                      <li>"simpel Tinggal goreng", tidak usah repot cari lauk, apa lagi membuat!</li>
                      <li>Lauk Buka Puasa Jadi Lebih Mudah</li>
                      <li>Takut corona?, gak usah keluar rumah, karena oisi datang didepan rumah kamu</li>
                      <li>Makana fresh dan selalu segar, karen oisi tidak tahan lama berada diluar suhu dingin, harus selalu beku difreezer</li>
                      <li>Tidak menggunakan bahan-2 yg berbahaya seperti pengawet, peyedap rasa, dan lainnya</li>
                      <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                        <Link href="/catagori">
                          <a className="btn hero-btn">Beli Sekarang</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                    <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                      <img src="/assets/img/hero/hero_man3.jpg" alt="" style={{ maxWidth: 600, maxHeight: 600 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="category-area section-padding30">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-85">
                  <h2>Produk Yang Sering Habis</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img">
                    <img src="/assets/img/categori/spicy_chicken.jpg" alt="" />
                    <div className="category-caption">
                      <h2>Spicy Chicken</h2>
                      <span className="best"><a href="#">Beli</a></span>
                      <span className="collection">Laris</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img text-center">
                    <div className="category-caption">
                      <span className="collection">Discount!</span>
                      <h2>Winter Cloth</h2>
                      <p>New Collection</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img">
                    <img src="/assets/img/categori/egg_chicken_roll.jpg" alt="" />
                    <div className="category-caption">
                      <h2>Egg Chicken Roll</h2>
                      <span className="best"><a href="#">Beli</a></span>
                      <span className="collection">Laris</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="slider-area" style={{ marginBottom: 140 }}>
          <div className="slider-active">
            <div className="container">
              <h1 className="text-manfaat">Masih ragu untuk membeli Oisi?, tayakan langsung masalah kamu </h1>
              <div className="row d-flex align-items-center justify-content-between">
                <Link href="/catagori">
                  <a className="btn hero-btn">Taya Sekarang</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Roles />
      </main>
    </Layout>
  )
}
