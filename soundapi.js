// For sound in the game

// Called by Audio class for WebAudio
function setupAudioWA(audio) {
    let audioHolder = {
        aContext: new (AudioContext || webkitwebkitAudioContext)(),
        myAudioBuffer: undefined
    };
    /*let aContext = new AudioContext();
    let myAudioBuffer;*/

    let request = new XMLHttpRequest();
    request.open("GET", audio, true);
    request.responseType = "arraybuffer";
    request.onload = () => {
        audioHolder.aContext.decodeAudioData(request.response, (buffer) => {
            audioHolder.myAudioBuffer = buffer;
            console.log("Audio request successful");
        }, audioError);
    };
    request.send();
    //return audioHolder;
    return [audioHolder.aContext, audioHolder.myAudioBuffer];
}

// Called by Audio class for Audio element
function setupAudioAE(audio) {
    let sound = document.createElement("audio");
    sound.src = audio;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    return sound;
}

function audioError() {
    console.error("Audio decode error!");
}

let forceAudioElementMode = true;
// For loading, playing and stopping audio.
class Audio {
    constructor(audio) {
        if (forceAudioElementMode || (AudioContext === undefined && webkitAudioContext === undefined)) {
            this.webaudio = false;
            this.sound = setupAudioAE(audio);
            return;
        }
        this.webaudio = true;
        this.result = setupAudioWA(audio);
        this.aContext = this.result[0];
        this.myAudioBuffer = this.result[1];
        console.log("Created audio!");
    }
    play() {
        if (!this.webaudio) {
            this.sound.play();
            return;
        }
        this.source = this.aContext.createBufferSource();
        try {
            if (this.myAudioBuffer === undefined) throw "Audio Buffer not defined!"
            this.source.buffer = this.myAudioBuffer;
            this.source.connect(this.aContext.destination);
            // Can only start once
            this.source.start(0);
        } catch (err) {
            console.error(err);
            console.log(this.source);
            delete this.source;
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