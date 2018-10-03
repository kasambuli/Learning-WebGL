// this is called when our script is loaded to set up the WebGL context and start rendering its content
main();

//start here
function main() {
    const canvas = document.querySelector("#glCanvas");

    // Initializing the GL context with the id of the type of canvas to create
    const gl = canvas.getContext("webgl");

    // if only webGL is available and working
    if (gl === null) {
        alert("Unable to initialize webGL")
        return;

    }
    //SEt colour to black, fully opaque
    gl.clearColor(255, 0.0, 0.0, 1.0);
    //Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}