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
});
