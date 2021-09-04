console.log('in her');

// alert('ma is coming');
const maComing = () => {
    alert('ma is coming go there');
};

const askPicnic = () => {
    const response = confirm('Are you going to picnic');
    console.log(response);
    if (response === true) {
        console.log('please checkout our payment');
    } else {
        console.log('noyto dure giya mor');
    }
};

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}