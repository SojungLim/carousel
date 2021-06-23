const rightCirclebtn = document.querySelector(".right-circle button");
const leftCirclebtn = document.querySelector(".left-circle button");
const firstPageImage = document.querySelector(".middle img");

        let i = 1;
        function clickRightCirclebtn() {
            if (i<5){
                firstPageImage.src=`images/image-${i+1}.png`;
                i+=1;
            } else  if (i===5) {
                i = 1;
                firstPageImage.src = `images/image-1.png`;
             }
         }

        function clickLeftCirclebtn() {   
            if (i===1) {
                i = 5;
                firstPageImage.src = `images/image-5.png`;
            } else if(i<=5) {
                firstPageImage.src=`images/image-${i-1}.png`;
                i-=1;
            }
        }

    rightCirclebtn.addEventListener("click", clickRightCirclebtn);
    leftCirclebtn.addEventListener("click", clickLeftCirclebtn);

