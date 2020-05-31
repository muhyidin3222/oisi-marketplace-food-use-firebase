import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import Roles from '../components/roles'
// import Step from '../components/step'
import firebase from '../components/config/firebase'

// import dynamic from 'next/dynamic';

// const DynamicComponentWithCustomLoading = dynamic(() => import('./about'), {
//   loading: () => <div id="preloader-active">
//     <div className="preloader d-flex align-items-center justify-content-center">
//       <div className="preloader-inner position-relative">
//         <div className="preloader-circle"></div>
//         <div className="preloader-img pere-text">
//           <img src="/img/logo/logo.png" alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
// });

export default function index() {
  return (
    < Layout >
      <main>
        <div className="components-layout-demo-top-side-2 slider-area">
          <div className="slider-active">
            <div className="single-slider slider-height" data-background="/img/hero/h1_hero.jpg">
              <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                  <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 d-md-block">
                    <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                      <img src="/img/home/1.jpg" alt="" className="img-kelebihan" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
                    <div className="hero__caption">
                      <span data-animation="fadeInRight" data-delay=".4s">Tidak Usah Repot Masak Sekarang ....</span>
                      <h1 data-animation="fadeInRight" data-delay=".6s">oisi Food Lauk instan</h1>
                      <p data-animation="fadeInRight" data-delay=".8s">berbagai macam variasi produk ada  <Link href="/catagori"><a>disini</a></Link></p>
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
                    <li>Oisi food adalah makanan instan yang dibuat dari daging-2 yang halal, diolah sedemikian rupa menjadi makanan instan yang siap untuk dimasak kapanpun, ada banyak variasi dari oisi
                    <Link href="/catagori">
                        <a style={{ marginLeft: 10, color: '#50ed45' }}>Lihat Detail</a>
                      </Link> </li>
                    <li>koki udah berpengalaman 10 tahun lebih, jadi jangang ragukan rasanya</li>
                    <li>Dijamin halal</li>
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
                <h1 className="text-manfaat">Apa Kelebihan Oisi food ?</h1>
                <div className="row d-flex align-items-center justify-content-between">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-md-block">
                    <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                      <img src="/img/home/hero_man3.jpg" className="img-kelebihan" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                    <div className="manfaat hero__caption">
                      <li>Rasanya sangat lezat, Tidak bisa Dibandingkan dengan yang lain</li>
                      <li>"simpel Tinggal masak", tidak usah repot cari lauk, apa lagi membuat!</li>
                      <li>Lauk Buka Puasa Jadi Lebih Mudah</li>
                      <li>Gak usah keluar rumah, karena oisi akan diantar didepan rumah</li>
                      <li>Makanan fresh dan selalu segar, karen oisi tidak tahan lama berada diluar suhu dingin, harus selalu beku difreezer</li>
                      <li>Tidak menggunakan bahan-2 yg berbahaya seperti pengawet, peyedap rasa, dan lainnya</li>
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
              <h1 className="text-manfaat" style={{ marginTop: 90 }}>Catatan</h1>
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="manfaat hero__caption">
                    <li>Menerima Orderan cuman diarea jakarta, karena makanan tidak tahan diluar suhu dingin dikarenakan pengiriman yg lama</li>
                    <li>Makanan wajib difreezer untuk menjaga makanan tetap fresh</li>
                    <li>Barang mentah, jadi sewatu-waktu anda bisa langsung menggoreng dalam keadaan fresh</li>
                    <li>Pengiriman lewat go send, Grab atau semisalnya. dengan waktu beberapa jam saja</li>
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


        <div className="slider-area" style={{ marginBottom: 140 }}>
          <div className="slider-active">
            <div className="container">
              <h1 className="text-manfaat" style={{ marginTop: 90 }}>Cara Order</h1>
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="manfaat hero__caption">
                    <li><Link href="/catagori"> Klik Disini </Link></li>
                    <li>Pilih salah satu produk yg akan kamu beli</li>
                    <li>Setting berapa jumlah yg mau kamu beli</li>
                    <li>klik beli, kamu akan diarahkan ke what app kami untuk transaksinya</li>
                    <li>setelah kamu metransfer, kami akan meproses orderan kamu </li>
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
                    <img src="/img/product/spicy_chicken/1.jpeg" alt="" />
                    <div className="category-caption">
                      <h2>Spicy Chicken</h2>
                      <span className="best"><a href="#">Beli</a></span>
                      <span className="collection">Laris</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img">
                    <img src="/img/product/egg_chicken_roll/6.jpg" alt="" />
                    <div className="category-caption">
                      <h2>Egg Chicken Roll</h2>
                      <span className="best"><a href="#">Beli</a></span>
                      <span className="collection">Laris</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="single-category mb-30">
                  <div className="category-img">
                    <img src="/img/product/shrimp_roll/1.jpg" alt="" />
                    <div className="category-caption">
                      <h2>Shrimp Roll</h2>
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
              <h1 className="text-manfaat" style={{ textAlign: 'center' }}>Masih ragu untuk membeli Oisi?, tanyakan langsung masalah kamu! </h1>
              <div className="row d-flex justify-content-center" >
                <Link href="/catagori">
                  <a className="btn hero-btn" style={{ height: 50, width: 150 }}>Tanya Sekarang</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Roles />
      </main>
    </Layout >
  )
}
