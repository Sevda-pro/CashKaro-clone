import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="header clearfix">
        <div className="logo">
          <img id="mainlogoid" src="mainlogo.png" style={{ width: '20px', height: 'auto', position: 'relative', left: '2%', top: '5%' }} />
          <span id="span1">SOMRIDDHI</span><br /><span id='span2'>DIGITAL Pvt. Ltd.</span>
        </div>

        <div className="search-bar">
          <input type="text" className="search-input" placeholder=" 🔍Search For brand, category, coupon" />
        </div>

        <button className="loginbutton">Login/Sign Up</button>
      </header>
      <ul className="nav-menu">
        <li><a href="#" className="curr">Home</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Coupon</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Contact us</a></li>
      </ul><br />
      <div className="banner-container">
        <img src="headerimg.png" style={{ width: '1000px', position: 'relative', left: '1%', top: '1%' }} />
        <div className="sale-banner">
          <h2>LIMITED TIME</h2>
          <h1>Spring Sale</h1>
          <p className="discount">UP TO 70% OFF</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
        </div>
      </div>
      <br /><br />
      <div className="section-header headerdots">
        <ul className="bullet-list">
          <li className="active-bullet"></li>
          <li></li>
          <li></li>
        </ul>
      </div><br /><br />
      <div id="dealsmainiid">
        <button className="dealbtn popularbtn">Popular Coupons</button>&nbsp;&nbsp;<button className="dealbtn">Ending Soon</button>&nbsp;&nbsp;<button className="dealbtn">Latest Coupons</button>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
      </div><br />
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="section-header">
        <ul className="bullet-list">
          <li className="active-bullet"></li>
          <li></li>
          <li></li>
        </ul><br /><br />
        <h2>Deals Of The Day</h2>
        <div className="underline"></div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Upto 60% off on Appliances</h2>
            <p className="brand-name">amazon</p>
            <p>Upto 60% off on summer Appliances</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="section-header">
        <ul className="bullet-list">
          <li className="active-bullet"></li>
          <li></li>
          <li></li>
        </ul><br /><br />
        <h2>Coupon By Categories</h2>
        <div className="underline"></div>
      </div>
      <div className="categories">
        <div className="category">
          <img src="logo10.png" alt="Fashion" />
          <span>Fashion</span>
        </div>
        <div className="category">
          <img src="beauty.png" alt="Beauty" />
          <span>Beauty</span>
        </div>
        <div className="category">
          <img src="toys.png" alt="Toy" />
          <span>Toy</span>
        </div>
        <div className="category">
          <img src="Gaming.png" alt="Gaming" />
          <span>Gaming</span>
        </div>
        <div className="category">
          <img src="logo10.png" alt="Fashion" />
          <span>Fashion</span>
        </div>
        <div className="category">
          <img src="movie.png" alt="Movie" />
          <span>Movie</span>
        </div>
        <div className="category">
          <img src="car.png" alt="Car" />
          <span>Car</span>
        </div>
        <div className="deals">
          <div className="deal-card">
            <img src="amazon.png" alt="Amazon" />
            <p>Amazon</p>
            <p>Flat 30% Off</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
          <div className="deal-card">
            <img src="amazon.png" alt="Amazon" />
            <p>Amazon</p>
            <p>Flat 30% Off</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
          <div className="deal-card">
            <img src="amazon.png" alt="Amazon" />
            <p>Amazon</p>
            <p>Flat 30% Off</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
          <div className="deal-card">
            <img src="amazon.png" alt="Amazon" />
            <p>Amazon</p>
            <p>Flat 30% Off</p>
            <button className="grab-now-btn">GRAB NOW</button>
          </div>
        </div>
        <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <br /><br />
      <div className="abcd">
        <img src="abcd.png" alt="Logo" id="abcdid" />
      </div><br /><br /><br />
      <div className="section-header">
        <h2>Popular Membership</h2>
        <div className="underline"></div>
      </div><br /><br />
      <div className="saleimg">
        <img src="sale.png" alt="Summer Sale" />
      </div>
      <div className="section-header bulletlistnew">
        <ul className="bullet-list">
          <li className="active-bullet"></li>
          <li></li>
          <li></li>
        </ul><br /><br />

      </div>
      <div id="newsdiv">
        <div className="newsletter-container">
          <div className="image-container">
            <img src="mailbox.png" alt="Woman mailing a letter" className="image" />
          </div>

          <div className="subscription-container">
            <h1>Subscribe to our Newsletter!</h1>
            <p>Be the first to get exclusive offers and the latest news</p>
            <form action="#" method="post" className="subscription-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div><br /><br />
      <div className="section-header howclassName">

        <h2>How It Works</h2>
        <div className="underline"></div>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="icon-container">
            <img src="logo2.png" alt="Signup" />
          </div>
          <h3>Signup</h3>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
        </div>
        <div className="step">
          <div className="icon-container">
            <img src="logo3.png" alt="Choose Coupon" />
          </div>
          <h3>Choose Coupon</h3>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
        </div>
        <div className="step">
          <div className="icon-container">
            <img src="logo4.png" alt="Grab Coupon" />
          </div>
          <h3>Grab Coupon</h3>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
        </div>
       
        <div className="connector">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="phones-section">
        <img src="phone.png" className="phone" />
      </div>

      <div className="container1">
        <div className="sale-sidebar">
          <div id="girlid">
            <img src="girl.png" id="girlimgid" alt="Summer Sale Girl" />
          </div>
          <div id="textunderimg">
            <h2>WEEKEND ONLY</h2>
            <h4>SUMMER SALE</h4>
            <p>UP TO 50%</p>
          </div>
        </div>

        <div className="categories-section">
          <h2>Popular Categories</h2>
          <table className="category-table">
            <tr>
              <td>Flight</td>
              <td>Bus</td>
              <td>Entertainment</td>
              <td>Jewellery</td>
            </tr>
            <tr>
              <td>Medicines</td>
              <td>Hosting</td>
              <td>Flowers</td>
              <td>Beauty</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>Eyewear</td>
              <td>Lifestyle</td>
              <td>Kitchen</td>
            </tr>
            <tr>
              <td>Recharge</td>
              <td>Electronics</td>
              <td>Hotel</td>
              <td>Footwear</td>
            </tr>
            <tr>
              <td>Lab</td>
              <td>Education</td>
              <td>Services</td>
              <td>Furniture</td>
            </tr>
            <tr>
              <td>Fashion</td>
              <td>Pizza</td>
              <td>Bike</td>
              <td>Movies</td>
            </tr>
          </table>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <img src="mainlogo.png" style={{ width: '20px', height: 'auto', position: 'relative', left: '2%', top: '5%' }} />
            <span id="span1">SOMRIDDHI</span><br /><span id='span2'>DIGITAL Pvt. Ltd.</span>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting.</p>
            <button className="footerbtn">
              <img src="apple.png" style={{ width: '15px', height: 'auto', position: 'relative', left: '2%', top: '5%' }} />
              Download from
              <h5>App store</h5>
            </button><br />
            <button className="footerbtn">
              <img src="playstore.png" style={{ width: '15px', height: 'auto', position: 'relative', left: '2%', top: '5%' }} />
              Download from
              <h5>Play store</h5>
            </button>
          </div>
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Carrer</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>GENERAL</h3>
            <ul>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Write to us</a></li>
              <li><a href="#">Mobile app</a></li>
              <li><a href="#">Site map</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>PAGES</h3>
            <ul>
              <li><a href="#">Amazon offers</a></li>
              <li><a href="#">Google pay offers</a></li>
              <li><a href="#">Paypal offers</a></li>
              <li><a href="#">Phonepe offers</a></li>
              <li><a href="#">Festival offers</a></li>
              <li><a href="#">Bank offers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>MORE</h3>
            <ul>
              <li><a href="#">City offers</a></li>
              <li><a href="#">Brand offers</a></li>
              <li><a href="#">Product deals</a></li>
              <li><a href="#">Gift cards</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
