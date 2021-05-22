import {IngredientInterface} from '../../models/Ingredient';

export function setPredominantGroup(ingredientList: IngredientInterface[], quantity: any[]): string {
  const countGroup1: [number, string] = [0, 'group1'];
  const countGroup2: [number, string] = [0, 'group2'];
  const countGroup3: [number, string] = [0, 'group3'];
  const countGroup4: [number, string] = [0, 'group4'];
  const countGroup5: [number, string] = [0, 'group5'];
  ingredientList.forEach((ingredient, i) => {
    const j: string = ingredient.group;
    switch (j) {
      case 'group1':
        countGroup1[0] += quantity[i];
        break;
      case 'group2':
        countGroup2[0] += quantity[i];
        break;
      case 'group3':
        countGroup3[0] += quantity[i];
        break;
      case 'group4':
        countGroup4[0] += quantity[i];
        break;
      case 'group5':
        countGroup5[0] += quantity[i];
        break;
    }
  });

  const vec = [countGroup1, countGroup2, countGroup3, countGroup4,
    countGroup5];
  vec.sort(function(a, b) {
    return a[0] - b[0];
  });
  let predominantGroup: string = '';
  switch (vec[vec.length - 1][1]) {
    case 'group1':
      predominantGroup = 'group1';
      break;
    case 'group2':
      predominantGroup = 'group2';
      break;
    case 'group3':
      predominantGroup = 'group3';
      break;
    case 'group4':
      predominantGroup = 'group4';
      break;
    case 'group5':
      predominantGroup = 'group5';
      break;
  }
  return predominantGroup;
}
