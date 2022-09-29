import React, { useState } from 'react';

const Batteries = () => {
    const [bat1Progress, setBat1] = useState(51);
    const [bat2Progress, setBat2] = useState(86);
    return (
        <div className='batteries-wrapper'>
            <div className="batteries-container">
                <div className='batterie'>
                    <div className='bat-wrapper'>
                        {/* la barre de progression est bleu sur fond blanc la div qui suit correspond au fond blanc. 
                        C'est pourquoi je retranche le pourcentage de progression à 100% de la hauteur*/}
                        <div className='progress' style={{ height: `${100-bat1Progress}%`}}></div>
                        <div className="display-progress">{bat1Progress + "%"}</div>
                    </div>
                    <div>Batterie 1</div>
                </div>
                <div className='batterie'>
                    <div className='bat-wrapper'>
                        {/* la barre de progression est bleu sur fond blanc la div qui suit correspond au fond blanc. 
                        C'est pourquoi je retranche le pourcentage de progression à 100% de la hauteur*/}
                        <div className='progress' style={{ height: `${100-bat2Progress}%`}}></div>
                        <div className="display-progress">{bat2Progress + "%"}</div>
                    </div>
                    <div>Batterie 2</div>
                </div>
            </div>
            <div className='graph content'>Graphique</div>
        </div>
    );
};

export default Batteries;