MultiRootEditor
        .create( {
            // Define roots / editable areas:
            header: document.getElementById( 'header' ),
            content: document.getElementById( 'content' ),
            leftSide: document.getElementById( 'left-side' ),
            rightSide: document.getElementById( 'right-side' )
        } )
        .then( editor => {
            window.editor = editor;

            // Append toolbar to a proper container.
            const toolbarContainer = document.getElementById( 'toolbar' );
            toolbarContainer.appendChild( editor.ui.view.toolbar.element );

            // Make toolbar sticky when the editor is focused.
            editor.ui.focusTracker.on( 'change:isFocused', () => {
                if ( editor.ui.focusTracker.isFocused ) {
                    toolbarContainer.classList.add( 'sticky' );
                } else {
                    toolbarContainer.classList.remove( 'sticky' );
                }
            } );

            // Add event listener to "Save" button
            document.getElementById('save').addEventListener('click', function() {
                var content = editor.getData();
                // Send content to server
            });
        } )
        .catch( error => {
            console.error( error );
        } );

window.onload = function() {
    document.getElementById('save').addEventListener('click', function() {
        var content = editor.getData();

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure the request
        xhr.open('POST', 'http://localhost:3000/save', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Set up a handler for when the request finishes
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Content saved successfully');
            } else {
                alert('An error occurred while saving the content');
            }
        };

        // Send the request with the blog post content
        xhr.send(JSON.stringify({content: content}));
    });
}