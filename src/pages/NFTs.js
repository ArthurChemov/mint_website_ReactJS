import React from 'react';
import nft1 from '../assets/nft/nft1.png';
import nft2 from '../assets/nft/nft2.png';
import nft3 from '../assets/nft/nft3.png';
import './NFTs.css';

function NFTs() {
  return (
    <section className='page'>
      <h1>
        NFTs
      </h1>
      <div className='content'>
        <div className='item1'>
          <img src={nft1} weight="150px" height="150px" alt=""/>
          <p>
            <button className='btn'>Mint now</button>
          </p>
        </div>
        <div className='item2'>
          <img src={nft2} weight="150px" height="150px" alt=""/>
          <p>
            <button className='btn'>Mint now</button>
          </p>
        </div>
        <div className='item3'>
          <img src={nft3} weight="150px" height="150px" alt=""/>
          <p>
            <button className='btn'>Mint now</button>
          </p>
        </div>
        <div className='item4'>
          <img src={nft2} weight="150px" height="150px" alt=""/>
          <p>
            <button className='btn'>Mint now</button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NFTs;
