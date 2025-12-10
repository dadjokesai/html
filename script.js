// Show selected phase content in the Mission timeline
function showPhase(phaseId) {
    // Hide all phase contents
    document.querySelectorAll('.phase-content').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show the selected one
    const phase = document.getElementById(phaseId);
    if (phase) {
        phase.classList.add('active');
    }
}

// Optional: Auto-show Phase 1 on page load
document.addEventListener('DOMContentLoaded', () => {
    showPhase('phase1');
});
