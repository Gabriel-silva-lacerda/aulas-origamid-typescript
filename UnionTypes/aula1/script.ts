let total2: string | number = 200;
total2 = '300';

function isNumber(value: string | number) {
    if (typeof value === 'number') {
      return true;
    } else {
      return 'Não é número';
    }
  }
  
  const button = document.querySelector('button');
  // Optional chaining
  // Executa click() se button for diferente de null/undefined
  button?.click();