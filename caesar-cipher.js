var CaesarCipher = function (shift) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var response = '';
    this.encode = (message) => {
        console.log(`Running encode with message [${message}] and shift [${shift}]`);
        var caps = message.toUpperCase();
        var holder = '';
        for (let i = 0; i < message.length; i++) {
            var shiftLetter = shift + alphabet.indexOf(caps[i]);
            if (shiftLetter > 25) {
                shiftLetter = shiftLetter - 26;
            }

            if (/^(\!|\'|\s|[0-9])/g.test(message[i])) {
                console.log(`Adding symbol [${message[i]}]`);
                holder += message[i];
            } else {
                console.log(`Shifting ${caps[i]}/${alphabet.indexOf(caps[i])} to ${alphabet[shiftLetter]}/${shiftLetter}`);
                holder += alphabet[shiftLetter];
            }
        }
        response = holder;
        return response.toUpperCase();
    }
    this.decode = (message) => {
        console.log(`Running Decode with message [${message}] and shift [${shift}]`);
        var caps = message.toUpperCase();
        var holder = '';
        for (let i = 0; i < message.length; i++) {
            var shiftLetter = -shift + alphabet.indexOf(caps[i]);
            if (shiftLetter < 0) {
                shiftLetter = shiftLetter + 26;
            }
            if (/^(\!|\'|\s|[0-9])/g.test(message[i])) {
                console.log(`Adding symbol [${message[i]}]`);
                holder += message[i];
            } else {
                console.log(`Shifting ${caps[i]}/${alphabet.indexOf(caps[i])} to ${alphabet[shiftLetter]}/${shiftLetter}`);
                holder += alphabet[shiftLetter];
            }
        }
        response = holder;
        return response.toUpperCase();
    }
};