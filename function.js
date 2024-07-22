

 

    function scrollToResult(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        const container = document.querySelector(".container2");
        container.scrollIntoView({ behavior: 'smooth' });
    }