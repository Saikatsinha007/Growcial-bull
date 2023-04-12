export const isInViewport = (id) => {
    const rect = document.getElementById(id)?.getBoundingClientRect();
    return (
        rect?.top >= window.innerHeight
        // rect.bottom <= window.innerHeight
    );
}