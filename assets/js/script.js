document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    // Data for projects (embedded in HTML data attributes or stored here)
    // For simplicity, we'll pull from data attributes or hidden content
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.id;
            const content = document.getElementById(`content-${projectId}`).innerHTML;
            const title = card.querySelector('.project-title').textContent;

            modalTitle.textContent = title;
            modalBody.innerHTML = content;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Pause any playing videos
        const videos = modalBody.querySelectorAll('video');
        videos.forEach(v => v.pause());
        
        // Clear content to stop video memory usage
        setTimeout(() => {
            modalBody.innerHTML = ''; 
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle Deep Linking (e.g. index.html#content-grandi)
    const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#content-')) {
            const contentId = hash.substring(1); // remove '#'
            const contentDiv = document.getElementById(contentId);
            
            if (contentDiv) {
                const projectId = contentId.replace('content-', '');
                // Find the card to get the title
                const card = document.querySelector(`.project-card[data-id="${projectId}"]`);
                const title = card ? card.querySelector('.project-title').textContent : 'Project Details';
                
                modalTitle.textContent = title;
                modalBody.innerHTML = contentDiv.innerHTML;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Remove hash to prevent auto-jump on refresh if desired, or keep it. 
                // We'll keep it but maybe scroll to top of modal?
            }
        }
    };

    // Check on load
    handleHashChange();

    // Optional: Listen for hash changes if user navigates within page (though typically this is page load)
    window.addEventListener('hashchange', handleHashChange);
});
