const time=document.querySelector('#time');

const clock = () => {
    function gettime() {
       let current = new Date();
       time.innerHTML=`${current.toLocaleTimeString()}`
    }
    gettime();
    setInterval(gettime, 1000);
}
clock();