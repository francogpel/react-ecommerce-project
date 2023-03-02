import React from 'react';
import './donation.css';

const Donation = () => {
    return (
        <div className='section-index'>
            <div class="encabezado">
             <h2 className='donacion'>Deja tu donacion para los animalitos sin hogar que necesitan tratamiento</h2>
             <h5>Donando lo minimo nos ayudas a seguir cuidando de ellos en nuestro refugio "Huellitas de luz".</h5>
            </div>
            <div>
             <button class="donar" >
               Donar
             </button>
            </div>
             <div class="collapse" id="collapseExample">
                 {/* <div class="cbu card card-body">
                  Alias: Dejandohuellitas / Num.de cuenta: *************
                 </div> */}
             </div>
        </div>
    );
  };
  
  export default Donation;