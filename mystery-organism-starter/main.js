// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function to create multiple object of p.Aequoor
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
      const selectedBase = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while(newBase === this.dna[selectedBase]){
        newBase = returnRandBase();
      } this.dna[seletecBase] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg){

    }
  }
}









