import React from 'react'

function PriceComponent({coinImg,coinName,coinPrice}) {
  return (
    <>
    <div className="card" width= '18rem'>
  <img src={coinImg} className="card-img-top" alt="CoinPhoto" />
  <div className="card-body">
    <h5 className="card-title">{coinName}</h5>
    <p className="card-text">{coinPrice}</p>
  </div>
</div>
</>
  )
}

export default PriceComponent