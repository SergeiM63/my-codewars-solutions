function DNAStrand(dna) {
    let result = dna.split('').map(item => {
      switch(item) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'C': return 'G';
        case 'G': return 'C';
        }
      });
      return result.join('');
  }     

DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" 