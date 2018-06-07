// For sound in the game


// For loading, playing and stopping audio.
class Audio {
    constructor(url) {
        if (forceAudioElementMode || (AudioContext === undefined && webkitAudioContext === undefined)) {
            this.webaudio = false;
            this.sound = setupAudioAE(url);
            return;
        }

        this.webaudio = true;

        this.aContext = new (AudioContext || webkitwebkitAudioContext)();
        this.bufferObject = new Buffer(url, this.aContext);

        
        console.log("Created audio!");
    }
    loadSound() {
        try {
            this.buffer = bufferObject.buffer;
        } catch (err) {
            console.error(`An error in the Audio class has occured: ${err}`);
        }
    }
    play() {
        if (!this.webaudio) {
            this.sound.play();
            return;
        }
        this.source = this.aContext.createBufferSource();
        try {
            if (this.buffer === undefined) throw "Audio Buffer not defined!";
            this.source.buffer = this.buffer;
            this.source.connect(this.aContext.destination);
            // Can only start once
            this.source.start(0);
        } catch (err) {
            console.error(err);
            console.log(this.source);
            delete this.source;
            loadSound();
        }
    }
    stop() {
        if (!this.webaudio) {
            this.sound.pause();
            return;
        }
        // Can only stop once
        this.source.stop();
        delete this.source;
    }
}

// To hold the buffer
class Buffer {
    constructor(context, url) {
        this.context = context;
        this.url = url;
        this.buffer;
    }

    loadSound() {
        let req = new XMLHttpRequest();
        req.open("GET", this.url, true);
        req.responseType = "arraybuffer";
        let thisBuffer = this; // pass via reference
        req.onload = () => {
            thisBuffer.context.decodeAudioData(req.response, (buffer) => {
                thisBuffer.buffer = buffer;
                console.info(`Request to ${thisBuffer.url} successful!`);
            });
        };
        req.send();
    }
}

// Called by Audio class for Audio element
let forceAudioElementMode = true;
function setupAudioAE(url) {
    let sound = document.createElement("audio");
    sound.src = url;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    return sound;
}