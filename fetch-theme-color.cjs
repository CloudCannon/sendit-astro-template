const fs = require('fs');
// read theme color from _data/site.json
fs.readFile('./data/theme.json', 'utf8', function(err, dataFile){

    if(err){
        console.log(err);
        return;
    }

    // parse file to JSON so that the variables can be accessed
    dataFile = JSON.parse(dataFile);

    var variablesFile = './src/styles/_variables.scss'

    // TODO: Check if dataFile.primary_theme_color is set
    // Open variables.scss and search/replace "$theme: ..." with color from data file
    fs.readFile(variablesFile, 'utf-8', function (err, scssFile) {

        if(err){
            console.log(err);
            return;
        }

        var replaced = scssFile;

        // Change the variables to whatever was set in the data file
        if (dataFile.primary_color) {
            const replacementString = dataFile.primary_color;
            replaced = replaced.replace(/\$color-primary: .*/g, ('$color-primary: ' + replacementString + ';'));
        } 
        if (dataFile.secondary_color) {
            const replacementString = dataFile.secondary_color;
            replaced = replaced.replace(/\$color-secondary: .*/g, ('$color-secondary: ' + replacementString + ';'));
        }         
        if (dataFile.anchor_color) {
            const replacementString = dataFile.anchor_color;
            replaced = replaced.replace(/\$color-anchor: .*/g, ('$color-anchor: ' + replacementString + ';'));
        } 
        if (dataFile.background_effects_color) {
            const replacementString = dataFile.background_effects_color;
            replaced = replaced.replace(/\$color-background-effects: .*/g, ('$color-background-effects: ' + replacementString + ';'));
        } 

        // Write result back to variables.scss
        fs.writeFile(variablesFile, replaced, 'utf-8', function (err) {
            if(err){
                console.log(err);
            }
        });
    });
});