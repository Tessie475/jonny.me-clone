
document.querySelector('.scroll-nav').addEventListener('click', function(e) {
    e.preventDefault()

    if (e.target.classList.contains('scroll-item')) {
        const scrollTo = e.target.getAttribute('href');
        document.querySelector(scrollTo).scrollIntoView({behaviour: 'smooth'}) 
        console.log(scroll)
    }
})

const pricingObserver = new IntersectionObserver(revealPricng, {
    root: null,
    threshold: 0.15
})