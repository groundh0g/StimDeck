
function tryDetectAndRedirect(baseurl) {
    const os = getOS() || 'Select';
    switch(os) {
        case 'MacOS':
        case 'Windows':
        case 'Linux':
        case 'Select':
        default:
            window.location.href = (baseurl || '') + '/docs/downloads/' + os.toLowerCase() + '/';
            break;
    }
}

function getOS() {
    const userAgent = window.navigator.userAgent;
    const userAgentData = window.navigator.userAgentData;
    const platform = ((userAgentData || userAgent).platform || window.navigator.platform || "").toLowerCase();

    if (/mac|darwin/.test(platform)) {
        return 'MacOS';
    } else if (/win/.test(platform)) {
        return 'Windows';
    } else if (/unix|linux/.test(platform)) {
        return 'Linux';
    }

    return undefined;
}