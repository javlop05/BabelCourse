function moviesDragInit() {
    var cols = document.querySelectorAll("#movies article");
    [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart);
        col.addEventListener('dragend', handleDragEnd);
        col.addEventListener('dragenter', handleDragEnter)
        col.addEventListener('dragleave', handleDragLeave);
        col.addEventListener('drop', handleDrop);
        col.addEventListener('dragover', handleDragOver);
    });
}
