import React, { Component } from 'react';

import axios from 'axios';
import './similarproducts.css'
import './similar'




class NSimilarproduct extends Component{
    constructor(props) {
        super(props);

      
        this.state = {
            giftitems: [],
            name:'',
            price: 0,
            quantity: '',
            imageURL:''
        }
    }

  componentDidMount() {
    axios.get(`http://localhost:9999/cartApi/getallgiftitems`)
    .then(response => {
      this.setState({giftitems: response.data.data });
      console.log(response.data.data);
    

    
  })
}

    render() {
        return (
          <div>
          <br/> <h2>Similar Products</h2>
           <div class="N-container">
    <div id="N-slide-left-container">
      <div class="N-slide-left">
      </div>
    </div>
    <div id="N-cards-container">
      <div class="N-cards">
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/3162/64675532_543693818151_0.42287900-1601976485.jpg" alt="Glamorous Blush" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Glamorous Blush</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/6934/thumbnail/26239137_419053718033_0.31727800-1596089420.jpg" alt="Nature" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Happy Violet Large Bonquet</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/6923/thumbnail/30703513_914173581947_0.89705500-1595398597.jpg" alt="Architecture" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Eternal sunshine Large flower Bouquet</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/2247/thumbnail/54325932_940438605844_0.49820600-1570535724.jpg" alt="Technology" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Cheery flowers</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/8148/thumbnail/98224790_873261281599_0.52821800-1622785326.jpg" alt="People" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Purple Sunshine Large Bouquet</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/7760/thumbnail/13985970_195850460893_0.08096900-1620879570.JPG" alt="Animals" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Love Blossom flower Arrangement</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/3148/thumbnail/93244122_915619439548_0.41740600-1505707739.jpg" alt="Nature" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Pink Blossom</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/3142/thumbnail/27242238_262939283003_0.31217800-1626331126.jpg" alt="Architecture" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>100 Eternal Kisses</b>
            </h4>
          </div>
        </div>
        <div class="N-card">
          <img src="https://www.wishque.com/data/images/products/2961/thumbnail/39210171_947502941721_0.80499600-1549004085.jpg" alt="Technology" className="slideimager"/>
          <div class="N-container">
            <h4>
              <b>Bouquet of 25 red Roses</b>
            </h4>
          </div>
        </div>
       
      </div>
    </div>

    <div id="N-slide-right-container">
      <div class="N-slide-right">
      </div>
    </div>

  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>


            </div>
        )
    

}

}

export default NSimilarproduct;


