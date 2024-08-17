const heightRange = document.querySelector('#height-range')
const heightRangeResult = document.querySelector('.height-result')
const weightRange = document.querySelector('#weight-range')
const weightRangeResult = document.querySelector('.weight-result')
const bmiResult = document.querySelector('.bmi-result')
let categoryElem = document.querySelector('#category')
const accordionItems = document.querySelectorAll('.accordion-item');



accordionItems.forEach(item => {
    const radio = item.querySelector('.accordion-radio');
    const content = item.querySelector('.content');

    radio.addEventListener('click', function() {
        accordionItems.forEach(otherItem => {
            const otherContent = otherItem.querySelector('.content');
            if (otherContent !== content) {
                otherContent.style.display = 'none';
            }
        });

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
const initialItem = accordionItems[0];
const initialContent = initialItem.querySelector('.content');
initialContent.style.display = 'block';



function bmiHandler(){

  let heightElemValue = heightRange.value ;
  heightRangeResult.innerHTML = heightElemValue + ' cm'

  let weightElemValue = weightRange.value ;
  weightRangeResult.innerHTML = weightElemValue +' kg'

  bmiFotmol = (weightElemValue / ((heightElemValue * 2)/100)).toFixed(1)
     bmiResult.innerHTML  =bmiFotmol


     if(bmiFotmol <18.5){
      categoryElem.innerHTML = 'Under Weight'
      bmiResult.style.color = '#ffc44d'
      }else if(bmiFotmol > 18.5 && bmiFotmol <= 24.9){
      categoryElem.innerHTML = 'Normal Weight'
         bmiResult.style.color = '#0be881'           
      }else if(bmiFotmol > 24.9 && bmiFotmol <= 29.9){
         categoryElem.innerHTML = 'Over Weight'
         bmiResult.style.color = '#ff884d'
      }else{
          categoryElem.innerHTML = 'Obese'
            bmiResult.style.color = '#ff5e4d'
      }
  
}


heightRange.addEventListener('input' , bmiHandler)
weightRange.addEventListener('input' , bmiHandler)
