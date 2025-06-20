import React from "react";
import  './home.css';

function Home() {
  return(
    <div className="wrap">
      <section className="main_img">
        <img src={process.env.PUBLIC_URL +'/poto/main_img.jpg'}></img>
      </section>
      <section className="newhotsection">
        <div className="newhotstart">
          <h1>NEW & HOT</h1>
        </div>
        <div className="newhot">
          <div className="item">
            <img src={process.env.PUBLIC_URL +'/poto/newhot.jpg'}/>
            <p>운동 필수템! 프로틴 제로슈거로 가볍게!</p>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL +'/poto/newhot2.jpg'}/>
            <p>청량함에 상큼함을 더하다, 칠성사이다 제로 오렌지 출시!</p>
          </div>
        </div>


        <div>
          <div className="choco">
            <img src={process.env.PUBLIC_URL +'/poto/protine_choco.jpg'} className="chocopoto"/>
              <p>[오트몬드] 프로틴 초코 250ml(18팩)</p>
            </div>
            
            <img src={process.env.PUBLIC_URL +'/poto/greenstar.png'}/>
            
            <img src={process.env.PUBLIC_URL +'/poto/hart.png'}/>
            <img src={process.env.PUBLIC_URL +'/poto/kart.png'}/>
          
        </div>
      </section>
    </div>
  )
}

export default Home;