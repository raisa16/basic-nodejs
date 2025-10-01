
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const apiKey = process.env.audio_key;
const audioFilePath = "./src/audio.mp3"
const apiUrl = "https://api.deepgram.com/v1/listen?model=nova-3&detect_language=true";

async function transcribeAudio(audioFilePath, apiKey) {
    try {

        if (!fs.existsSync(audioFilePath)) {
            throw new Error('The specified audio file does not exist.');
        }

        const audioFile = fs.readFileSync(audioFilePath);

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Token ${apiKey}`,
                "Content-Type": "audio/mp3",
            },
            body: audioFile
        })

        if(!response.ok){
          console.error(`Bad request: ${response.status} ${response.statusText}`);
            const errorData = await response.json();
            throw new Error(`Bad request: ${JSON.stringify(errorData)}`);
        }
        const data = await response.json();
        const transcription = data.results.channels[0].alternatives[0].transcript;
        const outputFilePath = path.join(path.dirname(audioFilePath), `${path.basename(audioFilePath, path.extname(audioFilePath))}_transcription.txt`);
        fs.writeFileSync(outputFilePath, transcription);
        return transcription

    } catch (error) {
        console.error(`Error could not transcript this file: ${error.message}`);
        throw error;
    }
}
transcribeAudio(audioFilePath, apiKey)
    .then(transcription => console.log("Succesfully transcripted:", transcription))
    .catch(error => console.error("Error could not transcript this file:", error));