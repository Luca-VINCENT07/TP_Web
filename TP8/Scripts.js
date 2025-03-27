function calculerDevis(surface, epaisseur) {
    if (epaisseur < 0.15 || epaisseur > 0.35) {
        return "L'épaisseur doit être comprise entre 15 et 35 cm.";
    }
    

    let epaisseurM = epaisseur / 100;
    let volumeBeton = surface * epaisseurM;
    
    // Quantité de ciment en tonnes (350 kg/m3)
    let cimentTonnes = (volumeBeton * 350) / 1000;
    
    // Nombre de camions requis (arrondi à l'entier supérieur)
    let nbCamions = Math.ceil(volumeBeton / 9);
    
    // Calcul du coût
    let prixBetonHT = volumeBeton * 91;
    let prixTransportHT = nbCamions * 140;
    let totalHT = prixBetonHT + prixTransportHT;
    let totalTTC = totalHT * 1.2; // TVA à 20%
    
    return {
        volumeBeton: volumeBeton.toFixed(2) + " m3",
        cimentTonnes: cimentTonnes.toFixed(2) + " tonnes",
        nbCamions: nbCamions,
        prixHT: totalHT.toFixed(2) + " € HT",
        prixTTC: totalTTC.toFixed(2) + " € TTC"
    };
}


console.log(calculerDevis(100, 20));