
document.querySelector('.email-form__btn').addEventListener('click',
    (e)=> {
const email = document.querySelector('.email-form__text');
        const re = /\S+@\S+\.\S+/;
        if(!re.test(email.value))
        {
            document.querySelector('.email-form__icon-error').style.display = 'inline-block';
            document.querySelector('.email-form__invalid').style.display = 'block';
        }
        else {
            document.querySelector('.email-form__icon-error').style.display = 'none';
            document.querySelector('.email-form__invalid').style.display = 'none';
            document.querySelector('.success').style.display = 'block';
            document.querySelector('.wrapper').style.opacity = 30+'%';

            setTimeout(() => {
                document.querySelector('.success').style.display = 'none';
                document.querySelector('.wrapper').style.opacity = 100+'%'
            },2000);
        }
})



